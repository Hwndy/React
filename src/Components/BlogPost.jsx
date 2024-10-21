
import './BlogPost.css';

const BlogPost = (props) => {

  return (
    <div className={`blog-post ${props.Style}`}>
      <h2>{props.Title}</h2>
      <p>By {props.Author} on {props.FormattedDate}</p>
      <p>{props.Content}</p>
    </div>
  );
};

export default BlogPost;