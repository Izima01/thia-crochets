export function formatNumberToCurrency(number: number) {
    let numStr = number.toString();
    let parts = numStr.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts?.length == 2 ? parts.join(".").concat('0') : parts.join(".").concat('.00');
    
    // .concat('.00');
}