
var a = <div></div>;

class Component1 extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <div>1</div>;
  }
}

ReactDOM.render(<Component1 />, document.getElementById('div1'));
