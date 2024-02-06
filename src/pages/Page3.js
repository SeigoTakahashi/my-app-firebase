import CssModules from "../components/CssModules";
import TailwindCss from "../components/TailwindCss";
import { DefaultAccordion } from "../components/DefaultAccordion";
import { Rensyu1Badge } from "../components/Rensyu1Badge";
import { Rensyu2Card } from "../components/Rensyu2Card";
import { Rensyu3Carousel } from "../components/Rensyu3Carousel";
import { useState, useEffect } from 'react';
import { Input } from '@material-tailwind/react';

// const array = [];

const Page3 = () => {
    const a = ['https://t3design.co.jp/data/blog/130/611dffc01122a.png', 'https://images.unsplash.com/photo-1595126739121-68ab4225f9cf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'];
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
    const [text6, setText6] = useState("");
    useEffect(() => setNum2(num1), [num1]);
    useEffect(() => setText2(text1), [text1])
    useEffect(() => setText4(text3), [text3])
    useEffect(() => setText6(text5), [text5])

    const [carouselImgs, setCarouselImgs] = useState([]);

    const change = async (e) => {
        const imags = [];
        for (const file of e.target.files) imags.push(await fileRead(file));
        setCarouselImgs([...carouselImgs, ...imags]);
    };

    const fileRead = async (file) => {
        console.log(file);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        await new Promise((resolve) => (fileReader.onload = () => resolve()));
        return fileReader.result;
    };


    return (
        <>
            <p>Page3</p>
            <CssModules></CssModules>
            <TailwindCss></TailwindCss>
            <DefaultAccordion></DefaultAccordion>
            件数<input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
            <Rensyu1Badge num={num2}></Rensyu1Badge>
            プロフィール画像<input type="text" onChange={(e) => setText1(e.target.value)} />
            名前<input type="text" onChange={(e) => setText3(e.target.value)} />
            役職<input type="text" onChange={(e) => setText5(e.target.value)} />
            <Rensyu2Card image={text2} name={text4} role={text6}></Rensyu2Card>
            <Input
                variant="static"
                label="Carousel Images"
                type="file"
                onChange={change}
                className="mb-3"
                multiple
            />
            <Rensyu3Carousel srcs={carouselImgs}></Rensyu3Carousel>
        </>
    );
};
export default Page3;
