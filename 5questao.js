
/* 

 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;


*/





const text = "Higor"
let newText = ''
let textIndex0 = ''

for (let i = 1; i < text.length; i++) {
    newText += text.slice(" ")[text.length - i]
    textIndex0 = text[0]
}

console.log(newText + textIndex0)

