
const FormatPrice = ( {price} ) => {
  return new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 2 }).format(price/100)
}

export default FormatPrice