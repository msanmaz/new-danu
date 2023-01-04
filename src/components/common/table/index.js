import React from 'react'
import TableHeadItem from './tableHeadItem';
import TableRow from './tableRow';




const Table = ({ headers, data }) => {


    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-400 border-separate spacing">
                    <thead class="text-xs uppercase bg-transparent text-gray-400">
                        <tr>
                            {headers.map((h) => {
                                return <TableHeadItem key={h} item={h} length={headers.length} />;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow data={data}/>
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Table





