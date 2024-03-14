import React from "react";
import Loader from "./Loader";

function PageLoading()
{
    return (
        <div style={{margin: "10px auto", display: 'flex', justifyContent: 'center'}}>
            <Loader />
        </div>
    )
}

export default PageLoading;