import styles from './style.module.css';

function DiceD({ value, hideD, setSelectedDice }) {
    const diceValueStyle =hideD === true?"": styles[`dice${value}`];
    const diceDefaultStyle = styles.diceStyle;
    const mergedStyles = `${diceValueStyle} ${diceDefaultStyle}`;
    const prefix = hideD === true ? null:`D`;


    return (
        <div className={mergedStyles} onClick={() => hideD === true ? null :setSelectedDice(value)}>{prefix}{value}</div>
    );
}
export default DiceD;