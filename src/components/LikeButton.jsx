import React, { useState } from "react"; 

function LikeButton() {
    const [count, setCount] = useState(99);
    const handleClick = () => {
      setCount(count + 1);
    };

return (
    <div>
        <span className="likeButton" onClick={handleClick}>
        ♥ {count}
        </span>
    </div>
  );
}

export default LikeButton