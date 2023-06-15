import CustomButton from "../customButton";

const followUpTask = [
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 1,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 2,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 3,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 3,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 3,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 3,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 3,
  },
  {
    label: "Send Follow-up email",
    name: "Samantha Reynolds",
    content:
      "needs to send a brief and professional follow-up email, expressing gratitude.",
    id: 3,
  },
];

const FollowUpTask = () => {
  return (
    <div className="w-full">
      <ul className="w-full flex flex-nowrap mb-8 overflow-x-scroll scrollbar-hide">
        {followUpTask.map((todo: any) => (
          <li className="border m-4 p-4 rounded-lg inline-block">
            <div className="w-96">
              <h1 className="font-inter text-base text-gray-900 pb-2">
                {todo.label}
              </h1>
              <div className="">
                <p className="font-inter text-gray-500 break-words">
                  <span className="font-inter text-indigo-600">
                    {todo.name}
                  </span>{" "}
                  {todo.content}
                </p>
              </div>
              <CustomButton
                title="Mark as complete"
                disabled={false}
                containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                type="button"
                handleClick={() => {}}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUpTask;
