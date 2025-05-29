import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";
import clsx from "clsx";
import s from "../utils/button.module.css";

const Test: React.FunctionComponent<TestComponentProps> = ({
  testIndex,
}: TestComponentProps) => {
  const variant = testIndex % 2 === 0 ? "red" : "blue";
  const size = testIndex % 2 === 0 ? "size1" : "size2";

  return (
    <button
      className={clsx(s.button, s[variant], s[size])}
      style={{ "--test-index": testIndex }}
    >
      testing
    </button>
  );
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: "none" }}>
        <button className={s.button}>
          we mount the button outside the test to make sure we're not clocking
          any mount time
        </button>
      </div>
    </>
  );
};

export default StitchesTest;
