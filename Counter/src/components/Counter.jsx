import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const valueRef = useRef();

  const handleAddByAmount = () => {
    let amount = valueRef.current.value;
    if (amount) {
      dispatch(add(amount));
      // console.log(amount);
    } else {
      alert("Enter a Value!");
    }
  };
  return (
    <div className="d-flex align-items-center gap-5 flex-column bg-dark justify-content-center vh-100">
      <h1 className="text-light">COUNTER APP</h1>
      <p className="fs-1 text-light">{count}</p>
      <div className="d-flex gap-2">
        <button
          className="btn btn-success text-light"
          onClick={() => dispatch(increment())}
        >
          INCREMENT (+)
        </button>
        <button
          className="btn btn-warning text-light"
          onClick={() => dispatch(decrement())}
        >
          DECREMENT (-)
        </button>
        <button
          className="btn btn-danger text-light"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
      </div>

      <div className="d-flex gap-2">
        <input
          type="number"
          className="form-control "
          placeholder="Enter a Value"
          ref={valueRef}
        />
        <button
          className="btn btn-primary text-light"
          onClick={handleAddByAmount}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default Counter;
