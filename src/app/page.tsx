import Image from "next/image";
import Link from "next/link";
import { CircleChevronDown } from "lucide-react";

import { exchanges, prices } from "./utils/data";
import ExchangeItem from "./components/ExchangeItem";
import PriceItem from "./components/PriceItem";

export default function Home() {
  return (
    <>
      <header className="shadow">
        <nav className="container mx-auto py-4 flex items-center gap-x-12">
          <Image
            src="/images/logo.svg"
            alt=""
            className="w-auto h-12"
            width={0}
            height={0}
          />

          <div className="flex font-semibold gap-x-10">
            <Link href="empty">Quienes somos</Link>
            <Link href="empty">Contacto</Link>
          </div>
        </nav>
      </header>
      <main className="">
        <section className="container mx-auto pt-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold mb-3">Cambio Online</h2>

            <div className="flex gap-x-2 px-3 text-xs mb-1">
              <p className="flex-1 text-xs flex items-center gap-x-6">
                <span>Revisa quien está cambiando</span>
                <CircleChevronDown className="w-5" />
              </p>
              <p className="w-18 text-center">Compra</p>
              <p className="w-18 text-center">Venta</p>
            </div>
            <div className="">
              {exchanges.map((d) => (
                <ExchangeItem key={d.name} data={d} />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#fafafa]">
          <div className="container mx-auto py-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-3">
                Precio del dólar en Perú
              </h2>

              <div className="flex justify-end gap-x-6 px-3 py-2 text-xs">
                <p className="w-18 text-center">Compra</p>
                <p className="w-18 text-center">Venta</p>
              </div>

              <div className="">
                {prices.map((d) => (
                  <PriceItem key={d.name} data={d} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0096a6] text-white py-10">
          <div className="container mx-auto grid grid-cols-3">
            <div>
              <h2 className="font-semibold text-xl mb-3">Contáctanos</h2>
              <Image
                src="/images/logo.svg"
                alt=""
                className="w-auto h-12"
                width={0}
                height={0}
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-3">Secciones</h2>
              <Link href="empty">Quienes somos</Link>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-3">Políticas</h2>
              <Link href="empty">Contacto</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
