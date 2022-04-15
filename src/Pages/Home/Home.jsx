/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { fetchCompanies } from '../../Redux/companiesReducer';
import SingleCompany from './SingleCompany';
import HeadingComponents from '../HeadingComponent';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <div data-testid="companies">
      <HeadingComponents name="Top Companies" title="in Canada" />
      <div style={{ padding: '0' }} className="d-md-flex container">
        <div className="stats">
          <p>MOST IMPORTANT COMPANIES</p>
        </div>
        <div className="input-group">
          <div className="input-group-prepend d-md-none">
            <span className="input-group-text bg-primary" id="basic-addon1"><FaSearch size="1.5rem" color="#fff" /></span>
          </div>
          <input type="text" className="form-control" placeholder="Search Companies..." aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {companies
            .filter((company) => (searchTerm === ''
              ? company
              : company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
                ? company
                : ''))
            .map((company) => (
              <SingleCompany key={company.volume} company={company} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
