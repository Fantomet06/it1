export function changeName(button, element, newname) {
    button.addEventListener('click', () => {
        element.textContent = "Hei, " + newname.value;
    });
}
