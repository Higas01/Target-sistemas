// Sequência de Fibonnaci

let numero = 1
const list = [0, 1]

while (true) {
    if (numero === list[0] || numero === list[1]) {
        console.log(`Parabéns! O seu número faz parte da sequência, segue a sequência: [${list}]`)
        break
    }

    const value = list[list.length - 1] + list[list.length - 2]
    list.push(value)
    if (numero === value) {
        console.log(`Parabéns! O seu número faz parte da sequência, segue a sequência: [${list}]`)
        break
    }
    if (value > numero) {
        console.log(`Infelizmente o seu número não faz parte da sequência, segua a sequência: [${list}]`)
        break
    }
}