interface Attendees {
  email: string;
  name: string;
  image: string;
}

interface AttendeesProps {
  attendees: Attendees[];
}

const Attendees = ({ attendees }: AttendeesProps) => {
  const showCount = attendees.length > 2;

  return (
    <>
      <ul>
        {attendees.slice(0, 2).map((attendee: any, index: number) => {
          return (
            <li
              key={index}
              className={` ${
                showCount && index === 1
                  ? "flex justify-between items-center"
                  : "py-1"
              } `}
            >
              <p className="text-sm-base text-gray-600 font-inter">
                {attendee.name}
              </p>
              {showCount && index === 1 && (
                <div className="flex items-center">
                  <span className="text-gray-500 font-bold font-inter text-sm">{`+${
                    attendees.length - 2
                  } more`}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Attendees;
