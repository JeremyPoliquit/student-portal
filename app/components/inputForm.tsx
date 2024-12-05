import React from "react";

interface InputFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string
}

function inputForm({ onChange, value, placeholder, name }: InputFormProps) {
  return (
    <input
      type="text"
      className="input input-bordered w-full"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
}

export default inputForm;
