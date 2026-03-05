const fs = require('fs');
const { DB_PATH } = require('./constants');

function defaultDb() {
  return {
    settings: {
      defaultPercent: 30,
      seasonStartMonthDay: '05-01',
      seasonEndMonthDay: '09-30'
    },
    entries: {}
  };
}

function loadDb() {
  if (!fs.existsSync(DB_PATH)) {
    return defaultDb();
  }

  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch (error) {
    console.error('Не удалось прочитать salary-data.json:', error.message);
    process.exit(1);
  }
}

function saveDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2) + '\n', 'utf8');
}

module.exports = {
  defaultDb,
  loadDb,
  saveDb
};
