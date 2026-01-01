"use client";

import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Apply" subtitle="Join the movement" />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Member/Volunteer Section */}
        <div className="bg-white/80 p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-rosehot text-accent-blue mb-6">Become a Member</h2>
          <ol className="space-y-6 list-decimal list-inside text-lg opacity-80">
            <li>
              Fill out the <a href="https://forms.gle/bSvAQJejksCQNzuH6" target="_blank" className="text-accent-red underline">volunteer application form</a>.
            </li>
            <li>Join the Discord server (linked in the form).</li>
            <li>Fill out the waiver emailed to you.</li>
            <li>Congrats, you're now a member!</li>
          </ol>
          
          <div className="mt-8 p-4 bg-accent-blue/10 rounded-lg">
            <h3 className="font-bold text-accent-blue mb-2">Volunteer Info</h3>
            <p className="text-sm opacity-70">
              Once in the server, sign up for training. After training, you can volunteer!
              Custom SDIPP shirts available for $10.
            </p>
          </div>
        </div>

        {/* Committee Section */}
        <div className="bg-foreground text-background p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-rosehot mb-6">Join a Committee</h2>
          <p className="mb-6 opacity-90">
            Take a leadership role and help shape our programs.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-red rounded-full" /> Outreach
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-red rounded-full" /> Legal
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-red rounded-full" /> Research
            </li>
          </ul>
          <button className="w-full py-3 bg-accent-red text-white rounded-full font-bold hover:bg-opacity-90 transition-colors">
            View Committee Applications
          </button>
        </div>
      </div>
    </div>
  );
}

