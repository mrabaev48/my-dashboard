import {Card, CardActions, CardContent, Divider, Icon, Paper, Typography} from "@mui/material";
import {Grid} from "@material-ui/core";
import React, {FC} from "react";
import {IconPaper} from "../../../components/shared/iconPaper/IconPaper";
import {IconColor, IconSize} from "../../../components/shared/icon/IconExt";

export interface IInfoCardProps {
    titleText?: string;
    messageText?: string;
    useIcon?: boolean | false;
    iconName?: string;
    iconSize?: IconSize;
    iconColor?: IconColor;
    iconBackgroundColor?: string;
}

export const InfoCard:FC<IInfoCardProps> = (props) => {

    let icon = null

    if (props.useIcon) {
        icon = <IconPaper
            backgroundColor={props.iconBackgroundColor}
            iconName={props.iconName}
            iconColor={props.iconColor}
            iconSize={props.iconSize}
        />
    }

    return (
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                elevation={3}
                style={{
                    borderRadius: '8px',
                }}
            >
                <Card
                    style={{
                        borderRadius: '8px',
                        overflow: 'visible',
                        padding: '5px'
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
                                {icon}
                            </Grid>
                            {(props.titleText || props.messageText) &&
                            <Grid md={12} lg={10} xs={12} item justifyContent={"flex-end"}>
                                {props.titleText &&(
                                    <Typography variant={"body2"} textAlign={"end"} style={{width: '100%'}}>
                                        {props.titleText}
                                    </Typography>
                                ) }
                                {props.messageText && (
                                    <Typography variant={"h5"} textAlign={"end"} width={'100%'}>
                                        {props.messageText}
                                    </Typography>
                                )}
                            </Grid>}
                        </Grid>
                    </CardContent>
                    {props.children && <Divider variant={"fullWidth"}/>}
                    {props.children}
                </Card>
            </Paper>
        </Grid>
    )
}