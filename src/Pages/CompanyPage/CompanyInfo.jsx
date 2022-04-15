import React from 'react';
import PropTypes from 'prop-types';
import './CompanyInfo.css';

function CompanyInfo({ company }) {
  const {
    marketCap, sector, industry, price, exchange, exchangeShortName, isActivelyTrading,
  } = company;
  const nf = new Intl.NumberFormat('en-US');
  return (
    <ul data-testid="company info">
      <li className="d-flex justify-content-between">
        <span>Market Cap</span>
        {nf.format(marketCap)}
        {' '}
        $
      </li>
      <li className="d-flex justify-content-between">
        <span>Sector</span>
        {sector}
      </li>
      <li className="d-flex justify-content-between">
        <span>Industry</span>
        {industry}
      </li>
      <li className="d-flex justify-content-between">
        <span>Price of the company</span>
        {price}
        {' '}
        M
      </li>
      <li className="d-flex justify-content-between">
        <span>Exchange</span>
        {exchange}
      </li>
      <li className="d-flex justify-content-between">
        <span>Exchange shortcut</span>
        {exchangeShortName}
      </li>
      <li className="d-flex justify-content-between">
        <span>Trading status</span>
        {isActivelyTrading ? 'active' : 'not active'}
      </li>
    </ul>
  );
}

export default CompanyInfo;

CompanyInfo.defaultProps = {
  company: {
    companyName: '',
    symbol: '',
  },
};

CompanyInfo.propTypes = {
  company: PropTypes.shape({
    marketCap: PropTypes.number,
    sector: PropTypes.string,
    industry: PropTypes.string,
    price: PropTypes.number,
    exchange: PropTypes.string,
    exchangeShortName: PropTypes.string,
    isActivelyTrading: PropTypes.bool,
  }),
};
