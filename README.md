# Crypto Calculator
## Dima ProCrypto

## Подготовим и задеплоим контракт

1. Установим Node.js с офф сайта
https://nodejs.org/ru/download/

2. Клонируем репозиторий 
```sh
git clone https://github.com/parsekon/Calculator.git
```

3. В папке Calculator запускаем команду
```sh
cd Calculator
npm install
```

4. Создаем файл .env
```sh
touch .env
```

5. Открываем его в редакторе и вставляем следующий код:
```sh
NETWORK="goerli"
INFURA_URL="https://goerli.infura.io/v3/000000000xxxINFURA_URLxxx0000"
PRIVATE_KEY="000xxxPRIVATE_KEYxxx000"
ETHERSCAN_API="000XXXETHERSCAN_APIXXX000"
```
INFURA_URL можно получить на сайте: https://app.infura.io/

ETHERSCAN_API в личном кабинете https://etherscan.io/

PRIVATE_KEY копируете из своего MetaMask. 

В этом проекте я использую тестовую сеть Goerli, вам нужно получить тестовый ETH:
https://goerlifaucet.com/

!!! Для тестового проекта лучше НЕ использовать свой основной кошелек, 
но в файле .gitignore прописаны исключения для git на эти файлы

6. Деплоим контракт
```sh
npx hardhat run scripts/deploy.js --network goerli
```

Копируем адрес контракта из консоли

7. Верифицируем контракт
```sh
npx hardhat verify --network goerli ADDRESS_CONTR_AIRDROP
```

# Настраиваем фронт

1. Переходим в папку client и устанавливаем зависимости
```sh
cd client
npm install
```

2. Запускаем локальный проект
```sh
npm start
```

3. Переходим локально http://localhost:3000/ в браузере, где установлен Metamask
и подключаемся
