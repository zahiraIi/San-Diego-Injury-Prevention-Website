"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <div className="max-w-2xl mx-auto bg-white/70 p-8 rounded-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <p className="text-lg mb-2"><strong>Email:</strong> sdinjurypreventionprogram@gmail.com</p>
          <p className="text-lg"><strong>Location:</strong> La Jolla, CA</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider">First Name *</label>
              <input type="text" id="firstName" required className="w-full p-3 rounded-lg border border-gray-200 bg-white/50 focus:border-accent-blue outline-none" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider">Last Name</label>
              <input type="text" id="lastName" className="w-full p-3 rounded-lg border border-gray-200 bg-white/50 focus:border-accent-blue outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email *</label>
            <input type="email" id="email" required className="w-full p-3 rounded-lg border border-gray-200 bg-white/50 focus:border-accent-blue outline-none" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
            <textarea id="message" rows={5} placeholder="Write us a message or ask a question!" className="w-full p-3 rounded-lg border border-gray-200 bg-white/50 focus:border-accent-blue outline-none" />
          </div>

          <button type="submit" className="w-full py-4 bg-accent-blue text-white rounded-lg font-bold hover:bg-opacity-90 transition-colors uppercase tracking-widest">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

