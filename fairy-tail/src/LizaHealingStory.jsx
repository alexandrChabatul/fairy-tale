import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
import six from './assets/6.png'

export default function LizaHealingStory() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      text: "Где-то в волшебной вселенной, Лиза заболела...",
      image: one,
    },
    {
      text: "Мир потускнел. Даже солнце выглядывало осторожно...",
      image: two,
    },
    {
      text: "Но где-то рядом кто-то очень её любил.",
      image: three,
    },
    {
      text: "Он согревал её заботой, чаем и самыми добрыми словами...",
      image: four,
    },
    {
      text: "И мир стал снова наполняться цветом.",
      image: five,
    },
    {
      text: "А Лиза снова улыбнулась. Потому что любовь — это лучшее лекарство.",
      image: six,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <motion.img
        key={stages[stage].image}
        src={stages[stage].image}
        alt="scene"
        className="w-64 h-64 object-contain mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.p
        key={stages[stage].text}
        className="text-xl font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {stages[stage].text}
      </motion.p>
    </div>
  );
}
