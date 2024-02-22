export interface Condition {
  id: string;
  name: {
    en: string;
    da?: string;
    pa?: string;
  };
}

const Conditions: Condition[] = [
  { id: "1", name: { en: "New" } },
  { id: "2", name: { en: "Barely Used" } },
  { id: "3", name: { en: "Used" } },
  { id: "4", name: { en: "Old" } },
  { id: "5", name: { en: "Broken" } },
];
export default Conditions;
