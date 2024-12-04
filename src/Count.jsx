import React from "react";
import { useState, useRef } from "react";
import './App.css'

function Count() {

  // 関数を管理 //
  const [count, setCount] = useState(0)
  // 増加処理
  const IncreaseProcess = () => {
    setCount((prevCount) => prevCount + 1)
  }
  // 減少処理
  const DecreaseProcess = () => {
    setCount((prevCount) => prevCount - 1)
  }
  // リセット処理
  const ResetProcess = () => {
    setCount(0)
    StopCountProcess()
  }


  // setIntervalのIDを管理
  const intervalRef = useRef(null);
  // 自動カウント処理
  const AutoCountProcess = () => {
    if (!intervalRef.current) { // すでに動作中の場合に重複しないように制御
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };
  // 自動カウント停止処理
  const StopCountProcess = () => {
    if (intervalRef.current) { // すでに動作中の場合に重複しないように制御
      clearInterval(intervalRef.current);
      intervalRef.current = null; // IDをリセット
    }
  };

  return (
    <>
      <div className="counter-container">
        <h1 className="Title">でじたるかうんたぁ</h1>
        <div className="count-area">
            <div className="display">{count}</div>
            <div className="button-area">
                <p className="btn-text">下のボタンを押してみよ</p>
                <button onClick={IncreaseProcess}>+</button>
                <button onClick={DecreaseProcess}>-</button>
                <button onClick={ResetProcess}>リセット</button>
                <button onClick={AutoCountProcess}>カウント開始</button>
                <button onClick={StopCountProcess}>■</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default Count;