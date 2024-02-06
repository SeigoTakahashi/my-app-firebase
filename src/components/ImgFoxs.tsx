import { useFetchData } from "../hooks/useFetchData";

type ImgFox = {
    image: string;
    link: string;
};

const imgFox: ImgFox = { image: '', link: '' };

const ImgFoxs = () => {
    // API 実行して data 取得
    const { data } = useFetchData(
        'https://randomfox.ca/floof/',
        imgFox
    );
    return (
        <>
            <div className="flex justify-center m-3">
                <img
                    className="h-36 w-36 rounded-full object-cover object-center"
                    alt="fox"
                    src={data.image}
                />
            </div>
        </>
    );
};
export default ImgFoxs;