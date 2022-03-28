import React from "react";
import FilterPacients from "../Templates/FilterPacients";
import Table from "../Templates/Table";
import Title from "../Templates/Title";

export default props => (
    <div>
        <Title name="Meus Pacientes"></Title>

        <FilterPacients></FilterPacients>
        <Table></Table>
    </div>
)