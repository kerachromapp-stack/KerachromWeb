import { cn } from "@/utils/cn";

type CustomButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary";
  size?: "small" | "medium" | "large" | "wide";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
  type = "button",
  disabled = false,
  variant = "primary",
  loading,
  size = "medium",
  iconLeft,
  iconRight,
}) => {
  const baseClasses = "font-medium cursor-pointer  focus:outline-none";
  const variantClasses = {
    primary: "bg-pink text-white   hover:bg-pink/80",
  }[variant];

  const sizeClasses = {
    small: "text-sm py-1 px-2",
    medium: "text-sm rounded-[30px] sm:text-base py-2 px-4 xl:px-10 xl:py-4",
    wide: "text-base rounded-[6px]  py-2 px-4 xl:px-[54px] xl:py-[15px]",
    large: "text-lg py-3 px-6",
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "flex items-center justify-center transition duration-300",
        baseClasses,
        variantClasses,
        sizeClasses,
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {loading ? (
        <span className="">...</span>
      ) : (
        <>
          {iconLeft && <span className="mr-2">{iconLeft}</span>}
          <span>{label}</span>
          {iconRight && <span className="ml-2">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default CustomButton;
