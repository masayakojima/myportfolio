'use strict';


// コッペパン
$(function() {
  $('.pan').click(function() {
    $('.pan-open').fadeIn();
    $('.tab').fadeOut();
    $('.kokuban-title').fadeOut();
    $('.first-table').fadeOut();
    $('.kokuban-keshi').addClass('kokubankeshi-before');
  });
  $('.kokuban-keshi').click(function() {
    $('.tab').fadeIn();
    $('.kokuban-title').fadeIn();
    $('.comment-open').fadeOut();
    $('.kokuban-keshi').removeClass('kokubankeshi-before');
  });
});
// ツイストパン
$(function() {
  $('.twist').click(function() {
    $('.twist-open').fadeIn();
    $('.tab').fadeOut();
     $('.kokuban-title').fadeOut();
    $('.first-table').fadeOut();
    $('.kokuban-keshi').addClass('kokubankeshi-before');
  });
  $('.kokuban-keshi').click(function() {
    $('.tab').fadeIn();
    $('.comment-open').fadeOut();
     $('.kokuban-title').fadeIn();
    $('.kokuban-keshi').removeClass('kokubankeshi-before');
  });
});
// まるパン
$(function() {
  $('.marupan').click(function() {
    $('.marupan-open').fadeIn();
    $('.tab').fadeOut();
     $('.kokuban-title').fadeOut();
    $('.first-table').fadeOut();
    $('.kokuban-keshi').addClass('kokubankeshi-before');
  });
  $('.kokuban-keshi').click(function() {
    $('.tab').fadeIn();
     $('.kokuban-title').fadeIn();
    $('.comment-open').fadeOut();
    $('.kokuban-keshi').removeClass('kokubankeshi-before');
  });
});

$('.news-item').hover(function(){
  $(this).find('.news-box').addClass('news-box-event');

},function(){
  $(this).find('.news-box').removeClass('news-box-event');
});

