import { useState } from "react";

const NewPost = (props) => {

    return (
        <div className="Content" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
         
                <h1 style={{
                    color: 'black',
                    cursor: 'pointer',
                    margin: '10px',
                    fontSize: '25px',
                }}>Add a Post</h1>

                <label>title</label>
                <input type="text" label={'title'} name={'title'} onChange={props.onChange} value={props.title} />

                <label>author</label>
                <input type="text" label={'author'} name={'author'} onChange={props.onChange} value={props.author} />
                
                <button onClick={props.addButtonClicked}>Add Post </button>
        </div>
    );

}

export default NewPost;