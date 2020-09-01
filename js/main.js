$(document).ready(function(){
   menu();
   search();
});

function menu() {
   $(".burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".menu, .burger").length) {
         if ($(".header").hasClass("mob-menu")) {
            $(".header").removeClass("mob-menu");
         }
      }
   });
}

function search() {
   $(".mob-search-btn, .close").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-search')) {
            $parent.removeClass('mob-search');
         } else {
            $parent.addClass('mob-search');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".mob-search-btn, .close, .header-search").length) {
         if ($(".header").hasClass("mob-search")) {
            $(".header").removeClass("mob-search");
         }
      }
   });
}