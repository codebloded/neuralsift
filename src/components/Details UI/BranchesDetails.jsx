import { Button, Typography } from '@mui/material'
import { UserContext } from 'context/UserContext';
import React from 'react'


export default function BranchesDetails() {
    const { darkMode } = React.useContext(UserContext);
    const fieldsArray = ["Branch Name", "Address", "GST", "GST Doc",]
    const styles = {
        fontWeight: "600",

    }
    return (

        <div style={{
            borderRadius: "15px",
            textAlign: "right", padding: "20px",
            backgroundColor: `${darkMode ? "#161B22" : "#f0f7ff"}`,
        }}>

            <Typography sx={{ color: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "88%" }} variant="h3">Branches Details</Typography>
            <hr style={{ height: "2px", background: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "80%", border: "none" }}></hr>
            <div>
                {fieldsArray.map((fields, index) => (

                    <Typography sx={{ color: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "80%" }}><span style={styles}>{fields}: </span> Something pvt.ltd.</Typography>
                ))}

                <hr style={{ height: "2px", background: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "80%", border: "none" }}></hr>
                <Typography sx={{ color: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "80%" }} ><span style={styles}>Branches: </span> 4</Typography>
                <hr style={{ height: "2px", background: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "80%", border: "none" }}></hr>
            </div>
            <Typography sx={{ color: `${darkMode ? "#ffffff" : "#121212"}`, opacity: "80%" }} ><span style={styles}>Document Attached: </span> 4</Typography>
            <div style={{ marginTop: "10px" }}>
                <Button color="primary" sx={{ color: "white", mr: "20px" }}>DISCARD</Button>
                <Button color="primary" sx={{ color: "white", ml: "20px" }} >Create</Button>

            </div>

        </div>
    )
}
