import React, { useState } from 'react';
import style from './Calculator.module.scss';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [sum, setSum] = useState('');

  const ops = ['+', '-', '*', '/', '.'];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateDisplay(i.toString())} key={i}>
          {i}
        </button>,
      );
    }

    return digits;
  };

  const updateDisplay = (elem) => {
    if (ops.includes(elem) && ops.includes(display.slice(-1))) {
      return
    }
      setDisplay(display.toString() + elem.toString());
  };

  const del = () => {
    setDisplay(display.slice(0, -1).toString());
  };

  const summ = () => {
    setSum(eval(display).toString());
    setDisplay('');
  };

  return (
    <div className={style.wrapper}>
      <div className={style.display}>
        <span className={style.sum}>{sum ? sum : '0'}</span>
        <span className={style.calculate}>{display ? display : '0'}</span>
      </div>
      <div className={style.buttons}>
        <div className={style.ops}>
          <button onClick={() => updateDisplay('*')}>*</button>
          <button onClick={() => updateDisplay('/')}>/</button>
          <button onClick={() => updateDisplay('+')}>+</button>
          <button onClick={() => updateDisplay('-')}>-</button>
          <button onClick={() => del()}>DEL</button>
        </div>
        <div className={style.digits}>
          {createDigits()}
          <button onClick={() => updateDisplay('.')}>.</button>
          <button onClick={() => updateDisplay('0')}>0</button>
          <button onClick={() => summ()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
