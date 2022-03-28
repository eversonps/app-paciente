import React, { useState } from "react";

export default props => {
    const [valueFilter, setValueFilter] = useState("")

    return (
        <div>
            <label className="m-4">Buscar: </label>
            <input type="text" value={valueFilter} onChange={e => setValueFilter(e.target.value)}/>
        </div>
    ) 
}