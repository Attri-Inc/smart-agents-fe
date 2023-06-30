const TableSkeleton = () => {
  return (
    <div className="animate-pulse">
      {Array.from(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
          <div className="h-8 bg-gray-200 mt-3 rounded"></div>
        ))
      )}
    </div>
  );
};

export default TableSkeleton;
