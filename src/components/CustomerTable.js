import React from 'react';

const CustomerTable = ({
    data,
    editClick,
    onClickEdit
}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map(
                        (a, i) => (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>
                                    <button
                                        className="button button-outline"
                                        onClick={
                                            () => {
                                                onClickEdit(a.id);
                                            }
                                        }
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default CustomerTable;