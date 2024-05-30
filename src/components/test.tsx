import styles from './CssModules.module.css';
export const test = () => {
    const array: number[] = [1, 2, 3];
    return (
        <>
            {array.map((num) => <p key={num}>{num}</p>)}
        </>

    );
}


