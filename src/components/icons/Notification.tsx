const Notification = (props: any) => {
  return (
    <svg
      {...props}
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="32" height="32" rx="16" fill="#F3F4F6" />
      <path
        d="M19 21.5H24L22.5951 20.0951C22.2141 19.7141 22 19.1973 22 18.6585V15.5C22 12.8876 20.3304 10.6651 18 9.84142V9.5C18 8.39543 17.1046 7.5 16 7.5C14.8954 7.5 14 8.39543 14 9.5V9.84142C11.6696 10.6651 10 12.8876 10 15.5V18.6585C10 19.1973 9.78595 19.7141 9.40493 20.0951L8 21.5H13M19 21.5V22.5C19 24.1569 17.6569 25.5 16 25.5C14.3431 25.5 13 24.1569 13 22.5V21.5M19 21.5H13"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Notification;
