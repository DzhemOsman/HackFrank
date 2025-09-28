import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information and imprint for HackFrank",
};

export default function ImprintPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Imprint</h1>
      
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information according to § 5 TMG</h2>
          <div className="bg-default-100 p-6 rounded-lg">
            <p className="mb-2"><strong>HackFrank</strong></p>
            <p className="mb-2">Organized by GDG on Campus Frankfurt</p>
            <p className="mb-2">Goethe University Frankfurt</p>
            <p className="mb-2">Frankfurt am Main, Germany</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="bg-default-100 p-6 rounded-lg">
            <p className="mb-2">For questions regarding this hackathon, please contact us through:</p>
            <p className="mb-2">
              LinkedIn: 
              <a 
                href="https://www.linkedin.com/company/gdg-on-campus-frankfurt/"
                className="ml-2 text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDG on Campus Frankfurt
              </a>
            </p>
            <p className="mb-2">
              Instagram: 
              <a 
                href="https://www.instagram.com/gdgoc.frankfurt/"
                className="ml-2 text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @gdgoc.frankfurt
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Liability for Contents</h3>
              <p className="text-default-600">
                As service providers, we are liable for own contents of these websites according to Sec. 7, Para. 1 German Telemedia Act (TMG). 
                However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor 
                submitted or stored information or to search for evidences that indicate illegal activities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Liability for Links</h3>
              <p className="text-default-600">
                Our offer includes links to external third party websites. We have no influence on the contents of those websites, 
                therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible 
                for their own contents.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Copyright</h3>
              <p className="text-default-600">
                Contents and compilations published on these websites by the providers are subject to German copyright laws. 
                Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require 
                a written permission of the author or originator.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="bg-default-100 p-6 rounded-lg">
            <p className="text-default-600">
              This website is created for the HackFrank hackathon event. We respect your privacy and are committed to protecting 
              your personal data. For detailed information about how we handle your data, please refer to our privacy policy 
              or contact us directly through the channels provided above.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-default-200 text-center">
          <p className="text-sm text-default-500">
            Last updated: September 2025
          </p>
        </footer>
      </div>
    </div>
  );
}