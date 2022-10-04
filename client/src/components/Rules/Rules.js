const Rules = ({ children, isOpen, onClose, stopClick }) => {
    return isOpen ? (
      <div
        onClick={onClose}
        className="w-full h-full z-10 bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
          <div
            onClick={stopClick}
            className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36"
          >
            <h1 className="mb-8 text-red-700 text-2xl">Rules</h1>
            <div role="banner">
                <h2 className="text-red-600 text-xl mb-2">Список дел</h2>
                <ul className="dark:text-white text-gray-700 list-disc mb-4">
                    <li>Для использования органайзера переключитесь на сеть Rinkeby</li>
                    <li>Запишите заметку и нажмите "Добавить задачу", подтвердите транзакцию в окне Metamask</li>
                    <li>Для удаления заметки нажмите на корзинку справа от записи и подтвердите транзакцию в Metamask</li>
                </ul>
                <h2 className="text-red-600 text-xl mb-2">Drawing</h2>
                <ul className="dark:text-white text-gray-700 list-disc">
                    <li>Преключитесь на меню "Drawing", рисуйте, нажимая на левую кнопку мыши</li>
                    <li>Для очистки перейдите на вкладку "Calculator" и снова вернитесь к рисованию</li>
                </ul>
            </div>
            <button
              onClick={onClose}
              className="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              aria-label="close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      </div>
    ) : null;
  };
  
  export default Rules;
  