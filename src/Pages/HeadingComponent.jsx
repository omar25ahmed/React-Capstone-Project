import React from 'react';
import './HeadingComponents.css';
import PropTypes from 'prop-types';
import flag from './assets/Canada1.png';

function HeadingComponents(props) {
  const { name, title } = props;
  return (
    <section>
      <div className="container d-flex align-items-center justify-content-center p-3">
        <div className="me-2">
          <img src={flag} className="" alt="canada flag" />
        </div>
        <div>
          <h1 className="display-4">{name}</h1>
          <small className="ms-4">{title}</small>
        </div>
      </div>
    </section>
  );
}

export default HeadingComponents;

HeadingComponents.defaultProps = {
  name: '',
  title: '',
};

HeadingComponents.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};
