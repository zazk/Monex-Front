import Image from "next/image";
import { CircleChevronDown, ChevronDown, Equal } from "lucide-react";
import { twMerge } from "tailwind-merge";

const data = [
  {
    image: "/western-union.svg",
    name: "western-union",
    buy: "3,730",
    buy_before: 0.004,
    sale: "3,759",
    sale_before: 0,
    time: "10 min",
    color: "bg-[#000]",
  },
  {
    image: "/cambia-fx.svg",
    name: "cambia-fx",
    buy: "3.737",
    buy_before: -0.001,
    sale: "3.757",
    sale_before: 0.001,
    time: "2 hs",
    color: "bg-[#6362fb]",
  },
  {
    image: "/dichikash.svg",
    name: "dichikash",
    buy: "3.739",
    buy_before: 0.001,
    sale: "3.752",
    sale_before: 0.001,
    time: "4 hs",
    color: "bg-[#0B2057]",
  },
  {
    image: "/okane.svg",
    name: "okane",
    buy: "3.710",
    buy_before: -0.023,
    sale: "3.760",
    sale_before: 0.011,
    time: "20 min",
    color: "bg-[#000e8d]",
  },
];

const data2 = [
  {
    image: "/sunat.svg",
    name: "sunat",
    buy: 3.696,
    buy_before: 0,
    sale: 3.705,
    sale_before: 0,
  },
  {
    image: "/paralelo.svg",
    name: "paralelo",
    buy: 3.71,
    buy_before: 0.01,
    sale: 3.75,
    sale_before: 0.01,
  },
];

export default function Home() {
  const validColor = (data: number) => {
    return data > 0 ? "text-[#02a702]" : data < 0 ? "text-[#ed1c24]" : "";
  }

  const validBgColor = (data: number) => {
    return data > 0 ? "bg-[#e9f4eb]" : data < 0 ? "bg-[#f9e9e7]" : "";
  }

  return (
    <>
      <header>
        <nav className="container mx-auto py-4">
          <Image src="/logo.svg" alt="" width={95} height={50} priority />
        </nav>
      </header>
      <main className="">
        <section className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold mb-3">Cambio Online</h2>

            <div className="flex gap-x-2 px-3 text-xs">
              <p className="flex-1 text-xs text-[#0096a6] flex items-center gap-x-6">
                <span>Revisa quien está cambiando</span>
                <CircleChevronDown className="w-5" />
              </p>
              <p className="w-18 text-center">Compra</p>
              <p className="w-18 text-center">Venta</p>
            </div>
            <div className="">
              {data.map((d) => (
                <div
                  key={d.name}
                  className="flex justify-between gap-x-20 items-center py-2 px-3 odd:bg-[#f9f9f9]"
                >
                  <Image src={d.image} width={120} height={0} alt="" />
                  <CircleChevronDown className="w-5" />
                  <button
                    className={
                      "rounded-3xl py-3 px-6 text-xs uppercase text-white " +
                      d.color
                    }
                  >
                    Cambiar
                  </button>
                  <div className="grid grid-cols-2 gap-x-2">
                    <div className={"w-18 " + validColor(d.buy_before)}>
                      <p className="text-xl font-semibold">{d.buy}</p>
                      <p
                        className={
                          "inline-flex items-center justify-center gap-x-1 px-1 text-sm " +
                          validBgColor(d.buy_before)
                        }
                      >
                        {d.buy_before === 0 ? (
                          <Equal className="min-w-3 w-3" />
                        ) : (
                          <ChevronDown
                            className={twMerge(
                              "min-w-3 w-3",
                              d.buy_before > 0 ? "rotate-180" : ""
                            )}
                          />
                        )}
                        {d.buy_before.toFixed(3)}
                      </p>
                    </div>
                    <div className={"w-18 " + validColor(d.sale_before)}>
                      <p className="text-xl font-semibold">{d.sale}</p>
                      <p
                        className={
                          "inline-flex items-center justify-center gap-x-1 px-1 text-sm " +
                          validBgColor(d.sale_before)
                        }
                      >
                        {d.sale_before === 0 ? (
                          <Equal className="min-w-3 w-3" />
                        ) : (
                          <ChevronDown
                            className={twMerge(
                              "min-w-3 w-3",
                              d.sale_before > 0 ? "rotate-180" : ""
                            )}
                          />
                        )}
                        {d.sale_before.toFixed(3)}
                      </p>
                    </div>
                  </div>
                </div>
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
                {data2.map((d) => (
                  <div
                    key={d.name}
                    className="flex justify-between gap-x-6 items-center py-2 px-3"
                  >
                    <Image src={d.image} width={24} height={24} alt="" />
                    <p className="capitalize flex-1 text-xl/tight">{d.name}</p>
                    <div className={"w-18 " + validColor(d.buy_before)}>
                      <p className="text-xl font-semibold">{d.buy}</p>
                      <p
                        className={
                          "inline-flex items-center justify-center gap-x-1 px-1 text-sm " +
                          validBgColor(d.buy_before)
                        }
                      >
                        {d.buy_before === 0 ? (
                          <Equal className="min-w-3 w-3" />
                        ) : (
                          <ChevronDown
                            className={twMerge(
                              "min-w-3 w-3",
                              d.buy_before > 0 ? "rotate-180" : ""
                            )}
                          />
                        )}
                        {d.buy_before.toFixed(d.buy_before === 0 ? 3 : 2)}
                      </p>
                    </div>
                    <div className={"w-18 " + validColor(d.sale_before)}>
                      <p className="text-xl font-semibold">{d.sale}</p>
                      <p
                        className={
                          "inline-flex items-center justify-center gap-x-1 px-1 text-sm " +
                          validBgColor(d.sale_before)
                        }
                      >
                        {d.sale_before === 0 ? (
                          <Equal className="min-w-3 w-3" />
                        ) : (
                          <ChevronDown
                            className={twMerge(
                              "min-w-3 w-3",
                              d.sale_before > 0 ? "rotate-180" : ""
                            )}
                          />
                        )}
                        {d.sale_before.toFixed(d.sale_before === 0 ? 3 : 2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
