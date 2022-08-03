// const str = 'Mala vida, no se da'
// let result = str.split('')
// console.log({ result })

const str = '23/3'
let numerador = Number(str.split('/')[0])
let denominador = Number(str.split('/')[1])
console.log({ numerador })
console.log({ denominador })

console.log(numerador / denominador > 1)
