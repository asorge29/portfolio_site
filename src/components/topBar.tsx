"use client";

import styles from "../styles/topBar.module.css";
import {useState, useEffect} from "react";
import {getTimeFormatted} from "@/lib/getTimeFormatted";
import {getDateFormatted} from "@/lib/getDateFormatted";
import {State, useStateContext} from "./stateProvider";

export default function TopBar() {
  const [time, setTime] = useState<string>(getTimeFormatted);
  const [date, setDate] = useState<string>(getDateFormatted);
  const {state, setState} = useStateContext();

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
          <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.191406 2.808593 l -0.5 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.03125 l 0.5 -0.476562 c 3.089844 -2.957032 8.53125 -2.957032 11.617188 0 l 0.5 0.476562 c 0.398437 0.378906 1.03125 0.367188 1.414062 -0.03125 c 0.382813 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.816406 l -0.5 0.546875 c -0.179688 0.195313 -0.273438 0.453125 -0.261719 0.71875 s 0.128906 0.515625 0.328125 0.695313 c 0.195313 0.179687 0.453125 0.273437 0.71875 0.257812 c 0.265625 -0.011718 0.515625 -0.128906 0.695313 -0.324218 l 0.496093 -0.546876 c 1.277344 -1.40625 4.160157 -1.5 5.523438 0 l 0.5 0.546876 c 0.175781 0.195312 0.425781 0.3125 0.691406 0.324218 c 0.265625 0.015625 0.523437 -0.078125 0.722656 -0.257812 c 0.195313 -0.179688 0.3125 -0.429688 0.324219 -0.695313 c 0.011719 -0.261719 -0.082031 -0.523437 -0.261719 -0.71875 l -0.5 -0.546875 c -1.121093 -1.234375 -2.703125 -1.828125 -4.269531 -1.816406 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.390624 -0.390626 -0.902343 -0.585938 -1.414062 -0.585938 z m 0 0"
              fill="currentColor"/>
          </svg>
        </div>
        <div>
          <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m 7 1.007812 c -0.296875 -0.003906 -0.578125 0.125 -0.765625 0.351563 l -3.234375 3.640625 h -1 c -1.09375 0 -2 0.84375 -2 2 v 2 c 0 1.089844 0.910156 2 2 2 h 1 l 3.234375 3.640625 c 0.210937 0.253906 0.488281 0.363281 0.765625 0.359375 z m 6.460938 0.960938 c -0.191407 0 -0.386719 0.054688 -0.558594 0.171875 c -0.457032 0.308594 -0.578125 0.929687 -0.269532 1.386719 c 1.824219 2.707031 1.824219 6.238281 0 8.945312 c -0.308593 0.457032 -0.1875 1.078125 0.269532 1.390625 c 0.457031 0.308594 1.078125 0.1875 1.390625 -0.269531 c 1.136719 -1.691406 1.707031 -3.640625 1.707031 -5.59375 s -0.570312 -3.902344 -1.707031 -5.589844 c -0.195313 -0.289062 -0.511719 -0.441406 -0.832031 -0.441406 z m -3.421876 2.023438 c -0.222656 -0.011719 -0.453124 0.054687 -0.644531 0.199218 c -0.261719 0.199219 -0.394531 0.5 -0.394531 0.804688 v 0.0625 c 0.011719 0.1875 0.074219 0.371094 0.199219 0.535156 c 1.074219 1.425781 1.074219 3.386719 0 4.816406 c -0.125 0.160156 -0.1875 0.34375 -0.199219 0.535156 v 0.058594 c 0 0.304688 0.132812 0.605469 0.394531 0.804688 c 0.441407 0.332031 1.070313 0.242187 1.402344 -0.195313 c 0.800781 -1.070312 1.207031 -2.339843 1.207031 -3.613281 s -0.40625 -2.542969 -1.207031 -3.609375 c -0.1875 -0.25 -0.46875 -0.386719 -0.757813 -0.398437 z m 0 0"
              fill="currentColor"/>
          </svg>
        </div>
        <div>
          <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg"
               style={{display: "block"}}>
            <g fill="currentColor">
              <path
                d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.011719 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.011719 0.710938 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.367188 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m -2 5 v 8 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -3.171875 z m 0 0"/>
              <path
                d="m 13 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.355469 0.167969 -0.554688 v -1 z m 0 0"/>
            </g>
          </svg>
        </div>
      </div>
      <SystemMenu state={state} setState={setState}/>
    </div>
  );
}

function SystemMenu({ state, setState } :{state: State, setState: (state: State) => void}) {
  
  return (
    <div className={styles.systemMenu}>
      <div className={styles.topSection}>
        <div className={styles.battery}>
          <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
              <path
                d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.011719 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.011719 0.710938 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.367188 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m -2 5 v 8 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -3.171875 z m 0 0"/>
              <path
                d="m 13 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.355469 0.167969 -0.554688 v -1 z m 0 0"/>
            </g>
          </svg>
          100%
        </div>
        <div className={styles.shortcuts}>
          <div className={styles.shortcut}>
            <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path
                  d="m 10.042969 6.992188 c -0.566407 0 -1.019531 0.425781 -1.042969 0.964843 h -0.988281 c -1.113281 0 -2.011719 0.898438 -2.011719 2.011719 v 4.011719 c 0 1.113281 0.898438 2.011719 2.011719 2.011719 h 5.976562 c 1.113281 0 2.011719 -0.898438 2.011719 -2.011719 v -4.011719 c 0 -1.113281 -0.898438 -2.011719 -2.011719 -2.011719 h -0.988281 c -0.019531 -0.539062 -0.476562 -0.964843 -1.042969 -0.964843 z m 0.957031 3 c 1.105469 0 2 0.894531 2 2 c 0 1.105468 -0.894531 2 -2 2 s -2 -0.894532 -2 -2 c 0 -1.105469 0.894531 -2 2 -2 z m 0 0"/>
                <path
                  d="m 3.007812 11.976562 h -0.316406 c -1.503906 0 -2.722656 -1.21875 -2.722656 -2.722656 v -0.269531 c 0 -0.550781 0.445312 -1 1 -1 c 0.550781 0 1 0.449219 1 1 v 0.269531 c 0 0.414063 0.3125 0.722656 0.722656 0.722656 h 0.316406 c 0.550782 0 1 0.449219 1 1 c 0 0.554688 -0.449218 1 -1 1 z m 0 0"/>
                <path
                  d="m 14 3.03125 v -0.316406 c 0 -0.410156 -0.3125 -0.722656 -0.722656 -0.722656 h -0.269532 c -0.554687 0 -1 -0.449219 -1 -1 c 0 -0.550782 0.445313 -1.0000005 1 -1.0000005 h 0.269532 c 1.503906 0 2.722656 1.2187505 2.722656 2.7226565 v 0.316406 c 0 0.554688 -0.449219 1 -1 1 s -1 -0.445312 -1 -1 z m 0 0"/>
                <path
                  d="m 0 3.03125 v -0.316406 c 0 -1.503906 1.21875 -2.7226565 2.722656 -2.7226565 h 0.269532 c 0.554687 0 1 0.4492185 1 1.0000005 c 0 0.550781 -0.445313 1 -1 1 h -0.269532 c -0.410156 0 -0.722656 0.3125 -0.722656 0.722656 v 0.316406 c 0 0.554688 -0.449219 1 -1 1 s -1 -0.445312 -1 -1 z m 0 0"/>
              </g>
            </svg>
          </div>
          <div className={styles.shortcut}>
            <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m 7.5 1.019531 c -0.550781 0 -0.996094 0.445313 -0.996094 0.996094 v 0.453125 c -0.472656 0.128906 -0.929687 0.320312 -1.355468 0.566406 l -0.324219 -0.324218 c -0.390625 -0.390626 -1.019531 -0.390626 -1.410157 0 l -0.703124 0.707031 c -0.390626 0.390625 -0.390626 1.019531 0 1.410156 l 0.320312 0.320313 c -0.246094 0.425781 -0.433594 0.882812 -0.5625 1.355468 h -0.453125 c -0.550781 0 -0.996094 0.445313 -0.996094 0.996094 v 1 c 0 0.550781 0.445313 0.996094 0.996094 0.996094 h 0.449219 c 0.132812 0.472656 0.320312 0.929687 0.566406 1.355468 l -0.320312 0.320313 c -0.390626 0.390625 -0.390626 1.019531 0 1.410156 l 0.703124 0.707031 c 0.390626 0.390626 1.019532 0.390626 1.410157 0 l 0.320312 -0.320312 c 0.429688 0.242188 0.882813 0.433594 1.359375 0.558594 v 0.457031 c 0 0.550781 0.445313 0.996094 0.996094 0.996094 h 0.996094 c 0.554687 0 1 -0.445313 1 -0.996094 v -0.453125 c 0.472656 -0.128906 0.929687 -0.320312 1.355468 -0.566406 l 0.320313 0.324218 c 0.390625 0.390626 1.019531 0.390626 1.410156 0 l 0.707031 -0.707031 c 0.390626 -0.390625 0.390626 -1.019531 0 -1.410156 l -0.320312 -0.320313 c 0.242188 -0.425781 0.433594 -0.882812 0.558594 -1.355468 h 0.453125 c 0.554687 0 1 -0.445313 1 -0.996094 v -1 c 0 -0.550781 -0.445313 -0.996094 -1 -0.996094 h -0.449219 c -0.128906 -0.472656 -0.320312 -0.929687 -0.566406 -1.355468 l 0.324218 -0.320313 c 0.390626 -0.390625 0.390626 -1.019531 0 -1.410156 l -0.707031 -0.707031 c -0.390625 -0.390626 -1.019531 -0.390626 -1.410156 0 l -0.320313 0.320312 c -0.425781 -0.242188 -0.882812 -0.429688 -1.355468 -0.558594 v -0.457031 c 0 -0.550781 -0.445313 -0.996094 -1 -0.996094 z m 0.515625 3.976563 c 1.660156 0 3 1.34375 3 3 s -1.339844 3 -3 3 c -1.65625 0 -3 -1.34375 -3 -3 s 1.34375 -3 3 -3 z m 0 0"
                fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.shortcut}>
            <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m 8 1 c -2.199219 0 -4 1.800781 -4 4 v 2 c -1.109375 0 -2 0.890625 -2 2 v 5 c 0 0.554688 0.445312 1 1 1 h 10 c 0.554688 0 1 -0.445312 1 -1 v -5 c 0 -1.109375 -0.890625 -2 -2 -2 v -2 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 2 c 1.125 0 2 0.875 2 2 v 2 h -4 v -2 c 0 -1.125 0.875 -2 2 -2 z m 0 0"
                fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.shortcut}>
            <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m 8.011719 0 c -0.550781 0 -1 0.449219 -1 1 v 5 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -5 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3.136719 1.816406 c -0.128906 0.015625 -0.253906 0.058594 -0.367188 0.125 c -2.734374 1.582032 -4.074218 4.816406 -3.257812 7.871094 c 0.820312 3.050781 3.59375 5.183594 6.75 5.1875 c 3.160156 0 5.941406 -2.121094 6.765625 -5.167969 c 0.828125 -3.050781 -0.5 -6.289062 -3.230469 -7.878906 c -0.476562 -0.28125 -1.089844 -0.121094 -1.367187 0.359375 c -0.132813 0.226562 -0.171875 0.5 -0.105469 0.757812 c 0.070312 0.257813 0.234375 0.476563 0.464844 0.609376 c 1.957031 1.140624 2.902344 3.441406 2.3125 5.628906 c -0.59375 2.183594 -2.570313 3.695312 -4.832032 3.691406 c -2.265624 0 -4.238281 -1.519531 -4.824218 -3.707031 c -0.585938 -2.1875 0.363281 -4.488281 2.324218 -5.621094 c 0.476563 -0.277344 0.640626 -0.886719 0.363282 -1.363281 c -0.132813 -0.230469 -0.347656 -0.398438 -0.605469 -0.464844 c -0.125 -0.035156 -0.257813 -0.042969 -0.390625 -0.027344 z m 0 0"
                fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <input type="range" min="0" max="100" step="1" style={{accentColor: `${state.accentColor}`}}/>
      </div>
      <div className={styles.slider}>
        <input type="range" min="0" max="100" step="1" style={{accentColor: `${state.accentColor}`}}/>
      </div>
    </div>
  )
}