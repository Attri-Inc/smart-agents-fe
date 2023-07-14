import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import Logo from "../../assets/AISA-logo.png";
import { TOKEN } from "../../constants/authentication";
import { Link, useNavigate } from "react-router-dom";
import Email from "../../components/icons/Email";
import GoogleIcon from "../../components/icons/GoogleIcon";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { gooogleLogin, signUp } from "../../utils/authAPIHandler";
import Spinner from "../../components/Common/skeleton/Spinner";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const navigate = useNavigate();

  const [isSignUpWithEmail, setIsSignUpWithEmail] = useState<boolean>(false);
  const [isSignupLoading, setIsSignupLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
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
    formData.append("registered_email", data.email);
    formData.append("name", data.name);
    formData.append("password", data.password);
    setIsSignupLoading(true);
    try {
      const response = await signUp(formData);

      console.log("response", response);
      if (response.status === 200) {
        setIsSignupLoading(false);
        localStorage.setItem(TOKEN, JSON.stringify(response.data.token));
        navigate("/onboarding");
      }
    } catch (error: any) {
      setIsSignupLoading(false);
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
    <div className="w-full h-screen pb-8 flex items-center justify-center bg-authBackgoundColor">
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
          <Link to="/login">
            <small className="text-sm text-inter text-indigo-400 hover:underline cursor-pointer">
              <strong className="text-gray-200">Or</strong> Sign in if you
              already have an account{" "}
            </small>
          </Link>
        </div>
        <div className="w-full flex-col flex justify-center items-center bg-white shadow-authShadow rounded-lg py-6 mt-8 px-10">
          {!isSignUpWithEmail ? (
            <>
              <button
                onClick={() => handleGoogleLogin()}
                type="button"
                className=" w-full text-white bg-indigo-600  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <GoogleIcon /> Signup using Google
              </button>
              <div className="w-full container mx-auto px-5 py-10">
                <div className="relative rounded-md border border-gray-100">
                  <h2 className="absolute flex top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gray-300 px-2 text-sm font-medium">
                      Or
                    </span>
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setIsSignUpWithEmail(true)}
                type="button"
                className=" w-full text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-inter inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <Email color="#6366F1" className="mr-2" />
                Signup using email{" "}
              </button>
            </>
          ) : (
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              {errorMessage && (
                <span className="w-full inline-block text-center text-xs text-red-500 font-medium pl-2">
                  {errorMessage}
                </span>
              )}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700 text-inter dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                />
                {errors.name && (
                  <span className="text-xs text-red-500 font-medium pl-2">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700 text-inter dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 font-medium pl-2">
                    {errors.email.message}
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
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700 text-inter dark:text-white">
                  Confirm Password
                </label>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmPassword")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
                {errors.confirmPassword && (
                  <span className="text-xs text-red-500 font-medium pl-2">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Terms of Use{" "}
                  </a>
                  and the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Integrations{" "}
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Terms of Use{" "}
                  </a>
                  I acknowledge the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Pricacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full flex gap-4 text-white bg-indigo-600  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                Signup
                {isSignupLoading && <Spinner size="h-4 w-4" />}
              </button>
              <button
                onClick={handleGoogleLogin}
                type="button"
                className=" w-full text-indigo-700 bg-indigo-50  hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <GoogleIcon /> Signup using Google
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Signup;
