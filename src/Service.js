import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default () => {
  const { service } = useParams();
  let output = <PageNotFound />;
  if (service === "web" || service === "design" || service === "project") {
    output = (
      <section>
        <h1>{service} service</h1>
        <p>This is page</p>
      </section>
    );
  }
  return output;
};
