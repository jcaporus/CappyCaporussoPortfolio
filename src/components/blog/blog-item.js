import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";

const BlogItem = props => {
  const {
    id,
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem;

  return (
    <div>
      <h1>{title}</h1>
      <Link to={`/b/${id}`}>
      </Link>
      <div>
        <Truncate
          lines={5}
          ellipsis={
            <span>
              ...<Link to={`/b/${id}`}>Read more</Link>
            </span>
          }
        >
          {striptags(content)}
        </Truncate>
      </div>
    </div>
  );
};
export default BlogItem;