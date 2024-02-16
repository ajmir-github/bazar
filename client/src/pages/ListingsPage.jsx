export const listingsPageLoader = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 2000);
  });
};

export default function ListingsPage() {
  return "ListingsPage";
}
