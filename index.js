const n = 1000;

const map = new Map();
for (let i = 0; i < n; i++) {
  map.set(i, `${i} - fucks`);
}

let start = new Date();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 1000000; j++) {
    const temp = map.get(i);
  }
}

let finish = new Date();

console.log("without cache - ", finish - start);

start = new Date();

let cache = -1;
let value = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 1000000; j++) {
    if (cache !== i) {
      value = map.get(i);
      cache = i
    }
    const temp = value;
  }
}

finish = new Date();

console.log("with cache - ", finish - start);
