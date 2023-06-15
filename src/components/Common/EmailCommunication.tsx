const EmailCommunication = (props: any) => {
  const { emailCommunications } = props;

  return (
    <div>
      <ul>
        {emailCommunications.map((customerEmail: any) => (
          <li className="flex items-center justify-between w-full py-4 border-b-2">
            <div>
              <div className="flex items-center">
                <span className="pr-2 font-inter text-sm text-indigo-600 font-medium">
                  Sub:
                </span>
                <p>{customerEmail.subject}</p>
              </div>
              <div className="flex items-center">
                <span className="pr-2 font-inter text-sm text-indigo-600 font-medium">
                  Date:
                </span>
                <p>{customerEmail.activity_date}</p>
              </div>
              <div className="flex items-center">
                <span className="pr-2 font-inter text-sm text-indigo-600 font-medium">
                  Content:
                </span>
                <p>{customerEmail.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailCommunication;
