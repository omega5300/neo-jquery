interface timeFormat {
  amount: number;
  name: Intl.RelativeTimeFormatUnit;
};

// currency
const $currency = (locale: string, currency: string) => new Intl.NumberFormat(locale, {
  style: 'currency',
  currency
});

// list
const $list = (locale: string, style: Intl.ListFormatStyle, type: Intl.ListFormatType) => new Intl.ListFormat(locale, {
  style,
  type
});

// time ago
const $timeago = (locale: string, date: null | any = null) => {
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const startDate = new Date(date);
  const currentDate = new Date();

  let duration: number = (startDate.getTime() - currentDate.getTime()) / 1000;

  const divisions: timeFormat[] = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' }
  ];

  for(const division of divisions) {
      if(Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name);
      }
    duration /= division.amount
  }
};