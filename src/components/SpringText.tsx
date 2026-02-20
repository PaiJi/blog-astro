import { useState } from "react";

const texts = ["鸡排", "PaiJi", "JiPai"];

function SpringText() {
  const [currentText, setCurrentText] = useState(0);

  return (
    <span>
      <span className="" key={currentText}>
        {texts[currentText]}
      </span>
      <span className="animate-[typeAnime_1s_ease-in-out_infinite]">_</span>
    </span>
  );
}

export default SpringText;
