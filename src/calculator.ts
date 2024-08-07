export function add(a: number, b: number):number{
    return Number(a) + Number(b)
}

export function subtract(a: number, b: number):number{
    return Number(a) - Number(b)
}

export function multiply(a: number, b: number):number{
    return a * b
}

export function divide(a: number, b: number):number{
    if (b === 0) throw new Error("Division by zero err")
    return a / b
}