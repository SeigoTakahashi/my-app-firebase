import { useFetchDataArr } from "../hooks/useFetchDataArr";
import { Typography } from "@material-tailwind/react";

type Post = {
    id: number;
    title: string;
};

const post: Post = { id: 0, title: '' };

const ListPosts = () => {
    // API 実行して data 取得
    const { data } = useFetchDataArr(
        'https://jsonplaceholder.typicode.com/posts',
        post
    );
    return (
        <>
            <Typography variant="h4" placeholder={"post"}>記事一覧</Typography>
            {data.map((post) => (
                <p key={post.id}>
                    {post.id}:{post.title}
                </p>
            ))}
        </>
    );
};
export default ListPosts;