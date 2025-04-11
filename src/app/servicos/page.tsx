"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ServicosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-3xl font-semibold text-center mb-6">Nossos Serviços</h1>
        <p className="text-gray-700 text-center mb-4 max-w-3xl mx-auto">
          Oferecemos carros de qualidade para motoristas de aplicativo com preços acessíveis e flexibilidade.
        </p>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Temos carros blindados e serviços particulares
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="overflow-hidden bg-[#fef2ee] border-none shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Suporte 24/7</h3>
              <p className="text-gray-700 mb-6">
                Nossa equipe está disponível a qualquer hora para ajudar motoristas com dúvidas e suporte necessário.
              </p>
              <div className="relative h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3267788371.jpeg"
                  alt="Suporte 24/7"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-[#fef2ee] border-none shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Locação Flexível</h3>
              <p className="text-gray-700 mb-6">
                Veículos disponíveis para locação com tarifas acessíveis e opções de contrato personalizadas para motoristas.
              </p>
              <div className="relative h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/88817054.jpeg"
                  alt="Locação Flexível"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50 -mx-4 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Transporte Seguro</h2>
          <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            Oferecemos transporte com veículos blindados e motoristas treinados para sua segurança e conforto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[264px] rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3971285470.jpeg"
                alt="Veículo blindado"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-md bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Veículos Blindados</h3>
                  <p className="text-gray-700">
                    Transporte seguro com veículos blindados para sua proteção em todas as viagens.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Motoristas Treinados</h3>
                  <p className="text-gray-700">
                    Nossos motoristas são altamente treinados para garantir sua segurança durante o transporte.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Serviço Personalizado</h3>
                  <p className="text-gray-700">
                    Oferecemos serviços personalizados para atender às suas necessidades de transporte com segurança.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Locação Veículos</h2>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Oferecemos locação de veículos para motoristas de aplicativo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Card className="overflow-hidden border-none shadow-sm">
            <div className="relative h-[240px]">
              <Image
                src="https://ext.same-assets.com/3255826925.jpeg"
                alt="Motorista de aplicativo"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Veículos Econômicos</h3>
              <p className="text-gray-700">
                Aluguel acessível para motoristas de aplicativos em crescimento.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-sm">
            <div className="relative h-[240px]">
              <Image
                src="https://ext.same-assets.com/282064810.jpeg"
                alt="Frota variada"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Frota Variada</h3>
              <p className="text-gray-700">
                Diversos modelos para atender suas necessidades de transporte.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-sm">
            <div className="relative h-[240px]">
              <Image
                src="https://ext.same-assets.com/3621358178.jpeg"
                alt="Serviço rápido"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Serviço Rápido</h3>
              <p className="text-gray-700">
                Aluguel ágil e sem complicações para motoristas de app.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
