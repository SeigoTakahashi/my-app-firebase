import { useFetchDataArr } from '../hooks/useFetchDataArr';
import { Typography } from "@material-tailwind/react";
// API取得結果 ユーザ情報
type User = {
    id: number;
    name: string;
};
const user: User = { id: 0, name: '' }; // 引数で使う値を生成,値はなんでもOK

const ListUsers = () => {
    // API 実行して data 取得
    const { data } = useFetchDataArr(
        'https://jsonplaceholder.typicode.com/users',
        user
    );
    return (
        <>
            <Typography variant="h4" placeholder={"userList"}>ユーザ一覧</Typography>
            {data.map((user) => (
                <p key={user.id}>
                    {user.id}:{user.name}
                </p>
            ))}
        </>
    );
};
export default ListUsers;