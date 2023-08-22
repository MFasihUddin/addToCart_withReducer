import React, { Fragment } from "react";
import list from "../data";
import Card from "./Card";
import "../styles/Amazon.css";

function Amazon() {
  return (
    <section>
      {list.map((item, i) => (
        <Fragment key={i}>
          <Card item={item} />
        </Fragment>
      ))}
    </section>
  );
}

export default Amazon;
