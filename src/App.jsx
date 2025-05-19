import useQueryParams from "./hooks/useFetchListWithParams";

function App() {
  const [products, loading, error] = useQueryParams("products", {});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1>Danh sach san pham</h1>

      {products &&
        products.map((item) => (
          <div key={item.id}>
            {item.id} - {item.title}
          </div>
        ))}
    </div>
  );
}

export default App;
