function formatMoney(n) {
  return new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    maximumFractionDigits: 2
  }).format(n);
}

module.exports = {
  formatMoney
};
