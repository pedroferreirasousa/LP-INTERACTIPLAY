import FormCadastro from "../../Form";
import styles from "./styles.module.scss";


const Contact = () => {
    return (
        <div className={styles.section} id="contact">
            <div className={styles.left__container}>
            <h2>Transforme sua Edição de Vídeo com a InteractiPlay!</h2>
            <span>Preencha o formulário para receber orientação personalizada sobre como a InteractPlay pode revolucionar sua edição de vídeo!</span>
            </div>

            <div className={styles.right__container}>
                <FormCadastro />
            </div>

        </div>
    )
};

export default Contact;