import React from 'react';

const CustomInput = (props) => {
  const { type, place_holder, i_id, i_class, label } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        id={i_id}
        className={`form-control ${i_class}`}
        placeholder={place_holder}
      />
      <label htmlFor={i_id}>{label}</label>
    </div>
  );
};

export default CustomInput;