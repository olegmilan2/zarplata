function toNumber(value, fieldName) {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    console.error(`Поле ${fieldName} должно быть числом. Получено: ${value}`);
    process.exit(1);
  }
  return n;
}

function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    console.error(`Дата должна быть в формате YYYY-MM-DD. Получено: ${value}`);
    process.exit(1);
  }

  const d = new Date(value + 'T00:00:00');
  if (Number.isNaN(d.getTime())) {
    console.error(`Некорректная дата: ${value}`);
    process.exit(1);
  }

  return value;
}

function parseMonth(value) {
  if (!/^\d{4}-\d{2}$/.test(value)) {
    console.error('month должен быть в формате YYYY-MM');
    process.exit(1);
  }
  return value;
}

function parseMonthDay(value, fieldName) {
  if (!/^\d{2}-\d{2}$/.test(value || '')) {
    console.error(`Используй формат --${fieldName} MM-DD`);
    process.exit(1);
  }
  return value;
}

module.exports = {
  toNumber,
  parseDate,
  parseMonth,
  parseMonthDay
};
