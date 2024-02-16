export default function conditionalReturn(conditions, cases) {
  return cases[conditions] ?? cases["defaultCase"];
}
