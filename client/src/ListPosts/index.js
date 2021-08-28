import React, { useEffect, useState, Fragment} from "react"

const ListPosts = () => {

    // Create a posts state hook
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch("http://localhost:5000/posts")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json()
        setPosts(posts)
        return posts; 
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
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default ListPosts;