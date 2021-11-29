import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const res = await axios.get("posts/timeline/619de5850b84ed68e380e5c9")
        setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
      </div>
    </div>
  );
}
