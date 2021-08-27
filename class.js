"use strict";
const names = "budi";
class ConvSuhu extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="text-center border border-light p-5">
          <div className="h4 mb-4" id="date-part"></div>
          <div className="h4 mb-4" id="time-part"></div>
          <p className="h4 mb-4">Temperature Convertion</p>
          <div className="h4 mb-12">
            <select name="from" id="from" onChange={() => select()}>
              <option value="cel">Celcius</option>
              <option value="far">Farenheit</option>
              <option value="rea">Reamur</option>
            </select>
            to
            <select name="to" id="to" onChange={() => select()}>
              <option value="cel">Celcius</option>
              <option value="far">Farenheit</option>
              <option value="rea">Reamur</option>
            </select>
          </div>
          <input
            type="number"
            name="kmh"
            id="num1"
            className="form-control mb-4"
            placeholder="some number"
            onKeyPress={() => validate(this)}
            onKeyUp={() => conv()}
          />
          <p className="h6 mb-4">=</p>
          <input
            type="number"
            id="result"
            className="form-control mb-4"
            placeholder="result"
            disabled
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
