import os

filepath = './index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Check if OG tags already exist to avoid duplicates
if 'property="og:image"' in content:
    print("⚠️ OG tags already exist. Skipping to avoid duplicates.")
else:
    # 2. Define the verified tags
    og_tags = """
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://drbiveksingh.com/">
    <meta property="og:title" content="Dr. Bivek Singh | Neurologist & Researcher">
    <meta property="og:description" content="Official portfolio of Dr. Bivek Singh, Neurologist, Medical Educator, and Founder of MEDOL Global.">
    <meta property="og:image" content="https://drbiveksingh.com/gallery/drbivek_icrtharvard2020.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Dr. Bivek Singh | Neurologist & Researcher">
    <meta name="twitter:description" content="Official portfolio of Dr. Bivek Singh, Neurologist and Medical Educator.">
    <meta name="twitter:image" content="https://drbiveksingh.com/gallery/drbivek_icrtharvard2020.jpg">
    """

    # 3. Insert before the closing </head> tag
    new_content = content.replace('</head>', og_tags + '\n</head>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✅ Verified OG tags injected into ./index.html")
