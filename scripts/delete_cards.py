import json
import re
from pathlib import Path

# Base directory for cards files
BASE_DIR = Path(__file__).resolve().parent.parent

print("Select cards file to manage:")
print("1) cards_tr.js (Turkish Deck - Default)")
print("2) cards_en.js (English Deck)")
choice = input("Enter choice (1 or 2, default: 1): ").strip()

filename = "cards_en.js" if choice == "2" else "cards_tr.js"
FILE_PATH = BASE_DIR / filename

# 1. Read the file
if not FILE_PATH.exists():
    raise FileNotFoundError(f"{filename} could not be found at: {FILE_PATH}")

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 2. Extract JSON array
json_match = re.search(r"\[.*\]", content, re.DOTALL)
if not json_match:
    raise ValueError(f"Could not find cards JSON array in {filename}")

json_str = json_match.group(0)
cards = json.loads(json_str)

print(f"\nLoaded {len(cards)} cards from {filename}.")

# 3. Get IDs to delete via prompt
user_input = input(
    "Enter the card IDs you want to delete (Format: separated by commas or spaces, e.g. '5, 12, 45' or '5 12 45'): "
)

# 4. Extract numbers from input as a set
ids_to_delete = set(map(int, re.findall(r"\d+", user_input)))

# 5. Filter out matching cards and re-index IDs starting from 1
filtered_cards = [card for card in cards if card["id"] not in ids_to_delete]

for new_id, card in enumerate(filtered_cards, start=1):
    card["id"] = new_id

# 6. Overwrite the file directly
new_content = (
    f"window.TABOO_CARDS = {json.dumps(filtered_cards, ensure_ascii=False, indent=2)};\n"
)
with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

deleted_count = len(cards) - len(filtered_cards)
print(
    f"✅ Process finished for {filename}: {deleted_count} card(s) removed. Remaining card IDs updated from 1 to {len(filtered_cards)}."
)
