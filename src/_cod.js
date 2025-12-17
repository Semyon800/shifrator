

let result = "";
let rash;
let text;

btn.addEventListener('click', () => {
    text = "";
    text = inpCoder.value;
    rash = text.split("");

    for (let i = 0; i < rash.length; i++) {
        for (let j = 0; j < lett.length; j++) {
            if (rash[i] == lett[j]) {
                result += num[j] + " ";
                break;
            }
        }
    }

    inpCoder.value = result;
})

console.log(result);