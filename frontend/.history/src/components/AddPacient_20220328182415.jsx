import React from "react";
import FormPacients from "../Templates/FormPacients";
import Title from "../Templates/Title"
import Button from "../Templates/Button";

export default props => (
    <div className="py-5">
        <Title name="Adicionar Paciente"></Title>
        <FormPacients></FormPacients>
    </div>  
)