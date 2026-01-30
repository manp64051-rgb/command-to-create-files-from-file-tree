import re
from collections import defaultdict

def generate_commands(tree_str, os_type="windows"):
    """
    tree_str: pasted file tree string
    os_type: "windows" for PowerShell (ni), "linux" for mkdir/touch
    """
    lines = tree_str.strip().splitlines()
    path_stack = []
    folders_dict = defaultdict(list)
    files_dict = defaultdict(list)

    for line in lines:
        if not line.strip():
            continue

        # Remove tree symbols and emojis
        clean_line = re.sub(r"[├└│─📁📄⚙️🐳📝🌐🎨]+", "", line).strip()
        if not clean_line:
            continue

        # Determine depth (4 spaces per indent)
        indent = len(line) - len(line.lstrip(" "))
        level = indent // 4

        # Adjust stack
        while len(path_stack) > level:
            path_stack.pop()

        path_stack.append(clean_line)
        current_folder = "\\".join(path_stack[:-1]) if len(path_stack) > 1 else ""

        # Detect file vs folder
        if "." in clean_line or clean_line in [".env"]:
            files_dict[current_folder].append(clean_line)
        else:
            folders_dict[current_folder].append(clean_line)

    commands = []

    # Folder creation commands
    for parent, subfolders in folders_dict.items():
        if os_type.lower() == "windows":
            full_paths = [f"{parent}\\{f}" if parent else f"{f}" for f in subfolders]
            commands.append(f"mkdir {', '.join(full_paths)}")
        else:
            full_paths = [f"{parent}/{f}" if parent else f"{f}" for f in subfolders]
            commands.append(f"mkdir -p {' '.join(full_paths)}")

    # File creation commands
    for parent, file_list in files_dict.items():
        if os_type.lower() == "windows":
            full_paths = [f"{parent}\\{f}" if parent else f"{f}" for f in file_list]
            commands.append(f"ni {', '.join(full_paths)}")
        else:
            full_paths = [f"{parent}/{f}" if parent else f"{f}" for f in file_list]
            commands.append(f"touch {' '.join(full_paths)}")

    return commands


def main():
    print("Paste your file tree below. Finish input with a blank line and press Enter:\n")
    lines = []
    while True:
        try:
            line = input()
            if line == "":
                break
            lines.append(line)
        except EOFError:
            break

    tree_str = "\n".join(lines)

    os_choice = input("\nSelect OS type (windows/linux) [windows]: ").strip().lower()
    if os_choice not in ["windows", "linux"]:
        os_choice = "windows"

    commands = generate_commands(tree_str, os_choice)

    print("\nGenerated commands:\n")
    for cmd in commands:
        print(cmd)


if __name__ == "__main__":
    main()
