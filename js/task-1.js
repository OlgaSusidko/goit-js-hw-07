/*Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
*/

const categories = document.querySelector("#categories");

    console.log(`Number of categories: ${categories.children.length}`);

/*
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
*/

const items = document.querySelectorAll(".item")

items.forEach(item => {
    console.log(`Category:${item.firstElementChild.textContent}`);

    console.log(`Elements: ${item.lastElementChild.children.length}`)
})







