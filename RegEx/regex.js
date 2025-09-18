//regex
const text = `+88-01324963662`;
const pattern = /(\+88)?-?01[3-9]\d{8}\g/;
const result = text.match(pattern);
const isValid = pattern.test(text);
const replaced = text.replace(pattern, "Valid Number");
const extracted = text.match(/\d+/g); // Extract all digit sequences
console.log("Matched:", result);
console.log("Is Valid:", isValid);
console.log("Replaced:", replaced);
console.log("Extracted Digits:", extracted);    



const log = `
[INFO] 2025-09-18 User: Shampa ID: 101 Email: shampa@example.com
[ERROR] 2025-09-18 User: Mahi ID: 102 Email: mahi@example.com
[INFO] 2025-09-19 User: Rafi ID: 103 Email: rafi@example.org
[WARNING] 2025-09-20 User: Tania ID: 104 Email: tania@example.net
`;

const regex = /\[(INFO|ERROR|WARNING)\]\s+(\d{4}-\d{2}-\d{2})\s+User:\s+(\w+)\s+ID:\s+(\d+)\s+Email:\s+([\w.]+@\w+\.\w+)/g;

for (const match of log.matchAll(regex)) {
  console.log({
    level: match[1],
    date: match[2],
    user: match[3],
    id: match[4],
    email: match[5],
  });
}

const errorRegex = /\[ERROR\]/;
console.log("Contains error?", errorRegex.test(log));

console.log("First warning at index:", log.search(/\[WARNING\]/));

const hiddenEmails = log.replace(/[\w.]+@\w+\.\w+/g, "[HIDDEN]");
console.log(hiddenEmails);

const entries = log.trim().split(/\n/);
console.log(entries);

const regex2 = /User:\s+(\w+)/g;
let match2;
while ((match2 = regex2.exec(log)) !== null) {
  console.log("Found user:", match2[1], "at index", match2.index);
}

const sampleRegex = /email/gi;
console.log("Pattern:", sampleRegex.source);
console.log("Flags:", sampleRegex.flags);
console.log("Is global?", sampleRegex.global);
console.log("Ignore case?", sampleRegex.ignoreCase);
console.log("Is multiline?", sampleRegex.multiline);
console.log("Last index:", sampleRegex.lastIndex);