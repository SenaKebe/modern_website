import React from "react";
import "./index.css";
import styles from "./style";
import {
  Navbar,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}></div>
      <Navbar />
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Hero</div>
      <Hero />
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing /> <Business /> <Button /> <CardDeal /> <Clients />
        <CTA /> <Footer /> <Hero /> <Stats /> <Testimonials />
      </div>
    </div>
  </div>
);

export default App;
