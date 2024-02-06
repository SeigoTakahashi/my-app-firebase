import { useFetchDataArr } from "../hooks/useFetchDataArr";

type ImgCat = {
    id: string;
    url: string;
    width: number;
    height: number;
};

const imgCat: ImgCat = { id: '', url: '', width: 0, height: 0 };

const ImgCats = () => {
    // API 実行して data 取得
    const { data } = useFetchDataArr(
        'https://api.thecatapi.com/v1/images/search',
        imgCat
    );
    return (
        <>
            <div className="flex justify-center m-3">
                <img
                    className="h-36 w-36 rounded-full object-cover object-center"
                    alt="cat"
                    src={data[0]?.url}
                />
            </div>
        </>
    );
};
export default ImgCats;
