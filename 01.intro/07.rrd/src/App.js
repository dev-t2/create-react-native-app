import { BrowserRouter, Link, Route } from 'react-router-dom';

import Rooms from './Rooms';

const Home = () => {
  return <h2>여기는 Home입니다.</h2>;
};

const Photo = () => {
  return <h2>여기는 Photo입니다.</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: '5px solid gray' }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">소개</Link>
        <br />

        <Route path="/" exact component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  );
};

export default App;
