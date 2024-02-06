import { Carousel } from "@material-tailwind/react";

export function Rensyu3Carousel(props) {
    return (
        <Carousel className="rounded-xl">
            {props.srcs.map((v, i) =>
                <img
                    src={v}
                    alt={"image" + i}
                    className="h-full w-full object-cover"
                />
            )}


        </Carousel>
    );
}