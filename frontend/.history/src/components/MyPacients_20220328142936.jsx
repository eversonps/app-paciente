import React from "react";
import FilterPacients from "../Templates/FilterPacients";
import Table from "../Templates/Table";
import Title from "../Templates/Title";

export default props => (
    <div>
        <h1 className="pt-3 pb-3">Meus Pacientes</h1>
        <hr />

        <FilterPacients></FilterPacients>
        <Table></Table>
    </div>
)