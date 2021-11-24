import React from 'react';
import {Grid} from "@material-ui/core";
import {Button, Card, CardActions, CardContent, Divider, Paper, Typography} from "@mui/material";
import {IconPaper} from "../../components/shared/iconPaper/IconPaper";
import {InfoCard} from "./components/InfoCard";
import {IconColor, IconSize} from "../../components/shared/icon/IconExt";

export const Dashboard: React.FC = () => {


    return (
        <Grid container spacing={8}>
            <Grid container direction={"row"} spacing={4} item>
                <InfoCard
                    titleText={'Deposits in the last 24 hours:'}
                    messageText={'200'}
                    useIcon={true}
                    iconBackgroundColor={'orange'}
                    iconColor={IconColor.action}
                    iconSize={IconSize.large}
                    iconName={'content_copy'}
                >
                    <CardActions>
                        <Button>
                            More info
                        </Button>
                    </CardActions>
                </InfoCard>
            </Grid>
        </Grid>
    );
};