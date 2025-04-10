import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import one from './assets/11.png'
import two from './assets/12.png'
import three from './assets/13.png'
import four from './assets/14.png'
import five from './assets/15.png'
import six from './assets/16.png'
import seven from './assets/17.png'
import eight from './assets/18.png'
import nine from './assets/19.png'

export default function LizaHappy() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      text: "Утро. У Лизы снова температура. Но Zoom-звонок в 11:00 никто не отменял — деловая, слегка простуженная, зато грозная как никогда.",
      image: one,
    },
    {
      text: "Наушники на голове, мышка в одной руке, термометр в другой, Барса на коленях. Если бы был рейтинг супергероев, у неё был бы отдельный сезон.",
      image: two,
    },
    {
      text: "На вечер были планы: концерт, музыка, романтика… Но температура решила быть третьим колесом и сказала: «Сегодня тусим дома!»",
      image: three,
    },
    {
      text: "Немного погрустили… Потом решили: раз не мы на концерте — пусть будут друзья. Билеты ушли в Telegram быстрее, чем скидки на Озоне.",
      image: four,
    },
    {
      text: "Плед — в бой. Чай — в кружку. Барса — в обнимку. Градусник снова делает камбэк с цифрой 37.3. Ну хоть не финал Лиги температуры.",
      image: five,
    },
    {
      text: "Запустили генератор картинок: Лиза — снежная королева, я — будто подрался с лесом и проиграл бороде. Смеёмся — лечение почти завершено.",
      image: six,
    },
    {
      text: "Иногда прошу фото, чтобы увидеть её. А она: «Ну я не в форме». Хотя в любой форме она чемпионка моего сердца.",
      image: seven,
    },
    {
      text: "Вечер. Лимон к лимону, Барса к Барсе, Лиза к пледу. Улыбается, зевает — тяжёлый день был, но как же уютно всё стало.",
      image: eight,
    },
    {
      text: "Финал — как в кино. Суббота. Мы на арене, рядом её родители. Официально красивые, неофициально счастливые. И концерт теперь точно наш.",
      image: nine,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 10000);
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
