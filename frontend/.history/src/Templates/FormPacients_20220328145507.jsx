import React, { Component } from "react";

export default class FormPacients extends Component{
    state = {
        nome: "",
        peso: 0,
        altura: 0,
        gorduraCorporal: 0
    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nome:" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Peso:" />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Altura:" />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Gordura Corporal:" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}