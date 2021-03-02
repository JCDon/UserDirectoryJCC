import React from "react";
import Employeeinfo from "../employeeInfo/index";

function Table ({headings, sortEmployee, filteredAssociates}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headings.map(({name, width}) => {
                            return (
                                <th key={name} style={{width}} onClick={()=>sortEmployee(name.toLowerCase())}>
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <Employeeinfo associates={filteredAssociates}/>
            </table>
        </div>
    )
}

export default Table;