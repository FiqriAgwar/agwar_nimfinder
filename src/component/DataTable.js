import React from 'react'

function DataTable(props){
    return(
        <table>
            <thead className="tableheader">
                <tr>
                    <th>Nama Mahasiswa</th>
                    <th>NIM TPB</th>
                    <th>NIM Jurusan</th>
                    <th>Program Studi</th>
                </tr>
            </thead>
            <tbody className="tablebody">
                {
                    props.data.map(row =>(
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.nim_tpb}</td>
                            <td>{row.nim_jur}</td>
                            <td>{row.prodi}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default DataTable;