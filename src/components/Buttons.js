import React, {useState} from "react";

function Buttons({details, visibilityOfComments}){
    const {upvotes, downvotes} = details
    const [up, setUpVotes] = useState(upvotes)
    const [down, setDownVotes] = useState(downvotes)
    const [isOn, setComments] = useState(true)

    function handleComments(){
        visibilityOfComments(!isOn)
        console.log(`Button:  ${!isOn}`)
        setComments(!isOn)
        
    }
    function handleVote(event){
        if(event.target.id === "upvotes"){
            setUpVotes(up+1)
        }else{
            setDownVotes(down+1)
        }
    }
    return (
        <div>
            <button onClick={handleVote} id="upvotes">{up}👍</button>
            <button onClick={handleVote} id="downvotes">{down}👎</button>
            <button onClick={handleComments}>{isOn? "Hide comments" : "Show comments"}</button>
        </div>
    )
}
export default Buttons;