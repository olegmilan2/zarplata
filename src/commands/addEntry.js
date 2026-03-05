const { getArg } = require('../lib/args');
const { loadDb, saveDb } = require('../lib/db');
const { formatMoney } = require('../lib/format');
const { isInSeason, calculateDayTotals } = require('../lib/calculations');
const { parseDate, toNumber } = require('../lib/validators');

function addEntry() {
  const db = loadDb();
  const date = parseDate(getArg('date', new Date().toISOString().slice(0, 10)));
  const cash = toNumber(getArg('cash'), 'cash');
  const dayRate = toNumber(getArg('rate', '0'), 'rate');
  const percent = toNumber(getArg('percent', String(db.settings.defaultPercent)), 'percent');

  if (!isInSeason(date, db.settings.seasonStartMonthDay, db.settings.seasonEndMonthDay)) {
    console.error(
      `Дата ${date} вне сезона (${db.settings.seasonStartMonthDay}..${db.settings.seasonEndMonthDay}). ` +
      'Если нужно, сначала поменяй сезон командой set-season.'
    );
    process.exit(1);
  }

  const { percentAmount, total } = calculateDayTotals(cash, percent, dayRate);

  db.entries[date] = {
    cash,
    percent,
    percentAmount,
    dayRate,
    total,
    updatedAt: new Date().toISOString()
  };

  saveDb(db);

  console.log(`Сохранено на ${date}:`);
  console.log(`Касса: ${formatMoney(cash)}`);
  console.log(`Процент: ${percent}% => ${formatMoney(percentAmount)}`);
  console.log(`Ставка: ${formatMoney(dayRate)}`);
  console.log(`Итог за день: ${formatMoney(total)}`);
}

module.exports = {
  addEntry
};
