function isInSeason(dateStr, seasonStartMonthDay, seasonEndMonthDay) {
  const monthDay = dateStr.slice(5);
  return monthDay >= seasonStartMonthDay && monthDay <= seasonEndMonthDay;
}

function calculateDayTotals(cash, percent, dayRate) {
  const percentAmount = (cash * percent) / 100;
  const total = percentAmount + dayRate;
  return {
    percentAmount,
    total
  };
}

module.exports = {
  isInSeason,
  calculateDayTotals
};
