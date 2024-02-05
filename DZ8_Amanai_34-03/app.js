const movies = [
    { title: 'The Dark Knight', rating: 9.1, year: 2008, director: 'Christopher Nolan' },
    { title: 'Twilight', rating: 9.8, year: 2010, director: 'Anna Nolan' },
    { title: 'Spider man', rating: 8.9, year: 2013, director: 'Bob Collinz' },
    { title: 'It 2', rating: 3.4, year: 2022, director: 'Andrey Minin' },
];

function renderTable() {
    const tableBody = document.querySelector('#filmsTable tbody');

    movies.forEach(movie => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = movie.title;
        row.insertCell(1).textContent = movie.year;
        row.insertCell(2).textContent = movie.rating;
        row.insertCell(3).textContent = movie.director;

        const buyButtonCell = row.insertCell(4);
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Купить';
        buyButton.addEventListener('click', () => openConfirmationModal(row));
        buyButtonCell.appendChild(buyButton);
    });
}

function openConfirmationModal(row) {
    selectedRow = row;
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'block';
}

function confirmPurchase() {
    const cells = selectedRow.cells;
    for (let i = 0; i < cells.length - 1; i++) {
        cells[i].style.backgroundColor = '#ccc';
    }

    const buyButton = cells[4].querySelector('button');
    buyButton.style.display = 'none';

    closeConfirmationModal();
}

function closeConfirmationModal() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'none';
}

renderTable();


