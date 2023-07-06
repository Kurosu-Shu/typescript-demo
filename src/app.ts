import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('nana', 'work on website', 200);
docTwo = new Invoice('jame', 'popstar', 1000);

let docs: HasFormatter[] = [];
docs.push(docOne, docTwo);

//console.log(docs);

const invOne = new Invoice('kurosu', 'work on the kurosu website', 250);
const invTwo = new Invoice('Shu', 'work on shu website', 230);

const invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach(inv => {
    //console.log(inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {

    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
