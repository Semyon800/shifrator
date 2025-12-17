import { littera, numCode } from './_sypher';

let result = "";
let cod;
let text = "";

export function decoder(inpDecoder) {
    text = "";
    text = inpDecoder.value;
    cod = text.split(" ");

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < numCode.length; j++) {
            if (text[i] == numCode[j]) {
                result += littera[j];
                break;
            }
        }
    }
    inpDecoder.value = result;
}

console.log(result);