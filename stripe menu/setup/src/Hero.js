import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero= ()=>{
  const {closeSubMenu } = useGlobalContext;
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Financial infrastructure for the internetFinancial infrastructure //
            for the internet
          </h1>
          <p>
            Financial infrastructure for the internetFinancial infrastructure //
            for the internet Millions of companies of all sizes use Stripe //
            online and in person to accept payments, send payouts, automate //
            financial processes, and ultimately grow revenue. Start now Contact
            // sales
          </p>
        </article>
        <article className="hero-image">
          <img src={phoneImg} alt="hero image " />
        </article>
      </div>
    </section>
  );
}


//  const Hero = ()=>{
//   const { closeMenu } = useGlobalContext();
//    return (
//      <section className="hero">
//        <div className="hero-center">
//          <article className="hero-info">
//            <h1>
//              Financial infrastructure for the internetFinancial infrastructure
//              for the internet
//            </h1>
//            <p>
//              Financial infrastructure for the internetFinancial infrastructure
//              for the internet Millions of companies of all sizes use Stripe
//              online and in person to accept payments, send payouts, automate
//              financial processes, and ultimately grow revenue. Start now Contact
//              sales
//            </p>
//          </article>
//          <article className="hero-images">
//           <img src={phoneImg} alt="hero image" />
//          </article>
//        </div>
//      </section>
//    );
//  }