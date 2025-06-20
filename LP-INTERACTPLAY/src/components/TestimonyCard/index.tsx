import styles from "./styles.module.scss";
import React from "react";
import  { type Testimonial } from "../../data/testimony";

interface TestimonialProps {
    testimonial: Testimonial;
}


const TestimonyCard: React.FC<TestimonialProps> = ({testimonial}) => {

    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.card__image} />
                <div className={styles.card__content}>
                    <h3 className={styles.card__name}>{testimonial.name}</h3>
                </div>
            </div>
            <p className={styles.card__text}>{testimonial.text}</p>
        </div>
    )
}

export default TestimonyCard;