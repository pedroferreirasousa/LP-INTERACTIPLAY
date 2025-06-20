import styles from "./styles.module.scss";
import SvgSeta from "../../../../public/media/icons/tail-right.svg";
import Hero from "../../../../public/media/images/hero.png";
import Features from "../../Features";
import AnimatedCounter from "../../AnimatedCounter";
import { metricsData } from '../../../data/metrics'; 

const DataFeatures = [
  {
    title: "Interface Intuitiva",
    description:
      "Edição eficiente, acessível a iniciantes, sem necessidade de habilidades técnicas avançadas.",
    icon: "../../../public/media/icons/feature1.png",
  },
  {
    title: "Recursos Avançados",
    description:
      "Usabilidade simples e vasta gama de recursos avançados para criar vídeos profissionais e criativos.",
    icon: "../../../public/media/icons/feature2.png",
  },
  {
    title: "Renderização Rápida",
    description:
      "Renderização rápida e eficiente permitindo compartilhamento instantanêo.",
    icon: "../../../public/media/icons/feature3.png",
  },
];

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <h1>Edite seu VSL e aumente as suas conversões!</h1>
      <h2>
        A melhor ferramenta para infoprodutores. Desenvolvido para você vender
        mais.
      </h2>
      <a href="#">
        Experimente por 30 dias{" "}
        <img src={SvgSeta} alt="seta para direita" className={styles.arrow} />
      </a>
      <img src={Hero} alt="hero" className={styles.hero} />

      <div className={styles.features__container}>
        {DataFeatures.map((item, index) => (
          <Features key={index} {...item} />
        ))}
      </div>

      <div className={styles.metrics__container}>
        {metricsData.map((metric) => (
          <AnimatedCounter
            key={metric.id}
            finalValue={metric.finalValue}
            type={metric.type}
            label={metric.label}
            prefix={metric.prefix}
            duration={2} 
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
