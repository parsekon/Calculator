const Menu = ({ handleChangePage, modalOpen }) => {
  return (
    <div className="absolute right-0 dark:text-white">
      <button
        className="mb-1 w-full animate-pulse rounded border border-red-600 py-1 px-1 text-black hover:border-blue-300 dark:text-white"
        onClick={handleChangePage}
      >
        Draw
      </button>
      <button
        className="w-full mb-1 rounded border border-red-600 py-1 px-1 text-black hover:border-blue-300 dark:text-white"
        onClick={handleChangePage}
      >
        Calculator
      </button>
      <button
        onClick={modalOpen}
        className="w-full rounded border border-red-600 py-1 px-1 text-black hover:border-blue-300 dark:text-white"
      >
        Rules
      </button>
    </div>
  );
};

export default Menu;
