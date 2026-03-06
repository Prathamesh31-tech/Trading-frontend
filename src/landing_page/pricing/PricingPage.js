import OpenAccount from "../OpenAccount";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import "./PricingPage.css";

export default function PricingPage() {
  return (
    <div id="pricingPage">
      <Hero />

      <OpenAccount />

      <Brokerage />
    </div>
  );
}
