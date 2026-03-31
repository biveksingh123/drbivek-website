import os

filepath = 'src/App.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure we don't patch it twice
if '81130700011602' in content:
    print("⚠️ The business info is already updated!")
else:
    # 1. Update Business Name
    content = content.replace(
        '<strong>Business Name:</strong> EDU-STUDIO', 
        '<strong>Business Name:</strong> ऐडु-स्टूडियो वाई डा. विवेक सिंह (Edu-Studio by Dr. Bivek Singh)'
    )
    # 2. Update Registration to Taxpayer Code
    content = content.replace(
        '<strong>Registration:</strong> 332616/080/081',
        '<strong>Taxpayer Code:</strong> 81130700011602'
    )
    # 3. Update PAN to VAT/PAN
    content = content.replace(
        '<strong>PAN:</strong> 621102553',
        '<strong>VAT/PAN:</strong> 127916844'
    )
    # 4. Add the Contact email below the address
    content = content.replace(
        '<strong>Address:</strong> Morang, Province 1, Nepal</p>',
        '<strong>Address:</strong> Morang, Province 1, Nepal</p>\n                  <p><strong>Contact:</strong> <a href="mailto:contact@drbiveksingh.com" className="hover:text-teal-700 underline">contact@drbiveksingh.com</a></p>'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Business info patched successfully in src/App.tsx!")
