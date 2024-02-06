import { AuthContextConsumer } from "../contexts/AuthContext";
import { Button } from "@material-tailwind/react";

const Page5 = () => {
    const { loginUser, login, logout, loginStateLogOut } = AuthContextConsumer();
    return (
        <>
            <ul>
                <li>{loginUser ? loginUser.uid : 'ユーザID'}</li>
                <img src={loginUser ? loginUser.photoURL : ""} style={{ borderRadius: "50%" }} />
                <li>{loginUser ? loginUser.displayName : '名前'}</li>
                <li>{loginUser ? loginUser.email : 'メールアドレス'}</li>
            </ul>

            <Button onClick={loginStateLogOut}>いいや押すね</Button>
        </>
    );
};
export default Page5;