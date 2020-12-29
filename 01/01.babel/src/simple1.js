const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';

  return <button onClick={() => setLiked((prev) => !prev)}>{text}</button>;
};

const Container = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <LikeButton />

      <div>
        <span>현재 카운트: </span>
        <span style={{ marginRight: 10, color: 'red' }}>{count}</span>

        <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
        <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
      </div>
    </div>
  );
};

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);

// babel: npx babel --watch src --out-dir . --presets @babel/preset-react
