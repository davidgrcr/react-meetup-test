import { useFetch } from "./../util-hooks/useFetch";

export default function FavoritesPage() {
  const {data} = useFetch({
    url: "/data.json",
  });
  return (
    <section>
      <h1>Favorites Page</h1>
      <div>{JSON.stringify(data)}</div>
    </section>
  );
}
