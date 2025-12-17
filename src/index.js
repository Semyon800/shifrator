
import {decoder} from './_decod';

let mb = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё', ',', '.', ' ', '!', '?'];
let mn = ['120', '76', '3', '145', '101', '99', '241', '29', '307', '6', '214', '157', '34', '75', '90', '7', '9', '71', '89', '17', '16', '73', '152', '67', '123', '46', '84', '93', '31', '102', '54', '40', '43', '39', '47', '19', '15', '43'];

let btn = document.getElementById('btncoder');
let inpCoder = document.getElementById('coder');

let btn2 = document.getElementById('btndecoder');
let inpDecoder = document.getElementById('decoder');

btn2.addEventListener('click',() => decoder(mn, mb, inpDecoder));