export default function getComfortFilter() {
  return [
    {
      displayName: "Extra Firm",
      firmness: 1,
      urlParam: "extrafirm",
      checked: false,
    },
    {
      displayName: "Firm",
      firmness: 2,
      urlParam: "firm",
      checked: false,
    },
    {
      displayName: "Medium",
      firmness: 3,
      urlParam: "medium",
      checked: false,
    },
    {
      displayName: "Plush",
      firmness: 4,
      urlParam: "plush",
      checked: false,
    },
    {
      displayName: "Ultra Plush",
      firmness: 5,
      urlParam: "ultraplush",
      checked: false,
    },
  ];
}
