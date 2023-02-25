/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

const month = [100, 500, 300, 210, 890, 520, 600, 800, 1500, 1300, 90, 9000]
let count = 0
let sum = 0
let max
let min
let average

for (const index in month) {
    max = Math.max(... month)
    min = Math.min(... month)
    sum += month[index]
     average = sum / month.length
    
    if (month[index] > average) count += 1
}
   console.log(`
   O valor máximo foi: ${max} \n
   O valor mínimo foi: ${min} \n
   Número de dias que o faturamento mensal foi maior que a média: ${count} \n
   `)