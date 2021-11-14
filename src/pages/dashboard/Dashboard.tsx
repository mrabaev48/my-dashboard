import React from 'react';
import {Grid} from "@material-ui/core";
import {Button, Card, CardActions, CardContent, Divider, Paper, Typography} from "@mui/material";
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';

export const Dashboard: React.FC = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3}>
                        <Card
                            style={{
                                padding: '5px'
                            }}
                        >
                            <CardContent>
                                <Grid item container>
                                    <Grid
                                        item
                                        xs={4}
                                        justifyContent={"center"}
                                        style={{
                                            backgroundColor: "orange",
                                            borderRadius: 8,
                                        }}
                                    >
                                        <EuroSymbolIcon/>
                                    </Grid>
                                    <Grid xs={8} item justifyContent={"flex-end"}>
                                        <Typography variant={"body2"} textAlign={"end"}>
                                            Deposits in the last 24 hours:
                                        </Typography>
                                        <Typography variant={"h5"} textAlign={"end"}>
                                            200
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider variant={"fullWidth"}  />
                            <CardActions>
                                <Typography
                                    variant={"body2"}
                                    color={"primary"}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    Get more info
                                </Typography>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3}>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3}>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3}>

                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};