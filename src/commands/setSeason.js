const { getArg } = require('../lib/args');
const { loadDb, saveDb } = require('../lib/db');
const { parseMonthDay } = require('../lib/validators');

function setSeason() {
  const db = loadDb();
  const start = parseMonthDay(getArg('start'), 'start');
  const end = parseMonthDay(getArg('end'), 'end');

  if (start > end) {
    console.error('start не может быть позже end в пределах одного года.');
    process.exit(1);
  }

  db.settings.seasonStartMonthDay = start;
  db.settings.seasonEndMonthDay = end;

  saveDb(db);
  console.log(`Сезон сохранен: ${start} .. ${end}`);
}

module.exports = {
  setSeason
};
