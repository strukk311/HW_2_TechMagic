export const SWcount = () => {
  let SWCurrentValue = 0;
  return (str) => {
    return str.toLowerCase().includes("starw")
      ? ++SWCurrentValue
      : SWCurrentValue;
  };
};

let count = SWcount();