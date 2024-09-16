// For example, the sequence "AAAAABBBCCDAA" would be encoded as "5A3B2C1D2A" after applying RLE(Run-Length Encoding).
let x = "AAAAABBBCCDAA";
let enc = "";
let count = 1;
for (let i = 0; i < x.length; i++) {
  if (x[i] == x[i + 1]) {
    count = count + 1;
  }
  if (x[i] != x[i + 1]) {
    enc += count + x[i];
    count = 0;
    count = count + 1;
  }
}

console.log(enc);
