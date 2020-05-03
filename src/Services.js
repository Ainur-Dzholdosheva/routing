import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <section>
    <h1>Services</h1>
    <ul>
      <li>
        <Link to="/services/website">Website creation</Link>
      </li>
      <li>
        <Link to="/services/design">Design development</Link>
      </li>
      <li>
        <Link to="/services/project">Project menagement</Link>
      </li>
    </ul>
  </section>
);
