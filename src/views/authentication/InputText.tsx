import React from "react";
import {
  FieldErrors,
  FieldPath,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

interface TextInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  register: UseFormRegister<T>;
  required?: boolean;
  errors: FieldErrors<T>;
}

const TextInput = <T extends FieldValues>({
  name,
  label,
  register,
  required,
  errors,
}: TextInputProps<T>) => {
  console.log("errors", errors);
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-700 text-inter dark:text-white"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        type="text"
        id={name as string}
        {...register(name, { required })}
      />
      {errors[name] && (
        <p className="error">{errors[name]?.message as React.ReactNode}</p>
      )}
    </div>
  );
};

export default TextInput;
