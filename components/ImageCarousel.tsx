'use client'

import React, { useState, useEffect, useRef } from "react";
import { Divider } from "@heroui/divider";
import Image from "next/image";

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string }>;
  title?: string;
  className?: string;
  autoAdvanceInterval?: number; // in milliseconds
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  title = "Image Gallery",
  className = "",
  autoAdvanceInterval = 4000, // 4 seconds by default
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance functionality
  useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      nextImage();
    }, autoAdvanceInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, autoAdvanceInterval]);

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    // Pause auto-advance when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    // Resume auto-advance after swipe
    setTimeout(() => {
      if (images.length > 1) {
        intervalRef.current = setInterval(() => {
          nextImage();
        }, autoAdvanceInterval);
      }
    }, 1000); // 1 second delay before resuming
  };

  // Mouse handlers for desktop drag functionality
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    // Pause auto-advance when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      nextImage();
    } else if (isRightDrag) {
      prevImage();
    }

    // Resume auto-advance after drag
    setTimeout(() => {
      if (images.length > 1) {
        intervalRef.current = setInterval(() => {
          nextImage();
        }, autoAdvanceInterval);
      }
    }, 1000);

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <Divider className="mb-6" />
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <div className="relative">
        {/* Main Image */}
        <div 
          className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp} // Handle mouse leave as mouse up
        >
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            fill
            className="object-cover transition-all duration-700 pointer-events-none"
            draggable={false}
          />
          
          {/* Progress indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-primary scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};