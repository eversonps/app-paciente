import React from "react";

export default props => (
    <button type="button" class={`btn btn-${props.type}`}>{props.name}</button>
)