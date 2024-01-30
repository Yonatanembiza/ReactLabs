import { useState } from "react";
import Posts from "./Posts";
import NewPost from "./NewPost";

export default function Dashboard() {

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
            <Posts products={postsState} />
            <NewPost
                title={postState.title}
                author={postsState.author}
                onChange={(event) => { onChange(event) }}
                addButtonClicked={addButtonClicked}
            />
        </div>
    )
}