export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full max-w-80
        py-2.5 rounded-xl
        body-lg text-white
        bg-primary-300
        hover:bg-primary-400
        active:bg-primary-500
        disabled:cursor-not-allowed
        disabled:bg-neutral-100
      "
    >
      {text}
    </button>
  );
}