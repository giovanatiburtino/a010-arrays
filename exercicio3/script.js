
const arrayNumbers = [9,5,7,3,6]
const arrayStrings = ["azul", "verde", "rosa"]
const arrayRandom = [3, "luz", false]

const arrayNumbersCopia = arrayNumbers.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayRandomCopia = arrayRandom.slice()

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumbersCopia.push(4)

console.log("Array original:", arrayNumbers)
console.log("Cópia do Array:", arrayNumbersCopia)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayStringsCopia.pop()

console.log("Array original:", arrayStrings)
console.log("Cópia do array:", arrayStringsCopia)

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayRandomCopia.splice(1,1)

console.log("Array original:", arrayRandom)
console.log("Cópia do Array:", arrayRandomCopia)

