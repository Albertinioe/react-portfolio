import {Link, Video} from "@/components";

const Post = ({ post, onClick }) => {
    return (
        <div className={'max-w-[600px]'}>
            {post.image &&
                <img className={"max-h-[245px] w-full object-cover"} src={post.image} alt=""/>
            }
            <div className={'bg-secondary p-6 shadow flex flex-col gap-2 rounded-md'}>
                {post.video &&
                    <div className={'relative'}>
                        <Video poster={post.video} />
                    </div>
                }
                {post.title &&
                    <h2 className={'text-lg text-white'}>{post.title}</h2>
                }
                {post.text &&
                    <p className={'text-sm font-light text-gray-200 leading-text'}>{post.text}</p>
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
                        {post.title &&
                            <Link title={'читать'} onClick={onClick}/>
                        }
                    </div>
                }
            </div>
        </div>

    );
};

export default Post
