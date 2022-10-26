import React, {useEffect} from 'react';
import './Home.scss';
import {Crawler} from '../../agent/agent';

const Home = () => {

  useEffect(() => {
    Crawler.getHistory()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  const _getUrlData = () => {
    Crawler.crawl('http://automationpractice.com/index.php')
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        throw e;
      });
  };

  return (
    <div className='main'>
      
      <button onClick={_getUrlData}>Get URL Data</button>
    </div>
  );
};

export default Home;
