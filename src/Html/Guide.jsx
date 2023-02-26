import { useState } from "react";

const items = [
  "books",
  "coffee",
  "computer",
  "dog",
  "headphones",
  "name",
  "resume",
  "loaf",
  "omlette",
  "rollingpin",
  "piping",
];

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={`toggle-button  ${isOpen && "toggle-active"}`}
        onClick={(e) => handleToggle(e)}
      >
        <img src="/avatar.svg" />
      </div>
      <div
        className={`navigation-guide ${isOpen && "is-active"}`}
        onClick={(e) => handleToggle(e)}
      >
        <div id="side-guide">
          <div className="item-list">
            {items.map((item) => (
              <img key={item} src={`/Guide/${item}.png`} alt={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};