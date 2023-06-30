const WorkFlowIcon = (props: any) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L1.55279 14.2764C1.214 14.107 1 13.7607 1 13.382V2.61803C1 1.87465 1.78231 1.39116 2.44721 1.72361L7 4M7 17L13 14M7 17V4M13 14L17.5528 16.2764C18.2177 16.6088 19 16.1253 19 15.382V4.61803C19 4.23926 18.786 3.893 18.4472 3.72361L13 1M13 14V1M13 1L7 4"
        stroke={props.color ? props.color : "#9CA3AF"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default WorkFlowIcon;
