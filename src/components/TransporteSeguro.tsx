"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TransporteSeguro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Transporte Seguro Aeroporto</h2>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Oferecemos transporte particular com segurança e carros blindados do aeroporto até o seu destino.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Aeroporto para Destino</h3>
                <p className="text-gray-700">
                  Transporte do aeroporto até o local desejado com total segurança e conforto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Transporte Privado Seguro</h3>
                <p className="text-gray-700">
                  Serviço de transporte com veículos blindados e motoristas treinados para sua segurança.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Viagem Confortável e Segura</h3>
                <p className="text-gray-700">
                  Desfrute de uma viagem tranquila e segura com nosso serviço de transporte especializado.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3691802102.jpeg"
              alt="Transporte Seguro"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
