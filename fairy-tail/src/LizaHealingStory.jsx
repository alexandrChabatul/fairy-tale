import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
import six from './assets/6.png'
import seven from './assets/7.png'

export default function LizaHealingStory() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      text: "Где-то в волшебной вселенной, Лиза работала как настоящий герой…",
      image: one,
    },
    {
      text: "Но даже герои нуждаются в передышке — особенно, если они любят гулять по зимнему воздуху",
      image: two,
    },
    {
      text: "Наутро она проснулась с больным горлом и хриплым голосом...",
      image: three,
    },
    {
      text: "Барса, ее верная собака не отходила ни на шаг",
      image: four,
    },
    {
      text: "К радости близких людей, горячий чай, плед и много любви начали творить чудеса",
      image: five,
    },
    {
      text: "Скоро Лиза снова заулыбалась",
      image: six,
    },
    {
      text: "И вот она снова здорова, сияет, и мы гуляем всей нашей маленькой стаей.",
      image: seven,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const restartStory = () => {
    setStage(0);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{height: 400, borderRadius: 15}}>
        <motion.img
          style={{maxHeight: "100%"}}
          key={stages[stage].image}
          src={stages[stage].image}
          alt="scene"
          className="w-64 h-64 object-contain mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <motion.p
        key={stages[stage].text}
        style={{fontSize: 32, maxWidth: 600, textAlign: "center"}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {stages[stage].text}
      </motion.p>
      {stage === stages.length - 1 && (
        <button
          onClick={restartStory}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            fontSize: 18,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Начать заново
        </button>
      )}
    </div>
  );
}
