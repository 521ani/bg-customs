$(document).ready(function() {

    //Smooth scrolling
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    //Dropdown Menu
    $('.dropdown').on('mouseenter', function() {
        if ($('.dropdownMenu').css('display') == 'none') {
             $('.dropdownMenu').slideDown('slow');
        } else {
             $('.dropdownMenu').slideUp('slow');
        }
     });
 
     $('.dropdownMenu').on('mouseleave', function() {
         $('.dropdownMenu').slideUp('slow');
     });

    //Slider 1
    let sliderDescriptions = {
        "Лазаруване" : "На Лазаровден се откъсват зелени върбови клонки, които ще красят вратите на следващия ден - Цветница. Според вярванията тогава се „пускат умрелите от гробовете“. За да засвидетелстват почитта си към тях, устройва се Лазарската задушница.",
        "Нестинарство" : "Обичаят се изпълнява на празника Константин и Елена, а понякога и по време на селските сборове на храможите празници. Основен елемент в него е играта в огън (жар).",
        "Прошка" : "Сирни заговезни е важен зимно-пролетен празник в народния календар. Чества се винаги в неделя, 49 дена преди Великден. Прието е да се извършва обичаят „хамкане“.",
        "Кукери и Бабугери" : "Веднъж годишно хора от различни краища на страната, които се обличат като странни създания, участват във фестивала на кукерите и изпълняват специални фолклорни танци. "
    };

    let allBanners = $('.slider-images').children();
    
    let updateBanner = function() {
        let currentBanner = $('.currentBanner');
        allBanners.css('display', 'none');
        currentBanner.fadeIn();
        currentBanner.css({
            'display' : 'block'
        });
        $('#bannerHeading').text(currentBanner.attr('alt'));
        $('#bannerDescription').text(sliderDescriptions[currentBanner.attr('alt')]);;
    };

    $("#next").on('click', function() {
        let currentBanner = $('.currentBanner');
        let nextBanner = currentBanner.next();

        if(nextBanner.length) {
            currentBanner.removeClass('currentBanner');
            nextBanner.addClass('currentBanner');
            updateBanner();
        }
    });
    
    $('#prev').on('click', function() {
        let currentBanner = $('.currentBanner');
        let prevBanner = currentBanner.prev();

        if (prevBanner.length) {
            currentBanner.removeClass('currentBanner');
            prevBanner.addClass('currentBanner');
            updateBanner();
        }
    });

    //CALENDAR
    let allFests = $('.fest');
    $('.caption').on('click', function() {
        let currentSeason = $(this).attr('season');
        if (currentSeason == "all") {
                allFests.css('display', 'inline-block');
                return;
        }
        let currentSeasonFests = $(`.${currentSeason}`);

        if(currentSeasonFests.css('display') == 'inline-block') {

            if(allFests.css('display') == 'inline-block') {
                allFests.removeClass('visibleFest');
                allFests.css('display', 'none');
                currentSeasonFests.css('display', 'inline-block');
            } else {
                allFests.css('display', 'inline-block');
            }

        } else {
            allFests.removeClass('visibleFest');
            allFests.css('display', 'none');
            currentSeasonFests.css('display', 'inline-block');
        }
    });

    //CLOTHES TABS
    $('.typeCl').on('click', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        let content = $(this).attr('region');
        $(`#${content}`).addClass('active').siblings().removeClass('active');
    });

    //Slider 2 (автоматичен и с бутони)
    function slider() {
        let firstElement = $('.first');
        let currentEl = $('.current');
        let nextEl = currentEl.next();

        if (nextEl.length) {
            currentEl.removeClass("current");
            nextEl.addClass('current');
        } else {
            currentEl.removeClass("current");
            firstElement.addClass('current');
        }
    }
    setInterval(function() {
        slider();
    }, 5000);

    $("#nxt").on('click', function() {
        let thisImg = $('.current');
        let nextImg = thisImg.next();

        if (nextImg.length) {
            thisImg.removeClass("current");
            nextImg.addClass('current');
        }
    })

    $("#prv").on('click', function() {
        let thisImg = $('.current');
        let prevImg = thisImg.prev();

        if (prevImg.length) {
            thisImg.removeClass("current");
            prevImg.addClass('current');
        }
    })

    //Foods List
    let foodsList = $('.foodsList');
    $('#selectedFoodName').on('mouseenter', function() {
        if (foodsList.css('display') == 'none') {
            foodsList.slideDown();
       } else {
            foodsList.slideUp();
       }
    });

    foodsList.on('mouseleave', function() {
        foodsList.slideUp();
    });

    //Food Descriptions
    let kozunakRec = "Съществуват различни варианти на рецептата за козунак. Като цяло обаче той е труден за приготвяне - изисква много време, месене и специални условия – помещението, в което се меси и втасва тестото, трябва да е добре затоплено.  Често към тестото се добавят орехи, стафиди, настъргана лимонова кора, локум, мармалад. Маята за козунака се замесва с брашно, прясно мляко, щипка готварска сол и щипка захар при температура 28 – 30 градуса. След като шупне, се добавя към останалото брашно, яйца, захар, мляко и другите съставки. Меси се продължително време и се оставя на топло да увеличи обема си двойно, като за целта може да се сложи на водна баня.След като втаса тестото, от него се оформят дълги фитили, които се сплитат на плитка, за да стане козунакът „на конци“. Пече се на умерен огън в предварително загрята фурна. ";
    let pitkaRec = "В купа слагаме 1 ч.ч. топла вода, прясната мая и захарта, с лъжичка разбъркваме докато маята се разтопи и оставяме да шупне около 10 минутки. След това добавяме останалата топла вода и солта. Започваме да сипваме по малко от брашното до получаването на тесто. Намазваме с олио и оставяме на топло да втаса. След това точим кора и разрязваме долната половина на лентички. Две по две ги оплитаме и така с всички. Навиваме горната част на руло и лентичките ги намотаваме към рулото. Навиваме всичко във формата на охлюв и в намазнена тава добавяме питката. Мажем отгоре с жълтък и печем на 180 градуса до готовност. След като питката се извади мажем с разтопено масло.";
    let banicaRec = "Баницата е основно редена и вита.Традиционната българска баница се приготвя с плънка от бяло саламурено сирене. Съществуват още много разновидности на баницата. Първата стъпка от рецептата за баница със сирене и готови кори е подготовката на плънката. Разбъркват се яйца, кисело мляко, извара или сиренето, ½ чаена чаша олио и сода за хляб. В намазнена тавичка се слагат 1-2 листа от корите, върху които - 1 черпак от сместа. Отгоре отново се слагат лист-два от корите и отново от сместа, а накрая олио. Процедурата се повтаря в тази последователност докато корите и сместа свършат. Последният лист внимателно се нарязва с остър нож на парчета, за да можете след изпичане по-лесно да се разреже баницата. Баницата се пече в предварително загрята на 200 градуса фурна за около 30 минути, докато придобие златист цвят.";
    let foodSymbolsAndDescriptions = {
        "Баница" : ["Българският народ поставя баницата в центъра на трапезата си по празници и обреди. Например на Нова година, тя задължително трябва да е кръгла и с късмети, което е символ на равнопоставеност пред Бог.", banicaRec, "./assets/img/banica.jpg"],
        "Питка" : ["Нафора – благословена и осветена частичка пшеничен хляб, която се дава от свещеника в края на литургията за духовно и телесно здраве.", pitkaRec, "./assets/img/nafora.jpg"],
        "Козунак" : ["Козунакът е сладък обреден хляб, който традиционно се приготвя за Великден. Символизира тялото на Иисус Христос, така както боядисаните в червено яйца символизират кръвта му.", kozunakRec, "./assets/img/kozunaka.jpg"]
    };

    $('.fdListItem').on('click', function() {
        let fdName = $(this).text();
        $('#selectedFoodName').text(fdName);
        $('.fdSymbol').text(foodSymbolsAndDescriptions[fdName][0]);
        $('.recipe').text(foodSymbolsAndDescriptions[fdName][1]);
        $('.thisFood').attr('src', foodSymbolsAndDescriptions[fdName][2]);
    });

    //Form
    function checkName() {
        let name = $('#username');

        if(name.val() == 0 || !isNaN(name.val())) {
            name.addClass('wrong');
            alert('Въведете валидно потребителско име!');
        } else {
            name.removeClass('wrong');
        }
    }

    function checkEmail() {
        let email = $('#mail');
        if(email.val() == 0) {
            email.addClass('wrong');
            alert('Моля, въведете своя имейл!');
        } else {
            email.removeClass('wrong');
        }
    }

    function checkMessage() {
        let message = $('#message');
        let messageLength = message.val().length;

        if(message.val() == 0) {
            message.addClass('wrong');
            alert('Въведете съобщение!');
        } else if(messageLength > 70) {
                alert(`Съобщението Ви е твърде дълго! Въведени символи: ${messageLength}. Съобщението Ви не трябва да превишава 70 символа.`);
                message.addClass('wrong');
        } else {
                message.removeClass('wrong');
        }
    }

    $('#sendBtn').on('click', function(e) {
        e.preventDefault();

        checkName();
        checkEmail();
        checkMessage();
    });
})