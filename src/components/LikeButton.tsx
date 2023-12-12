import React, { useState } from "react"; 

const LikeButton: React.FC = () => {
  const [count, setCount] = useState<number>(99);
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