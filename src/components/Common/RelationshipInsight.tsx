import Avatar2 from "../../assets/Avatar3.png";
import Arrow from "../icons/Arrow";
import LinkedIn from "../icons/LinkedIn";
import LightBlub from "../icons/LightBlub";
import Mail from "../icons/Mail";
import Modrate from "../icons/Modrate";
import Partnership from "../icons/Partnership";
import { useQuery } from "react-query";
import { getTopConnections } from "../../utils/APIHelperFun";
import TopConnectionsSkeleton from "./skeleton/TopConnectionsSkeleton";

interface UserDetails {
  img: string;
  name: string;
  userid: string;
  lastConnected: string;
}
interface RelationshipInsightProps {
  title: string;
  userDetails?: UserDetails[];
  labelId: string;
}

const RelationshipInsight = ({ title, labelId }: RelationshipInsightProps) => {
  const topConnections = "topConnections";
  const {
    data: topConnectionData,
    isLoading,
    isError,
  } = useQuery("top_connections", getTopConnections);

  const { data } = !isLoading && !isError && topConnectionData;
  return (
    <>
      <h1 className="font-inter font-medium text-gray-900 text-lg py-4">
        {title}
      </h1>
      {isLoading ? (
        <TopConnectionsSkeleton />
      ) : (
        <>
          <ul>
            {data?.top_connections.map((topConnectionsDetail: any) => (
              <li className="flex items-center justify-between w-full py-4 border-b-2 flex-1">
                <div className="flex items-center">
                  <img src={Avatar2} alt="avatar" />
                  <div className="pl-4">
                    <p className="font-inter text-sm text-indigo-600 font-medium">
                      {topConnectionsDetail.name}
                    </p>
                    <div className="flex items-center py-1">
                      <Mail className="mr-2" />
                      <span className=" font-inter text-sm text-gray-500">
                        {topConnectionsDetail.email}
                      </span>
                    </div>
                  </div>
                </div>
                {labelId === topConnections ? (
                  <div className="">
                    <div className="flex items-center">
                      <LinkedIn />
                      <span className="px-2 font-inter text-sm text-gray-900">
                        3rd
                      </span>
                      <LightBlub />
                      <span className="px-2 font-inter text-sm text-gray-900">
                        {`${topConnectionsDetail.number_of_common_interest} Common Interest`}
                      </span>
                    </div>
                    <p className="font-inter text-sm text-gray-500 pt-1">
                      {`Last contact on ${
                        topConnectionsDetail?.last_contact_on
                          ? topConnectionsDetail?.last_contact_on.slice(0, 10)
                          : "-"
                      }`}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center">
                      <Modrate />
                      <span className="px-2 font-inter text-sm text-gray-900">
                        Moderate
                      </span>
                      <Partnership />
                      <span className="px-2 font-inter text-sm text-gray-900">
                        Partnership
                      </span>
                    </div>
                    <p className="font-inter text-sm text-gray-500 pt-1">
                      Last contact on January 7, 2020
                    </p>
                  </div>
                )}

                <Arrow className="cursor-pointer" />
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
              View All
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default RelationshipInsight;
