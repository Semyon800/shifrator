import { littera, numCode } from './_sypher';

let result = "";
let cod;
let text = "";

export function coder (inpCoder) {
    text = inpCoder.value;
    cod = text.split("");

    for (let i = 0; i < cod.length; i++) {
        for (let j = 0; j < littera.length; j++) {
            if (cod[i] == littera[j]) {
                result += numCode[j] + " ";
                break;
            }
        }
    }
    inpCoder.value = result;
}

console.log(result);