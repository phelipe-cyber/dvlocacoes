"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#282d4f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg font-semibold">Serviços</h5>
          <Link
            href="https://api.whatsapp.com/send?phone=5511968400206&text=Olá!%20Gostaria%20de%20saber%20sobre%20os%20serviços!!!"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              src="https://ext.same-assets.com/2957437027.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </Link>
          <p className="text-sm">Locação de veículos para motoristas de app.</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h5 className="text-lg font-semibold">Contato</h5>
          <p className="text-sm">contato@dvlocacoes.com.br</p>
          <p className="text-sm">+55 11 96840-0206</p>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-sm">DV GONCALVES SERVIÇOS E COMÉRCIO LTDA</p>
          <p className="text-sm">© 2025. CNPJ:51.649.348/0001-45</p>
          <p className="text-sm mt-4">Serviço de transporte com veículos blindados e motoristas treinados para sua segurança.</p>
        </div>
      </div>
    </footer>
  );
}
