import { FiSend } from "react-icons/fi";
interface QueryInputProps {
  onclick?: () => void;
  onChange: (e: any) => void;
  value: string | undefined;
}

const QueryInput = (props: QueryInputProps): JSX.Element => {
  const { onclick, onChange, value } = props;
  return (
    <div className="flex items-center w-9/12 fixed bottom-4">
      <div className="w-full static">
        <input
          onClick={() => onclick && onclick()}
          onChange={onChange}
          value={value}
          className="shadow appearance-none border rounded-3xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Send a message."
        />
      </div>
      <FiSend className="text-2xl text-zinc-400 absolute right-8" />
    </div>
  );
};

export default QueryInput;
