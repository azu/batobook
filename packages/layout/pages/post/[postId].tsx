import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { postId } = router.query;

    return <p>My Blog Post: {postId}</p>;
};

export default Post;
