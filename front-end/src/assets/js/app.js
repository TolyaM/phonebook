$(document).ready(function() {
    FastClick.attach(document.body); // Remove 300ms delay on touch devices

    $("img").error(function() {
        $(this).unbind("error").attr("src", "/assets/img/icon-image.svg");
    });

    function isElementExist(selector) {
        return !!$(selector).size();
    }

    var pageState = $('body').data('page');
    $('nav').find('ul').children('li[data-state=' + pageState + ']').addClass('active');

    $('.menu-trigger').on('click', function(event) {
        event.preventDefault();
        $('aside').addClass('open');
        $('.page-overlay').addClass('visible');
    });

    $('.page-overlay').on('click', function(event) {
        event.preventDefault();
        $('.page-overlay').removeClass('visible');
        if ($('aside').hasClass('open')) {
            $('aside').removeClass('open')
        }
    });

    if (isElementExist('table.users')) {
        var usersContentData = 'users.json';
        var usersContents = $('table.users');
        $.getJSON(usersContentData, function(data) {
            crossDomain: true;
            $.each(data, function(i, item) {
                usersContents.children('tbody').append('<tr>' +
                    '<td class="name">'+
                    '<a class="thumb" href="user.html"><div class="image">'+
                        '<img src=' + item.photo + '></div><span>' + item.first_name + ' ' + item.last_name + '</span>'+
                    '</a>'+
                    '<span class="smallLaptopScreen-visible">' + item.position + '</span>'+
                    '</td>' +
                    '<td class="position">' + item.position + '</td>' +
                    '<td class="phone"><span class="caption">Phone</span><a href="tel:' + item.phone + '">' + item.phone + '</a></td>' +
                    '<td class="mail"><span class="caption">Email</span><a href="mailto:' + item.email + '">' + item.email + '</a></td>' +
                    '<td class="skype"><span class="caption">Skype</span><a href="tel:' + item.first_name + item.last_name + '">' + item.first_name + item.last_name + '</a></td>' +
                    '<td class="room"><span class="caption">Room</span>' + item.room + '</td>' +
                    +'</tr>');
            });

        })
    }

    if (isElementExist('.newsBodyContentEditor')) {
        $('.newsBodyContentEditor').trumbowyg({
            svgPath: 'assets/img/icons.svg',
            btns: [
                ['viewHTML'],
                ['undo', 'redo'],
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['link'],
                ['insertImage'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['fullscreen']
            ]
        });
    }

    $('.news-article').each(function(index, el) {
        var childArticle = $(this).children('article');
        if (childArticle.outerHeight() == 1040) {
            childArticle.append('<button class="expand"><span>Expand</span></button>');
            childArticle.find('.expand').bind('click', function(event) {
                childArticle.addClass('expanded');
                $(this).remove();
            });
        }    
    });

});