const { getArg } = require('../lib/args');
const { loadDb } = require('../lib/db');
const { formatMoney } = require('../lib/format');
const { parseMonth } = require('../lib/validators');

function listEntries() {
  const db = loadDb();
  const month = getArg('month');
  let dates = Object.keys(db.entries).sort();

  if (month) {
    parseMonth(month);
    dates = dates.filter((d) => d.startsWith(month));
  }

  if (dates.length === 0) {
    console.log('Записей пока нет.');
    return;
  }

  for (const date of dates) {
    const e = db.entries[date];
    console.log(
      `${date} | касса ${formatMoney(e.cash)} | ${e.percent}%: ${formatMoney(e.percentAmount)} | ` +
        `ставка ${formatMoney(e.dayRate)} | итог ${formatMoney(e.total)}`
    );
  }
}

module.exports = {
  listEntries
};
