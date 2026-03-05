# Zarplata CLI

Учет зарплаты за день: `касса * процент + ставка`.

По умолчанию сезон: с `05-01` по `09-30`.

## Запуск

```bash
npm run z -- add --date 2026-05-03 --cash 5000 --rate 3000
```

## Команды

```bash
npm run z -- add --date YYYY-MM-DD --cash 5000 --rate 3000 [--percent 30]
npm run z -- list [--month YYYY-MM]
npm run z -- total [--year 2026] [--from YYYY-MM-DD --to YYYY-MM-DD]
npm run z -- set-percent --percent 30
npm run z -- set-season --start 05-01 --end 09-30
```

## Где хранятся данные

Файл `salary-data.json` в корне проекта.

Если повторно добавить запись на ту же дату, она обновится.
