import React from "react";

export default props => (
    <div>
        <table className="table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Peso</th>
                <th scope="col">Altura (m)</th>
                <th scope="col">Gordura Corporal (%)</th>
                <th scope="col">IMC</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Maria</td>
                <td>70</td>
                <td>1.67</td>
                <td>5</td>
                <td>X</td>
            </tr>
            </tbody>
        </table>
    </div>
    
)