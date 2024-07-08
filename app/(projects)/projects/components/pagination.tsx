const Pagination = ({ items, pageSize, currentPage, onPageChange }: any) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10
  console.log(pagesCount); //
  if (pagesCount === 1) {
    // console.log(pagesCount);
    return null;
  }
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  // console.log(pages);
  return (
    <>
      <div className="flex justify-end">
        {pages.map((page) => (
          <div key={page}>
            <a
              className="cursor-pointer"
              onClick={() => onPageChange(page)}
              key={page}
            >
              <p
                className={
                  page === currentPage
                    ? "flex justify-center items-center w-8 h-8 cursor-pointer bg-blue-900 text-white font-bold"
                    : "flex justify-center items-center w-8 h-8 cursor-pointer bg-gray-50 text-gray-600 font-bold"
                }
              >
                {page}
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default Pagination;
