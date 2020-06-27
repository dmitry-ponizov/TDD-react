import React from "react";

const Congrats: React.FC<{ success: boolean }> = ({ success }) => {
  return (
    <div data-test="congrats-component" className="alert alert-success">
      {success ? (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Congrats;
