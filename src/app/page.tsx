import Hero from "@/components/Hero";
import TransporteSeguro from "@/components/TransporteSeguro";
import AluguelMotoristas from "@/components/AluguelMotoristas";
import LocacaoVeiculos from "@/components/LocacaoVeiculos";
import Galeria from "@/components/Galeria";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TransporteSeguro />
      <AluguelMotoristas />
      <LocacaoVeiculos />
      <Galeria />
      <Testimonials />
    </>
  );
}
