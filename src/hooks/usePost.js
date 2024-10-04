import {useNavigate, useParams} from "react-router-dom";
import {posts} from "@/utils/data.js";

export const usePost = (id) => {

    const navigate = useNavigate();

    const post = Object.create(posts.find(post => post.id === Number(id)));

    return { post, navigate }
}
