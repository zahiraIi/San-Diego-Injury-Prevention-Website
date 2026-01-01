"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Events" subtitle="Join us at our upcoming events" />

      <div className="bg-white/60 p-12 rounded-2xl backdrop-blur-md text-center">
        <h2 className="text-3xl font-rosehot mb-6">Upcoming Events</h2>
        <p className="text-xl opacity-70 mb-8">
          Check back soon for our latest calendar of workshops, health fairs, and socials.
        </p>
        
        {/* Placeholder Calendar UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-accent-blue/10 text-left">
               <div className="text-accent-red font-bold text-sm mb-2">UPCOMING</div>
               <h3 className="text-xl font-bold mb-2">Community Health Fair</h3>
               <p className="text-sm opacity-60 mb-4">Location: La Jolla Rec Center</p>
               <button className="text-accent-blue font-bold text-sm hover:underline">View Details &rarr;</button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

