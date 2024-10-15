class DOMListManipulator {
    constructor() {
        this.button = document.querySelector("#set-even-or-odd");
        this.button.addEventListener("click", this.setEvenOrOdd.bind(this));
    }

    setEvenOrOdd() {
        const listItems = document.querySelectorAll("#bunch-of-numbers li");
        listItems.forEach((item) => {
            if (item.textContent % 2 === 0) {
                return;
            }

            item.appendChild(document.createTextNode(" is an odd number."));
        });
    }
}

const domListManipulator = new DOMListManipulator();