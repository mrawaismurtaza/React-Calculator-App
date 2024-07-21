import React from "react";
import "./History.css";

function History({ history }) {
    return (
        <ul className="list-group">
            {history.map((item, index) => (
                <div key={index} className="list-group-item list-group-item-danger d-flex flex-row justify-content-between">
                    <p className="m-0">{item.equation}</p>
                    <p className="m-0">{item.result}</p>
                </div>
            ))}
        </ul>
    );
}

export default History;
