import useFetchProducts from "../hooks/useFetchProducts";
import usePagination from "../hooks/usePagination";
import useSearchAndSort from "../hooks/useSearchAndSort";

function ProductList() {
  const { page, limit, skip, nextPage, prevPage, changeLimit } =
    usePagination();
  const { search, sort, setSearch, setSort } = useSearchAndSort();
  const { data, loading, error } = useFetchProducts({
    limit,
    skip,
    search,
    sort,
  });

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="">-- Hủy sắp xếp --</option>
        <option value="price-asc">Giá thấp → cao</option>
        <option value="price-desc">Giá cao → thấp</option>
        <option value="name-asc">Tên A → Z</option>
        <option value="name-desc">Tên Z → A</option>
      </select>

      <select
        value={limit}
        onChange={(e) => changeLimit(Number(e.target.value))}
      >
        <option value={6}>6 sản phẩm/trang</option>
        <option value={12}>12 sản phẩm/trang</option>
        <option value={20}>20 sản phẩm/trang</option>
      </select>

      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p>{error}</p>}

      <div>
        {data.products.map((item) => (
          <div key={item.id}>
            {item.title} - ${item.price}
          </div>
        ))}
      </div>

      <button onClick={prevPage}>⬅️ Trước</button>
      <span> Trang {page} </span>
      <button onClick={nextPage}>➡️ Tiếp</button>
    </div>
  );
}

export default ProductList;
