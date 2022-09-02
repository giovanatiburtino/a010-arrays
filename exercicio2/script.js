//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
const arrayNumbers = [9,5,7,3,6]

console.log("Primeiro array:", arrayNumbers)
console.log("Quantidade de caracteres:", arrayNumbers.length)
console.log("Primeiro item do array:", arrayNumbers[0])
console.log("O array contém o número 3?", arrayNumbers.includes(3))

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

const arrayStrings = ["azul", "verde", "rosa"]

console.log("Segundo array:", arrayStrings)
console.log("Quantidade de caracteres:", arrayStrings.length)
console.log("Segundo item do array:", arrayStrings[1])

/* Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array,
e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.*/
const arrayRandom = [3, "luz", false]

console.log("Terceiro Array:", arrayRandom)
console.log("Quantidade de caracteres:", arrayRandom.length)
console.log("Terceiro item do array:", arrayRandom[2])
console.log("O array contém o número 5?", arrayRandom.includes(5))

