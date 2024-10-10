const a = []
const b = Array()

console.log(a)
console.log(b)
console.log()

//

const array1 = [1, 2, 3]
const array2 = Array(1, 2, 3)
const array3 = Array.of(1, 2, 3)

console.log(array1)
console.log(array2)
console.log(array3)
console.log()

//

const arr = [1, 'abeerration', ['1', 35, 'a']]

console.log(arr[0])
console.log(arr[1])
console.log(`${arr[2][0]} ${arr[2][1]} ${arr[2][2]}`)
console.log()

//

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[2][0])
console.log(matrix[1][2])
console.log()

//

const filledArray = Array(12).fill(0)

console.log(filledArray)
console.log("Length: " + filledArray.length)
filledArray.length = 6
console.log(filledArray)
console.log()

//

filledArray.push(3)
filledArray.push(7, 9)

console.log(filledArray)
console.log()

filledArray.unshift(-1, -2)

console.log(filledArray)
console.log()

console.log(filledArray.pop())
console.log(filledArray.shift())

console.log(filledArray)
console.log()

//

const first = ["ggf", 92]
const second = ['x', "@krliw4j", 773]
const merged = first.concat(second)

console.log(merged)
console.log()

const spread = [...second, ...first]

console.log(spread)
console.log()

//

console.log("773 found at index: " + spread.findIndex(i => i === 773))
console.log("@krliw4j found at index: " + spread.findIndex(i => i === "@krliw4j"))
console.log("ggf found at index: " + spread.findIndex(i => i === "ggf"))
console.log()

//

console.log("!_!_ was: " + (spread.findIndex(i => i === "!_!_") < 0 ? "not found" : "found"))
console.log("92 was: " + (spread.findIndex(i => i === 92) < 0 ? "not found" : "found"))
console.log()

console.log("b%6# was found: " + spread.includes("b%6#"))
console.log("x was found starting from index 0: " + spread.includes("x", 0))
console.log("x was found starting from index 1: " + spread.includes("x", 1))
