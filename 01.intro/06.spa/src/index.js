import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return <h2>여기는 Home입니다.</h2>;
};

const Page1 = () => {
  return <h2>여기는 Page1입니다.</h2>;
};

const Page2 = () => {
  return <h2>여기는 Page2입니다.</h2>;
};

const App = () => {
  const [page, setPage] = useState('');

  useEffect(() => {
    window.onpopstate = (e) => {
      setPage(e.state);
    };
  }, []);

  const onClick1 = () => {
    window.history.pushState('page1', '', '/page1');
    setPage('page1');
  };

  const onClick2 = () => {
    window.history.pushState('page2', '', '/page2');
    setPage('page2');
  };

  return (
    <div>
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>

      {!page && <Home />}
      {page === 'page1' && <Page1 />}
      {page === 'page2' && <Page2 />}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
