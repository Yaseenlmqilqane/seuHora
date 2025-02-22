export function formatCurrency(priceCents) {

    let amount = priceCents;
    let formatted = amount.toLocaleString('en-Us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    // return (Math.round(priceCents) / 100).toFixed(2);
    return formatted;
}


export function formatCurrency2(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
}