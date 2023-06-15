import Avatar2 from "../../assets/Avatar3.png";
import Arrow from "../icons/Arrow";
import LightBlub from "../icons/LightBlub";
import Mail from "../icons/Mail";
import { useQuery } from "react-query";
import { getTopConnections } from "../../utils/APIHelperFun";
import TrendingTopicsSkeleton from "./skeleton/TrendingTopicsSkeleton";

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

const RelationshipInsight = ({ title }: RelationshipInsightProps) => {
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
      <>
        <div>
          {isLoading ? (
            <TrendingTopicsSkeleton />
          ) : isError ? (
            <div className="w-full h-32">
              <h1 className="text-center pt-8 h-32 font-inter font-medium text-gray-900">
                Something is wrong!
              </h1>
            </div>
          ) : (
            <ul>
              {data?.top_connections.map((topConnectionsDetail: any) => (
                <li className="flex items-center justify-between w-full py-4 border-b-2 flex-1">
                  <div className="flex items-center w-80">
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
                  <div className="w-64">
                    <div className="flex items-center">
                      <LightBlub />
                      <span className="px-2 font-inter text-sm text-gray-900">
                        {`${topConnectionsDetail.number_of_common_interest} Common Interest`}
                      </span>
                    </div>
                    <p className="font-inter text-sm text-gray-500 pt-1">
                      {`Last contacted on ${
                        topConnectionsDetail?.last_contact_on
                          ? topConnectionsDetail?.last_contact_on.slice(0, 10)
                          : "-"
                      }`}
                    </p>
                  </div>
                  <Arrow className="cursor-pointer" />
                </li>
              ))}
            </ul>
          )}
        </div>
        {!isLoading && !isError && (
          <div className="flex justify-end">
            <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
              View All
            </span>
          </div>
        )}
      </>
    </>
  );
};

export default RelationshipInsight;
