import React from 'react'

function PostDetail({selectedPost}) {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        These are the details: <br></br>
        {/* add styling */}
        <button style={{'color': "red", padding:'2px', borderRadius:'5px' }}> Delete Post</button>
        <button style={{'color': "red", padding:'2px', borderRadius:'5px' }}> Edit Post</button>
        
        <p> {selectedPost.id} </p>
        <p> {selectedPost.title} </p>
        <p> {selectedPost.author} </p>
    </div>
  )
}

export default PostDetail
