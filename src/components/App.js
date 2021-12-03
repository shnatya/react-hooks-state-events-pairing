import video from "../data/video.js";
import Comments from "./Comments.js";
import Details from "./Details.js";
import Buttons from "./Buttons.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [visibility, setVisibility] = useState(true)

  function visibilityOfComments(vis){
    setVisibility(vis)
  }
  console.log(`Visibility:  ${visibility}`)
  return (
    <div className="App">
      <iframe
        width="519"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details details={video}/>
      <Buttons details={video} visibilityOfComments={visibilityOfComments}/>
      { visibility ? <Comments comments={video.comments} /> : null }
    </div>
  );
}

export default App;
