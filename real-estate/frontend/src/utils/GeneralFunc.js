export const currencyFormat = (amt) => {
    return amt.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}