import React, {useState} from "react";

function Comments({comments}){
    
    return (
        <div>
            {comments.map(item => <li key={item.id}>{item.user}: {item.comment}</li>)}
        </div>
    )    
}

export default Comments;