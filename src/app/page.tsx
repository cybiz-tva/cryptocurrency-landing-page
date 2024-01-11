import { Header } from "@/components/Header";
import { FirstBlock } from "@/components/FirstBlock";
import { CounterData } from "@/components/CounterData/CounterData";
import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { ControlBilling } from "@/components/ControlBilling";
import { Testimonials } from "@/components/Testimonials";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Footer } from "@/components/Footer/";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseYourCards />
      <ControlBilling />
      <Testimonials />
      <PaymentsMethods />
      <Footer />
    </>
  );
}
