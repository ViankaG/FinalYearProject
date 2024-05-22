//Source: https://www.youtube.com/watch?v=VdDMHr56bcw - I changed all variable names and the names of the classes called

const sectionOne = document.getElementById('section_1');
const addBtnOne = document.querySelector('.btn_1');
const listOne = document.querySelector('.list_1');

//Function stores user input and adds it to a list item element, along with a delete button. List item element is added to list.
addBtnOne.onclick = function () {
    let itemNewOne = sectionOne.value;
    sectionOne.value = '';

    let itemListOne = document.createElement('li');
    let itemNameOne = document.createElement('span');
    let deleteBtnOne = document.createElement('button');

    itemListOne.appendChild(itemNameOne);
    itemNameOne.textContent = itemNewOne;

    itemListOne.appendChild(deleteBtnOne);
    deleteBtnOne.textContent = 'Delete';

    listOne.appendChild(itemListOne);

    deleteBtnOne.onclick = function () {
        listOne.removeChild(itemListOne);
    }

    sectionOne.focus();
}

const sectionTwo = document.getElementById('section_2');
const addBtnTwo = document.querySelector('.btn_2');
const listTwo = document.querySelector('.list_2');

//Function stores user input and adds it to a list item element, along with a delete button. List item element is added to list.
addBtnTwo.onclick = function () {
    let itemNewTwo = sectionTwo.value;
    sectionTwo.value = '';

    let itemListTwo = document.createElement('li');
    let itemNameTwo = document.createElement('span');
    let deleteBtnTwo = document.createElement('button');

    itemListTwo.appendChild(itemNameTwo);
    itemNameTwo.textContent = itemNewTwo;

    itemListTwo.appendChild(deleteBtnTwo);
    deleteBtnTwo.textContent = 'Delete';

    listTwo.appendChild(itemListTwo);

    deleteBtnTwo.onclick = function () {
        listTwo.removeChild(itemListTwo);
    }

    sectionTwo.focus();
}

const sectionThree = document.getElementById('section_3');
const addBtnThree = document.querySelector('.btn_3');
const listThree = document.querySelector('.list_3');

//Function stores user input and adds it to a list item element, along with a delete button. List item element is added to list.
addBtnThree.onclick = function () {
    let itemNewThree = sectionThree.value;
    sectionThree.value = '';

    let itemListThree = document.createElement('li');
    let itemNameThree = document.createElement('span');
    let deleteBtnThree = document.createElement('button');

    itemListThree.appendChild(itemNameThree);
    itemNameThree.textContent = itemNewThree;

    itemListThree.appendChild(deleteBtnThree);
    deleteBtnThree.textContent = 'Delete';

    listThree.appendChild(itemListThree);

    deleteBtnThree.onclick = function () {
        listThree.removeChild(itemListThree);
    }

    sectionThree.focus();
}

const sectionFour = document.getElementById('section_4');
const addBtnFour = document.querySelector('.btn_4');
const listFour = document.querySelector('.list_4');

//Function stores user input and adds it to a list item element, along with a delete button. List item element is added to list.
addBtnFour.onclick = function () {
    let itemNewFour = sectionFour.value;
    sectionFour.value = '';

    let itemListFour = document.createElement('li');
    let itemNameFour = document.createElement('span');
    let deleteBtnFour = document.createElement('button');

    itemListFour.appendChild(itemNameFour);
    itemNameFour.textContent = itemNewFour;

    itemListFour.appendChild(deleteBtnFour);
    deleteBtnFour.textContent = 'Delete';

    listFour.appendChild(itemListFour);

    deleteBtnFour.onclick = function () {
        listFour.removeChild(itemListFour);
    }

    sectionFour.focus();
}

const keyItem = document.getElementById('key_item');
const keyAddBtn = document.querySelector('.btn_key');
const keyList = document.querySelector('.key_list');

//Function stores user input and adds it to a list item element. List item element is added to list.
keyAddBtn.onclick = function () {
    let keyItemNew = keyItem.value;
    keyItem.value = '';

    let itemKeyList = document.createElement('li');
    let itemNameKey = document.createElement('span');

    itemKeyList.appendChild(itemNameKey);
    itemNameKey.textContent = keyItemNew;

    keyList.appendChild(itemKeyList);

    keyItem.focus();
}

//Source: https://www.youtube.com/watch?v=tZ45HZAkbLc&t=1071s - I changed all variable names and the names of the classes called

const shopNames = document.querySelectorAll('.shop_name');
const shopList = document.querySelectorAll('.shop');

let draggedShop = null;

//Loops through all the shop names
for (let n = 0; n < shopNames.length; n++) {
    const selectedShop = shopNames[n];

    //Function sets draggedShop to current shop_name element in shopNames and makes selected shop disappear from 
    //"Shops to go to" section.
    selectedShop.addEventListener('dragstart', function () {
        draggedShop = selectedShop;
        
        setTimeout(function () {
            selectedShop.style.display = 'none';
        }, 0);
    });

    //When selected shop is dropped, it is made visible in the section it is dropped in and draggedShop is equal to null again.
    selectedShop.addEventListener('dragend', function () {
        draggedShop.style.display = 'block';

        setTimeout(function () {
            draggedShop = null;
        }, 0);
    });

    //Loops through all of the elements where class is equal to shop
    for (let m = 0; m < shopList.length; m++) {
        const selectedSection = shopList[m];

        //Prevents dragover event listener from using its default properties for drag and drop.
        selectedSection.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        //Prevents dragenter event listener from using its default properties for drag and drop and changes background colour 
        //of section when dragged shop enters that section.
        selectedSection.addEventListener('dragenter', function (e) {
            e.preventDefault();
            selectedSection.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        //Changes background colour of section when dragged shop leaves that section.
        selectedSection.addEventListener('dragleave', function (e) {
            selectedSection.style.backgroundColor = 'rgb(255, 200, 0)';
        });

        //When selected shop is dropped, it is added to the current shop element in shopList and background colour of same 
        //element is changed.
        selectedSection.addEventListener('drop', function (e) {
            selectedSection.append(draggedShop);
            selectedSection.style.backgroundColor = 'rgb(255, 200, 0)';
        });
    }
}

//Source: https://www.youtube.com/watch?v=jXTfoKkPtYY - I changed the names of the classes called and variable names
//Function toggles (adds or removes) the class "i_button--active" if button that has the class "i_button" is clicked
document.querySelectorAll('.i_button').forEach(infoButton => {
    infoButton.addEventListener('click', function () {
        infoButton.classList.toggle('i_button--active');
    });
});
