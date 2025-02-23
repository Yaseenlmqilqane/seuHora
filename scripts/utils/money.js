export function formatCurrency(priceCents) {

    // let amount = priceCents;
    // let formatted = amount.toLocaleString('en-Us', {
    //     style: 'currency',
    //     currency: 'USD',
    //     minimumFractionDigits: 0,
    //     maximumFractionDigits: 0
    // });

    // // return (Math.round(priceCents) / 100).toFixed(2);
    // return formatted;

    
    // // Convert cents to dollars
    // let dollars = priceCents / 100;
    
    // // Format the number with two decimal places
    // let formattedDollars = dollars.toFixed(2);

    // // Add a dollar sign and return
    // return `$${formattedDollars}`;

    // Convert cents to dollars
    let dollars = priceCents / 100;

    // Format the number to have commas as thousands separators and 2 decimal places
    let formattedDollars = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return formattedDollars;
    
}


// export function formatCurrency2(priceCents) {
//     return (Math.round(priceCents) / 100).toFixed(2);
// }