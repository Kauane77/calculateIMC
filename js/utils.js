// validando se os dados que coloquei é um número
// se eu deixar vazio ele considera um número entaõ colocamso || q significa (ou) se for vazio não é número
export function notANumber(value) {
    return isNaN(value) || value == ""
}


export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
