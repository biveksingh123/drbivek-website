import os

filepath = 'src/App.tsx'
if not os.path.exists(filepath):
    print("❌ Error: src/App.tsx not found!")
    exit()

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# The exact filenames from your 'ls' command earlier
images = [
    "dr_bivek_harvard_session.jpg",
    "dr_bivek_with_students.jpg",
    "drbivek_award_winner_tripleE.jpg",
    "drbivek_icrtharvard2020.jpg",
    "drbivek_teaching_paramedics.jpg"
]

# Create the import lines
import_lines = "\n".join([f"import gal{i+1} from './assets/{img}';" for i, img in enumerate(images)])

# Create the HTML cards
gallery_html = "\n".join([
    f'            <Card className="overflow-hidden hover:shadow-lg transition-shadow">\n'
    f'              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">\n'
    f'                <img src={{gal{i+1}}} alt="Gallery Image" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />\n'
    f'              </div>\n'
    f'            </Card>'
    for i in range(len(images))
])

# Insert imports at the top and replace the gallery section
if "import gal1" not in content:
    content = import_lines + "\n" + content

import re
# Look for the gallery section we created earlier and swap it
content = re.sub(r'\{/\* Real Gallery Photos \*/\}.*?</Card>', f'{{/* Real Gallery Photos */}}\n{gallery_html}', content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Gallery code synchronized with your actual image files!")
