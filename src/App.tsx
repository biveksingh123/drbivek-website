














import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Award, BookOpen, Users, Briefcase, GraduationCap, FileText, Globe, Image } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Separator } from './components/ui/separator';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import heroBackground from 'figma:asset/4ebec93d1c84643c6482e7188e4376e362c119c2.png';
import profileImage from 'figma:asset/8a6e9d68af277f0604c6666e157672dca940816a.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Dr. Bivek Singh - Neurologist, Medical Educator & Researcher';
    
    const metaTags = [
      { name: 'description', content: 'Dr. Bivek Singh is a neurologist, Visiting Professor at Management & Science University (Malaysia), and founder of NEDOL. Specializing in circadian neurology, stroke, and Alzheimer\'s chronotherapy.' },
      { name: 'keywords', content: 'Dr. Bivek Singh, neurologist, neurology, circadian neurology, stroke, Alzheimer\'s disease, medical educator, Harvard Medical School, NEDOL, Nepal Medical Council' },
      { name: 'author', content: 'Dr. Bivek Singh' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Dr. Bivek Singh - Neurologist, Medical Educator & Researcher' },
      { property: 'og:description', content: 'Neurologist and Visiting Professor specializing in circadian neurology, stroke, and medical education.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `https://drbiveksingh.com${profileImage}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `https://drbiveksingh.com${profileImage}` },
      { name: 'twitter:title', content: 'Dr. Bivek Singh - Neurologist' },
      { name: 'twitter:description', content: 'Neurologist and medical educator specializing in circadian neurology and stroke research.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
      { httpEquiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
    ];

    metaTags.forEach(tag => {
      const element = document.createElement('meta');
      if (tag.name) element.setAttribute('name', tag.name);
      if (tag.property) element.setAttribute('property', tag.property);
      if (tag.httpEquiv) element.setAttribute('http-equiv', tag.httpEquiv);
      element.setAttribute('content', tag.content);
      document.head.appendChild(element);
    });

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.href);
    document.head.appendChild(canonical);

    // Add Structured Data (JSON-LD) for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Bivek Singh",
      "honorificPrefix": "Dr.",
      "givenName": "Bivek",
      "familyName": "Singh",
      "jobTitle": "Neurologist",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "Management and Science University",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Malaysia"
        }
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Harvard Medical School"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Tongji University"
        }
      ],
      "knowsAbout": ["Neurology", "Circadian Neurology", "Stroke", "Alzheimer's Disease", "Medical Education"],
      "email": "biveksingh123@gmail.com",
      "nationality": "Nepali",
      "url": window.location.href,
      "image": profileImage,
      "sameAs": [
        "https://scholar.google.com/citations?user=rahw1-oAAAAJ&hl=en&oi=ao",
        "https://orcid.org/0000-0002-1395-4095",
        "https://www.webofscience.com/wos/author/record/ISU-3562-2023"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-teal-700">Dr. Bivek Singh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-teal-700 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('publications')} className="text-slate-700 hover:text-teal-700 transition-colors">
                Publications
              </button>
              <button onClick={() => scrollToSection('awards')} className="text-slate-700 hover:text-teal-700 transition-colors">
                Awards
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-teal-700 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-teal-700 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-teal-700 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
                About
              </button>
              <button onClick={() => scrollToSection('publications')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
                Publications
              </button>
              <button onClick={() => scrollToSection('awards')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
                Awards
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
                Experience
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-md">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-slate-900 relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[650px]"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-white mb-2 text-3xl sm:text-4xl lg:text-5xl"><strong>Dr. Bivek Singh</strong></h1>
              <p className="text-slate-200 mb-4 text-lg sm:text-xl">MBBS, MD (Neurology)</p>
              <div className="space-y-2 mb-6">
                <p className="text-slate-200 text-sm sm:text-base">Neurologist • Medical Educator • Researcher</p>
                <p className="text-slate-200 text-sm sm:text-base">Visiting Professor — Management and Science University (MSU), Malaysia</p>
                <p className="text-slate-200 text-sm sm:text-base">ICRT Graduate — Harvard Medical School</p>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 text-xs sm:text-sm">
                  <Award className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">Asia's Outstanding Young Educator 2024</span>
                  <span className="sm:hidden">Outstanding Educator 2024</span>
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-900 text-xs sm:text-sm">
                  <Award className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">Engaged Academic of the Year (Asia-Pacific) 2024</span>
                  <span className="sm:hidden">Engaged Academic 2024</span>
                </Badge>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button onClick={() => scrollToSection('contact')} className="bg-teal-700 hover:bg-teal-800 text-sm sm:text-base">
                  Get in Touch
                </Button>
                <Button variant="outline" asChild className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-sm sm:text-base">
                  <a href="https://scholar.google.com/citations?user=rahw1-oAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                    Google Scholar
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-square max-w-md mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Dr. Bivek Singh - Neurologist"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-8">Professional Summary</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-slate-700 mb-4">
                Dr Bivek Singh is a neurologist, Visiting Professor at Management & Science University (Malaysia), and founder of the Nepalese Doctors Lounge (NEDOL). Trained in Neurology at Tongji University (full scholarship) and a graduate of Harvard Medical School's ICRT, he works at the intersection of circadian neurology (stroke and Alzheimer's chronotherapy), sleep and vascular timing, and medical education.
              </p>
              <p className="text-slate-700 mb-4">
                He has authored three textbooks and a growing body of peer-reviewed work (Google Scholar: 159 citations, h-index 6, i10-index 3, as of 13 October 2025), serves as a Clarivate Top 1% global reviewer with 32 verified reviews, and sits on multiple editorial boards. His honours include the World Federation of Neurology Travel Fellowship (2025), Asia's Outstanding Young Educator (2024), the Triple E Engaged Academic of the Year (Asia–Pacific, 2024) ACEEU Germany.
              </p>
              <p className="text-slate-700 mb-4">
                He has coordinated national academic programmes, supervised 500+ international students, contributed to a WHO cervical cancer screening manual. His work has been featured by The Himalayan Times, ACEEU, and Harvard Medical School.
              </p>

            {/* EDU-STUDIO Business Registration Patch */}
            <div className="bg-teal-50 border-2 border-teal-500/30 rounded-xl p-6 mb-8 text-center shadow-sm w-full">
              <h3 className="text-slate-900 font-bold text-lg mb-2">Official Business Registration</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-slate-700 text-sm">
                <div>
                  <p><strong>Business Name:</strong> ऐडु-स्टूडियो वाई डा. विवेक सिंह (Edu-Studio by Dr. Bivek Singh)</p>
                  <p><strong>Taxpayer Code:</strong> 81130700011602</p>
                </div>
                <div>
                  <p><strong>VAT/PAN:</strong> 127916844</p>
                  <p><strong>Address:</strong> Morang, Province 1, Nepal</p>
                  <p><strong>Contact:</strong> <a href="mailto:contact@drbiveksingh.com" className="hover:text-teal-700 underline">contact@drbiveksingh.com</a></p>
                </div>
              </div>
            </div>
            </div>

            <div className="space-y-4">
              
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600">More photos will be added soon. Stay tuned!</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-8 text-center">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-700 mt-0.5" />
                  <div>
                    <p className="text-slate-700">
                      <a href="mailto:biveksingh123@gmail.com" className="hover:text-teal-700">biveksingh123@gmail.com</a>
                    </p>
                    <p className="text-slate-700">
                      <a href="mailto:biveksingh@hotmail.com" className="hover:text-teal-700">biveksingh@hotmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 mt-0.5" />
                  <div>
                    <p className="text-slate-700">Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-teal-700 mt-0.5" />
                  <div>
                    <p className="text-slate-700">WeChat: drbivek123</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Academic Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="https://scholar.google.com/citations?user=rahw1-oAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  Google Scholar
                </a>
                <a href="https://orcid.org/0000-0002-1395-4095" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-700 hover:underline">
                  <FileText className="w-4 h-4" />
                  ORCID: 0000-0002-1395-4095
                </a>
                <a href="https://www.webofscience.com/wos/author/record/ISU-3562-2023" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  Web of Science ResearcherID
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Dr. Bivek Singh. All rights reserved.</p>
          <p className="text-slate-400 mt-2">Neurologist • Medical Educator • Researcher</p>
        </div>
      </footer>
    </div>
  );
}

interface PublicationCardProps {
  title: string;
  journal: string;
  volume: string;
  publisher: string;
  doi: string;
  link: string;
  firstAuthor?: boolean;
}

function PublicationCard({ title, journal, volume, publisher, doi, link, firstAuthor }: PublicationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-slate-900">{title}</CardTitle>
          {firstAuthor && (
            <Badge variant="secondary" className="bg-teal-100 text-teal-800 shrink-0">First Author</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-slate-700">{journal}, {volume}</p>
        <p className="text-slate-600">{publisher}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
            Read Article →
          </a>
          <a href={doi} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">
            DOI
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-4 text-center">Gallery</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A collection of moments from conferences, lectures, and collaborative research initiatives
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/dr_bivek_harvard_session.jpg" alt="Harvard Session" className="w-full h-full object-cover" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/dr_bivek_with_students.jpg" alt="Teaching Students" className="w-full h-full object-cover" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/drbivek_award_winner_tripleE.jpg" alt="Triple E Award" className="w-full h-full object-cover" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/drbivek_icrtharvard2020.jpg" alt="Harvard ICRT" className="w-full h-full object-cover" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/drbivek_teaching_paramedics.jpg" alt="Teaching Paramedics" className="w-full h-full object-cover" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section - Re-added cleanly */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-slate-900 mb-8">Contact & Collaboration</h2>
          <p className="text-slate-600 mb-8">Interested in research collaboration or clinical consultation?</p>
          <a href="mailto:bivek.singh@example.com" className="inline-block bg-teal-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 Dr. Bivek Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface PublicationCardProps {
  title: string;
  journal: string;
  volume: string;
}

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={}>
    {children}
  </div>
);
