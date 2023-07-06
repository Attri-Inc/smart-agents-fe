import Twitter from "../../icons/Twitter";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialProfileConfiguration = () => {
  return (
    <div>
      <div className="text-white  font-inter">
        <h1 className="py-2 text-xl font-semibold">
          Lets configure your social profiles
        </h1>
        <p className="py-2 text-sm font-normal">
          To personalize your experience and make the most of our features, we
          kindly ask you to provide some details
        </p>
      </div>
      <button className="bg-gray-700 my-4 rounded-md border border-gray-500 w-full flex py-2 text-white items-center justify-center">
        <FaLinkedin className="mr-4" color="#fff" /> Integrate Linkedin
      </button>
      <button className="bg-gray-700 rounded-md border border-gray-500 w-full flex py-2 text-white items-center justify-center">
        <Twitter className="mr-4" color="#fff" /> Integrate Twitter
      </button>
      <button className="bg-gray-700 rounded-md border my-4 border-gray-500 w-full flex py-2 text-white items-center justify-center">
        <FaFacebookSquare className="mr-4" color="#fff" /> Integrate Facebook
      </button>
      <button className="bg-gray-700 rounded-md border my-4 border-gray-500 w-full flex py-2 text-white items-center justify-center">
        <BsInstagram className="mr-4" color="#fff" /> Integrate Instagram
      </button>
    </div>
  );
};

export default SocialProfileConfiguration;
