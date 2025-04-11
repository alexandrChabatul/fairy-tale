import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import one from './assets/21.png'
import two from './assets/22.png'
import three from './assets/23.png'
import four from './assets/24.png'
import five from './assets/25.png'
import six from './assets/26.png'
import seven from './assets/27.png'
import eight from './assets/28.png'
import nine from './assets/29.png'

export default function LizaAlmostDog() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      text: "Лиза просыпается… Кашель. Хрип. Барса смотрит с беспокойством.\n — «Ну всё, опять либо чихнула в душе, либо вирус поймала, как Wi-Fi»",
      image: one,
    },
    {
      text: "Глаза горят, руки танцуют по клавишам. В воздухе искры от страсти к делу! \n— «Сейчас супергерой, а потом… поспать!»",
      image: two,
    },
    {
      text: "Проснулась. Сделала глоток кофе. Открыла ноут. Работает. Барса в углу: «Опять она за клавиатуру села. Всё, до вечера не трогай»",
      image: three,
    },
    {
      text: "Кухня наполняется звуками. Сразу после — сон. \n — «Жизнь — это цикл. Кушаешь — спишь. Работаешь — спишь. Как собака. Только лапки не такие милые»",
      image: four,
    },
    {
      text: "Работает?! СТОП! Опять? Глаза закрываются. Барса шепчет: \n — «Ты уверена, что ты не австралийская овчарка, замаскированная под data scientist?»",
      image: five,
    },
    {
      text: "Еще еда. Еще сон. Мы называем это: \n SCRUM-сон-цикл\n(есть, спать, повторить)",
      image: six,
    },
    {
      text: "Чьи яйца? Ох уж эти стикеры, яйца глядят в оба, куры испуганы, мы смеемся. Барса не понимает, но лайкает лапой.",
      image: seven,
    },
    {
      text: "Модель. Красавица. Фотогеничная королева. \n «КАК МОЖНО БЫТЬ СТОЛЬКО РАЗ КРАСИВОЙ?» \n Барса кивает. У нее тоже crush.",
      image: eight,
    },
    {
      text: "Спойлер! Лиза просыпается с улыбкой, кашля нет. Только радость и сияние в глазах! \n За кадром Барса говорит: «Ну наконец-то! Я тоже хочу на концерт!»",
      image: nine,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 9000);
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
        style={{fontSize: 24, maxWidth: 400, textAlign: "center", color: "black"}}
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
