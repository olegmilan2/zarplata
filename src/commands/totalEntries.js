const { getArg } = require('../lib/args');
const { loadDb } = require('../lib/db');
const { formatMoney } = require('../lib/format');
const { parseDate, toNumber } = require('../lib/validators');

function totalEntries() {
  const db = loadDb();
  const year = toNumber(getArg('year', String(new Date().getFullYear())), 'year');
  const from = getArg('from', `${year}-${db.settings.seasonStartMonthDay}`);
  const to = getArg('to', `${year}-${db.settings.seasonEndMonthDay}`);

  parseDate(from);
  parseDate(to);

  const dates = Object.keys(db.entries)
    .sort()
    .filter((d) => d >= from && d <= to);

  let sumCash = 0;
  let sumPercent = 0;
  let sumRate = 0;
  let sumTotal = 0;

  for (const date of dates) {
    const e = db.entries[date];
    sumCash += e.cash;
    sumPercent += e.percentAmount;
    sumRate += e.dayRate;
    sumTotal += e.total;
  }

  console.log(`Период: ${from} .. ${to}`);
  console.log(`Дней с записями: ${dates.length}`);
  console.log(`Общая касса: ${formatMoney(sumCash)}`);
  console.log(`Доход по проценту: ${formatMoney(sumPercent)}`);
  console.log(`Доход по ставке: ${formatMoney(sumRate)}`);
  console.log(`Итоговый доход: ${formatMoney(sumTotal)}`);
}

module.exports = {
  totalEntries
};
