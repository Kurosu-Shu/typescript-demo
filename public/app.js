import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docOne;
let docTwo;
docOne = new Invoice('nana', 'work on website', 200);
docTwo = new Invoice('jame', 'popstar', 1000);
let docs = [];
docs.push(docOne, docTwo);
//console.log(docs);
const invOne = new Invoice('kurosu', 'work on the kurosu website', 250);
const invTwo = new Invoice('Shu', 'work on shu website', 230);
const invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(inv => {
    //console.log(inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
