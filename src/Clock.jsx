import React from "react";
import { useState, useEffect } from "react";
import './App.css'

function Clock() {

 // 毎秒現在時刻を更新する
 const [time, setTime] = useState(new Date());
 useEffect(() => {
   const timer = setInterval(() => {
     setTime(new Date());
   }, 1000);

   return () => clearInterval(timer); // クリーンアップ
 }, []);

 // 時刻のフォーマット
 const formatTime = (date) => {
   return date.toLocaleTimeString("en-US", {
     hour12: false, // 24時間表示
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
   });
 };

 // 日付のフォーマット
 const formatDate = (date) => {
   return date.toLocaleDateString("ja-JP", {
     weekday: "short",  // 曜日 (例: 金)
     year: "numeric",   // 年 (例: 2024年)
     month: "long",     // 月 (例: 1月)
     day: "numeric",    // 日 (例: 1日)
   });
 };

  return (
    <>
    <div className="counter-container">
        <div className="clock-area">
            <div className="time-display">{formatTime(time)}</div>
            <div className="date-display">{formatDate(time)}</div>
        </div>
    </div>
    </>
  );
}

export default Clock;