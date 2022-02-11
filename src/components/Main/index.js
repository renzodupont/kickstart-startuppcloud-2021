import Menu from "../Menu";

const Main = ({ element }) => {
  return (
    <div className="App">
      <Menu />
      <div className="container main">
        <div className="white-background container left-panel" />
        <div className="white-background container content">{element}</div>
        <div className="white-background container right-panel" />
      </div>
      <div className="white-background container footer" />
    </div>
  );
};

export default Main;
