import React, { Component, useState } from "react";

export default props =>{
    const initialState = {
        nome: "",
        peso: 0,
        altura: 0,
        gordura: 0
    }

    const [camposForm, setCamposForm] = useState(initialState)

    const alterarCliente = (e) =>{
        this.setCamposForm({
            ...this.camposForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div className="row">
                <div className="row mb-3">
                    <div className="col">
                        <label>Nome:</label>
                        <input type="text" name="nome" className="form-control" onChange = {e => this.alterarInput(e)} placeholder="Nome:" value={this.state.nome}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <label>Peso:</label>
                        <input type="number" name="peso" className="form-control" placeholder="Peso:" value={this.state.peso}/>
                    </div>
                    <div className="col col-xs-12">
                        <label>Altura:</label>
                        <input type="number" name="altura" className="form-control" placeholder="Altura:" value={this.state.altura}/>
                    </div>
                    <div className="col col-xs-12">
                        <label>Gordura Corporal:</label>
                        <input type="number" name="gordura" className="form-control" placeholder="Gordura Corporal:" value={this.state.gorduraCorporal}/>
                    </div>
                </div>
            </div>
        </form>
    )
}