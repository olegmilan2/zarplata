function printHelp() {
  console.log('Команды:');
  console.log('  add --date YYYY-MM-DD --cash 5000 --rate 2000 [--percent 30]');
  console.log('  list [--month YYYY-MM]');
  console.log('  total [--year 2026] [--from YYYY-MM-DD --to YYYY-MM-DD]');
  console.log('  set-season --start 05-01 --end 09-30');
  console.log('  set-percent --percent 30');
}

module.exports = {
  printHelp
};
