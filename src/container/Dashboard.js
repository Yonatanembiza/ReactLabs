import { useState } from "react";
import Posts from "./Posts";
import NewPost from "./NewPost";
import React from 'react'
import PostDetail from "./PostDetail";

const Dashboard = () => {
    let i = 113;
    const [postsState, setPostsState] = useState(
        [
            { id: 111, title: "Happiness", author: "john" },
            { id: 112, title: "MIU", author: "dean" },
            { id: 113, title: "Enjoy lfe", author: "Jasmine" }
        ]
    );

    const [postState, setPostState] = useState(
        {
            title: "",
            author: ""
        }
    )

    const [selectedPostState, setSelectedPostState] = useState({})

    const onChange = (events) => {
        const copy = { ...postsState };
        copy[events.target.title] = events.target.value;
        setPostState(copy);
    }

    const addButtonClicked = () => {
        const copy = { ...postState };
        copy.id = i;
        i++;
        const copyPostsState = [...postsState]
        copyPostsState.push(copy);
        setPostsState(copyPostsState);
    }

    return (
        <div>
            <Posts posts={postsState} setSelectedPostState={setSelectedPostState} />
            <NewPost
                title={postState.title}
                author={postsState.author}

                onChange={(event) => { onChange(event) }}
                addButtonClicked={addButtonClicked}
            />
            <PostDetail selectedPost={selectedPostState} />
        </div>
    )
}

export default Dashboard

