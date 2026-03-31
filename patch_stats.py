import os

filepath = 'src/App.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the Quick Stats Box
content = content.replace(
    '<p className="text-slate-900">122</p>',
    '<p className="text-slate-900">159</p>'
)
content = content.replace(
    '<p className="text-slate-900">17 (Top 4% globally)</p>',
    '<p className="text-slate-900">32 (Top 1% globally) in last 12 months</p>'
)

# 2. Update the About Paragraph text
content = content.replace('122 citations', '159 citations')
content = content.replace('Top 4% global reviewer with 17', 'Top 1% global reviewer with 32')

# 3. Update the Peer Review section text
content = content.replace('17 reviews across', '32 reviews across')
content = content.replace('Top 4% globally', 'Top 1% globally')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Google Scholar stats patched successfully in src/App.tsx!")
