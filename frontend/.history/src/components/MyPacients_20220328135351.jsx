import React from "react";
import FilterPacients from "../Templates/FilterPacients";

export default props => (
    <div>
        <h1 className="pt-3 pb-3">Meus Pacientes</h1>
        <hr />
        
        <FilterPacients></FilterPacients>
    </div>
)