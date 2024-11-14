import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title: "Awaqi",
        img: "/Awaqi.png",
        desc: "As a youth-centered online training and coaching platform focused on mindset, soft skills, and information sharing, Awaqi Ethiopia is one of the largest organizations under First Consult in Ethiopia. As part of their impact-making, we produced a short film. The video portrayed the concept of procrastination as a thief of time that steals more than just a few minutes but a lifetime."
    },
    {
        id:2,
        title: "Gella/Nude",
        img: "/Gella.png",
        desc: "Gella is a lingerie and nightwear brand that pushes body positivity and tells a story of each body type. We kept on telling their story in digital marketing and proudly launched the #ownit campaign to spread body positivity and enhance the confidence of our ladies. It turned the brand’s sales by 44% within 1 month"
    },
    {
        id:3,
        title: "Kidus Markos Furniture and Interior",
        img: "/Kidus Markos.png",
        desc: "Kidus Markos Wood Works is a reputable and experienced business in the industry. With a skilled team of craftsmen and state-of-the-art machinery, they have been able to produce high-quality wooden products for a variety of purposes for huge companies and homes for the past 28 years. We have produced a high-quality TV commercial that demonstrates their story of creating happiness, memories, and love in different homes for the past 28 years which created a direct impact on their market share"
    },
    {
        id:4,
        title: "Yenetta Code",
        img: "/Yenetta.png",
        desc: "Yenetta Code is a learning center organized to expose young Ethiopians to the world of coding. The major marketing gap of Yenetta was on-ground activation. As a result, we created a space for kids to experience the thrill of learning coding at Yenetta Code and meeting the brand they know digitally in real life at our interactive school activation in different schools throughout Addis Ababa."
    },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;