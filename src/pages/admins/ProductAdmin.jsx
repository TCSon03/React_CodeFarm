import useFetch from "../../hooks/useFetch";

const ProductAdmin = () => {
  const [product] = useFetch();
  console.log(product);
  
  return (
    <div>
      <table className="w-full">
        <thead className="">
          <tr className="bg-slate-100 border-b py-3">
            <th className="px-2 py-3">Id</th>
            <th>Title</th>
            <th>Des</th>
            <th>Priority</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr className="border-b" key={item.id}>
              <td className="py-3 px-2">{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductAdmin;
