import os, re
filepath = 'src/App.tsx'
with open(filepath, 'r') as f:
    content = f.read()

images = [
    "dr_bivek_harvard_session.jpg",
    "dr_bivek_with_students.jpg",
    "drbivek_award_winner_tripleE.jpg",
    "drbivek_icrtharvard2020.jpg",
    "drbivek_teaching_paramedics.jpg"
]

# Use a direct web link rather than a "React import"
gallery_html = "\n".join([
    f'            <Card key="{i}" className="overflow-hidden hover:shadow-lg transition-shadow">\n'
    f'              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">\n'
    f'                <img src="/gallery/{img}" alt="Gallery" className="w-full h-full object-cover" />\n'
    f'              </div>\n'
    f'            </Card>'
    for i, img in enumerate(images)
])

# Remove the broken import lines we added earlier
content = re.sub(r"import img\d+ from './assets/.*?';", "", content)
# Replace the gallery section
content = re.sub(r'\{/\* Real Gallery Photos \*/\}.*?</Card>', f'{{/* Real Gallery Photos */}}\n{gallery_html}', content, flags=re.DOTALL)

with open(filepath, 'w') as f:
    f.write(content)
print("✅ Paths reset to /gallery/ and imports removed!")
