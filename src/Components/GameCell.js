import React ,{useState,useEffect} from "react";
import { Button } from "@mui/material";
import QuadBackground from "./QuadBackground";
import Hexagon from "./Hexagon";
import textdef from "./TexteDef";
function Typewriter({ text, speed = 1000 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const lines = displayedText.split('\n');

  return (
    <div 
    style={{marginTop:10}}
    >
    <p style={{ 
      color: 'white', 
      whiteSpace: 'pre-wrap', 
      margin: 0, 
      textAlign: 'center'
    }}>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
    </div>
  );
}

const GameRow = () => {

const arabicLetters = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ",
  "د", "ذ", "ر", "ز", "س", "ش", "ص",
  "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
  "ك", "ل", "م", "ن", "ه", "و", "ي"
];
const getRandomArabicLetters = () => {
  const letters = [...arabicLetters]; // نسخة من الأبجدية
  const selected = [];

  while (selected.length < 25) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    selected.push(letters[randomIndex]);
    letters.splice(randomIndex, 1); // حذف الحرف المختار لتجنب التكرار
  }

  return selected;
};

const arabicLettersUsed = getRandomArabicLetters();
const cells1 = arabicLettersUsed.slice(0, 5);
const cells2 = arabicLettersUsed.slice(5, 10);
const cells3 = arabicLettersUsed.slice(10, 15);
const cells4 = arabicLettersUsed.slice(15, 20);
const cells5 = arabicLettersUsed.slice(20, 25);
  return (
    <div 
    style={{
      display:"flex",
      flexDirection: "column",
       width: "1600px",
    height: "750px",
  }}
    >
   <div 
  style={{
    display: "flex",
    width: "1600px",
    height: "600px",
    background: "linear-gradient(to right, #000080, #00ffff)"
  }}
>
    <div style={{ position: "relative", width: 800, height: 200 }}>
      <QuadBackground />
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1px",
        position: "absolute",
        top: "75%",
        left: "59%",
        transform: "translate(-60%, -50%)"
      }}>
        {cells1.map((_, index) => (
           <button 
      key={index} 
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}
      onClick={() => alert(cells1[index])}
    >
          <Hexagon letter={cells1[index]}/>
          </button>
        ))}
      </div>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1px",
        position: "absolute",
        top: "112.5%",
        left: "52.7%",
        transform: "translate(-60%, -50%)"
      }}>
        {cells2.map((_, index) => (
          <button 
      key={index} 
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}
      onClick={() => alert(cells2[index])}
    >
          <Hexagon letter={cells2[index]}/>
          </button>
        ))}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1px",
        position: "absolute",
        top: "150%",
        left: "59%",
        transform: "translate(-60%, -50%)"
      }}>
        {cells3.map((_, index) => (
          <button 
      key={index} 
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}
      onClick={() => alert(cells3[index])}
    >
          <Hexagon letter={cells3[index]}/>
          </button>
        ))}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1px",
        position: "absolute",
        top: "187.5%",
        left: "52.7%",
        transform: "translate(-60%, -50%)"
      }}>
        {cells4.map((_, index) => (
         <button 
      key={index} 
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}
      onClick={() => alert(cells4[index])}
    >
          <Hexagon letter={cells4[index]}/>
          </button>
        ))}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1px",
        position: "absolute",
        top: "225%",
        left: "59%",
        transform: "translate(-60%, -50%)"
      }}>
        {cells5.map((_, index) => (
          <button 
      key={index} 
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }}
      onClick={() => alert(cells5[index])}
    >
          <Hexagon letter={cells5[index]}/>
          </button>
        ))}
      </div>
    </div>
    </div>
    <div
    style={{
    display: "flex",
    width: "1600px",
    height: "150px",
    background: "linear-gradient(to bottom, #808080, #000000)",
    justifyContent:"center"
  }}
    >
      <Typewriter text={textdef} speed={70} />
    </div>
    </div>
  );
};

export default GameRow;
