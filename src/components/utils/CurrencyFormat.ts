export const formatCurrency = (amount: number)=>{
    const euro = new Intl.NumberFormat('lt-LT', {style: "currency", currency: "EUR"})
    return euro.format(amount)
}