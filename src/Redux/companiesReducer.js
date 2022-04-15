export const FETCH_COMPANIES = 'FETCH_COMPANIES';

export const fetchCompanies = () => async (dispatch) => {
  const response = await fetch(
    'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&industry=Software&exchange=NASDAQ&dividendMoreThan=0&limit=40&apikey=0e554e75ea913c92fa1f59c77b15e4a0',
  );
  const data = await response.json();
  dispatch({ type: FETCH_COMPANIES, payload: data });
};

const companiesReducer = (state = [], action) => {
  const companies = [];
  switch (action.type) {
    case FETCH_COMPANIES:
      action.payload.forEach((company) => {
        companies.push({
          symbol: company.symbol,
          companyName: company.companyName,
          marketCap: company.marketCap,
          sector: company.sector,
          industry: company.industry,
          beta: company.beta,
          price: company.price,
          lastAnnualDividend: company.lastAnnualDividend,
          volume: company.volume,
          exchange: company.exchange,
          exchangeShortName: company.exchangeShortName,
          isActivelyTrading: company.isActivelyTrading,
        });
      });
      return companies;
    default:
      return state;
  }
};

export default companiesReducer;
