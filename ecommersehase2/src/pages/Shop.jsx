import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Popular } from "../components/Popular/Popular";
import { Offers } from "../components/Offers/Offers";
import { Newcollection } from "../components/Newcollection/Newcollection";
import { Newsletter } from "../components/Newsletter/Newsletter";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollection />
      <Newsletter />
    </div>
  );
};
