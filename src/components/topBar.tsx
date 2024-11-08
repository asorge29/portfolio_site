"use client";

import styles from "../styles/topBar.module.css";
import { useState, useEffect } from "react";
import { getTimeFormatted } from "@/lib/getTimeFormatted";
import { getDateFormatted } from "@/lib/getDateFormatted";
import { useStateContext } from "./stateProvider";

export default function TopBar() {
  const [time, setTime] = useState<string>(getTimeFormatted);
  const [date, setDate] = useState<string>(getDateFormatted);
  const { state, setState } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeFormatted);
      setDate(getDateFormatted);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const toggleMax = () => {
    setState({...state, maximized: !state.maximized});
  }

  return (
    <div className={`${styles.topBar} ${state.maximized ? styles.maximized : styles.notMaximized}`}>
      <div className={`${styles.topBarItem} ${styles.tabs}`} onClick={toggleMax}>
        {[...Array(state.desktops).keys()].map((i) => (
          <div key={i} className={`${styles.dot} ${i === state.selectedDesktop ? styles.selectedDot : ''}`}></div>
        ))}
      </div>
      <div className={`${styles.centerMenu} ${styles.topBarItem}`}>
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className={`${styles.topBarItem} ${styles.rightMenu}`}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: "block" }}
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
