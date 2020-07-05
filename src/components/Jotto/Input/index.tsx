import * as React from "react";
import { useSelector } from "react-redux";

interface IInputProps {}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  const { success } = useSelector((state: any) => state.success);
  // console.log(success);
  return (
    <div data-test="input-component">
      {!success ? (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
          />
          <button
            type="submit"
            data-test="submit-button"
            className="btn btn-primary mb-2"
          >
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Input;
