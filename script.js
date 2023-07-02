
function getMarkElements() {
    let markElements = document.querySelectorAll('.marks');
    return markElements;
}

function totalMarkElement() {
    let totalElement = document.querySelector('#total_marks');
    return totalElement;
}

getMarkElements().forEach(el => {
    el.addEventListener('input', addTotalMarks);
});
totalMarkElement().setAttribute('readonly', true);

function addTotalMarks() {
    let totalMarks = 0;
    getMarkElements().forEach(el => {
        if (el.value != '') {
            totalMarks += parseFloat(el.value);
        }
    });
    totalMarkElement().value = totalMarks;
}