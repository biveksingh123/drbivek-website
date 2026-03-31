import os, re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# The filenames
images = [
    "dr_bivek_harvard_session.jpg",
    "dr_bivek_with_students.jpg",
    "drbivek_award_winner_tripleE.jpg",
    "drbivek_icrtharvard2020.jpg",
    "drbivek_teaching_paramedics.jpg"
]

# Create the HTML cards using the static /gallery/ path
gallery_html = "\n".join([
    f'            <Card className="overflow-hidden hover:shadow-lg transition-shadow">\n'
    f'              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">\n'
    f'                <img src="/gallery/{img}" alt="Dr. Singh Activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />\n'
    f'              </div>\n'
    f'            </Card>'
    for img in images
])

# Replace the gallery section
content = re.sub(r'\{/\* Real Gallery Photos \*/\}.*?</Card>', f'{{/* Real Gallery Photos */}}\n{gallery_html}', content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Code updated to use the Public Gallery path!")
