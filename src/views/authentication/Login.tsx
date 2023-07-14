import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import Logo from "../../assets/AISA-logo.png";
import { TOKEN } from "../../constants/authentication";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../components/icons/GoogleIcon";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { gooogleLogin, login } from "../../utils/authAPIHandler";
import Spinner from "../../components/Common/skeleton/Spinner";

type FormValues = {
  registered_email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const schema = yup.object().shape({
    registered_email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  useEffect(() => {
    const userKey = localStorage.getItem(TOKEN);
    userKey && navigate("/");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new URLSearchParams();
    formData.append("registered_email", data.registered_email);
    formData.append("password", data.password);

    try {
      setIsLoginLoading(true);
      const response = await login(formData);
      if (response.status === 200) {
        localStorage.setItem(TOKEN, JSON.stringify(response.data.token));
        navigate("/onboarding");
      }
    } catch (error: any) {
      setIsLoginLoading(false);
      if (error.response && error.response.data && error.response.data.result) {
        setErrorMessage(error.response.data.result);
        console.error(error.response.data.result);
      } else {
        console.error("An error occurred:", error.message);
        setErrorMessage(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const response = await gooogleLogin();
    console.log("response", response);
  };

  return (
    <div className=" h-screen w-full flex items-center justify-center bg-authBackgoundColor">
      <div className="w-1/3 max-w-md flex-col flex justify-center items-center">
        <div className="w-full max-w-md flex-col flex justify-center items-center">
          <div className="flex items-center gap-4 py-4">
            <img src={Logo} />
            <h1 className="font-inter text-white font-black	text-3xl tracking-widest">
              AISA
            </h1>
          </div>
          <h1 className="font-inter text-gray-50 font-semibold text-2xl pb-1">
            Create your account!
          </h1>
          <Link to="/signup">
            {" "}
            <small className="text-sm text-inter text-indigo-400 hover:underline cursor-pointer">
              <strong className="text-gray-200">Or</strong> Sign in if you
              already have an account{" "}
            </small>
          </Link>
        </div>
        <div className="w-full h-full flex-col flex justify-center items-center bg-white shadow-authShadow rounded-lg py-6 mt-8 px-10">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && (
              <span className="w-full inline-block text-center text-xs text-red-500 font-medium pl-2">
                {errorMessage}
              </span>
            )}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700 text-inter dark:text-white">
                Email address
              </label>
              <input
                type="email"
                {...register("registered_email")}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
              />
              {errors.registered_email && (
                <span className="text-xs text-red-500 font-medium pl-2">
                  {errors.registered_email.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700 text-inter dark:text-white">
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                {...register("password")}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              {errors.password && (
                <span className="text-xs text-red-500 font-medium pl-2">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className=" w-full flex text-white bg-indigo-600  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-4 items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              Login
              {isLoginLoading && <Spinner size="h-4 w-4" />}
            </button>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className=" w-full text-indigo-700 bg-indigo-50  hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <GoogleIcon /> Login using Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
