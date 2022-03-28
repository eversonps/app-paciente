import React from "react";

export default props => (
    <button type="button" className={`btn btn-${props.type}` onclick={props.onClick}}>{props.name}</button>
)