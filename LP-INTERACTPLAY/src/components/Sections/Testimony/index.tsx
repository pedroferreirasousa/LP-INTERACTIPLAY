import React from "react";
import styles from "./styles.module.scss";
import { testimonials } from "../../../data/testimony";
import TestimonyCard from "../../TestimonyCard";




const Testimony = () => {
  return (
    <section className={styles.section}>
        <h1>Ouça nossos clientes!</h1>

        <div className={styles.cards__container}>
            {testimonials.map((testimonial) => (
                <TestimonyCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
    </section>
  );
};

export default Testimony;
