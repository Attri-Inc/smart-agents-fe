import Star from "../icons/Star";
import MicroPhone from "../icons/MicroPhone";
interface QueryInputProps {
  onclick?: () => void;
  onChange: (e: any) => void;
  value: string | undefined;
}

const QueryInput = (props: QueryInputProps): JSX.Element => {
  const { onclick, onChange, value } = props;
  return (
    <div className="flex items-center justify-center h-full">
      <Star className="mr-4" />
      <div className="w-9/12">
        <input
          onClick={() => onclick && onclick()}
          onChange={onChange}
          value={value}
          className="shadow appearance-none border rounded-3xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Send a message."
        />
      </div>
      <MicroPhone className="text-2xl text-zinc-400 absolute right-[14%]" />
    </div>
  );
};

export default QueryInput;
