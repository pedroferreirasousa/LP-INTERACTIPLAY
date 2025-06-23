export interface Testimonial {
  id: string;
  image: string;
  name: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    image: "/media/images/testimonyprofile1.png",
    name: "Guilherme Freitas",
    text: "A InteractPlay: transformou minha experiência de edição. Interface intuitiva, resultados profissionais em minutos!",
  },
  {
    id: "2",
    image: "/media/images/testimonyprofile2.png",
    name: "Pedro Henrique",
    text: "Recursos avançados e facilidade. Aumentou minhas taxas de conversão. Solução completa para marketing digital!",
  },
  {
    id: "3",
    image: "/media/images/testimonyprofile3.png",
    name: "Vitor Ferreira",
    text: "A InteractPlay revolucionou a forma como crio VSLs! Os botões de ação interativos e o SmartPlay são um diferencial enorme para minhas vendas. Edição profissional e resultados impactantes em uma única plataforma!",
  },
  {
    id: "4",
    image: "/media/images/testimonyprofile4.png",
    name: "Fernando Augusto",
    text: "Finalmente uma plataforma completa para edição de vídeos! Com a InteractPlay, consigo criar conteúdos dinâmicos com o Flow e impulsionar minhas conversões de forma eficiente. A interface é intuitiva e os recursos são poderosos!",
  },
];
