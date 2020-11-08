$(document).ready(function () {

    $('.edit').text('</>');
    $('.b').click(() => {
        $('.browser').toggleClass('bold'); // додаєм жирність
        $('.b').toggleClass('btnPush');
    })
    $('.i').click(() => {
        $('.browser').toggleClass('italic'); // курсив
        $('.i').toggleClass('btnPush');
    })
    $('.u').click(() => {
        $('.browser').toggleClass('underline'); // підкреслення
        $('.u').toggleClass('btnPush');
    })
    $('.s').click(() => {
        $('.browser').toggleClass('strike'); // зачеркнення
        $('.s').toggleClass('btnPush');
    })
    // вирівнювання 
    $('.left').click(() => {
        $('.browser').css('text-align', 'left');
    })
    $('.center').click(() => {
        $('.browser').css('text-align', 'center');
    })
    $('.right').click(() => {
        $('.browser').css('text-align', 'right');
    })
    // вибираєм шрифт
    $('.fontFamily').click(() => {
        $('.drop').show();
    })
    $('.textFamily').each(function (i, elem) {
        $(elem).click(function (e) {
            e.stopPropagation();
            let fontFamily = $(elem).html();
            $('.browser').css('font-family', fontFamily);
            $('.drop').hide();
        })
        $('.browser').mouseover(function () { // скриваєм по відведенні мишки
            $('.drop').hide();
        })
    })

    // відкриваєм розмір шрифтів і в циклі виводимо розмір від 12px до 30px через 2px
    $('.fontSize').click(function () {
        $('.fontSize').append('<div class="dropFS"></div>');
        if ($('.dropFS').css('display') == 'none') {
            $('.dropFS').show();
            let size = 12;
            for (let i = 0; i < 10; i++) {
                $('.dropFS').append(`<p class="size">${size}px</p>`);
                size += 2;
            }
        }
        // задаєм розмір шрифту
        $('.size').each(function (i, elem) {
            let fontSize = $(elem).html();
            $(elem).css('font-size', fontSize);
            $(elem).click(function (e) {
                e.stopPropagation();
                $('.browser').css('font-size', fontSize);
                $('.dropFS').hide();
                $('.fontSize').empty();
            })

            $('.browser').mouseover(function () {
                $('.dropFS').hide();
                $('.fontSize').empty();
            })
        })
    })
    //  відкриваєм модалку і палітру кольорів
    $('.color').click(function () {
        $('.modalBack').show();
        $('.modalMenu').hide();
        $('.files').hide();
        $.modWinAnim();
        $('.modalText').text('Choose text color');
        $('.colorsBox').show();
        $('.close').show();
        // вибираєм колір
        $('.colorBox').each(function (i, colorElem) {
            $(colorElem).click(function () {
                let textColor = $(colorElem).css('background-color');
                $('.browser').css('color', textColor);
            })
        })
        // закриття модалки по кнопці
        $('.close').click(() => {
            $.closeModal();
        })
        // закриття модалки по кліку поза модалкою
        $('.modalBack').click(() => {
            $.closeModal();
        });
    })

    // відкриваєм палітру кольорів для фону
    $('.background').click(function () {
        $('.modalBack').show();
        $.modWinAnim();
        $('.modalText').text('Choose background color or image');
        $('.modalMenu').css('display', 'flex');
        $('.colorsBox').hide();
        $('.bgsBox').show();
        $('.files').hide();
        $('.aColor').addClass('hrefActive');
        $('.close').show();

        // колір для фону
        $('.aColor').click(function () {
            $('.aColor').addClass('hrefActive');
            $('.aImage').removeClass('hrefActive');
            $('.aFiles').removeClass('hrefActive');
            $('.bgsBox').show();
            $('.imagesBox').hide();
            $('.files').hide();

            $('.bgBox').each(function (i, bgElem) {
                $(bgElem).click(function () {
                    let bgColor = $(bgElem).css('background-color');
                    $('.browser').css('background-image', '');
                    $('.browser').css('background-color', bgColor);
                })
            })
        });
        // зображення для фону
        $('.aImage').click(function () {
            $('.aColor').removeClass('hrefActive');
            $('.aImage').addClass('hrefActive');
            $('.aFiles').removeClass('hrefActive');
            $('.colorsBox').hide();
            $('.bgsBox').hide();
            $('.files').hide();
            $('.imagesBox').show();

            $('.imageBox').each(function (i, elem) {
                $(elem).click(function () {
                    let bgImage = $(elem).css('background-image');
                    $('.browser').css('background-image', bgImage);
                    $('.browser').css('background-color', '');
                })
            })
        });

        // загрузка файлу для фону
        $('.aFiles').click(function () {
            $('.aColor').removeClass('hrefActive');
            $('.aImage').removeClass('hrefActive');
            $('.aFiles').addClass('hrefActive');
            $('.colorsBox').hide();
            $('.bgsBox').hide();
            $('.imagesBox').hide();
            $('.files').show();
            $('#file').on('change', function (e) {
                const url = URL.createObjectURL(e.target.files[0]);
                $('.browser').css('background-image', `url(${url})`);
            });
        });

        $('.bgBox').each(function (i, bgElem) {
            $(bgElem).click(function () {
                let bgColor = $(bgElem).css('background-color');
                $('.browser').css('background-image', '');
                $('.browser').css('background-color', bgColor);
            })
        })

        $('.close').click(() => {
            $.closeModal();
        })
        $('.modalBack').click(() => {
            $.closeModal();
        });
    })

    $('.editElem').hide();

    // функція для закриття модального вікна
    $.closeModal = function () {
        $('.colorsBox').hide();
        $('.imagesBox').hide();
        $('.files').hide();
        $('.bgsBox').hide();
        $('.modalText').empty();
        $('.modalText').css({
            textAlign: 'left',
            borderBottom: 'none'
        });
        $('.modalWindow').css({
            top: '-450px',
            opacity: 0.1,
            width: '407px'
        });
        $('.f1').hide();
        $('.modalBack').hide();
        $('.aColor').removeClass('hrefActive');
        $('.aImage').removeClass('hrefActive');
        $('.aFiles').removeClass('hrefActive');
    }

    // блок авторизації
    $('.sign').click(() => {
        $('.modalBackForm').show();
        $.modWinAnim();
        $('.close').hide();
        $('.modalMenu').hide();
        $('.modalText').text('Sign In').css({
            textAlign: 'center',
            borderBottom: '1px solid rgba(179, 179, 179, 0.88)'
        });
        $('.f1').show();
        $('#login').css('borderColor', '');
        $('#password').css('borderColor', '');
        $('.error').hide();

        // доступ до форми
        const f1 = document.forms['f1'];

        // клік по кнопці авторизуватись
        $('.btnSign').click(function (e) {
            $('.error').show();
            //  якщо поле пусте
            if ($('form[name=f1]').find('input[name=login]').val().trim() == '' ||
                $('form[name=f1]').find('input[name=password]').val().trim() == '') {
                e.preventDefault();
                $('.error').text('Value is empty');
                $('#login').css('borderColor', 'red');
                $('#password').css('borderColor', 'red');
                //  якщо пароль і логін не "admin"
            } else if ($('form[name=f1]').find('input[name=login]').val().trim() != 'admin' ||
                $('form[name=f1]').find('input[name=password]').val().trim() != 'admin') {
                e.preventDefault();
                $('.error').text('Please check your login or password');
                $('#login').css('borderColor', 'red');
                $('#password').css('borderColor', 'red');

            } else {
                e.preventDefault();
                // відкриваєм доступ до кнопки що викликає меню для редагування
                $('.edit').removeAttr('disabled');
                $('.modalText').css({
                    textAlign: 'left',
                    borderBottom: 'none'
                });
                $('.error').empty();
                // зачищуєм поля форми
                $('form[name=f1]')[0].reset();
                $.closeModal();
                $('.close').show();
                $('.modalBackForm').hide();
            }
        });
    });

    // анімація для модального вікна
    $.modWinAnim = function () {
        $('.modalWindow').animate({
            top: '40px',
            opacity: 1,
            minHeight: '80px'
        }, 500);
    }

    // відкрити меню редактора таблиці і списків
    $('.edit').click(() => {
        $.hideMenu();
        $('.editElem').show();
        $('.textarea').show();
        $('.browser').hide();
    });

    // приховати головне меню
    $.hideMenu = function () {
        $('.edit').hide();
        $('.fontStyle').hide();
        $('.justify').hide();
        $('.style').hide();
        $('.sign').hide();
    }

    // показати головне меню
    $.showMenu = function () {
        $('.edit').show();
        $('.fontStyle').show();
        $('.justify').show();
        $('.style').show();
        $('.sign').show();
    }

    // відкриваєм модальне вікно для створення таблиці
    $('.table').click(() => {
        $('.modalBack').show();
        $('.modalWindow').show().css('width', '810px');
        $.modWinAnim();
        $('.modalMenu').css('display', 'none');
        $('.modalText').text('Create table');
        $('.tableOption').show();
        $('.errorLi').hide();

        $('#btnResetTable').click(() => {
            $.reset('.f2');
        })


        $('#createTable').click(() => {
            let countTR = $('.countTR').val();
            let countTD = $('.countTD').val();
            let widthTD = $('.widthTD').val();
            let heightTD = $('.heightTD').val();
            let widthOfBorder = $('.widthOfBorder').val();
            let typeOfBorder = $('#typeOfBorder').val();
            let colorOfBorder = $('#colorOfBorder').val();

            if ($.isInt(countTR) && $.isInt(countTD) && $.isInt(widthTD) && $.isInt(heightTD) &&
                $.isInt(widthOfBorder)) {

                $('.textarea').val(function (i, oldValue) {
                    return oldValue + '<table border-collapse: collapse>';
                });
                for (let i = 0; i < countTR; i++) {
                    $('.textarea').val(function (i, oldValue) {
                        return oldValue + '<tr>'
                    });
                    for (let j = 0; j < countTD; j++) {
                        $('.textarea').val(function (i, oldValue) {
                            return oldValue + '<td style="width:' + `${widthTD}` + 'px; height:' +
                                `${heightTD}` + 'px; border:' + `${widthOfBorder}` + 'px ' + `${typeOfBorder} ` + `${colorOfBorder}` +
                                '">TD</td>'
                        });
                    }
                    $('.textarea').val(function (i, oldValue) {
                        return oldValue + '</tr>'
                    });
                }
                $('.textarea').val(function (i, oldValue) {
                    return oldValue + '</table>'
                });
                console.log($('.textarea').val());

                $.reset('.f2');
                $('.modalText').text('');
                $('.tableOption').hide();
                $.closeModal();
            } else {
                $('.errorLi').show();

            }

        });

        $('.close').click(() => {
            $.closeModal();
            $('.modalText').text('');
            $('.tableOption').hide();
        })
        $('.modalBack').click(() => {
            $.closeModal();
            $('.modalText').text('');
            $('.tableOption').hide();
        });
    });

    // зберігання проведених змін в вікні редактора HTML
    $('.save').click(() => {
        $.showMenu();
        $('.editElem').hide();
        $('.textarea').hide();
        $('.browser').html($('.textarea').val());
        $('.browser').show();
    });

    // відкриваєм модальне вікно для створення списку

    $('.ol').click(() => {
        $('.modalBack').show();
        $('.modalWindow').show().css('width', '810px');
        $.modWinAnim();
        $('.modalMenu').css('display', 'none');
        $('.modalText').text('Create Ol');
        $('.listOptionOl').show();
        $('.errorLi').hide();

        $('#btnResetListOl').click(() => {
            $.reset('.f2');
        })

        $('#createListOl').click(() => {
            let countLi = $('.countLiOl').val();
            if ($.isInt(countLi)) {
                let typeOfMarksOl = $('#typeOfMarksOl').val();

                $('.textarea').val(function (i, oldValue) {
                    return oldValue + `<ol style="list-style-type: ${typeOfMarksOl} ">`;
                });
                for (let i = 0; i < countLi; i++) {
                    $('.textarea').val(function (i, oldValue) {
                        return oldValue + '<li>item</li>';
                    });
                }
                $('.textarea').val(function (i, oldValue) {
                    return oldValue + '</ol>';
                });

                $.reset('.f2');
                $.closeModal();
                $('.modalText').text('');
                $('.listOptionOl').hide();
            } else {
                $('.errorLi').show();
            }
        });

        $('.close').click(() => {
            $.closeModal();
            $('.modalText').text('');
            $('.listOptionOl').hide();
        })
        $('.modalBack').click(() => {
            $.closeModal();
            $('.modalText').text('');
            $('.listOptionOl').hide();
        });


    })

    // функція для зачищення полів форми
    $.reset = function (formName) {
        $(formName)[0].reset();
    }

    // функція для перевірки на число і пусте значення
    $.isInt = function (value) {
        if (Number.isInteger(+`${value}`) && value.trim() != '') {
            return true;
        }
        return false;
    }

    // відкриваєм модальне вікно для створення списку
    $('.ul').click(() => {
        $('.modalBack').show();
        $('.modalWindow').show().css('width', '810px');
        $.modWinAnim();
        $('.modalMenu').css('display', 'none');
        $('.modalText').text('Create Ul');
        $('.listOptionUl').show();
        $('.errorLi').hide();

        $('#btnResetListUl').click(() => {
            $.reset('.f2');
        })


        $('#createListUl').click(() => {
            let countLi = $('.countLiUl').val();

            if ($.isInt(countLi)) {
                let typeOfMarksUl = $('#typeOfMarksUl').val();
                $('.textarea').val(function (i, oldValue) {
                    return oldValue + `<ul style="list-style-type: ${typeOfMarksUl} ">`;
                });
                for (let i = 0; i < countLi; i++) {
                    $('.textarea').val(function (i, oldValue) {
                        return oldValue + '<li>item</li>';
                    });
                }
                $('.textarea').val(function (i, oldValue) {
                    return oldValue + '</ul>';
                });
                $.reset('.f2');
                $.closeModal();
                $('.modalText').text('');
                $('.listOptionUl').hide();
            } else {
                $('.errorLi').show();
            }

        });

        $('.close').click(() => {
            $.closeModal();
            $('.modalText').text('');
            $('.listOptionUl').hide();
        })
        $('.modalBack').click(() => {
            $.closeModal();
            $('.modalText').text('');
            $('.listOptionUl').hide();
        });
    })




});