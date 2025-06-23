import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { highlightsData } from "../../../data/highlights";
import SetaDireita from "../../../../public/media/icons/tail-right.svg";
import SetaEsquerda from "../../../../public/media/icons/tail-left.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Highlights = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  itemRefs.current = []; 

  useLayoutEffect(() => {
    const createdTriggers: ScrollTrigger[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const position = highlightsData[i]?.position;
      const direction = position === "left" ? -100 : 100;

      const animation = gsap.fromTo(
        el,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      if (animation.scrollTrigger) {
        createdTriggers.push(animation.scrollTrigger);
      }
    });

    return () => {
      createdTriggers.forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className={styles.section} id="highlights">
      <h2 className={styles.title__section}>Explore as Funcionalidades Poderosas da InteractiPlay</h2>
      <p className={styles.description__section}>Descubra como nossa plataforma simplifica a edição de vídeo e oferece recursos avançados para resultados profissionais.</p>
      <div className={styles.containerHighlights}>
        {highlightsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemRefs.current[index] = el;
            }}
            className={`${styles.item} ${styles[item.position]}`}
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={item.image}
                alt={`Imagem que exemplifica: ${item.title}`}
                width={578}
                height={347}
                loading={'lazy'}
              />
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className={styles.link}>
                Começar teste
                {item.position === "right" ? (
                  <img src={SetaEsquerda} alt="arrow left" className={styles.arrow} />
                ) : (
                  <img src={SetaDireita} alt="arrow right" className={styles.arrow} />
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;