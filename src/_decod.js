import { littera, numCode } from './_sypher';

let result = "";
let cod;
let text = "";

export function decoder (inpDecoder) {
    text = inpDecoder.value;
    cod = text.split(" ");

    for (let i = 0; i < cod.length; i++) {
        for (let j = 0; j < numCode.length; j++) {
            if (cod[i] == numCode[j]) {
                result += littera[j];
                break;
            }
        }
    }
    inpDecoder.value = result;
}

console.log(result);