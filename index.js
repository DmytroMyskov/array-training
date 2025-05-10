const shoppingList = [
  { name: 'Молоко', quantity: 2, isBought: false, pricePerUnit: 30, total: 60 },
  { name: 'Хліб', quantity: 1, isBought: true, pricePerUnit: 20, total: 20 },
  { name: 'Яблука', quantity: 5, isBought: false, pricePerUnit: 10, total: 50 },
  { name: 'Сир', quantity: 1, isBought: true, pricePerUnit: 100, total: 100 },
  { name: 'Картопля', quantity: 14, isBought: true, pricePerUnit: 7, total: 98 },
  { name: 'Морозиво', quantity: 2, isBought: false, pricePerUnit: 12, total: 24 },
];

function displayShoppingList(list) {
  const sortedList = [...list].sort((a, b) => a.isBought - b.isBought);
  console.log('Список покупок:');
  sortedList.forEach(item => {
    console.log(
      `${item.name} — ${item.quantity} шт. × ${item.pricePerUnit} грн = ${item.total} грн — ${item.isBought ? '✅ Куплено' : '❌ Не куплено'}`
    );
  });
}

for (var i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

function markAsBought(productName) {
  const item = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());
  if (item) {
    if (!item.isBought) {
      item.isBought = true;
      console.log(`Продукт "${item.name}" позначено як куплений.`);
    } else {
      console.log(`Продукт "${item.name}" вже був куплений.`);
    }
  } else {
    console.log(`Продукт "${productName}" не знайдено у списку.`);
  }
}

displayShoppingList(shoppingList);  // Виводимо початковий список покупок
markAsBought('Яйця'); // Позначаємо яйця як куплені

displayShoppingList(shoppingList);
markAsBought('Сир');

displayShoppingList(shoppingList);
markAsBought('Морозиво');