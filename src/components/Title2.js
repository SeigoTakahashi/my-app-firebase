// 引数として props を定義、値は props.要素名 で取得
const Title2 = (props) => {
    const { h1text, h1style, divstyle, children } = props;

    return (
        <>
            <h1 style={h1style}>{h1text}</h1>
            <div style={divstyle}>{children}</div>
        </>
    );
};

export default Title2;
