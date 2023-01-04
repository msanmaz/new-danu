import React from 'react'
import Polygon from '../icons/polygonDown'

const TableHeadItem = ({ item,length }) => {
    return (
  <>
            <th scope="col" class="px-6 py-3">
                <div className='flex items-center'>
                {item} {item === 'Athletes' ? `(${length+1})` : ''} <Polygon/>
                </div>
  
            </th>
        </>
    )
}

export default TableHeadItem