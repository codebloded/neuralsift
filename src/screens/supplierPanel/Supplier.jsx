import React from 'react'
import SupplierMaster from '../../components/Forms UI/SupplierMaster'
import GridLayout from '../../components/GridLayout'
import Information from '../../components/Details UI/Information'

export default function Supplier() {
    return (
        <div>
            <GridLayout FormComponent={<SupplierMaster />} name="Supplier Master" SideComponent={<Information />} />
        </div>
    )
}
