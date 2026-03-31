import os

file_path = 'src/App.tsx'
patch_content = """
            {/* EDU-STUDIO Business Registration Patch */}
            <div className="bg-teal-50 border-2 border-teal-500/30 rounded-xl p-6 mb-8 text-center shadow-sm w-full">
              <h3 className="text-slate-900 font-bold text-lg mb-2">Official Business Registration</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-slate-700 text-sm">
                <div>
                  <p><strong>Business Name:</strong> EDU-STUDIO</p>
                  <p><strong>Registration:</strong> 332616/080/081</p>
                </div>
                <div>
                  <p><strong>PAN:</strong> 621102553</p>
                  <p><strong>Address:</strong> Morang, Province 1, Nepal</p>
                </div>
              </div>
            </div>
"""

if os.path.exists(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    patched = False
    for line in lines:
        new_lines.append(line)
        # Look for the end of the bio paragraph
        if 'Harvard Medical School.' in line and not patched:
            new_lines.append(patch_content)
            patched = True
    
    if patched:
        with open(file_path, 'w') as f:
            f.writelines(new_lines)
        print("VERIFIED: EDU-STUDIO details patched successfully.")
    else:
        print("ERROR: Hook 'Harvard Medical School.' not found. Patch aborted.")
else:
    print("ERROR: src/App.tsx not found.")
