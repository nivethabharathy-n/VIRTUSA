function findCommon(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}

console.log(findCommon([1, 2, 3, 4, 5], [4, 5, 6, 7, 2]));


function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 10));


function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

document.body.innerHTML = `
  <p>Common elements: ${findCommon([1, 2, 3, 4, 5], [4, 5, 6, 7, 2])}</p>
  <p>Random number: ${randomInt(1, 10)}</p>
  <p>Title case: ${toTitleCase("hello world from javascript")}</p>
`;

console.log(toTitleCase("hello world from javascript")); 
