import Post from "@/components/Post.jsx";
import { posts } from "@/utils/data.js";
import {useNavigate} from "react-router-dom";

const PostList = ({ searchText }) => {

    const navigate = useNavigate();

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()) || post.text.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className={'flex flex-col gap-8 sm:justify-center sm:items-center'}>
            {filteredPosts.map(post =>
                <Post post={post} key={post.id} onClick={() => navigate('/post/' + post.id, { preventScrollReset: true })} />
            )}
            {filteredPosts.length === 0 &&
                <h1>По вашему запросу ничего не найдено</h1>
            }
        </div>
    );
};

export default PostList;
