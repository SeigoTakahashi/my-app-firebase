// useState をインポート
import { useState } from 'react';
import ColorText1 from '../components/ColorText1';
import ColorText2 from '../components/ColorText2';

const Page1 = () => {
    // チェックボックス用の変数
    const [flg, setFlg] = useState(false);
    // 入力テキスト用の変数
    const [text, setText] = useState();

    const array = [1, 2, 3, 4, 5];

    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const buttonClick = () => {
        alert("警告");
    }

    const input = (e) => {
        setText(e.target.value)
    }

    return (
        <>


            {/* タグの要素名 をコンポーネント側と合わせて値を設定 */}
            <ColorText1 color="blue" fontSize="20px" text="slick back" />

            {/* 開始タグ、終了タグで囲って値を設定 */}
            <ColorText2 color="blue" fontSize="50px">
                <li>slick back</li>
            </ColorText2>

            {/* // チェックボックス type の指定、 checked に値設定、onCange に変更時処理設定 */}
            <input type="checkbox" checked={flg} onChange={() => setFlg(!flg)} />
            {/* <p>{String(flg)}</p> */}
            {flg ? <p>チェック有</p> : <p>チェック無</p>}

            {/* // 入力テキスト onChange に変更時処理設定 */}
            <input onChange={(e) => setText(e.target.value)} />
            <input onChange={(e) => input(e)} />
            {/* <p>{text}</p> */}
            {text === "react" ? <p>やりたくないな</p> : <p>なにやるの</p>}

            {array.map(v => <p key={v}>{v}</p>)}

            {array2.map((v) =>
                <p key={v}>{v}</p>
            )}

            {array2.map((v) =>
                <p key={3 * v}>{3 * v}</p>
            )}

            {array2.filter((v) => v % 2 === 0).map((v) =>
                <p key={v}>{v}</p>
            )}
            {/* <button onClick={() => alert("警告")}>押すな</button> */}
            <button onClick={buttonClick}>押すな</button>


        </>
    );
};
export default Page1;