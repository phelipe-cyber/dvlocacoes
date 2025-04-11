"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function LocacaoVeiculos() {
  return (
    <section className="py-16 bg-[#fef2ee]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Locação de Veículos
        </h2>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Oferecemos locação de veículos para motoristas de aplicativo com preços acessíveis e flexibilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/1052168070.jpeg"
              alt="Aplicativo Uber no celular"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Aluguel Flexível</h3>
                <p className="text-gray-700">
                  Oferecemos opções de aluguel flexível para que você possa escolher o que melhor se adapta.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Veículos para Motoristas</h3>
                <p className="text-gray-700">
                  Alugue um carro ideal para suas necessidades como motorista de aplicativo e maximize seus ganhos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Frota Variada</h3>
                <p className="text-gray-700">
                  Disponibilizamos uma frota variada de veículos para atender diferentes perfis de motoristas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
