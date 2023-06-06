import FollowUpTask from "../components/followUpTask";
import Events from "../components/events";
import TrendingTopics from "../components/trendingTopics";

const todays = () => {
  return (
    <div>
      <FollowUpTask />
      <Events />
      <TrendingTopics />
    </div>
  );
};

export default todays;
