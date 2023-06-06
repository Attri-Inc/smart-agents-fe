import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import Hero from "../../assets/loginImg.jpg";
import { TOKEN } from "../../constants/authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const responseMessage = (response: any) => {
    if (response) {
      localStorage.setItem(TOKEN, JSON.stringify(response.credential));
      navigate("/");
    }
  };

  useEffect(() => {
    const userKey = localStorage.getItem(TOKEN);
    userKey && navigate("/");
  }, []);
  return (
    <div className="w-full h-screen flex">
      <div className="h-full w-2/4">
        <div className="h-full">
          <img src={Hero} className="h-full max-w-full object-cover" />
        </div>
      </div>
      <div className="w-2/4 flex justify-center items-center">
        <div>
          <h3 className="pb-4 text-inter font-bold text-stone-700 text-lg ">
            Login with Google
          </h3>
          <GoogleLogin onSuccess={responseMessage} />
        </div>
      </div>
    </div>
  );
};
export default Login;
