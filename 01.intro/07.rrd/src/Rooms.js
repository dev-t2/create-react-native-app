import { Link, Route } from 'react-router-dom';

const Room = ({ match }) => {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
};

const Rooms = ({ match }) => {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지입니다.</h2>

      <Link to={`${match.url}/blueRoom`}>파란 방입니다.</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>초록 방입니다.</Link>
      <br />

      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route path={match.url} exact render={() => <h3>방을 선택해주세요.</h3>} />
    </div>
  );
};

export default Rooms;
