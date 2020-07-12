import React from "react";
import { useSelector } from "react-redux";

const Congrats = () => {
  const { success } = useSelector((state: any) => state.success);
  return (
    <div data-test="congrats-component">
      {success ? (
        <div className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Congrats;
