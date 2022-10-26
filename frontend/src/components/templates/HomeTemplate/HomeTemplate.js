import React from 'react';
import PropTypes from 'prop-types';
import './HomeTemplate.scss';

const HomeTemplate = (props) => {
  const {onCrawlClick} = props;

  return (
    <div className='main'>
      <button onClick={onCrawlClick}>Get URL Data</button>
    </div>
  );
};

HomeTemplate.propTypes = {
  onCrawlClick: PropTypes.func.isRequired
};

export default HomeTemplate;
