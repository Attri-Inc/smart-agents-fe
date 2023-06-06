interface Columns {
  interaction_type: string;
  percentage_of_interaction__type: string;
}
interface TableProps {
  columns: Columns[];
}

const Table = (props: TableProps) => {
  console.log("props", props);
  const { columns } = props;
  return (
    <div className="relative overflow-x-auto">
      <table className="border-x border-b w-full text-sm text-left text-gray-500">
        <thead className="border-y font-inter text-xs text-gray-500 uppercase bg-gray-50">
          <tr className="divider-gray-200">
            {columns.map((column) => (
              <th
                scope="col"
                className="px-6 py-3 font-inter text-sx text-gray-500"
              >
                {column.interaction_type}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b font-inter">
            {columns?.map(({ percentage_of_interaction__type }: any) => (
              <td className="px-6 py-4  text-sm text-gray-500">{`${percentage_of_interaction__type}%`}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
