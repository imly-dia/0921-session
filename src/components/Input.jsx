export default function Input({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}) {
  const isFilled = value.length > 0;

  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      aria-label={placeholder}
      className={`
        w-full max-w-80
        px-6 py-3 rounded-xl
        border border-transparent outline-none
        text-center body-md
        bg-primary-100
        placeholder:text-primary-300
        ${isFilled ? "text-neutral-500" : "text-neutral-400"}
        focus:border-primary-400 focus:text-neutral-500
        disabled:cursor-not-allowed
        disabled:bg-neutral-100 disabled:text-neutral-200
        disabled:placeholder:text-neutral-200
      `}
    />
  );
}