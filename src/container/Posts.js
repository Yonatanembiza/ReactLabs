import Post from "./Post";

const Posts = (props) => {
    const posts = props.posts.map(post => {
        return <Post
            
            title={post.title}
            author={post.author}
            content={post.content}
            id={post.id}
            setSelectedPostState={props.setSelectedPostState}
            key={post.id}
        />
    });
    return posts
}
 
export default Posts;