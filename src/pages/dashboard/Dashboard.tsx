import React from 'react';
import {Grid} from "@material-ui/core";
import {Button, CardActions} from "@mui/material";
import {InfoCard} from "./components/InfoCard";
import {IconSize} from "../../components/shared/icon/IconExt";
import {useHistory} from "react-router-dom";

export const Dashboard: React.FC = () => {

    const history = useHistory();

    return (
        <Grid container spacing={8}>
            <Grid container direction={"row"} spacing={4} item>
                <InfoCard
                    titleText={'Deposits in the last 24 hours:'}
                    messageText={'200'}
                    useIcon={true}
                    iconBackgroundColor={'orange'}
                    iconColor={'white'}
                    iconSize={IconSize.large}
                    iconName={'content_copy'}
                >
                    <CardActions>
                        <Button onClick={(e) => {
                            history.push('deposits')
                        }}>
                            Show deposits
                        </Button>
                    </CardActions>
                </InfoCard>
                <InfoCard
                    titleText={'Withdrawals in the last 24 hours:'}
                    messageText={'200'}
                    useIcon={true}
                    iconBackgroundColor={'#43a047'}
                    iconColor={'white'}
                    iconSize={IconSize.large}
                    iconName={'home'}
                >
                    <CardActions>
                        <Button onClick={(e) => {
                            history.push('deposits')
                        }}>
                            Show withdrawals
                        </Button>
                    </CardActions>
                </InfoCard>
                <InfoCard
                    titleText={'Open issues:'}
                    messageText={'45'}
                    useIcon={true}
                    iconBackgroundColor={'#e53935'}
                    iconColor={'white'}
                    iconSize={IconSize.large}
                    iconName={'info_outline'}
                >
                    <CardActions>
                        <Button onClick={(e) => {
                            history.push('deposits')
                        }}>
                            Show issues
                        </Button>
                    </CardActions>
                </InfoCard>
                <InfoCard
                    titleText={'Registrations:'}
                    messageText={'+200'}
                    useIcon={true}
                    iconBackgroundColor={'#00acc1'}
                    iconColor={'white'}
                    iconSize={IconSize.large}
                    iconName={'emoji_people'}
                >
                    <CardActions>
                        <Button onClick={(e) => {
                            history.push('deposits')
                        }}>
                            Show statistics
                        </Button>
                    </CardActions>
                </InfoCard>
            </Grid>
            <Grid container direction={"row"} spacing={4} item>

            </Grid>
        </Grid>
    );
};