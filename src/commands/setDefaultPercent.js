const { getArg } = require('../lib/args');
const { loadDb, saveDb } = require('../lib/db');
const { toNumber } = require('../lib/validators');

function setDefaultPercent() {
  const db = loadDb();
  const percent = toNumber(getArg('percent'), 'percent');
  db.settings.defaultPercent = percent;
  saveDb(db);
  console.log(`Процент по умолчанию: ${percent}%`);
}

module.exports = {
  setDefaultPercent
};
