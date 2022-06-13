

(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  // SLIDER
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  })


  // PARALLAX EFFECT
  $.stellar({
    horizontalScrolling: false,
  });


  // MAGNIFIC POPUP
  $('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  /*
      // CONTACT FORM
      $("#contact-form").submit(function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var subject = $("#cf-subject").val();
        var message = $("#cf-message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
  
        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "email.php",
                data: dataString,
                success: function () {
                    $('.text-success').fadeIn(1000);
                    $('.text-danger').fadeOut(500);
                }
            });
        }
        else {
            $('.text-danger').fadeIn(1000);
            $('.text-success').fadeOut(500);
        }
        return false;
      });
  
  */


  // SMOOTHSCROLL
  $(function () {
    $('.custom-navbar a, #home a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);

const proverbs = [{
  proverb: `"Iso liwela umfula ugcwele"`,
  translation: `"The eye crosses the full river."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Inyathi ibuzwa kwabaphambili."`,
  translation: `"You ask about the buffalo from those with more experience."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Induku ayina muzi."`,
  translation: `"The stick has no kraal."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Ikhiwane elihle ligcwala izibungu."`,
  translation: `"The nice fig is often full of worms."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Dyondzo i xitlhangu xa vutomi."`,
  translation: `"Education is the key to a good life."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"N'wana wa nyoka i nyoka."`,
  translation: `"An offspring of snake is a snake."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"Ndlopfu a yi fi hi rimbambu rin'we."`,
  translation: `"An elephant does not die of one broken rib."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"Xinyenyana xo hubuta xi dya swivungu swo nona."`,
  translation: `"An early bird catches the fattest worms."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"Umntu ngumntu ngabantu."`,
  translation: `"A person is a person because of other people."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Ubukulu abubangwa."`,
  translation: `"One does not become great by claiming greatness."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Intaka yakha ngoboya benye."`,
  translation: `"A bird builds its nest with the feathers of another."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Ukukhula kukubona izinto."`,
  translation: `"To grow is to see things."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Meso e tswala meswana."`,
  translation: `"Procrastination is the thief of time."`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Mejo ha e rutanwe, ho rutanwa ditlhare."`,
  translation: `"Every man is the architect of his own fortune."`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Ho bua hase ho phetha."`,
  translation: `"Great talkers are never great doers."`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Tshwene ha e ipone lekopo."`,
  translation: `"One is blind to one's faults"`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Nnyo tshetla etsala Kgosi."`,
  translation: `"A poor virgin can give birth to a Chief."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Monna legapu ohutswetsa kafateng."`,
  translation: `"Man is like the melon, the interior ripeness is not visible."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Kgosi keKgosi kamorafe."`,
  translation: `"The Chief is Chief only on account of the Tribe."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Bana batshipa tshwaraganang fa lokgaogana loso lwamogotlha."`,
  translation: `"The genet's children cling together, separate them and you invite disaster."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Indlovu ibulawa yibunyonyo"`,
  translation: `"A lot of small steps can overcome a large problem."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Inotho ngamazolo."`,
  translation: `"Your possessions last only until tomorrow."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Inhlwa kayibanjwa ngekhanda."`,
  translation: `"First you should use your head and then speak."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Isikhuni sitshisa umkhwezeli."`,
  translation: `"One who troubles others will also be troubled."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Iheka pangende kumtima lwitimba lungi."`,
  translation: `"He laughs in the mouth but in the heart something else goes on."`,
  tribe: `- Ngoni Proverb`
},
{
  proverb: `"Nakusuta lomdzala kuyatitjwa."`,
  translation: `"When an elder farts it is ignored."`,
  tribe: `- Swati Proverb`
},
{
  proverb: `"Inyoka ayishaywa inhloko ungakayiboni."`,
  translation: `"Don't attack a snake before you see its head."`,
  tribe: `- Swati Proverb`
},
{
  proverb: `"Emanti aviwa ngeludvondvolo."`,
  translation: `"Water depth is first felt with a stick before crossing."`,
  tribe: `- Swati Proverb`
},
{
  proverb: `"Bantfwana sitsembu."`,
  translation: `"Children are like poligamy."`,
  tribe: `- Swati Proverb`
},
];

const proverbsTwo = [{
  proverb: `"Iso liwela umfula ugcwele."`,
  translation: `"The eye crosses the full river."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Inyathi ibuzwa kwabaphambili."`,
  translation: `"You ask about the buffalo from those with more experience."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Induku ayina muzi."`,
  translation: `"The stick has no kraal."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Ikhiwane elihle ligcwala izibungu."`,
  translation: `"The nice fig is often full of worms."`,
  tribe: `- Zulu Proverb`
},
{
  proverb: `"Dyondzo i xitlhangu xa vutomi."`,
  translation: `"Education is the key to a good life."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"N'wana wa nyoka i nyoka."`,
  translation: `"An offspring of snake is a snake."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"Ndlopfu a yi fi hi rimbambu rin'we."`,
  translation: `"An elephant does not die of one broken rib."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"Xinyenyana xo hubuta xi dya swivungu swo nona."`,
  translation: `"An early bird catches the fattest worms."`,
  tribe: `- Tsonga Proverb`
},
{
  proverb: `"Umntu ngumntu ngabantu."`,
  translation: `"A person is a person because of other people."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Ubukulu abubangwa."`,
  translation: `"One does not become great by claiming greatness."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Intaka yakha ngoboya benye."`,
  translation: `"A bird builds its nest with the feathers of another."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Ukukhula kukubona izinto."`,
  translation: `"To grow is to see things."`,
  tribe: `- Xhosa Proverb`
},
{
  proverb: `"Meso e tswala meswana."`,
  translation: `"Procrastination is the thief of time."`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Mejo ha e rutanwe, ho rutanwa ditlhare."`,
  translation: `"Every man is the architect of his own fortune."`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Ho bua hase ho phetha."`,
  translation: `"Great talkers are never great doers."`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Tshwene ha e ipone lekopo."`,
  translation: `"One is blind to one's faults"`,
  tribe: `- Sotho Proverb`
},
{
  proverb: `"Nnyo tshetla etsala Kgosi."`,
  translation: `"A poor virgin can give birth to a Chief."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Monna legapu ohutswetsa kafateng."`,
  translation: `"Man is like the melon, the interior ripeness is not visible."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Kgosi keKgosi kamorafe."`,
  translation: `"The Chief is Chief only on account of the Tribe."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Bana batshipa tshwaraganang fa lokgaogana loso lwamogotlha."`,
  translation: `"The genet's children cling together, separate them and you invite disaster."`,
  tribe: `- Tswana Proverb`
},
{
  proverb: `"Indlovu ibulawa yibunyonyo."`,
  translation: `"A lot of small steps can overcome a large problem."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Inotho ngamazolo."`,
  translation: `"Your possessions last only until tomorrow."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Inhlwa kayibanjwa ngekhanda."`,
  translation: `"First you should use your head and then speak."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Isikhuni sitshisa umkhwezeli."`,
  translation: `"One who troubles others will also be troubled."`,
  tribe: `- Ndebele Proverb`
},
{
  proverb: `"Iheka pangende kumtima lwitimba lungi."`,
  translation: `"He laughs in the mouth but in the heart something else goes on."`,
  tribe: `- Ngoni Proverb`
},
{
  proverb: `"Nakusuta lomdzala kuyatitjwa."`,
  translation: `"When an elder farts it is ignored."`,
  tribe: `- Swati Proverb`
},
{
  proverb: `"Inyoka ayishaywa inhloko ungakayiboni."`,
  translation: `"Don't attack a snake before you see its head."`,
  tribe: `- Swati Proverb`
},
{
  proverb: `"Emanti aviwa ngeludvondvolo."`,
  translation: `"Water depth is first felt with a stick before crossing."`,
  tribe: `- Swati Proverb`
},
{
  proverb: `"Bantfwana sitsembu."`,
  translation: `"Children are like poligamy."`,
  tribe: `- Swati Proverb`
},
{
  proverb: ``,
  translation: `“You can't sow seeds of discord and expect to harvest different. You will always reap what you have sown and that is the law of the universe.”`,
  tribe: `- Khoisan Proverb`
},
{
  proverb: `“One language is never enough.”`,
  translation: `“ǀGui gowa-i ge tatse ǂâusa tama hâ.”`,
  tribe: `- Khoisan Proverb`
}
];

let africanQuotationOne = document.querySelector("#african-quotation-one");
let proverbTranslationOne = document.querySelector("#proverb-translation-one");
let africanProverbOne = document.querySelector("#african-proverb-one");

let africanQuotationTwo = document.querySelector("#african-quotation-two");
let proverbTranslationTwo = document.querySelector("#proverb-translation-two");
let africanProverbTwo = document.querySelector("#african-proverb-two");

let africanQuotationThree = document.querySelector(".african-quotation-three");
let proverbTranslationThree = document.querySelector(".proverb-translation-three");
let africanProverbThree = document.querySelector(".african-proverb-three");

window.addEventListener("load", function () {
  let random = Math.floor(Math.random() * proverbs.length);

  africanQuotationOne.innerHTML = proverbs[random].proverb;

  proverbTranslationOne.innerHTML = proverbs[random].translation;

  africanProverbOne.innerHTML = proverbs[random].tribe;

  let random2 = Math.floor(Math.random() * proverbsTwo.length);

  africanQuotationTwo.innerHTML = proverbsTwo[random2].proverb;

  proverbTranslationTwo.innerHTML = proverbsTwo[random2].translation;

  africanProverbTwo.innerHTML = proverbsTwo[random2].tribe;

  let random3 = Math.floor(Math.random() * proverbs.length);

  africanQuotationThree.innerHTML = proverbs[random3].proverb;

  proverbTranslationThree.innerHTML = proverbs[random3].translation;

  africanProverbThree.innerHTML = proverbs[random3].tribe;
})




