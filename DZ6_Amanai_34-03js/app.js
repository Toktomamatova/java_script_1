function openEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'flex';

    const todoText = document.getElementById('todo-text');
    const editInput = document.getElementById('editInput');
    editInput.value = todoText.value;
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

function saveEdit() {
    const todoText = document.getElementById('todo-text');
    const editInput = document.getElementById('editInput');

    const newText = editInput.value.trim();

    if (newText !== '') {
        todoText.value = newText;
        closeEditModal();
    } else {
        alert('Ошибка: Нельзя вводить пустоту или пробел.');
    }
}

