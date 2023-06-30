const Hilight = (props: any) => {
  return (
    <svg
      {...props}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8V1L1 12H8L8 19L17 8L10 8Z"
        stroke={props.color ? props.color : "#9CA3AF"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Hilight;
