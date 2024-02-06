import { useState, useEffect } from 'react';

const GetImg = () => {
    const [src, setSrc] = useState();
    const [res, setRes] = useState();

    useEffect(() => setSrc(res?.url), [res]);

    const changeRes = async () => setRes(await fetch('https://source.unsplash.com/random'));



    return (
        <>
            <p>画像</p>
            <button onClick={changeRes}>画像変更</button>
            <br />
            <img src={src || 'https://source.unsplash.com/random'} alt="img" style={{ width: '500px' }} />
        </>

    )
}

export default GetImg;