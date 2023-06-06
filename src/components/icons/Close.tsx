const Close = (props: any) => {
  return (
    <svg
      {...props}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_35_17142)">
        <path
          d="M19.3813 5.5L5.66699 19.2143"
          stroke={props.color ? props.color : "white"}
          stroke-width="1.14286"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.3813 19.2143L5.66699 5.5"
          stroke={props.color ? props.color : "white"}
          stroke-width="1.14286"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_17142">
          <rect
            width="24.381"
            height="24.381"
            fill={props.color ? props.color : "white"}
            transform="translate(0.333496 0.166626)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Close;
