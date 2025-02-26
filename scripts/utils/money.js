export function formatCurrency(priceCents) {
    // Convert cents to dollars
    let dollars = priceCents / 100;

    // Format the number to have commas as thousands separators and 2 decimal places
    let formattedDollars = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return formattedDollars;
}

