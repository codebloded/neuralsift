import React from 'react'
import ItemMaster from '../../components/Forms UI/ItemMaster'
import GridLayout from '../../components/GridLayout'
import ItemDetails from '../../components/Details UI/ItemDetails'


export default function Items() {
    return (
        <div>
            <GridLayout FormComponent={<ItemMaster />} SideComponent={<ItemDetails />} />
        </div>
    )
}
