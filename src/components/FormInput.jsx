import React from 'react';

const FormInput = ({ label, name, value, onChange, error, placeholder, icon: Icon }) => {
  return (
    <div className="relative">
      <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full pl-12 pr-4 py-3 border-2 ${error ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
        placeholder={placeholder}
      />
      {Icon && <Icon className="w-6 h-6 absolute left-4 top-[38px] text-blue-500" />}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;