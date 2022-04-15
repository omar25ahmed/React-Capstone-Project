import companiesReducer, { FETCH_COMPANIES } from '../Redux/companiesReducer';

it('test companiesReducer', () => {
  const companies = [
    {
      symbol: 'r',
      companyName: 'r-bank',
      marketCap: 'company.marketCap',
      sector: 'company.sector',
      industry: 'company.industry',
      beta: 'company.beta',
      price: 'company.price',
      lastAnnualDividend: 'company.lastAnnualDividend',
      volume: 'company.volume',
      exchange: 'company.exchange',
      exchangeShortName: 'company.exchangeShortName',
      isActivelyTrading: 'company.isActivelyTrading',
    },
    {
      symbol: 'r',
      companyName: 'r-bank',
      marketCap: 'company.marketCap',
      sector: 'company.sector',
      industry: 'company.industry',
      beta: 'company.beta',
      price: 'company.price',
      lastAnnualDividend: 'company.lastAnnualDividend',
      volume: 'company.volume',
      exchange: 'company.exchange',
      exchangeShortName: 'company.exchangeShortName',
      isActivelyTrading: 'company.isActivelyTrading',
    },
  ];
  const action = { type: FETCH_COMPANIES, payload: companies };
  expect(companiesReducer([], action)).toEqual(companies);
});
