let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let value_on_screen = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            value_on_screen += buttonText;
            screen.value = value_on_screen;
        }
        else if (buttonText == 'sin') {

            screen.value = Math.sin(value_on_screen);

        }
        else if (buttonText == 'cos') {
            screen.value = Math.cos(value_on_screen);

        }
        else if (buttonText == 'tan') {
            screen.value = Math.tan(value_on_screen);

        }
        else if (buttonText == 'cosec') {
            screen.value = 1 / Math.sin(value_on_screen);

        }
        else if (buttonText == 'sec') {
            screen.value = 1 / Math.cos(value_on_screen);

        }
        else if (buttonText == 'C') {
            value_on_screen = "";
            screen.value = value_on_screen;
        }
        else if (buttonText == '=') {

            screen.value = eval(value_on_screen);
        }
        else if (buttonText == '<-') {
            screen.value = value_on_screen.slice(0, -1);
            value_on_screen = screen.value;


        }
        else {
            value_on_screen += buttonText;
            screen.value = value_on_screen;
        }
    })
}