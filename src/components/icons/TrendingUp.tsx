const TrendingUp = (props: any) => {
  return (
    <svg
      {...props}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1H19M19 1V9M19 1L11 9L7 5L1 11"
        stroke={props.color ? props.color : "#9CA3AF"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TrendingUp;
