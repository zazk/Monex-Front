"use client";
import Image from "next/image";
import { CircleChevronDown, ChevronDown, Equal, RotateCw } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

import { IExchange } from "../utils/data";
import { validBgColor, validColor } from "../utils/colors";

type ExchangeItemProps = {
  data: IExchange;
};

export default function ExchangeItem({ data }: ExchangeItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="odd:bg-[#f9f9f9]  py-2 px-3">
      <div className="flex justify-between gap-x-20 items-center">
        <Image src={data.image} width={0} height={0} alt="" className="w-32 h-auto"/>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <CircleChevronDown className="w-5 h-5 cursor-pointer" />
        </button>
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className={
            "rounded-3xl py-3 px-6 text-xs uppercase text-white " + data.color
          }
        >
          Cambiar
        </a>
        <div className="grid grid-cols-2 gap-x-2">
          <div className={"w-18 " + validColor(data.buy_before)}>
            <p className="text-xl font-semibold">{data.buy}</p>
            <p
              className={
                "inline-flex items-center justify-center gap-x-1 px-1 text-sm " +
                validBgColor(data.buy_before)
              }
            >
              {data.buy_before === 0 ? (
                <Equal className="min-w-3 w-3" />
              ) : (
                <ChevronDown
                  className={twMerge(
                    "min-w-3 w-3",
                    data.buy_before > 0 && "rotate-180"
                  )}
                />
              )}
              {data.buy_before.toFixed(3)}
            </p>
          </div>
          <div className={"w-18 " + validColor(data.sale_before)}>
            <p className="text-xl font-semibold">{data.sale}</p>
            <p
              className={
                "inline-flex items-center justify-center gap-x-1 px-1 text-sm " +
                validBgColor(data.sale_before)
              }
            >
              {data.sale_before === 0 ? (
                <Equal className="min-w-3 w-3 h-3" />
              ) : (
                <ChevronDown
                  className={twMerge(
                    "min-w-3 w-3 h-3",
                    data.sale_before > 0 ? "rotate-180" : ""
                  )}
                />
              )}
              {data.sale_before.toFixed(3)}
            </p>
          </div>
          <p className="text-[10px] col-span-2 flex gap-1 justify-center items-center">
            <RotateCw className="w-2 h-2" />
            {data.time}
          </p>
        </div>
      </div>
      {isExpanded && (
        <div className="flex justify-between text-xs pt-3 pb-1">
          <div>
            {data.descriptions.map((d, idx) => (
              <p key={idx}>{d}</p>
            ))}
          </div>
          <div className="w-32">
            {data.schedules.map((d, idx) => (
              <p key={idx}>
                <span className="inline-block w-8">{d.days}</span>
                <span>{d.hours}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
