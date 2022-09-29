
const Menu = ({ handleChangePage }) => {
    return(
        <div className="absolute right-0 dark:text-white">
            <button className="w-full rounded border border-red-600 py-1 px-2 mb-1 text-black hover:border-blue-300 dark:text-white animate-pulse" onClick={handleChangePage}>Draw</button>
            <button className="w-full rounded border border-red-600 py-1 px-2 text-black hover:border-blue-300 dark:text-white" onClick={handleChangePage}>Calculator</button>
        </div>
    )
}

export default Menu;