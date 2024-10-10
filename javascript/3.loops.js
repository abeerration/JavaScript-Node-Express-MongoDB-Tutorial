// while loop
console.log("while loop:")

const list = ['first item', 'second item', 'third item']

let i = 0
while (i < list.length) {
  console.log(i + ". " + list[i])
  i = i + 1
}

// do...while loop
console.log("\ndo...while loop:")

i = 0
do {
  console.log(i + ". " + list[i])
  i = i + 1
} while (i < list.length)


// for loop
console.log("\nfor loop:")

for (i = 0; i < list.length; i++) {
    console.log(i + ". " + list[i])
}

// for...of loop
console.log("\nfor...of loop:")

for (const item of list) {
    console.log(item)
}
