export default function getComfortFilter() {
  return {
    comfortKeys: ["1", "2", "3", "4", "5"],
    comfortCheckBoxes: [
      {
        displayName: "Extra Firm",
        firmness: 1,
        urlParam: "extrafirm",
        checked: false,
        disabled: false,
      },
      {
        displayName: "Firm",
        firmness: 2,
        urlParam: "firm",
        checked: false,
        disabled: false,
      },
      {
        displayName: "Medium",
        firmness: 3,
        urlParam: "medium",
        checked: false,
        disabled: false,
      },
      {
        displayName: "Plush",
        firmness: 4,
        urlParam: "plush",
        checked: false,
        disabled: false,
      },
      {
        displayName: "Ultra Plush",
        firmness: 5,
        urlParam: "ultraplush",
        checked: false,
        disabled: false,
      },
    ],
  };
}
