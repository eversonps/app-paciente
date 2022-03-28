import React, { Component } from "react";

export default class FormPacients extends Component{
    state = {
        nome: "",
        peso: 0,
        altura: 0,
        gorduraCorporal: 0
    }

    setState(e){
        let campo = e.target.name
        return {
            ...state, 
            campo: e.target.value
        }
    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nome:" value={this.state.nome}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Peso:" value={this.state.peso}/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Altura:" value={this.state.altura}/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Gordura Corporal:" value={this.state.gorduraCorporal}/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}