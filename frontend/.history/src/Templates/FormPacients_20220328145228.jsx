import React, { Component } from "react";

export default class FormPacients extends Component{
    state = {

    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Peso" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}