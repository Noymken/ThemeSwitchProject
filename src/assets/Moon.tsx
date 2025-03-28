export default function Moon({ fill = "currentColor", ...rest }) {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
    </svg>
  );
}
