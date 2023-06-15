const CardLoader = () => {
  return (
    <div role="status" className=" w-full animate-pulse flex gap-5 pt-4">
      {Array.from([1, 2, 3, 4, 5]).map(() => (
        <div className=" bg-gray-200 rounded-lg dark:bg-gray-700 w-72 h-24"></div>
      ))}
    </div>
  );
};

export default CardLoader;
