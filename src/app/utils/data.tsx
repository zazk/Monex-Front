export type IExchange = typeof exchanges[number]
export type IPrice = typeof prices[number]

export const exchanges = [
  {
    image: "/images/western-union.svg",
    name: "western-union",
    buy: "3,730",
    buy_before: 0.004,
    sale: "3,759",
    sale_before: 0,
    time: "10 min",
    color: "bg-[#000]",
    link: "https://www.westernunionperu.pe/cambiodemoneda?utm_source=ced&utm_content=listado",
    descriptions: [
      "Bancos: BCP, BBVA, Scotiabank, Banbif, Pichincha",
      "Cupon: WULLANOS",
    ],
    schedules: [{ days: "L-V", hours: "9 am - 5:00 pm" }],
  },
  {
    image: "/images/cambia-fx.svg",
    name: "cambia-fx",
    buy: "3.737",
    buy_before: -0.001,
    sale: "3.757",
    sale_before: 0.001,
    time: "2 hs",
    color: "bg-[#6362fb]",
    link: "https://cambiafx.pe/?utm_source=display&utm_medium=banner&utm_campaign=CED&utm_content=boton_cambiar",
    descriptions: [
      "Bancos: BCP, Interbank",
      "Cambio mínimo: 1",
      "Cupon: CED",
      "Tasas preferenciales: 5,000.00",
    ],
    schedules: [
      { days: "L-V", hours: "9 am - 7 pm" },
      { days: "S", hours: "10 am - 1 pm" },
    ],
  },
  {
    image: "/images/dichikash.svg",
    name: "dichikash",
    buy: "3.739",
    buy_before: 0.001,
    sale: "3.752",
    sale_before: 0.001,
    time: "4 hs",
    color: "bg-[#0B2057]",
    link: "https://dichikash.com/?utm_source=ced",
    descriptions: [
      "Bancos: BCP, BBVA, Interbank",
      "Cambio mínimo: 300",
      "Cupon: JESUSESLAVIDA",
    ],
    schedules: [
      { days: "L-V", hours: "9 am - 10 pm" },
      { days: "S", hours: "9 am - 10 pm" },
      { days: "D", hours: "10 am - 1 pm" },
    ],
  },
  {
    image: "/images/okane.svg",
    name: "okane",
    buy: "3.710",
    buy_before: -0.023,
    sale: "3.760",
    sale_before: 0.011,
    time: "20 min",
    color: "bg-[#000e8d]",
    link: "https://okanecambiodigital.com/?utm_source=ced#/",
    descriptions: ["Bancos: BCP"],
    schedules: [
      { days: "L-V", hours: "9 am - 6 pm" },
      { days: "S", hours: "9 am - 2 pm" },
    ],
  },
];

export const prices = [
  {
    image: "/images/sunat.svg",
    name: "sunat",
    buy: 3.696,
    buy_before: 0,
    sale: 3.705,
    sale_before: 0,
  },
  {
    image: "/images/paralelo.svg",
    name: "paralelo",
    buy: 3.71,
    buy_before: 0.01,
    sale: 3.75,
    sale_before: 0.01,
  },
];
