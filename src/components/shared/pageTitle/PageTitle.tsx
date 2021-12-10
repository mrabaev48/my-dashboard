import React, {FC} from "react";
import {useLocation} from "react-router-dom";
import {routes} from "../../../configs/routes";
import Typography from "@material-ui/core/Typography";

export const PageTitle:FC = () => {
    const location = useLocation();

    const currentRoute = routes.find(x => x.path === location?.pathname);

    return (
        <Typography
            variant="h4"
            component="h1"
            style={{
                paddingBottom: "50px"
            }}
        >
            { currentRoute?.translationKey || currentRoute?.defaultLabel}
        </Typography>
    )
}