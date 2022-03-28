import React from "react";

export default props => (
    <form>
        <div className="row">
            <div className="row mb-5">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" />
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