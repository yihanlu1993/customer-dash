import React from 'react';

const CustomerTable = (
    data
) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.data.map(
                        (a, i) => (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default CustomerTable;