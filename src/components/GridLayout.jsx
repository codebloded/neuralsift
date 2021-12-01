import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { UserContext } from "context/UserContext";
import React from "react";


export default function GridLayout({ FormComponent, SideComponent, name }) {
    const { darkMode } = React.useContext(UserContext);
    return (
        <div style={{
            marginTop: "6.5em",
            width: "100%",
            height: "100%",
        }}>

            <Container>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        my: "1em",

                        padding: 0,
                    }}
                >
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Grid >
                            <Paper elevation={12} sx={{ height: "100%", width: "100%", borderRadius: "18px" }}>
                                {FormComponent}
                            </Paper>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Grid container spacing={3}>
                            <Grid
                                item
                                xs={false}
                                sm={false}
                                md={12}
                                lg={12}
                                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                            >
                                {/* <YourCard /> */}

                                <Typography variant="h3" sx={{ textAlign: "center", opacity: "88%", textDecoration: "underline", color: `${darkMode ? "#ffffff" : "#181818"}` }} > {name}</Typography>

                            </Grid>
                            <Grid item xs={12} style={{ minHeight: "40vh" }}>
                                <Paper elevation={12} sx={{ height: "100%", borderRadius: "18px" }}>
                                    {SideComponent}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}