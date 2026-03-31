import os, re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# This removes the old "import gal1 from..." lines which are causing the "broken" links
content = re.sub(r"import gal\d+ from './assets/.*?';", "", content)

# The list of your 5 actual files
images = [
    "dr_bivek_harvard_session.jpg",
    "dr_bivek_with_students.jpg",
    "drbivek_award_winner_tripleE.jpg",
    "drbivek_icrtharvard2020.jpg",
    "drbivek_teaching_paramedics.jpg"
]

# Create the correct HTML for each photo
gallery_html = "\n".join([
    f'            <Card key="{i}" className="overflow-hidden hover:shadow-lg transition-shadow">\n'
    f'              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">\n'
    f'                <img src="/gallery/{img}" alt="Dr. Singh Activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />\n'
    f'              </div>\n'
    f'            </Card>'
    for i, img in enumerate(images)
])

# Find the Gallery section and swap in the new code
content = re.sub(r'\{/\* Real Gallery Photos \*/\}.*?</Card>', f'{{/* Real Gallery Photos */}}\n{gallery_html}', content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Image paths updated to /gallery/!")
