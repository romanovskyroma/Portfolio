const getSel = sel => document.querySelector(sel);
const f1 = document.forms['f1'];

let arrBadWords = [];

f1.add.onclick = function () {
    if (f1.wordsInp.value.trim() != '') {
        arrBadWords.push(f1.wordsInp.value.trim());
        getSel('.badWords').textContent = arrBadWords.join(', ');
        f1.wordsInp.value = '';
    } else {
        f1.wordsInp.placeholder = "Please write a word!";
        f1.wordsInp.style.boxShadow = '0 0 5px 2px rgba(255, 4, 4, 0.89)';
    }
}

f1.wordsInp.oninput = function () {
    f1.wordsInp.style.boxShadow = '0 0 5px 2px rgba(79, 79, 253, 0.89)';
}

f1.textarea.oninput = function () {
    f1.textarea.style.boxShadow = '0 0 5px 2px rgba(79, 79, 253, 0.89)';
}

f1.reset.onclick = function () {
    arrBadWords = [];
    getSel('.badWords').textContent = arrBadWords;
}

// в цьому варіанті "javascript" змінює на "****script";


// function replaceString(oldStr, newStr, fullStr) {
//     return fullStr.split(oldStr).join(newStr);
// }

// getSel('.btn').onclick = function () {
//     if (f1.textarea.value.trim() != '') {
//         textarea = f1.textarea.value;
//         for (let i = 0; i < arrBadWords.length; i++) {
//             let newStr = '*'.repeat(arrBadWords[i].length);
//             textarea = replaceString(arrBadWords[i], newStr, textarea);
//         }
//         f1.textarea.value = textarea;
//     } else {
//         f1.textarea.placeholder = "Please write a text!";
//         f1.textarea.style.boxShadow = '0 0 5px 2px rgba(255, 4, 4, 0.89)';
//     }
// }

// function replaceString(oldStr, newStr, fullStr) {
//     return fullStr.split(oldStr).join(newStr);
// }

getSel('.btn').onclick = function () {
    if (f1.textarea.value.trim() != '') {
        let textarea = f1.textarea.value;
        const arrTextarea = textarea.split(' ');
        const newArrTextarea = [];
        exit:
            for (let i = 0; i < arrTextarea.length; i++) {
                for (let j = 0; j < arrBadWords.length; j++) {
                    let newStr = '*'.repeat(arrBadWords[j].length);
                    if (arrTextarea[i] == arrBadWords[j]) {
                        newArrTextarea.push(newStr);
                        continue exit;
                    }
                }
                newArrTextarea.push(arrTextarea[i]);
            }
        console.log(newArrTextarea);
        newTextarea = newArrTextarea.join(' ');
        f1.textarea.value = newTextarea;
    } else {
        f1.textarea.placeholder = "Please write a text!";
        f1.textarea.style.boxShadow = '0 0 5px 2px rgba(255, 4, 4, 0.89)';
    }
}



