import React from 'react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={"bg-white rounded-xl shadow-sm border border-slate-200 " + className}>
    {children}
  </div>
);

const PublicationCard = ({ title, journal, volume }: { title: string; journal: string; volume: string }) => (
  <Card className="p-6">
    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-teal-700 font-medium">{journal}</p>
    <p className="text-sm text-slate-500">{volume}</p>
  </Card>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-bold text-teal-800 text-xl">Dr. Bivek Singh</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-teal-700">About</a>
            <a href="#research" className="hover:text-teal-700">Research</a>
            <a href="#publications" className="hover:text-teal-700">Publications</a>
            <a href="#gallery" className="hover:text-teal-700">Gallery</a>
          </div>
        </div>
      </nav>

      <header className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Dr. Bivek Singh</h1>
          <p className="text-xl text-teal-700 font-medium mb-6">Neurologist | Clinical Researcher | Medical Educator</p>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-lg">
            Specializing in Circadian Rhythm in Neurological Diseases, Stroke, and Sleep Biology. 
            Founder of MEDOL Global, EDU-STUDIO, and NEDOL. 
            Top 1% Global Reviewer & Engaged Academic of the Year 2024.
          </p>
        </div>
      </header>

      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Professional Profile</h2>
            <ul className="space-y-4 text-slate-600">
              <li><strong>Visiting Professor</strong> – Management and Science University (MSU), Malaysia</li>
              <li><strong>Clinical Research Training (ICRT)</strong> – Harvard Medical School (2020)</li>
              <li><strong>Founder</strong> – MEDOL Global (Launch: April 14, 2026)</li>
              <li><strong>Scientific Editor</strong> – Expert in medical manuscript polishing and peer review</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Expertise & Focus</h2>
            <div className="flex flex-wrap gap-2">
              {['Circadian Rhythm', 'Ischemic Stroke', 'Sleep Biology', 'EEG Interpretation', 'Computational Neuroscience', 'Alzheimer’s Disease', 'Medical Education'].map(topic => (
                <span key={topic} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm border border-teal-100">{topic}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Selected Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <PublicationCard 
              title="Circadian patterns in ischemic stroke in the Shanghai population" 
              journal="Journal of the Neurological Sciences" 
              volume="Published: March 2026" 
            />
            <PublicationCard 
              title="Dissociation Between Circadian Peaks of Ischemic Stroke Onset and Neurological Severity" 
              journal="Secondary Analysis (n=406)" 
              volume="In Progress" 
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden"><img src="/gallery/dr_bivek_harvard_session.jpg" alt="Harvard" className="w-full h-64 object-cover" /></Card>
            <Card className="overflow-hidden"><img src="/gallery/dr_bivek_with_students.jpg" alt="Teaching" className="w-full h-64 object-cover" /></Card>
            <Card className="overflow-hidden"><img src="/gallery/drbivek_award_winner_tripleE.jpg" alt="Award" className="w-full h-64 object-cover" /></Card>
            <Card className="overflow-hidden"><img src="/gallery/drbivek_icrtharvard2020.jpg" alt="ICRT" className="w-full h-64 object-cover" /></Card>
            <Card className="overflow-hidden"><img src="/gallery/drbivek_teaching_paramedics.jpg" alt="Paramedics" className="w-full h-64 object-cover" /></Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <p>© 2026 Dr. Bivek Singh. Neurologist & Researcher.</p>
      </footer>
    </div>
  );
}
