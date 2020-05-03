import React from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();
  return (
    <section>
      <h1>Page not found</h1>
      <p>
        <code>{location.pathname}</code>doesn't exist
      </p>
    </section>
  );
};
