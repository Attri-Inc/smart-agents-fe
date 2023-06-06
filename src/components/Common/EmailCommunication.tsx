const emailCommunications = [
  {
    sub: "Regarding for tomorrow meeting.",
    date: "23-05-2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quos quidem, ullam.",
  },
  {
    sub: "Regarding for tomorrow meeting.",
    date: "23-05-2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quos quidem, ullam.",
  },
  {
    sub: "Regarding for tomorrow meeting.",
    date: "23-05-2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quos quidem, ullam.",
  },
];

const EmailCommunication = () => {
  return (
    <div>
      <ul>
        {emailCommunications.map(() => (
          <li className="flex items-center justify-between w-full py-4 border-b-2">
            <div>
              <div className="flex items-center">
                <span className="pr-2 font-inter text-sm text-indigo-600 font-medium">
                  Sub:
                </span>
                <p>Regarding for tomorrow meeting</p>
              </div>
              <div className="flex items-center">
                <span className="pr-2 font-inter text-sm text-indigo-600 font-medium">
                  Date:
                </span>
                <p>23-05-2023</p>
              </div>
              <div className="flex items-center">
                <span className="pr-2 font-inter text-sm text-indigo-600 font-medium">
                  Content:
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam molestias quos quidem, ullam...
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
          View All
        </span>
      </div>
    </div>
  );
};

export default EmailCommunication;
