import React from "react";

// typescript 문법 
interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                "
        placeholder=" "
      />
      <label
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          {/* -...- tailwind 문법/}
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          {/* 위의 peer 와 연동해서 뭔가 만들수 있음/}
        "
        htmlFor={id}>  {/* 위의 id와 같게 그럼 peer 로 건들 수 있고 클릭했을 때 반응형으로 줄어든다.*/}
        {label}
      </label>
    </div>
  );
};

export default Input;
