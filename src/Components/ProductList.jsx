import useGetList from "../hooks/useFetchList";

function ProductList() {
  const [products] = useGetList("products");
  return (
    <div className="container mx-auto border border-[#b9b9b9] rounded-lg mt-5">
      <div className="px-10 py-6 border-b">
        <h1 className="text-xl font-semibold font-poppins">
          Danh sach san pham
        </h1>
      </div>

      <div className="p-10">
        <div className="px-8 border border-[#b9b9b9] rounded-lg">
          <div className="py-6">
            <input
              type="text"
              placeholder="Search..."
              className="px-6 py-2 font-medium border rounded-lg"
            />
          </div>
          <table className="w-full table-fixed">
            <thead>
              <tr className=" border-y">
                <th className="py-5 font-medium text-left text-[#5f5d5d]">
                  Order
                </th>
                <th className="py-5 font-medium text-left text-[#5f5d5d]">
                  Name
                </th>
                <th className="py-5 font-medium text-left text-[#5f5d5d]">
                  Image
                </th>
                <th className="py-5 font-medium text-left text-[#5f5d5d]">
                  Cate
                </th>
                <th className="py-5 font-medium text-left text-[#5f5d5d]">
                  Price
                </th>
                <th className="py-5 font-medium text-left text-[#5f5d5d]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.thumbnail} alt="" />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>
                      <button>Delete</button>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
