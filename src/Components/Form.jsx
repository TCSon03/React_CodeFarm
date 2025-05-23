// import React from "react";

const Form = ({ handleSubmit, children }) => {
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {children}
      </form>
    </>
  );
};

export default Form;
