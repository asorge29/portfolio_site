"use client";

import React, { createContext, useContext, useState } from "react";

export type State = {
  selectedDesktop: number;
  desktops: number;
  maximized: boolean;
  appsScreen: boolean;
  spotify: number;
  vscode: number;
  terminal: number;
  firefox: number;
  files: number;
  settings: number;
  background: string;
  scheme: string;
  battery: number;
  accentColor: string;
  brightness: number;
  volume: number;
}
const stateContext = createContext({});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({
    selectedDesktop: 0,
    desktops: 2,
    maximized: false,
    appsScreen: false,
    spotify: -1,
    vscode: -1,
    terminal: -1,
    firefox: -1,
    files: -1,
    settings: -1,
    background: "drool",
    scheme: "d",
    battery: 100,
    accentColor: "#3584e4",
    brightness: 100,
    volume: 80,
  });

  return (
    <stateContext.Provider value={{ state, setState }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(stateContext) as {
    state: State;
    setState: (state: State) => void;
  };