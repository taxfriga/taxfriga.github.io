$(document).ready(function(){
    $('ul.projects__tabs').on('click', 'li:not(.projects__tab_active)', function() {
        $(this)
        .addClass('projects__tab_active').siblings().removeClass('projects__tab_active')
        .closest('div.container').find('div.projects__content').removeClass('projects__content_active').eq($(this).index()).addClass('projects__content_active');
    });

    $('.questions__item_question').click(function(){
        // $(this).css('background-color', 'orange')
        // $('.faq-item-answer').slideToggle(500)
        $(this)
        .parents('.questions__item')
        .find('.questions__item_answer')
        .slideToggle(500)
    });
});