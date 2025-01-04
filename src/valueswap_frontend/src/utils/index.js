export const convertIntToCurrencyString = (value) => {
    const Numvalue = BigInt(value);
    let formattedValue;
    if (Numvalue >= 1_000_000_000) {
        formattedValue = `$${(Numvalue / 1_000_000_000n)}b`;
    } else if (Numvalue >= 1_000_000) {
        formattedValue = `$${(Numvalue / 1_000_000n)}m`;
    } else {
        formattedValue = `$${Numvalue.toLocaleString('en-US')}`;
    }
    return formattedValue;
}