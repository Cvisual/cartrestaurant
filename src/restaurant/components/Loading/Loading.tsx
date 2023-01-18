import React from "react";
import classes from "./loading.module.scss";
export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loading: React.FC<LoadingProps> = ({ ...props }) => {
  return (
    <div data-testid="loading-icon" className={classes["loader"]} {...props}>
      <p>loading</p>
      <i className={`${classes["loader__logo"]}`} aria-hidden="true">
        <img src="/Icon_Bistrom.png" alt="loading" width="60px" />
      </i>
    </div>
  );
};

export default Loading;
