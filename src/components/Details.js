import React, {useState} from "react";

function Details({details}){
    const {title, views, createdAt} = details

    return (
        <div>
            <h1>{title}</h1>
            <h3>{views} Views | Uploaded {createdAt}</h3>
        </div>
    )
}
export default Details;