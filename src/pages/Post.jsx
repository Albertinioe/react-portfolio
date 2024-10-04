import { useParams } from "react-router-dom";
import { Share2 } from "lucide-react";
import { RelatedPosts, Comments } from "@/layout";
import { Link, Video } from '@/components';
import { usePost } from "@/hooks/usePost.js";

const Post = () => {

    const params = useParams();

    const { navigate, post } = usePost(params?.id);

    return (
        <div className="bg-secondary p-5 w-full rounded-md shadow max-w-[600px] m-auto">
            <div className={'flex w-full items-center justify-between mb-4'}>
                <Link title={'вернуться назад'} onClick={() => navigate(-1, { preventScrollReset: false })} variant={'grey'} styles={'font-light'} size={'xs'}/>
                <button className={'flex items-center gap-2'} onClick={() => navigator.share(post)}>
                    <span className={'text-xs text-gray-300 font-light'}>поделиться</span>
                    <Share2 size={20}/>
                </button>
            </div>
            {post.title &&
                <h2>{post.title}</h2>
            }
            {post.date &&
                <div className={'flex items-center justify-between gap-4'}>
                    <div className={'flex items-center gap-4'}>
                        <span className={'text-xs text-gray-400 font-light'}>{post.date}</span>
                        {post.tag &&
                            <>
                                <div className={'h-1 w-1 rounded-full bg-gray-200'}></div>
                                <span className={'text-xs text-gray-400 font-light'}>{post.tag}</span>
                            </>
                        }
                    </div>
                </div>
            }
            {post.text &&
                <p className={'text-sm font-light text-gray-200 leading-text mt-[30px]'}>{post.text}</p>
            }
            {post.image &&
                <img className={"max-h-[245px] w-full object-cover my-[30px]"} src={post.image} alt=""/>
            }
            {post.video &&
                <div className={'relative my-[30px]'}>
                   <Video poster={post.video} />
                </div>
            }

            <hr className={'border-secondary-content w-full border-b-1 my-[30px]'}/>

            <RelatedPosts/>

            <hr className={'border-secondary-content w-full border-b-1 my-[30px]'}/>

            <Comments/>
        </div>
    );
};

export default Post;
