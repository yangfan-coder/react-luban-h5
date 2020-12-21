import React, { FunctionComponent } from "react";
import { EnhancedRouteComponentProps } from "luban-router/es/definitions";
import "./index.less";

const Home: FunctionComponent<EnhancedRouteComponentProps<{ name: string }>> = () => {
  return <div className="title">我是标题</div>;
};

export { Home };
