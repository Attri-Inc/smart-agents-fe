const MicroPhone = (props: any) => {
  return (
    <svg
      {...props}
      width="13"
      height="18"
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9045 8.49997C11.9045 11.4455 9.51665 13.8333 6.57113 13.8333M6.57113 13.8333C3.62561 13.8333 1.23779 11.4455 1.23779 8.49997M6.57113 13.8333V16.8809M6.57113 16.8809H3.52351M6.57113 16.8809H9.61875M6.57113 10.7857C5.30876 10.7857 4.28541 9.76233 4.28541 8.49997V3.92854C4.28541 2.66617 5.30876 1.64282 6.57113 1.64282C7.83349 1.64282 8.85684 2.66617 8.85684 3.92854V8.49997C8.85684 9.76233 7.83349 10.7857 6.57113 10.7857Z"
        stroke={props.color ? props.color : "#6B7280"}
        stroke-width="1.52381"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MicroPhone;
