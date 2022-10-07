export {};

function onlyTheAces(arr: Array<string>) {
  arr = arr.filter((item) => item === "Ace");
  return arr;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
