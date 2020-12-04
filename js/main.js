import { models } from './modelsData.js';
import { getModel } from './getModel.js';

const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');
const pyroBlock = document.querySelector('.pyro');
const winBlock = document.querySelector('.win');
const winP = winBlock.querySelector('p');
const playAgain = winBlock.querySelector('button');
let victory = false;

let car1Position = 0;
let car2Position = 0;

const car1model = getModel(models);
const car2model = getModel(models);

car1.dataset.model = car1model;
car2.dataset.model = car2model;

const windowWidth = innerWidth;
const carWidth = 150;
const finishWidth = 40;
const finishRightGap = 10;
const distanceToFinish = windowWidth - carWidth - finishWidth - finishRightGap;

addEventListener('keyup', (event) => {
    if (victory) {
        return;
    }
    const key = event.key;
    if (key === 'w') {
        car1Position += 50;
        car1.style.left = car1Position + 'px';
        if (car1Position > distanceToFinish) {
            victory = true;
            winP.innerText = 'Pirma laimejo';
            winBlock.classList.add('show');
            pyroBlock.classList.add('show');
        }
    }
    if (key === 'p') {
        car2Position += 50;
        car2.style.left = car2Position + 'px';
        if (car2Position > distanceToFinish) {
            victory = true;
            winP.innerText = 'Antra laimejo';
            winBlock.classList.add('show');
            pyroBlock.classList.add('show');
        }
    }
})

playAgain.addEventListener('click', () => {
    location.reload();
})