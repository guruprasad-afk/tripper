import React from 'react';

export const Trip = ({tripDate, place, category}) => (
    <tr>
        <td>
            {new Date(tripDate).toDateString()}
        </td>
        <td>
            {place}
        </td>
        <td>
            {category}
        </td>
    </tr>	
)