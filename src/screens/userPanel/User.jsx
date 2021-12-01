import React from 'react'
import UserMaster from '../../components/Forms UI/UserMaster'
import GridLayout from '../../components/GridLayout'
import UserDetails from '../../components/Details UI/UserDetails'


export default function User() {
    return (
        <div>
            <GridLayout FormComponent={<UserMaster />} name="User Master" SideComponent={<UserDetails />} />
        </div>
    )
}
