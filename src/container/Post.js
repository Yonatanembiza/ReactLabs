const Post = (props) => {

    function handleClick(){
        props.setSelectedPostState({
            id: props.id,
            title: props.title,
            author: props.author
        })
    }
    
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }} onClick={()=>handleClick()} className="Content" >
            <div style={{
                color: 'red',
                padding: '20px',
                border: '2px solid black',
                borderRadius: '5px',
                marginBottom:'10px',
            }}>
            <h1> {props.id}</h1>
            <div className="Field">
                {props.title}
            </div>
            <div className="Field">
                {props.author}
            </div>
            </div>
            
        </div>
     );
}
 
export default Post;