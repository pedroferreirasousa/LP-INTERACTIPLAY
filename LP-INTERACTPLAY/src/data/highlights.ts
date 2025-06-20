

interface HighlightsItem {
  title: string;
  description: string;
  link: string;
  position: "left" | "right";
  image: string;
}

export const highlightsData: HighlightsItem[] = [
  {
    title: "Botões de Ação",
    description:
      "Um botão surge dentro ou abaixo do seu VSL, sincronizado perfeitamente com o tempo do vídeo, impulsionando sua conversão.",
    link: "#",
    position: "left",
    image: "../../public/media/images/Highlights1.png",
  },
  {
    title: "SmartPlay",
    description:
      "O Smart Autoplay é compatível com todos os navegadores, simulando o início imediato do vídeo para criar urgência, incentivando a visualização completa. Ao clicar, o vídeo reinicia, garantindo que nenhum segundo seja perdido",
    link: "#",
    position: "right",
    image: "../../public/media/images/Highlights2.png",
  },
  {
    title: "Flow",
    description:
      "Conecte vídeos para deixar a experiência do seu cliente interativa e personalizada.",
    link: "#",
    position: "left",
    image: "../../public/media/images/Highlights3.png",
  },
];
