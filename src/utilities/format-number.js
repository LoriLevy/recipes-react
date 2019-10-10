/* This is a Utility function to round numbers and format it with comma separators */
export function formatNumberWithCommas(x) {
    let rounded= Math.round(x);
    var parts = rounded.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }