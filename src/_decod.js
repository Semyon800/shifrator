

let message;
let desh;
let res;

export function decoder(mn, mb, inpDecoder) {
    res = "";
    message = inpDecoder.value;
    desh = message.split(" ");

    for (let i = 0; i < desh.length; i++) {
        for (let j = 0; j < mn.length; j++) {
            if (desh[i] == mn[j]) {
                res += mb[j];
                break;
            }
        }
    }

    inpDecoder.value = res;
}

console.log(res);