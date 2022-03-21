import React from 'react';

const LoginInput = React.forwardRef(
  ({ type, value, setValue, description, children }, ref) => {
    return (
      <label className="relative text-sm w-full">
        <span
          className={`absolute text-[#8e8e8e] cursor-text left-[9px] transition-all select-none ${
            value ? 'top-[1px] text-[11px]' : 'top-2.5 text-xs'
          }  `}
        >
          {description}
        </span>

        <input
          type={type}
          value={value}
          spellCheck="false"
          onChange={(e) => setValue(e.target.value)}
          className={`rounded-[3px] text-[#262626] bg-[#fafafa] w-full p-2 outline-none border-solid border border-[#dbdbdb] focus:border-[#8e8e8e] mb-1.5 block mx-auto h-9 ${
            value ? 'text-xs pt-5' : ''
          }`}
          ref={ref}
        />
        {children}
      </label>
    );
  }
);

export default LoginInput;
