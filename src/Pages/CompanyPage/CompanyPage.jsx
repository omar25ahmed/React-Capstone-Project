import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CompanyInfo from './CompanyInfo';
import { fetchCompanies } from '../../Redux/companiesReducer';
import HeadingComponents from '../HeadingComponent';

function CompanyPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const companies = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <div data-testid="company" className="container">
      {companies
        .filter((company) => company.companyName === id && company)
        .map((company) => (
          <div key={Math.random() * 100}>
            <HeadingComponents
              key={Math.random()}
              name={company.companyName}
              title={company.symbol}
            />
            <CompanyInfo company={company} />
          </div>
        ))}
    </div>
  );
}

export default CompanyPage;
