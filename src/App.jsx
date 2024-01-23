import React from "react";
import { Footer, Hero, PopularProducts, SuperQuality, Services, CustomerReviews } from "./sections/index.js";
import Nav from "./Components/Nav.jsx";

const App = () => {
  return (
    <main className="relative">
      <Nav /> 
      <section className="xl:padding-l wide:padding-r padding -b">
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'><Services /></section>
      <section className='padding bg-pale-blue'><CustomerReviews /></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer /></section>
    </main>
  );
}

export default App;