/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
*/

const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53
const total = sp + rj + mg + es + outros

const percentSP = (sp * 100) / total
const percentRJ = (rj * 100) / total
const percentMG = (mg * 100) / total
const percentES = (es * 100) / total
const percentOutros = (outros * 100) / total

console.log(`
Porcentagem de SP: ${percentSP} \n
Porcentagem de RJ: ${percentRJ} \n
Porcentagem de MG: ${percentMG} \n
Porcentagem de ES: ${percentES} \n
Porcentagem de Outros: ${percentOutros} \n
`)
