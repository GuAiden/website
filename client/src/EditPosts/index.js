import React, {Fragment, useState} from 'react'

const EditPost = ({ post }) => {

    const [description, setDescription] = useState(post.description); 

    const updatePost = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:5000/posts/${post.post_id}`, {
                method: "PUT", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
        } catch(err) {
            console.err(err.message)
        }
    }

    return (
        <Fragment>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target={`#post${post.post_id}`}>Edit</button>
            <div id={`post${post.post_id}`} class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Edit this post</h4>
                </div>
                <div class="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" onClick={e => updatePost(e)}>Save Changes</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>

            </div>
            </div>
        </Fragment>
    )
}

export default EditPost