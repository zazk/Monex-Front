export const validColor = (value: number) => {
  return value > 0 ? "text-[#02a702]" : value < 0 ? "text-[#ed1c24]" : "";
};

export const validBgColor = (value: number) => {
  return value > 0 ? "bg-[#e9f4eb]" : value < 0 ? "bg-[#f9e9e7]" : "";
};
