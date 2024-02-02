const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { format } = require('date-fns');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberOfAccounts = 10;
const accounts = [];

for (let i = 0; i < numberOfAccounts; i++) {
  const email = faker.internet.email();
  const password = faker.internet.password();
  const fname = faker.name.firstName();
  const lname = faker.name.lastName();
  const Data = faker.date.between('2023-01-01', new Date());
  const movType = Math.random() < 0.5 ? 'Receita' : 'Despesa';
  const Stt = Math.random() < 0.5 ? 'pago' : 'pendente';
  const currentDate = new Date();
  const formattedDateTime = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
  const formattedDatie = format(Data, 'dd/MM/yyyy');
  const formattedYear = format(Data, 'yyyy');
  const formattedMonth = format(Data, 'MM');

  const intes = faker.name.firstName();
  const randomNumber = getRandomInt(1, 100);
  const accname = faker.name.firstName();

  const account = {
    email: email,
    password: password,
    name: `${fname} ${lname}`,
    nomeconta: accname,
    Tmov: movType, 
    Dtran: formattedDatie,
    Dpag: formattedDatie,
    Year: formattedYear,
    Month: formattedMonth,
    desc: `Movimentação Teste ${formattedDateTime}`,
    int: intes,
    valor: `${randomNumber}.00`,
    status: Stt
  };

  accounts.push(account);
}

const jsonContent = JSON.stringify(accounts, null, 2);
const filePath = path.join(__dirname, 'cypress', 'fixtures', 'acconts.json');


fs.writeFileSync(filePath, jsonContent);

console.log(`Contas geradas e armazenadas em 'accounts.json'.`);
