import React from 'react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 ${className}`}>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header/Hero Placeholder - Minimal for Build Success */}
      <header className="py-20 bg-slate-50 text-center">
        <h1 className="text-4xl font-bold">Dr. Bivek Singh</h1>
        <p className="text-xl text-slate-600">Neurologist & Researcher</p>
      </header>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img src="/gallery/dr_bivek_harvard_session.jpg" alt="Harvard" className="w-full h-48 object-cover" />
            </Card>
            <Card className="overflow-hidden">
              <img src="/gallery/dr_bivek_with_students.jpg" alt="Teaching" className="w-full h-48 object-cover" />
            </Card>
            <Card className="overflow-hidden">
              <img src="/gallery/drbivek_award_winner_tripleE.jpg" alt="Award" className="w-full h-48 object-cover" />
            </Card>
            <Card className="overflow-hidden">
              <img src="/gallery/drbivek_icrtharvard2020.jpg" alt="ICRT" className="w-full h-48 object-cover" />
            </Card>
            <Card className="overflow-hidden">
              <img src="/gallery/drbivek_teaching_paramedics.jpg" alt="Paramedics" className="w-full h-48 object-cover" />
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p>© 2026 Dr. Bivek Singh</p>
      </footer>
    </div>
  );
}
