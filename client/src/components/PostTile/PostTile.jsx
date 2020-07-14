import React from "react";
import "./PostTile.css";
import { Link } from "react-router-dom";

const PostTile = (props) => {
  return (
    <div className="post-tile">
      <Link className="tile" to={`/posts/${props._id}`}>
        <img className="post-tile-image" src={props.imgURL} alt={props.title} />
        <div>View</div>
      </Link>
    </div>
  );
};

export default PostTile;
