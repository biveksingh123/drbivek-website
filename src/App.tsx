




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
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-slate-600">Citations</p>
                    <p className="text-slate-900">159</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-slate-600">H-index</p>
                    <p className="text-slate-900">6</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-slate-600">i10-index</p>
                    <p className="text-slate-900">3</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-slate-600">Peer Reviews</p>
                    <p className="text-slate-900">32 (Top 1% globally) in last 12 months</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-8">Publications & Research</h2>
          
          <Tabs defaultValue="2025" className="w-full">
            <TabsList className="mb-8 flex flex-wrap h-auto gap-2 sm:gap-0">
              <TabsTrigger value="2025" className="flex-1 sm:flex-none">2025</TabsTrigger>
              <TabsTrigger value="2024" className="flex-1 sm:flex-none">2024</TabsTrigger>
              <TabsTrigger value="2023" className="flex-1 sm:flex-none">2023</TabsTrigger>
              <TabsTrigger value="2021" className="flex-1 sm:flex-none">2021</TabsTrigger>
              <TabsTrigger value="upcoming" className="flex-1 sm:flex-none">Upcoming</TabsTrigger>
            </TabsList>

            <TabsContent value="2025" className="space-y-6">
              <PublicationCard
                title="Circadian rhythms in Alzheimer's disease: A molecular clock worth watching"
                journal="Gene & Protein in Disease"
                volume="4(3)"
                publisher="AccScience Publishing (ASP), Singapore"
                doi="https://doi.org/10.36922/GPD025160031"
                link="https://accscience.com/journal/GPD/articles/online_first/4968"
                firstAuthor
              />
              <PublicationCard
                title="Unlocking the therapeutic potential of human urinary kallidinogenase in stroke: a mini review"
                journal="Discover Neuroscience"
                volume="20(2)"
                publisher="Springer Nature"
                doi="https://doi.org/10.1186/s13064-025-00198-6"
                link="https://link.springer.com/article/10.1186/s13064-025-00198-6"
                firstAuthor
              />
              <PublicationCard
                title="Stroke timing through a circadian lens: A brain-centric perspective"
                journal="Organ Medicine"
                volume="2"
                publisher="Wiley"
                doi="https://doi.org/10.1002/orm2.70007"
                link="https://onlinelibrary.wiley.com/doi/pdf/10.1002/orm2.70007"
                firstAuthor
              />
            </TabsContent>

            <TabsContent value="2024" className="space-y-6">
              <PublicationCard
                title="The role of circadian rhythms in stroke: A narrative review"
                journal="Neurochemical Research"
                volume="49"
                publisher="Springer Nature"
                doi="https://doi.org/10.1007/s11064-023-04040-5"
                link="https://link.springer.com/article/10.1007/s11064-023-04040-5"
                firstAuthor
              />
              <PublicationCard
                title="Effects of flaxseed on blood pressure in patients taking antihypertensive drugs: A randomized trial"
                journal="Nepalese Heart Journal"
                volume="21(1)"
                publisher="Nepalese Heart Journal"
                doi="https://doi.org/10.3126/nhj.v21i1.65663"
                link="https://nepjol.info/index.php/NHJ/article/view/65663"
              />
            </TabsContent>

            <TabsContent value="2023" className="space-y-6">
              <PublicationCard
                title="Knowledge regarding cardiopulmonary resuscitation among health assistants in Nepal: A cross-sectional study"
                journal="PLOS ONE"
                volume="18(11)"
                publisher="PLOS ONE"
                doi="https://doi.org/10.1371/journal.pone.0293323"
                link="https://doi.org/10.1371/journal.pone.0293323"
                firstAuthor
              />
              <PublicationCard
                title="The crisis of physician well-being in Nepal: A multifaceted dilemma demanding urgent intervention"
                journal="International Journal for Quality in Health Care"
                volume="35(3)"
                publisher="Oxford University Press (OUP)"
                doi="https://doi.org/10.1093/intqhc/mzad070"
                link="https://academic.oup.com/intqhc/article/35/3/mzad070/7271440"
                firstAuthor
              />
              <PublicationCard
                title="Knowledge of research before and after a webinar for health science students"
                journal="Journal of Datta Meghe Institute of Medical Sciences University"
                volume="18(3)"
                publisher="Wolters Kluwer"
                doi="https://doi.org/10.4103/jdmimsu.jdmimsu_371_23"
                link="https://journals.lww.com/dmms/fulltext/2023/18030/knowledge_of_research_before_and_after_a_webinar.44.aspx"
              />
              <PublicationCard
                title="A peek behind the curtain in the diagnosis and management of COVID-19-associated mucormycosis (CAM)"
                journal="Journal of the Egyptian Public Health Association"
                volume="98"
                publisher="Springer Nature"
                doi="https://doi.org/10.1186/s42506-022-00125-1"
                link="https://link.springer.com/article/10.1186/s42506-022-00125-1"
              />
              <PublicationCard
                title="Mucus hypersecretion in chronic obstructive pulmonary disease and its treatment"
                journal="Mediators of Inflammation"
                volume="2023"
                publisher="Wiley (Hindawi)"
                doi="https://doi.org/10.1155/2023/8840594"
                link="https://onlinelibrary.wiley.com/doi/full/10.1155/2023/8840594"
              />
            </TabsContent>

            <TabsContent value="2021" className="space-y-6">
              <PublicationCard
                title="The role of 5-lipoxygenase in the pathophysiology of COVID-19 and its therapeutic implications"
                journal="Inflammation Research"
                volume="70"
                publisher="Springer Nature"
                doi="https://doi.org/10.1007/s00011-021-01473-y"
                link="https://link.springer.com/article/10.1007/s00011-021-01473-y"
              />
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900">Circadian rhythm and ischemic stroke: A hospital-based study in Shanghai, China</CardTitle>
                  <p className="text-slate-600">In Review</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">Authors: Bivek Singh (First Author), Hedi An, Ran Xiong, Hongrong Xie, You Yin, Roberto Manfredini, Dongya Huang</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900">Circadian rhythm and chronotherapy in Alzheimer's disease: A narrative review of mechanisms and therapeutic implications</CardTitle>
                  <p className="text-slate-600">In Review</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">Authors: Bivek Singh (First Author), Filippo Pigazzani, Roberto Manfredini</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900">Melatonin and circadian regulation of inflammatory–oxidative pathways in pediatric neurological disorders</CardTitle>
                  <p className="text-slate-600">In Review</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">Authors: Wangwang Chen, Bivek Singh, Huiying Liu</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-8">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-700 mb-2" />
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Asia's Outstanding Young Educator of the Year</CardTitle>
                <p className="text-slate-600 text-sm sm:text-base">Instabright International Guild, Philippines • 2024</p>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700 mb-2" />
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Engaged Academic of the Year (Asia–Pacific)</CardTitle>
                <p className="text-slate-600 text-sm sm:text-base">Triple E Awards, Germany • 2024</p>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-700 mb-2" />
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Outstanding Contribution in Education</CardTitle>
                <p className="text-slate-600 text-sm sm:text-base">Asian Education Conclave, Thailand • 2024</p>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardHeader>
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-700 mb-2" />
                <CardTitle className="text-slate-900 text-lg sm:text-xl">WFN Travel Fellowship</CardTitle>
                <p className="text-slate-600 text-sm sm:text-base">World Federation of Neurology • Selected among 30 clinicians globally</p>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-slate-900 mb-4">News Coverage</h3>
            <div className="space-y-4">
              <div>
                <a href="https://thehimalayantimes.com/nepal/nepali-physician-bivek-singh-honored-for-entrepreneurship-and-engagement-in-higher-education" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  Nepali physician Bivek Singh honored for entrepreneurship and engagement in higher education
                </a>
                <p className="text-slate-600">The Himalayan Times • September 5, 2024</p>
              </div>
              <div>
                <a href="https://learn.hms.harvard.edu/insights/learner-stories/transcending-hardships-first-step-journey-achievement" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  Transcending Hardships: The first step in a journey of Achievement
                </a>
                <p className="text-slate-600">Harvard Medical School • June 10, 2024</p>
              </div>
              <div>
                <a href="https://www.aceeu.org/news/spotlightarticle/id/82" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                  ACEEU Spotlight Article
                </a>
                <p className="text-slate-600">ACEEU • 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Qualifications */}
      <section id="experience" className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h2 className="text-slate-900 mb-6">Academic Qualifications</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <GraduationCap className="w-6 h-6 text-teal-700 mb-2" />
                    <CardTitle className="text-slate-900">MD (Clinical Neurology)</CardTitle>
                    <p className="text-slate-600">Master of Medicine (Neurology)</p>
                    <p className="text-slate-600">Tongji University, China • 2019–2024</p>
                    <Badge variant="secondary" className="mt-2">Full Scholarship</Badge>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-6 h-6 text-teal-700 mb-2" />
                    <CardTitle className="text-slate-900">Clinical Research Training (ICRT)</CardTitle>
                    <p className="text-slate-600">Harvard Medical School, USA • 2020</p>
                    <Badge variant="secondary" className="mt-2">Partial Scholarship</Badge>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-6 h-6 text-teal-700 mb-2" />
                    <CardTitle className="text-slate-900">MBBS</CardTitle>
                    <p className="text-slate-600">Institute of Medicine, Tribhuvan University, Nepal • 2008–2015</p>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-slate-900 mb-6">Leadership & Coordination</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <Users className="w-6 h-6 text-teal-700 mb-2" />
                    <CardTitle className="text-slate-900">Founder, NEDOL</CardTitle>
                    <p className="text-slate-600">Nepalese Doctors Lounge • 2021–2024</p>
                    <p className="text-slate-700 mt-2">Nepal's largest virtual network of doctors with 11,700+ members</p>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Briefcase className="w-6 h-6 text-teal-700 mb-2" />
                    <CardTitle className="text-slate-900">Academic Coordinator</CardTitle>
                    <p className="text-slate-600">Junior Doctors' Committee, Nepal Medical Association • 2019–2021</p>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Briefcase className="w-6 h-6 text-teal-700 mb-2" />
                    <CardTitle className="text-slate-900">Academic Coordinator</CardTitle>
                    <p className="text-slate-600">Dali University • 2016–2017</p>
                    <p className="text-slate-700 mt-2">Supervised 500+ international students</p>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-slate-900 mb-6">Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <BookOpen className="w-6 h-6 text-teal-700 mb-2" />
                  <CardTitle className="text-slate-900">A Journey into the Human Body</CardTitle>
                  <p className="text-slate-600">Nirvana Publication • 2013</p>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="w-6 h-6 text-teal-700 mb-2" />
                  <CardTitle className="text-slate-900">Pharmacology Simplified</CardTitle>
                  <p className="text-slate-600">Nirvana Publication • 2013</p>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="w-6 h-6 text-teal-700 mb-2" />
                  <CardTitle className="text-slate-900">Clinical Companion for Paramedics</CardTitle>
                  <p className="text-slate-600">Sama Publication • 2022</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Review & Editorial */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-4">Peer Review & Editorial Contributions</h2>
          <p className="text-slate-600 mb-8">Verified by Clarivate™ Web of Science Reviewer Recognition Service • 32 reviews across SCI-indexed journals • Ranked Top 1% globally (past 12 months)</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-900 mb-4">Select Journal Reviews</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Nature and Science of Sleep (Taylor & Francis) — 6 reviews</li>
                <li>• Neurology® Open Access (American Academy of Neurology) — 3 reviews</li>
                <li>• Translational Stroke Research (Springer Nature) — 1 review</li>
                <li>• Neuroprotection (Wiley) — 2 reviews</li>
                <li>• BMC Infectious Diseases (Springer Nature) — 1 review</li>
                <li>• Clinical Interventions in Aging (Taylor & Francis) — 1 review</li>
                <li>• Frontiers in Neuroscience (Frontiers) — 1 review</li>
                <li>• Heliyon (Elsevier) — 1 review</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 mb-4">Editorial Roles</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-slate-900">Academic Editor</p>
                    <p className="text-slate-600">Europasian Journal of Medical Sciences, Nepal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-slate-900">Youth Editorial Board</p>
                    <p className="text-slate-600">Organ Medicine (Sun Yat-sen University & Tsinghua University Press)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-slate-900">Youth Editorial Board</p>
                    <p className="text-slate-600">Medicine Bulletin Journal (Sichuan Academy of Medical Sciences, Wiley)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-slate-900">Youth Editorial Board</p>
                    <p className="text-slate-600">Gene & Protein in Disease (Henan Medical School, AccScience Publishing)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships & Collaborations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-slate-900 mb-6">Professional Memberships</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-slate-700">
                    <li>• Permanent Member — Nepal Medical Council</li>
                    <li>• Lifetime Member — Nepal Medical Association</li>
                    <li>• Member — American Academy of Neurology (AAN)</li>
                    <li>• Member — World Stroke Organization</li>
                    <li>• Member — European Stroke Organization</li>
                    <li>• Member — European Sleep Research Society</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-slate-900 mb-6">Key Collaborations</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-slate-900">Prof. Roberto Manfredini, MD, PhD</CardTitle>
                    <p className="text-slate-600">University of Ferrara, Italy</p>
                    <p className="text-slate-700">Chronobiology Research</p>
                    <Badge variant="secondary" className="mt-2">H-index: 74</Badge>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-slate-900">Dr. Filippo Pigazzani, MD, PhD</CardTitle>
                    <p className="text-slate-600">University of Dundee, UK</p>
                    <p className="text-slate-700">Vascular Neurology</p>
                    <Badge variant="secondary" className="mt-2">H-index: 14</Badge>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-slate-900">Assoc. Prof. Pathiyil Ravi Shankar, MD</CardTitle>
                    <p className="text-slate-600">FAIMER Fellow</p>
                    <p className="text-slate-700">Health Professions Education</p>
                    <Badge variant="secondary" className="mt-2">H-index: 50</Badge>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-4 text-center">Gallery</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A collection of moments from conferences, lectures, and collaborative research initiatives
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards for future photos */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Image className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-400">Photo {item}</p>
                    <p className="text-slate-400">Coming Soon</p>
                  </div>
                </div>
              </Card>
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
