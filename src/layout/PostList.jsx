import { Post } from "@/components";
import { posts } from "@/utils/data.js";
import {useNavigate} from "react-router-dom";

const PostList = () => {

    const navigate = useNavigate();

    return (
        <div className={'w-full flex items-center justify-center'}>
            <div className={'flex flex-col gap-8 sm:justify-center sm:items-center max-w-[600px]'}>
                {posts.map(post =>
                    <Post post={post} key={post.id}
                          onClick={() => navigate('/post/' + post.id, {preventScrollReset: true})}/>
                )}
            </div>
        </div>
    );
};

export default PostList;
