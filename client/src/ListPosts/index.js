import React, { useEffect, useState, Fragment} from "react"
import EditPost from "../EditPosts"

const ListPosts = () => {

    // Create a posts state hook
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/posts/")
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const posts = await response.json()
            setPosts(posts)
            return posts; 
        } catch (err) {
            console.error(err.message);
        }
    }

    const deletePost = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5000/posts/${postId}`, {
                method:"DELETE"
            })
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    console.log(posts)

    return (
        <Fragment>
            <div className="contain-table">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr>
                                <td>{post.description}</td>
                                <td>
                                    <EditPost post={post}/>
                                </td>
                                <td>
                                    <button onClick={() => deletePost(post.post_id)} class="btn btn-danger"> 
                                    Delete
                                    </button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default ListPosts;