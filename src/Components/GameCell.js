import React ,{useState,useEffect} from "react";
import { Button } from "@mui/material";
import QuadBackground from "./QuadBackground";
import myImage from "../Data/image.png";
import Hexagon from "./Hexagon";
import textdef from "../Data/TexteDef";
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
  const [showDiv1, setShowDiv1] = useState(false); 
const [showDiv2, setShowDiv2] = useState(true); 
const [selectedLetter,setSelectedLetter]=useState(null) ;

const toggleDivs = (letter) => {
  if(showDiv2){
    setShowDiv1(true);   
  setShowDiv2(false); 
  }
setSelectedLetter(letter);
   
};


const arabicLetters = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ",
  "د", "ذ", "ر", "ز", "س", "ش", "ص",
  "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
  "ك", "ل", "م", "ن", "ه", "و", "ي"
];
const getRandomArabicLetters = () => {
  const letters = [...arabicLetters];
  const selected = [];

  while (selected.length < 25) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    selected.push(letters[randomIndex]);
    letters.splice(randomIndex, 1); 
  }

  return selected;
};

const [lettersGrid] = useState(() => {
  const arabicLettersUsed = getRandomArabicLetters();
  return [
    arabicLettersUsed.slice(0, 5),
    arabicLettersUsed.slice(5, 10),
    arabicLettersUsed.slice(10, 15),
    arabicLettersUsed.slice(15, 20),
    arabicLettersUsed.slice(20, 25)
  ];
});

const cells1 = lettersGrid[0];
const cells2 = lettersGrid[1];
const cells3 = lettersGrid[2];
const cells4 = lettersGrid[3];
const cells5 = lettersGrid[4];
  return (
    <div 
    style={{
      display:"flex",
      flexDirection: "column",
       width: "1500px",
    height: "750px",
  }}
    >
   <div 
  style={{
    display: "flex",
    width: "1500px",
    height: "600px",
    background: "linear-gradient(to right, #000080, #00ffff)",
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
      onClick={() => toggleDivs(cells1[index])}
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
      onClick={() => toggleDivs(cells2[index])}
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
      onClick={() => toggleDivs(cells3[index])}
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
      onClick={() => toggleDivs(cells4[index])}
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
      onClick={() => toggleDivs(cells5[index])}
    >
          <Hexagon letter={cells5[index]}/>
          </button>
        ))}
      </div>
    </div>
    <div style={{ margin: 10, display: showDiv1 ? "block" : "none" ,textAlign: "right" ,width: "100%"}}>
      <h1 style={{ color: "#8b0000", direction: "rtl", textAlign: "right" }}>
  قائمة الاختيارات : "{selectedLetter}"
</h1>
</div>

<div style={{ margin: 10, display: showDiv2 ? "block" : "none",textAlign: "right" ,width: "100%"}}>
  <h1 style={{color:"#8b0000"}}>مرحبا بك في لعبة تقاطع الحروف </h1>
<h3>يجب عليك النقر على حرف لتظهر لك قائمة الاختيارات </h3>
<h3>كما يمكنك المشاركة في بثنا المباشر على منصة تيك توك للتمتع بالالعاب الثقافية مع مجموعتنا </h3>
<a 
  href="https://www.tiktok.com/@bayto_chi3r?is_from_webapp=1&sender_device=pc" 
  target="_blank"  // باش يفتح في تاب جديد
  rel="noopener noreferrer" 
  style={{ color: "#8b0000", textDecoration: "underline" }}
>
  رابط الصفحة 
</a>
 <img 
    src={myImage}
    style={{ width: "600px", marginTop: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }} 
  />
</div>

    </div>
    <div
    style={{
    display: "flex",
    width: "1500px",
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
