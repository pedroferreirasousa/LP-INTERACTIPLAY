import styles from "./styles.module.scss";

interface IProps {
    title: string;
    description: string;
    icon: string;
    key: number;
}

const Features = ({ title, description, icon, key }: IProps) => {
    return (
        <div className={styles.feature} key={key} >
            <div className={styles.feature__content}>
                <img src={icon} alt="icon" className={styles.feature__icon} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Features;