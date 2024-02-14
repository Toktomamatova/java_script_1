//1)
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagObject = {};
for (var i = 0; i < tags.length; i++) {
    if (tagObject[tags[i]]) {
        tagObject[tags[i]]++;
    } else {
        tagObject[tags[i]] = 1;
    }
}

var sortedTags = Object.entries(tagObject)
    .sort((a, b) => b[1] - a[1])
    .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});

console.log(sortedTags);


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
