import React, { Component } from "react";

export default props => (
    
)

export default class FormPacients extends Component{
    state = {
        nome: "",
        peso: 0,
        altura: 0,
        gorduraCorporal: 0
    }

    alterarInput = (e) => (
        this.setState({
            ...this.state, 
            peso: e.target.value
        })
    )

    render(){
        return(
            <form>
                <div className="row">
                    <div className="row mb-3">
                        <div className="col">
                            <label>Nome:</label>
                            <input type="text" className="form-control" onChange = {e => this.alterarInput(e)} placeholder="Nome:" value={this.state.nome}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Peso:</label>
                            <input type="number" className="form-control" placeholder="Peso:" value={this.state.peso}/>
                        </div>
                        <div className="col">
                            <label>Altura:</label>
                            <input type="number" className="form-control" placeholder="Altura:" value={this.state.altura}/>
                        </div>
                        <div className="col">
                            <label>Gordura Corporal:</label>
                            <input type="number" className="form-control" placeholder="Gordura Corporal:" value={this.state.gorduraCorporal}/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}