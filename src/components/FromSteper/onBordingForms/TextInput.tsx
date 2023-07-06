import React from "react";

const TextInput = ({ name, label, register, required, errors }: any) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...register(name, { required })} />
      {errors[name] && <p className="error">{errors[name].message}</p>}
    </div>
  );
};

export default TextInput;
