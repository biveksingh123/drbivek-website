import os
import re

filepath = 'src/App.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add the photo imports at the very top of the file
imports = """import gal1 from './assets/dr_bivek_harvard_session.jpg';
import gal2 from './assets/dr_bivek_with_students.jpg';
import gal3 from './assets/drbivek_award_winner_tripleE.jpg';
import gal4 from './assets/drbivek_icrtharvard2020.jpg';
import gal5 from './assets/drbivek_teaching_paramedics.jpg';
"""

if 'drbivek_award_winner_tripleE.jpg' not in content:
    content = imports + content

# 2. Build the exact HTML for the 5 real photos
new_gallery_code = """{/* Real Gallery Photos */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={gal1} alt="Harvard Session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={gal2} alt="Dr. Bivek with Students" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={gal3} alt="Triple E Award Winner" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={gal4} alt="ICRT Harvard 2020" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={gal5} alt="Teaching Paramedics" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Card>"""

# 3. Swap the old placeholder loop for the new photos
content = re.sub(r'\{\s*\/\*\s*Placeholder cards for future photos\s*\*\/\s*\}.*?\}\)\}', new_gallery_code, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Real photos successfully imported and patched into the Gallery!")
