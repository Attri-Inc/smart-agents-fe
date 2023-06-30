const FollowUpSkeleton = () => {
  return (
    <div className="animate-pulse flex gap-4">
      {Array.from([1, 2, 3, 4]).map(() => (
        <div className="w-96 h-32 mt-3 rounded border">
          <div className="w-18">
            <p className="h-6 w-32 ml-4 bg-gray-200 mt-3 rounded border"></p>
          </div>
          <div className="w-18">
            <p className="h-6 mx-4 bg-gray-200 mt-3 rounded border"></p>
          </div>
          <div className="w-18">
            <p className="h-8 w-40 mb-4  ml-4 bg-gray-200 mt-3 rounded border"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowUpSkeleton;
