import React from "react";

function Employeeinfo({ associates }) {
    return (
        <tbody>
            {associates[0] !== undefined && associates[0].name !== undefined ? (
                associates.map((({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Img">
                                <img src={picture.medium} />
                            </td>
                            <td data-th="Name">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone">
                                {phone}
                            </td>
                            <td data-th="Email">
                                <a href={email}>{email}</a>
                            </td>
                            <td data-th="DOB">
                                {dob.date}
                            </td>
                        </tr>
                    )
                })
                )
                ): (
                    <div></div>
                )}
        </tbody>
    )
}

export default Employeeinfo;