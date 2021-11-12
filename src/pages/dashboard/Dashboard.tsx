import React from 'react';
import Typography from "@material-ui/core/Typography";
import {withSecurity} from "../../components/HoC/withSecurity";
import {ITitleProps, Title} from "../../components/shared/Title";

export const Dashboard: React.FC = () => {
    const TitleWithSecurity = withSecurity<ITitleProps>(Title)
    return (
        // <Typography variant="h3" component="h1">Dashboard Page</Typography>
        <TitleWithSecurity text={'Dashboard Page'}/>
    );
};