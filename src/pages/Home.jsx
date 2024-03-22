import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import {Footer, CreateTheEnd} from "../components/Footer";
import Exceed from "../components/Exceed";
import Registration from "../components/Registration"
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section exceeding_all_expectations">
        <Exceed />
      </section>
      <section className="section registration_section">
        <Registration />
      </section>
      <section className="section blog_section">
        <Blog />
      </section>
      <section className="section footer">
        <Footer />
      </section>
      <section className="section law_protected">
        <CreateTheEnd/>
      </section>
    </>
  );
};

export default Home;
