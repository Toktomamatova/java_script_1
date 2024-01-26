//1)
var firstArray = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var secondArray = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

var sorted = firstArray
    .filter(num => secondArray.includes(num))
    .sort((n1, n2) => n2 - n1);

console.log(sorted);

//2)
function ShortName(surname, name, middleName) {
    const firstInitial = name.charAt(0).toUpperCase();
    const middleInitial = middleName.charAt(0).toUpperCase();

    const shortName = `${surname} ${firstInitial}.${middleInitial}.`;
    return shortName;
}
const shortForm = ShortName("Toktomamatova", "Amanai", "Shermamatovna");
console.log(shortForm);

//3)
const bookTitles = ['Маленький принц', 'Гарри Поттер и узник Азкабана','Мосты округа Мэдисон','Ветер в ивах','Неудачники','Гордость и предубеждение','Виноваты звезды'];
function filterBooksWithU(books) {
    const booksWithU = bookTitles.filter(title => title.toLowerCase().includes('у'));
    const booksWithoutU = bookTitles.filter(title => !title.toLowerCase().includes('у'));

    console.log("Книги с буквой 'у':", booksWithU);
    console.log("Все остальные книги:", booksWithoutU);
}
    filterBooksWithU(...bookTitles);

//4)
const users = [
    { name: "Доён", birthDate: "1996-02-01" },
    { name: "Тэён", birthDate: "1995-07-01" },
    { name: "Марк", birthDate: "1995-02-10" },
    { name: "Чону", birthDate: "1998-02-19" },
    { name: "Юно", birthDate: "1997-02-14" }
];

users.forEach(user => {
    const formattedDate = new Date(user.birthDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    console.log(`Пользователь ${user.name} родился ${formattedDate}`);
});
