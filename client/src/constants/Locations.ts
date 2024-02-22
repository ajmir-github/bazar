export interface Location {
  id: string;
  name: {
    en: string;
    da?: string;
    pa?: string;
  };
}

const Locations: Location[] = [
  { id: "1", name: { en: "Badakhshan" } },
  { id: "2", name: { en: "Badghis" } },
  { id: "3", name: { en: "Baghlan" } },
  { id: "4", name: { en: "Balkh" } },
  { id: "5", name: { en: "Bamyan" } },
  { id: "6", name: { en: "Farah" } },
  { id: "7", name: { en: "Faryab" } },
  { id: "8", name: { en: "Ghazni" } },
  { id: "9", name: { en: "Ghor" } },
  { id: "10", name: { en: "Helmand" } },
  { id: "11", name: { en: "Herat" } },
  { id: "12", name: { en: "Jowzjan" } },
  { id: "13", name: { en: "Kabul" } },
  { id: "14", name: { en: "Kandahar" } },
  { id: "15", name: { en: "Kapisa" } },
  { id: "16", name: { en: "Khost" } },
  { id: "17", name: { en: "Kunar" } },
  { id: "18", name: { en: "Kunduz" } },
  { id: "19", name: { en: "Laghman" } },
  { id: "20", name: { en: "Logar" } },
  { id: "21", name: { en: "Nangarhar" } },
  { id: "22", name: { en: "Nimruz" } },
  { id: "23", name: { en: "Nuristan" } },
  { id: "24", name: { en: "Paktia" } },
  { id: "25", name: { en: "Paktika" } },
  { id: "26", name: { en: "Panjshir" } },
  { id: "27", name: { en: "Parwan" } },
  { id: "28", name: { en: "Samangan" } },
  { id: "29", name: { en: "Sar-e Pol" } },
  { id: "30", name: { en: "Samangan" } },
  { id: "31", name: { en: "Takhar" } },
  { id: "32", name: { en: "Uruzgan" } },
  { id: "33", name: { en: "Wardak" } },
  { id: "34", name: { en: "Zabul" } },
];
export default Locations;
