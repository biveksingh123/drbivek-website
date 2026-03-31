import os, re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

images = [
    "dr_bivek_harvard_session.jpg",
    "dr_bivek_with_students.jpg",
    "drbivek_award_winner_tripleE.jpg",
    "drbivek_icrtharvard2020.jpg",
    "drbivek_teaching_paramedics.jpg"
]

# Create standard React imports
import_lines = "\n".join([f"import img{i} from './assets/{img}';" for i, img in enumerate(images)])

# Create the Gallery HTML
gallery_html = "\n".join([
    f'            <Card key="{i}" className="overflow-hidden hover:shadow-lg transition-shadow">\n'
    f'              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">\n'
    f'                <img src={{img{i}}} alt="Gallery" className="w-full h-full object-cover" />\n'
    f'              </div>\n'
    f'            </Card>'
    for i in range(len(images))
])

# Insert imports at the very top
content = import_lines + "\n" + content

# Swap the gallery section
content = re.sub(r'\{/\* Real Gallery Photos \*/\}.*?</Card>', f'{{/* Real Gallery Photos */}}\n{gallery_html}', content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("✅ Imports added to App.tsx!")
