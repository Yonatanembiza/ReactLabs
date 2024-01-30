import React from 'react'

function PostDetail({selectedPost}) {
  return (
    <div>
        These are the details: <br></br>
        {/* add styling */}
        
        <p> {selectedPost.id} </p>
        <p> {selectedPost.title} </p>
        <p> {selectedPost.author} </p>
    </div>
  )
}

export default PostDetail
