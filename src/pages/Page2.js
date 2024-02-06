import CountUp from "../components/CountUp";
import AddText from "../components/AddText";
import AddNum from "../components/AddNum";
import GetImg from "../components/GetImg";

const Page2 = (props) => {
    return (
        <>
            <CountUp text="CCountUpp"></CountUp>
            <AddText></AddText>
            <AddNum></AddNum>
            <GetImg></GetImg>
            <p>Page2 {props.text}</p>
        </>
    );
};
export default Page2;
