const Post = (props) => {
    return ( 
        <div className="Content">
            <h1> {props.id}</h1>
            <div className="Field">
                {props.title}
            </div>
            <div className="Field">
                {props.author}
            </div>
        </div>
     );
}
 
export default Post;