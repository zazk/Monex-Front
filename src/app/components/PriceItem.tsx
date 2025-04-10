import Image from "next/image";
import { ChevronDown, Equal } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { IPrice } from "../utils/data";
import { validBgColor, validColor } from "../utils/colors";

type PriceItemProps = {
  data: IPrice;
};

export default function PriceItem({ data }: PriceItemProps) {
  return (
    <div className="flex justify-between gap-x-6 items-center py-2 px-3">
      <Image src={data.image} width={0} height={0} alt="" className="w-6 h-6" />
      <p className="capitalize flex-1 text-xl/tight">{data.name}</p>
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
                data.buy_before > 0 ? "rotate-180" : ""
              )}
            />
          )}
          {data.buy_before.toFixed(data.buy_before === 0 ? 3 : 2)}
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
            <Equal className="min-w-3 w-3" />
          ) : (
            <ChevronDown
              className={twMerge(
                "min-w-3 w-3",
                data.sale_before > 0 ? "rotate-180" : ""
              )}
            />
          )}
          {data.sale_before.toFixed(data.sale_before === 0 ? 3 : 2)}
        </p>
      </div>
    </div>
  );
}
