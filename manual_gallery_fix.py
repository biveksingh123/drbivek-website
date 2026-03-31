import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the 5 cards with the working /gallery/ paths
gallery_html = """
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/dr_bivek_harvard_session.jpg" alt="Harvard Session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/dr_bivek_with_students.jpg" alt="Teaching Students" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/drbivek_award_winner_tripleE.jpg" alt="Triple E Award" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/drbivek_icrtharvard2020.jpg" alt="Harvard ICRT" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src="/gallery/drbivek_teaching_paramedics.jpg" alt="Teaching Paramedics" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>"""

# This pattern finds the gallery grid div and replaces it with the populated cards
content = re.sub(r'<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_html, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Gallery HTML has been manually injected into App.tsx!")
