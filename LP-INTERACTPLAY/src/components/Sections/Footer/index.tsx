import styles from './styles.module.scss';
import facebook from "../../../../public/media/icons/logo-facebook.svg"
import instagram from "../../../../public/media/icons/logo-instagram.svg"
import linkedin from "../../../../public/media/icons/logo-linkedin.svg"
import twitter from "../../../../public/media/icons/logo-twitter.svg"

interface FooterLink {
  label: string;
  href: string;
  iconClass?: string;
  imgIcon?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {

  const pagesLinks: FooterLink[] = [
    { label: 'Início', href: '#home' },
    { label: 'Funcionalidades', href: '#highlights' },
    { label: 'Depoimentos', href: '#testimony' },
    { label: 'Contato', href: '#contact' },
  ];

  const platformLinks: FooterLink[] = [
    { label: 'Entrar', href: '#' },
    { label: 'Criar Conta', href: '#' },
  ];

  const aboutLinks: FooterLink[] = [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
  ];

  const socialLinks: FooterLink[] = [
    { label: 'Twitter', href: '#', imgIcon: twitter },
    { label: 'Facebook', href: '#', imgIcon: facebook },
    { label: 'Instagram', href: '#', imgIcon: instagram },
    { label: 'LinkedIn', href: '#', imgIcon: linkedin },
  ];

  const sections: FooterSection[] = [
    { title: 'Páginas', links: pagesLinks },
    { title: 'Plataforma', links: platformLinks },
    { title: 'Sobre', links: aboutLinks },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content_wrapper}>
        <div className={styles.footer_brand}>
          <div className={styles.footer_logo}>
            <img src="https://lp-interactiplay.vercel.app/media/images/logofooter_svg.svg" alt="Logo" />
          </div>
          <p className={styles.footer_description}>
            Plataforma intuitiva para edição de vídeos para vendas.
          </p>
        </div>

        {sections.map((section, index) => (
          <div className={styles.footer_section} key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={`${styles.footer_section} ${styles.footer_social}`}>
          <h3>Redes Sociais</h3>
          <div className={styles.social_icons}>
            {socialLinks.map((link, index) => (
              <a href={link.href} key={index} aria-label={link.label}>
                <img src={link.imgIcon} alt={`Ícone do ${link.label}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p>&copy;InteractPlay - Todos os direitos reservados</p>
        <span>Desenvolvido por <a target='_blank' href="https://pedroferreirasousa.vercel.app/">Pedro Ferreira</a></span>
      </div>
    </footer>
  );
};

export default Footer;