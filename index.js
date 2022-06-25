const saveBtn = document.querySelector('#save-btn');
const incrementBtn = document.querySelector('#increment-el');
const countEle = document.querySelector('#count-el');
const savedEle = document.querySelector('#saved-el');

incrementBtn.addEventListener('click', ()=>{
    let count = countEle.textContent - 0;
    count++;
    countEle.textContent = count;
});

saveBtn.addEventListener('click', ()=>{
    let savedStr = countEle.textContent + ' - ';
    savedEle.textContent += savedStr;
    countEle.textContent = 0;
});