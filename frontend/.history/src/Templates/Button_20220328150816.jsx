import React from "react";

export default props => (
    <button type="button" className=""={`btn btn-${props.type}`}>{props.name}</button>
)