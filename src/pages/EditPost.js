import { useParams } from "react-router";

const EditPost = () => { 

    const { id } = useParams();
    return (
        <div>
            <h1>Edit Post {id} </h1>
        </div>
    );
}

export default EditPost;