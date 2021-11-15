import React from 'react';
import {Grid} from "@material-ui/core";
import { Card, CardActions, CardContent, Divider, Paper, Typography} from "@mui/material";
import {IconPaper} from "../../components/shared/iconPaper/IconPaper";
import {InfoCard} from "./components/InfoCard";

export const Dashboard: React.FC = () => {


    return (
        <Grid container spacing={8}>
            <Grid container spacing={4} direction={"row"} item>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        elevation={3}
                        style={{
                            borderRadius: '8px'
                        }}
                    >
                        <Card
                            style={{
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}
                        >
                            <CardContent>
                                <Grid item container>
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        lg={2}
                                        justifyContent={"center"}
                                        style={{
                                            marginTop: '-30px',
                                            height: 'fit-content'
                                        }}
                                    >
                                        <IconPaper backgroundColor={'#ffa726'}/>
                                    </Grid>
                                    <Grid md={12} lg={10} xs={12} item justifyContent={"flex-end"}>
                                        <Typography variant={"body2"} textAlign={"end"} width={'100%'} >
                                            Deposits in the last 24 hours:
                                        </Typography>
                                        <Typography variant={"h5"} textAlign={"end"} width={'100%'}>
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
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        elevation={3}
                        style={{
                            borderRadius: '8px'
                        }}
                    >
                        <Card
                            style={{
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}
                        >
                            <CardContent>
                                <Grid item container>
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        lg={2}
                                        justifyContent={"center"}
                                        style={{
                                            marginTop: '-30px',
                                            height: 'fit-content'
                                        }}
                                    >
                                        <IconPaper backgroundColor={'#ffa726'}/>
                                    </Grid>
                                    <Grid md={12} lg={10} xs={12} item justifyContent={"flex-end"}>
                                        <Typography variant={"body2"} textAlign={"end"} style={{width: '100%'}}>
                                            Deposits in the last 24 hours:
                                        </Typography>
                                        <Typography variant={"h5"} textAlign={"end"} width={'100%'}>
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
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        elevation={3}
                        style={{
                            borderRadius: '8px'
                        }}
                    >
                        <Card
                            style={{
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}
                        >
                            <CardContent>
                                <Grid item container>
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        lg={2}
                                        justifyContent={"center"}
                                        style={{
                                            marginTop: '-30px',
                                            height: 'fit-content'
                                        }}
                                    >
                                        <IconPaper backgroundColor={'#ffa726'}/>
                                    </Grid>
                                    <Grid md={12} lg={10} xs={12} item justifyContent={"flex-end"}>
                                        <Typography variant={"body2"} textAlign={"end"} style={{width: '100%'}}>
                                            Deposits in the last 24 hours:
                                        </Typography>
                                        <Typography variant={"h5"} textAlign={"end"} width={'100%'}>
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
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        elevation={3}
                        style={{
                            borderRadius: '8px'
                        }}
                    >
                        <Card
                            style={{
                                borderRadius: '8px',
                                overflow: 'visible'
                            }}
                        >
                            <CardContent>
                                <Grid item container>
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        lg={2}
                                        justifyContent={"center"}
                                        style={{
                                            marginTop: '-30px',
                                            height: 'fit-content'
                                        }}
                                    >
                                        <IconPaper backgroundColor={'#ffa726'}/>
                                    </Grid>
                                    <Grid md={12} lg={10} xs={12} item justifyContent={"flex-end"}>
                                        <Typography variant={"body2"} textAlign={"end"} style={{width: '100%'}}>
                                            Deposits in the last 24 hours:
                                        </Typography>
                                        <Typography variant={"h5"} textAlign={"end"} width={'100%'}>
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
            </Grid>
            <Grid container direction={"row"} spacing={4} item>
                <InfoCard
                    titleText={'Deposits in the last 24 hours:'}
                    messageText={'200'}
                />
            </Grid>
        </Grid>
    );
};