import CreatePost from "../../components/newsfeed/CreatePost";
import Post from "../../components/newsfeed/Post";

const Timeline = () => {
  return (
    <div className="flex flex-col mr-96 justify-center">
      <CreatePost />
      <Post />
    </div>
  );
};

export default Timeline;
