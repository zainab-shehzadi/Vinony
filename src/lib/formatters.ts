export function formatPriceUSD(amount: number) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
