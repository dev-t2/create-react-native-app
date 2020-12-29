const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(prev => !prev)
  }, text);
};

const Container = () => {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(prev => prev + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(prev => prev - 1)
  }, "\uAC10\uC18C")));
};

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);