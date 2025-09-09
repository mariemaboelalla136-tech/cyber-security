function saveNotes(page) {
    var notes = document.getElementById('notes').value;
    localStorage.setItem('notes_' + page, notes);
    alert('Notes saved!');
}
function loadNotes(page) {
    var saved = localStorage.getItem('notes_' + page);
    if (saved) {
        document.getElementById('notes').value = saved;
    }
    loadProgress(page);
}
function toggleCheckbox(page, id) {
    var checkbox = document.getElementById(id);
    localStorage.setItem(page + '_' + id, checkbox.checked);
}
function loadProgress(page) {
    var checkboxes = document.querySelectorAll('.progress input[type=checkbox]');
    checkboxes.forEach(cb => {
        var saved = localStorage.getItem(page + '_' + cb.id);
        if (saved === 'true') {
            cb.checked = true;
        }
    });
}
