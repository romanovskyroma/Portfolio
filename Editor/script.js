// 'use strict';
// alert('Hello JS');

const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
const getSelAll = selAll => document.querySelectorAll(selAll);
const f1 = document.forms['f1'];
const f2 = document.forms['f2'];
const f3 = document.forms['f3'];

edit = getID('edit');
getID('edit').onclick = function () {
    getSel('.editBottom').style.display = 'block';
    getSel('.styleBottom').style.display = 'none';
}
getID('style').onclick = function () {
    getSel('.styleBottom').style.display = 'block';
    getSel('.editBottom').style.display = 'none';
}

let colorBox = getSel('.selColor');
let colorList = ['green', 'red', 'yellow', 'brown', 'grey', 'blue', 'violet', 'pink', 'orange'];
let color = getSelAll('.color');

f2.btnColor.onclick = function () {
    colorBox.style.display = 'flex';
    for (let i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = colorList[i];
        color[i].onclick = function () {
            getSel('.boxTop').style.color = color[i].style.backgroundColor;
            colorBox.style.display = 'none';
        }
    }
}
f2.btnBgColor.onclick = function () {
    colorBox.style.display = 'flex';
    for (let i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = colorList[i];
        color[i].onclick = function () {
            getSel('.boxTop').style.backgroundColor = color[i].style.backgroundColor;
            colorBox.style.display = 'none';
        }
    }
}


f2.onclick = function () {
    for (let i = 0; i < f2.fontSize.length; i++) {
        if (f2.fontSize[i].checked) {
            getSel('.boxTop').style.fontSize = f2.fontSize[i].value + 'px';
        }
    }
    if (f2.fontWeight.checked) {
        getSel('.boxTop').style.fontWeight = 'bold';
    } else {
        getSel('.boxTop').style.fontWeight = 'normal';
    }
    if (f2.fontStyle.checked) {
        getSel('.boxTop').style.fontStyle = 'italic';
    } else {
        getSel('.boxTop').style.fontStyle = 'normal';
    }
    getSel('.boxTop').style.fontFamily = f2.selFontFamily.value;

}

getID('add').onclick = function () {
    getSel('.boxTop').style.display = 'none';
    getSel('.addElem').style.display = 'block';
    getSel('.boxBottom').style.display = 'none';
    getID('edit').style.display = 'none';
    getID('style').style.display = 'none';
}

getID('save').onclick = function () {
    let areaText = getID('areaEdit').value;
    getSel('.boxTop').innerHTML = areaText;
    getSel('.boxTop').style.paddingLeft = '35px';
    getSel('.editBottom').style.display = 'none';
}

getID('table').onclick = function () {
    getSel('.tableOption').style.display = 'block';
    getSel('.listOption').style.display = 'none';
}

getID('list').onclick = function () {
    getSel('.listOption').style.display = 'block';
    getSel('.tableOption').style.display = 'none';
}

getID('createList').onclick = function () {
    getSel('.listOption').style.display = 'none';
    getSel('.addElem').style.display = 'none';
    getSel('.boxTop').style.display = 'block';
    getSel('.boxBottom').style.display = 'block';
    getID('edit').style.display = 'inline-block';
    getID('style').style.display = 'inline-block';
    getID('areaEdit').display = 'block';
    let countLi = f3.countLi.value;
    let typeOfMarks = f3.typeOfMarks.value;
    getID('areaEdit').value = getID('areaEdit').value + '<ul style="list-style-type:' +
        `${typeOfMarks}` + ';">';
    for (let i = 0; i < countLi; i++) {
        getID('areaEdit').value = getID('areaEdit').value + '<li>item</li>';
    }
    getID('areaEdit').value = getID('areaEdit').value + '</ul>';
    f3.reset();
}

getID('createTable').onclick = function () {
    getSel('.tableOption').style.display = 'none';
    getSel('.addElem').style.display = 'none';
    getSel('.boxTop').style.display = 'block';
    getSel('.boxBottom').style.display = 'block';
    getID('edit').style.display = 'inline-block';
    getID('style').style.display = 'inline-block';
    getID('areaEdit').display = 'block';
    let countTR = f3.countTR.value;
    let countTD = f3.countTD.value;
    let widthTD = f3.widthTD.value;
    let heightTD = f3.heightTD.value;
    let widthOfBorder = f3.widthOfBorder.value;
    let typeOfBorder = f3.typeOfBorder.value;
    let colorOfBorder = f3.colorOfBorder.value;
    getID('areaEdit').value = getID('areaEdit').value + '<table border-collapse: collapse>';
    for (let i = 0; i < countTR; i++) {
        getID('areaEdit').value = getID('areaEdit').value + '<tr>';
        for (let j = 0; j < countTD; j++) {
            getID('areaEdit').value = getID('areaEdit').value + '<td style="width:' + `${widthTD}` + 'px; height:' +
                `${heightTD}` + 'px; border:' + `${widthOfBorder}` + 'px ' + `${typeOfBorder} ` + `${colorOfBorder}` +
                '">TD</td>';
        }
        getID('areaEdit').value = getID('areaEdit').value + '</tr>';
    }
    getID('areaEdit').value = getID('areaEdit').value + '</table>';
    f3.reset();
}