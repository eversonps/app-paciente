import React, { Component, useState } from "react";
import Button from "./Button";

export default props =>{
    const initialState = {
        nome: "",
        peso: 0,
        altura: 0,
        gordura: 0
    }

    const [camposForm, setCamposForm] = useState(initialState)

    const updateValue = (e) =>{
        console.log(e)
        setCamposForm({
            ...camposForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div className="row">
                <div className="row mb-3">
                    <div className="col">
                        <label>Nome:</label>
                        <input type="text" name="nome" className="form-control" onChange = {e => updateValue(e)} placeholder="Nome:" value={camposForm.nome}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <label>Peso:</label>
                        <input type="number" name="peso" className="form-control" onChange = {e => updateValue(e)} placeholder="Peso:" value={camposForm.peso}/>
                    </div>
                    <div className="col col-xs-12">
                        <label>Altura:</label>
                        <input type="number" name="altura" className="form-control" onChange = {e => updateValue(e)} placeholder="Altura:" value={camposForm.altura}/>
                    </div>
                    <div className="col col-xs-12">
                        <label>Gordura Corporal:</label>
                        <input type="number" name="gordura" className="form-control" onChange = {e => updateValue(e)} placeholder="Gordura Corporal:" value={camposForm.gorduraCorporal}/>
                    </div>
                </div>
                <div className="mt-3">
                    <Button type="primary" name="Adicionar Paciente"></Button>
                </div>
            </div>
        </form>
    )
}