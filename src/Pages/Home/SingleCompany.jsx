import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SingleCompany.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';

function SingleCompany({ company }) {
  const { companyName, symbol } = company;
  const navigate = useNavigate();
  const openCompanyProfileHandler = () => {
    navigate(`/${companyName}`);
  };
  return (
    <li data-testid="company" aria-hidden="true" onClick={openCompanyProfileHandler} className="col-6 col-md-3 company">
      <div className="symbol">{symbol}</div>
      <div className="title">{companyName}</div>
      <div className="icon"><FaArrowAltCircleRight /></div>
    </li>
  );
}

export default SingleCompany;

SingleCompany.defaultProps = {
  company: {
    companyName: '',
    symbol: '',
  },
};

SingleCompany.propTypes = {
  company: PropTypes.shape({
    companyName: PropTypes.string,
    symbol: PropTypes.string,
  }),
};
