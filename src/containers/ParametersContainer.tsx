import React from "react";
import {useParams, useHistory} from "react-router";

interface RouteParams {
    id: string
}

export const ParametersContainer: React.FC = () => {
    alert("asdfd");
    const routerParameters = useParams<RouteParams>();
    const history = useHistory();
    console.log(routerParameters);
    if (routerParameters.id === '5') {
        history.push('/contacts');
    }
    return <div>{routerParameters.id}</div>
}
