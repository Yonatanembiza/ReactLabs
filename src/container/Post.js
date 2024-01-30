const Post = (props) => {

    function handleClick(){
        console.log("sdfwefwefwe");
        props.setSelectedPostState({
            id: props.id,
            title: props.title,
            author: props.author
        })
    }

    return ( 
        <div onClick={()=>handleClick()} className="Content">
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