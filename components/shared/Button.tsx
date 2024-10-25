"use client";

import { ButtonType } from "@/types/buttton";
import { Children } from "@/types/generics";
import { CgSpinner } from "react-icons/cg";

interface IButton extends Children {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  type,
  className,
  disabled,
  loading,
  onClick,
}: IButton) => {
  return type === ButtonType.SECONDARY ? (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-themeBlack justify-center hover:text-themeVioletText flex items-center gap-2 border-2 border-themeBorderBlue transition-all rounded-lg md:px-6 px-4 min-h-[2.5rem] font-medium text-lg ${className}`}
    >
      {children} {loading && <CgSpinner className="animate-spin" />}
    </button>
  ) : (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-gradient-to-r justify-center flex items-center gap-2 from-themeViolet to-themeBlue hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey transition-all duration-700 rounded-lg md:px-6 px-4 min-h-[2.5rem] font-semibold text-lg ${className}`}
    >
      {children} {loading && <CgSpinner className="animate-spin" />}
    </button>
  );
};

export default Button;
