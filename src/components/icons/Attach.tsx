const Attach = (props: any) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5473 2.31908C11.3624 2.23301 12.1953 2.44244 12.8199 2.80302C13.4444 3.1636 14.0422 3.78017 14.3752 4.52911C14.7175 5.29881 14.7907 6.2465 14.2653 7.15662L10.8367 13.0951C10.6488 13.4206 10.2831 13.841 9.74964 14.0812C9.17254 14.3412 8.45728 14.3606 7.71437 13.9317C6.97145 13.5028 6.6307 12.8736 6.56724 12.2439C6.50858 11.6618 6.68979 11.1349 6.87774 10.8094L9.92536 5.53074C10.1357 5.16632 10.6017 5.04147 10.9661 5.25186C11.3306 5.46225 11.4554 5.92823 11.245 6.29264L8.19739 11.5713C8.13137 11.6856 8.06359 11.8948 8.08337 12.0911C8.09835 12.2398 8.16346 12.4315 8.47627 12.6121C8.78908 12.7927 8.98762 12.7532 9.12388 12.6918C9.30378 12.6108 9.45103 12.4475 9.51705 12.3332L12.9456 6.39472C13.1821 5.98518 13.1669 5.56217 12.9829 5.14824C12.7896 4.71354 12.4232 4.33352 12.058 4.12268C11.6928 3.91183 11.1804 3.78451 10.7073 3.83446C10.2568 3.88203 9.88292 4.08042 9.64648 4.48995L5.83696 11.0882C5.33842 11.9517 5.61925 13.6019 7.33341 14.5915C9.04758 15.5812 10.6171 14.9993 11.1156 14.1359L13.7823 9.51706C13.9926 9.15265 14.4586 9.02779 14.823 9.23818C15.1874 9.44858 15.3123 9.91455 15.1019 10.279L12.4352 14.8978C11.41 16.6736 8.81632 17.2072 6.57151 15.9112C4.3267 14.6152 3.49202 12.1022 4.5173 10.3263L8.32682 3.72805C8.85228 2.81793 9.70963 2.40753 10.5473 2.31908Z"
        fill={props.color ? props.color : "#7A7A7A"}
      />
    </svg>
  );
};

export default Attach;
