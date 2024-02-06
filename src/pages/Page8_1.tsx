import { Button, Typography, Input } from '@material-tailwind/react';
import { useFireStore } from '../hooks/useFireStore';
import type Security from '../types/Security';
import { useState } from 'react';
import { updatePassword } from 'firebase/auth';

const Page8_1 = () => {

    // firestore操作
    const { findDatas, findData, addData, updateData, deleteData } = useFireStore<Security>('security');

    // 一覧
    const [security, setSecurity] = useState<{ id: string; data: Security }[]>();

    // 一覧取得処理
    const findTodos = async () => {
        setSecurity(await findDatas());
    };

    // ユーザーID
    const [userID, setUserID] = useState<string>('');

    // パスワード
    const [password, setPassword] = useState<string>('');

    // タイトル
    const [title, setTitle] = useState<string>('');

    // 一覧追加処理
    const addTodo = async () => {
        const security: Security = { userID: userID, password: password, title: title };
        const id: string = await addData(security);
        console.log(id);
    };

    // 更新処理
    const updateTitle = async (id: string) => {
        const security: Security = await findData(id);
        security.title = title;
        await updateData(id, security);
    };

    // 更新処理
    const updateUserID = async (id: string) => {
        const security: Security = await findData(id);
        security.userID = userID;
        await updateData(id, security);
    };

    // 更新処理
    const updatePassword = async (id: string) => {
        const security: Security = await findData(id);
        security.password = password;
        await updateData(id, security);
    };


    // 一覧削除処理
    const deleteTodo = async (id: string) => {
        await deleteData(id);
    };

    return (
        <>
            <p>Page8_1</p>
            <hr className="m-2" />
            <Input
                label="タイトル"
                crossOrigin={undefined}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <br></br>
            <Input
                label="ユーザーID"
                crossOrigin={undefined}
                onChange={(e) => setUserID(e.target.value)}
                value={userID}
            />
            <br></br>
            <Input
                label="パスワード"
                crossOrigin={undefined}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <hr className="m-2" />
            <Button className="mt-2" onClick={addTodo} placeholder={''}>
                ユーザー情報追加
            </Button>
            <hr className="m-2" />
            <Button onClick={findTodos} placeholder={''}>ユーザー情報一覧取得</Button>
            <div>
                <Typography variant="h4" placeholder={''}>ユーザー情報一覧</Typography>
                {security?.map((security) => (
                    <p key={security.id}>
                        タイトル:{security.data.title}
                        <br></br>
                        ユーザーID:{security.data.userID}
                        <br></br>
                        パスワード:{security.data.password}
                        <br></br>
                        <Button onClick={() => updateTitle(security.id)} placeholder={''}>
                            タイトル更新
                        </Button>
                        <Button onClick={() => updateUserID(security.id)} placeholder={''}>
                            ユーザーID更新
                        </Button>
                        <Button onClick={() => updatePassword(security.id)} placeholder={''}>
                            パスワード更新
                        </Button>
                        <Button onClick={() => deleteTodo(security.id)} placeholder={''}>削除</Button>
                    </p>
                ))}
            </div>
        </>
    );
};

export default Page8_1;