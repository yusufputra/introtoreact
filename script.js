"use strict";
const names = "budi";
class ConvSuhu extends React.Component {
  divSelect = (props) => {
    return (
      <select name="from" id={props.id} onChange={() => select()}>
        <option value="cel">Celcius</option>
        <option value="far">Farenheit</option>
        <option value="rea">Reamur</option>
      </select>
    );
  };
  divInput = (props) => {
    console.log(props)
    return (
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="form-control mb-4"
        placeholder={props.placeholder}
        onKeyPress={props.onKeyPress}
        onKeyUp={props.onKeyUp}
        disabled={props.disabled}
      />
    );
  };
  render() {
    return (
      <div className="container">
        <form className="text-center border border-light p-5">
          <div className="h4 mb-4" id="date-part"></div>
          <div className="h4 mb-4" id="time-part"></div>
          <p className="h4 mb-4">Temperature Convertion</p>
          <div className="h4 mb-12">
            <this.divSelect id="from" />
            to
            <this.divSelect id="to" />
          </div>
          <this.divInput
            type="number"
            name="kmh"
            id="num1"
            placeholder="some number"
            onKeyPress={() => validate(this)}
            onKeyUp={() => conv()}
          />
          <p className="h6 mb-4">=</p>
          <this.divInput
            type="number"
            id="result"
            className="form-control mb-4"
            placeholder="result"
            disabled={true}
          />
        </form>
        Change Background Color : <input className="form-control" id="color" />
        <button
          type="button"
          className="btn btn-light"
          onClick={() => change()}
        >
          Change
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ConvSuhu />, document.getElementById("root"));
