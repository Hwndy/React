
// import BlogPost from './Components/BlogPost.css';
import BlogPost from './BlogPost';
import'./BlogPost.css'
const PostList = () => {
  return (
    <div className="posts">
        <BlogPost Title= "My First Blog Post" Author="Sulaimon Ibrahim" FormattedDate="2024-20-10" Content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      
    </div>
  );
};

export default PostList;