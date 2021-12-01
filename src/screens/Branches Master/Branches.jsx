import React from 'react'
import BranchesMaster from '../../components/Forms UI/BranchesMaster'
import GridLayout from '../../components/GridLayout'
import BranchesDetails from '../../components/Details UI/BranchesDetails'

export default function Branches() {
    return (
        <div>
            <GridLayout FormComponent={<BranchesMaster />} name="Branches Master" SideComponent={<BranchesDetails />} />
        </div>
    )
}
