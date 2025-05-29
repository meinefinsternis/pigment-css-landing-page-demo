import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";
import s from "../utils/button.module.css";

/** This test aims to measure the baseline of just using React with vanilla CSS techniques (no CSS-in-JS) */
const Test = ({ testIndex }: TestComponentProps) => {
  return <button className={s.button} style={{ "--test-index": testIndex }}>testing</button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
