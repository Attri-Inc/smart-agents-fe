const ProfileSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full">
        <h3
          className="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
          style={{ width: "40%" }}
        ></h3>
        <div className="flex-col flex justify-center items-center w-full mt-4">
          <div className="flex-shrink-0">
            <span className="w-28 h-28 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
        </div>
        <div className="flex-col flex justify-center items-center w-full mt-4">
          <h3
            className="h-6 bg-gray-200 rounded-md dark:bg-gray-700"
            style={{ width: "80%" }}
          ></h3>
          <h3
            className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mt-2"
            style={{ width: "50%" }}
          ></h3>
        </div>
        <div className="mt-2 w-full border-b-2 pb-4 flex justify-center">
          <ul className="mt-5 flex items-center gap-4">
            {Array.from([1, 2, 3, 4]).map(() => (
              <li>
                <div className="h-12 w-12 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <p className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mt-2"></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        {Array.from([1, 2, 3, 4, 5, 6]).map(() => (
          <div className="py-4">
            <div className="flex-col flex gap-4">
              <div className=" bg-gray-200 rounded-lg dark:bg-gray-700 w-32 h-4"></div>
              <div className=" bg-gray-200 rounded-lg dark:bg-gray-700 w-28 h-4 pt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSkeleton;
