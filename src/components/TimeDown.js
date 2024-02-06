import { useEffect, useState } from 'react';
import TimeView from '../components/TimeView';
import TimeButtonGroup from './TimeButtonGroup';
import { TimeInput, parseInputTime } from './TimeInput';

let intervalId;
let intervalMs = 9;
const TimeDown = () => {
    const [time, setTime] = useState();
    const [running, isRunning] = useState(false);
    const [input, setInput] = useState('');

    useEffect(() => {
        setTime(parseInputTime(input));
    }, [input]);

    const changeInput = (e) => {
        setInput(e.target.value);
    };

    const clickStart = () => {
        if (!input) return;
        let date1 = new Date(time.getTime());
        let date2 = new Date(date1.getTime());
        date1.setHours(0, 0, 0, 0);

        intervalId = setInterval(() => {
            date2 = new Date(date2.getTime() - intervalMs);
            if (date2 <= date1) {
                clearInterval(intervalId);
                isRunning(false);
                setTime(date1);
            } else {
                setTime(date2);
            }

        }, intervalMs);
        isRunning(true);
    }
    const clickStop = () => {
        clearInterval(intervalId);
        isRunning(false);
    };
    const clickClear = () => {
        clearInterval(intervalId);
        isRunning(false);
        setTime();
        setInput('');
    };

    return (
        <>
            <div className="text-center">
                <p>TimeDown</p>
                {/* TimeView time:表示時間 runnning:実行中フラグ */}
                <TimeView time={time} running={running}></TimeView>
                {/* TimeInput onChange:入力時処理関数 value:入力値 */}
                <TimeInput onChange={changeInput} value={input}></TimeInput>
                {/* TimeButtonGroup */}
                {/*   runnning    :実行中フラグ */}
                {/*   onClickStart:スタートクリック処理関数 */}
                {/*   onClickStop :ストップクリック処理関数 */}
                {/*   onClickClear:クリアクリック処理関数 */}
                <TimeButtonGroup
                    running={running}
                    onClickStart={clickStart}
                    onClickStop={clickStop}
                    onClickClear={clickClear}
                ></TimeButtonGroup>
            </div>
        </>
    );
};
export default TimeDown;