import { Button, Typography } from '@mui/material'
import { UserContext } from 'context/UserContext';
import React from 'react'


const styles = {
    fontWeight: "600",

}
export default function ItemDetails() {
    const { darkMode } = React.useContext(UserContext);
    const fieldsArray = ["Item Code", "Item Description", "Category", "Sub Category", "Supplier", "UOM", "Price Per Unit", "MOQ"]
    return (
        <div style={{
            borderRadius: "15px",
            textAlign: "right", padding: "20px",
            backgroundColor: `${darkMode ? "#161B22" : "#f0f7ff"}`,
        }}>

            <Typography sx={{ color: `${darkMode ? "#ffffff" : "black"}` }} variant="h3">Item <br></br> Details</Typography>
            <hr style={{ height: "2px", background: `${darkMode ? "#ffffff" : "black"}`, border: "none" }}></hr>
            <div>
                {fieldsArray.map((fields, index) => (

                    <Typography sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}><span style={styles}>{fields}: </span> Something pvt.ltd.</Typography>
                ))}
            </div>

            <div style={{ marginTop: "10px" }}>
                <Button color="primary" sx={{ color: "white", mr: "20px" }}>DISCARD</Button>
                <Button color="primary" sx={{ color: "white", ml: "20px" }} >Create</Button>

            </div>

        </div>
    )
}
