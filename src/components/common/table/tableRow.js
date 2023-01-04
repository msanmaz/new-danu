import React from "react";

const TableRow = ({ data }) => {
    return (
        <>
            {
                data.map((item, i) => {
                    return <tr class="bg-[#141E33] border-gray-700 hover:bg-gray-600 text-white">
                        <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                            {item.athlete}
                        </td>
                        <td class="px-6 py-4">
                            {item.gait}
                        </td>
                        <td class="px-6 py-4">
                            {item.jump}
                        </td>
                        <td class="px-6 py-4">
                            {item.balance}
                        </td>
                    </tr>
                })
            }

        </>
    );
};

export default TableRow;