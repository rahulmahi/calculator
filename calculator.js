
let screen = ""
let arr = [];

function val(num) {
    document.getElementById('input-box').value += num;
    screen += num;
}

function opera(opera1) {
    document.getElementById('input-box').value += opera1;

    if (screen != '') {
        arr.push(screen);

    }
    screen = '';
    arr.push(opera1);
    console.log(arr);
}

// function result() 
// {

//     inputBox.value = eval(inputBox.value)
// }
function result() {
    arr.push(screen);

    var x = [];
    var tot;

    for (i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '+':
                console.log(i);

                if (x.length == 0) {
                    tot = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
                    console.log("first" + tot);
                    x.push(tot);
                }
                else {

                    tot = x[0] + parseFloat(arr[i + 1]);
                    console.log(x[0]);
                    x = []
                    x.push(tot);
                }
                break;

            case '-':

                if (x.length == 0) {
                    tot = parseInt(arr[i - 1]) - parseInt(arr[i + 1]);
                    x.push(tot);
                }
                else {

                    tot = x[0] - parseInt(arr[i + 1]);
                    x = []
                    x.push(tot);
                }
                break;
            case '*':

                if (x.length == 0) {
                    tot = parseInt(arr[i - 1]) * parseInt(arr[i + 1]);
                    x.push(tot);
                }
                else {

                    tot = x[0] * parseInt(arr[i + 1]);
                    x = []
                    x.push(tot);
                }
                break;
            case '/':

                if (x.length == 0) {
                    tot = parseInt(arr[i - 1]) / parseInt(arr[i + 1]);
                    x.push(tot);
                }
                else {

                    tot = x[0] / parseInt(arr[i + 1]);
                    x = []
                    x.push(tot);
                }
                break;
        }
    }
    document.getElementById('input-box').value = tot;
    screen = tot.toString();
    arr = [];
    x = [];
}
function clear1() {
    screen = "";
    document.getElementById('input-box').value = screen;
    arr = [];
}
