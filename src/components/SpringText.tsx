import { useEffect, useRef, useState } from "react";
const texts = ["鸡排", "PaiJi", "JiPai"];
function SpringText() {
  const [currentText, setCurrentText] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // timer.current = setInterval(() => {
    //   console.log("??", currentText);
    //   setCurrentText((index) => (index + 1 > texts.length ? 0 : index + 1));
    // }, 1000);

    return () => clearInterval(timer.current);
  }, []);
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
