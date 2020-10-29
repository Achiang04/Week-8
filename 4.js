/*
Letter Capitalize
*/

function letterCapitalize(kata) {
  kata = kata.toLowerCase().split(" ");
  for (let i = 0; i < kata.length; i++) {
    kata[i] = kata[i].charAt(0).toUpperCase() + kata[i].slice(1);
  }
  return kata.join(" ");
}

console.log(letterCapitalize("perut lapar"));
console.log(letterCapitalize("aku mau makan"));
console.log(letterCapitalize("masih lapar mau makan lagi"));
