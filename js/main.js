$(document).ready(function(){


    //스크롤 좌표값 보이기
    $(window).scroll(function(){
      let sPos = $(this).scrollTop();
      $('.status').text(sPos);
      console.log(sPos);
      
      if(sPos >= 90){
        $('header').css('top','-80px');
        $('header > nav > .arrow ').stop().fadeIn(1200);
        $('header > nav > .menu01').stop().fadeIn(100);
      }else{
        $('header').css('top','0px');
        $('header > nav > .arrow').stop().fadeOut(700);
        $('header > nav > .menu01').stop().fadeOut(100);
      };

      //헤더 서식 act01 
      if(sPos >= 0 && sPos <= 950){
        $('header > nav > .menu01 > li a').stop().removeClass('act01');
        $('header > nav > .menu01 > li').stop().eq(0).addClass('act01');
      }else if(sPos >= 960 && sPos <= 1919){
        $('header > nav > .menu01 > li').stop().removeClass('act01');
        $('header > nav > .menu01 > li').stop().eq(1).addClass('act01');
      }else if(sPos >= 1920 && sPos <= 5730){
        $('header > nav > .menu01 > li').stop().removeClass('act01');
        $('header > nav > .menu01 > li').stop().eq(2).addClass('act01');
      }else if(sPos >= 5740 && sPos <= 6709){
        $('header > nav > .menu01 > li').stop().removeClass('act01');
        $('header > nav > .menu01 > li').stop().eq(3).addClass('act01');
      // }else if(sPos >= 6710 && sPos <= 6800){
      //   $('header > nav > .menu01 > li').stop().removeClass('act01');
      //   $('header > nav > .menu01 > li').stop().eq(3).addClass('act01');
      }else{
        $('header > nav > .menu01 > li').removeClass('act01');
      };



      //어바웃 애니효과
      if(sPos >= 700 && sPos <= 1900){
        $('.profile > h3').stop().fadeIn(1000);
        $('.profile > .hide_box').stop().animate({'height':'315px'}, 1000, function(){
          $('.profile > .hide_box').stop().animate({'width':'350px'}, 500, function(){
            $('.profile > .p_box02').stop().animate({'width':'500px'}, 100).animate({'height':'550px'}, 700, function(){
              //스킬 게이지바
              $('.skill > .Photo > .g_box > .gauge').animate({'bottom':'-50%'},1000, 'easeInOutQuart');
              $('.skill > .illust > .g_box > .gauge').animate({'bottom':'-45%'},1600, 'easeInOutQuart');
              $('.skill > .HTML > .g_box > .gauge').animate({'bottom':'-15%'},2200, 'easeInOutQuart');
              $('.skill > .CSS > .g_box > .gauge').animate({'bottom':'-21%'},2800, 'easeInOutQuart');
              $('.skill > .java > .g_box > .gauge').animate({'bottom':'-80%'},3000, 'easeInOutQuart');
              $('.skill > .jquery > .g_box > .gauge').animate({'bottom':'-50%'},3200, 'easeInOutQuart');
            });
          });
        });
        }else{
          $('.profile > h3').stop().hide();
          $('.profile > .hide_box').stop().animate({'height':'0px'}, 100).stop().animate({'width':'0px'}, 100);
          $('.profile > .p_box02').stop().animate({'width':'0px'}, 100).stop().animate({'height':'0px'}, 100);
          //스킬 게이지바
          $('.skill > .Photo > .g_box > .gauge').stop().animate({'bottom':'-100%'},100);
          $('.skill > .illust > .g_box > .gauge').stop().animate({'bottom':'-100%'},100);
          $('.skill > .HTML > .g_box > .gauge').stop().animate({'bottom':'-100%'},100);
          $('.skill > .CSS > .g_box > .gauge').stop().animate({'bottom':'-100%'},100);
          $('.skill > .java > .g_box > .gauge').stop().animate({'bottom':'-100%'},100);
          $('.skill > .jquery > .g_box > .gauge').stop().animate({'bottom':'-100%'},100);
        };
          
      
      //포트폴리오 스크롤내리면 act적용하기
      if(sPos >= 1780 && sPos <= 2130){ //스크롤값이 1930이상이고 2899이하이면 
        $('.port01 > .img_box').animate({'left':'0px', 'opacity':'1'},2000);
        $('.port01 > .r_box').animate({'top':'15%', 'opacity':'1'},1000, function(){
          $('.port01 > .r_box > p').fadeIn(1000);
          $('.port01 > .r_box > span').animate({'opacity':'1'}, 1000);
        });
        $('.port_n li').stop().removeClass('act');
        $('.port_n > ul > li:nth-child(1)').addClass('act');
      }else if(sPos >= 2679 && sPos <= 3182){
        $('.port02 > .img_box').animate({'opacity':'1'},2000);
        $('.port02 > .r_box').animate({'opacity':'1'},1000, function(){
          $('.port02 > .r_box > p').fadeIn(1000);
          $('.port02 > .r_box > span').animate({'opacity':'1'}, 1000);
        });
        $('.port_n li').stop().removeClass('act');
        $('.port_n > ul > li:nth-child(2)').addClass('act');
      }else if(sPos >= 3639 && sPos <= 4144){
        $('.port03 > .img_box').animate({'left':'0px', 'opacity':'1'},2000);
        $('.port03 > .r_box').animate({'top':'15%', 'opacity':'1'},1000, function(){
          $('.port03 > .r_box > p').fadeIn(1000);
          $('.port03 > .r_box > span').animate({'opacity':'1'}, 1000);
        });
        $('.port_n li').stop().removeClass('act');
        $('.port_n > ul > li:nth-child(3)').addClass('act');
      }else if(sPos >= 4599 && sPos <= 5006){
        $('.port04 > .img_box').animate({'opacity':'1'},2000);
        $('.port04 > .r_box').animate({'opacity':'1'},1000, function(){
          $('.port04 > .r_box > p').fadeIn(1000);
          $('.port04 > .r_box > span').animate({'opacity':'1'}, 1000);
        });
        $('.port_n li').stop().removeClass('act');
        $('.port_n > ul > li:nth-child(4)').addClass('act');
      }else{
        $('port_n').hide();
      };

      //스크롤 내리면 port_n사라지게하기
      if(sPos <= 1700 || sPos >= 4900){
        $('.port_n').stop().fadeOut(500);
      }else{
        $('.port_n').stop().fadeIn(500);
      };

      let down = $('email > ul > li > a > img').attr('')

      //스크롤시 contact ani적용
      if(sPos >= 4900 && sPos <= 5100){
        $('#contact > .txt01').stop().animate({'left':'10%'}, 500);
        $('#contact > .txt02').stop().animate({'right':'10%'}, 500);
      }else if(sPos >= 5101 && sPos <= 5300){
        $('#contact > .txt01').stop().animate({'left':'15%'}, 500);
        $('#contact > .txt02').stop().animate({'right':'15%'}, 500);
      }else if(sPos >= 5301 && sPos <= 5500){
        $('#contact > .txt01').stop().animate({'left':'20%'}, 500);
        $('#contact > .txt02').stop().animate({'right':'20%'}, 500);
      }else if(sPos >= 5501 && sPos <= 5700){
        $('#contact > .txt01').stop().animate({'left':'25%'}, 500);
        $('#contact > .txt02').stop().animate({'right':'25%'}, 500);
      }else if(sPos >= 5701 && sPos <= 6000){
        $('#contact > .txt01').stop().animate({'left':'30%'}, 500);
        $('#contact > .txt02').stop().animate({'right':'30%'}, 500);  
      };

    });
        
      //header 마우스엔터
      $('header').mouseenter(function(){
        let imgUrl = $('header img').attr('src');
        console.log(imgUrl);

        $('header h1 img').attr('src', './images/logo_b.png');
        $('header .menu li a').css('color','#444');
      });

      //header 마우스리브
      $('header').mouseleave(function(){
        let imgUrl = $('header img').attr('src');
        console.log(imgUrl);

        $('header h1 img').attr('src', './images/logo_w.png');
        $('header .menu li a').css('color','#fff');
      });


      //햄버거메뉴 애니 서식
      let arrow = $('header > nav > .arrow');
      $('header > nav > .menu01').hide();

      arrow.click(function(){
        $('header > nav > .menu01').stop().toggleClass('m_act');
        $('header > nav > .arrow > .ar1').stop().toggleClass('a01');
        $('header > nav > .arrow > .ar2').stop().toggleClass('a02');
        $('header > nav > .arrow > .ar3').stop().toggleClass('a03');
        
        return false;
      });

      //햄버거메뉴 오버
      arrow.hover(function(){
        $(this).css('background','#fff');
        $('header > nav > .arrow > div').css('background','#333');
      },function(){
        $(this).css('background','#333');
        $('header > nav > .arrow > div').css('background','#fff');
      });
        

      


      //스킬 마우스 오버
      let g_box = $('.skill > div > .g_box');

      g_box.mouseenter(function(){
        $(this).find('img').stop().fadeOut(500);
        $(this).find('.gauge').stop().hide(100);
        $(this).find('p').stop().fadeIn();
      });
      g_box.mouseleave(function(){
        $(this).find('img').stop().fadeIn(200);
        $(this).find('.gauge').stop().fadeIn(700);
        $(this).find('p').stop().fadeOut(100);
      });

    
      //스크롤 레이아웃
    let lnb = $('.menu li');

    lnb.click(function(){
      n = $(this).index();
      console.log(n);
      $('html, body').animate({scrollTop:$('main section').eq(n).offset().top},500);
    });


    //햄버거메뉴 스크롤레이아웃
    let h_nav = $('.menu01 li');
    
    h_nav.click(function(){
      n1 = $(this).index();
      console.log(n1);
      $('html, body').animate({scrollTop:$('main section').eq(n1).offset().top}, 500);
    });


    
    //포트폴리오 스크롤 레이아웃
    let gnb = $('.port_n li');

    gnb.click(function(){
      n = $(this).index();
      console.log(n);
      $('html, body').stop().animate({scrollTop:$('#portfolio > article').eq(n).offset().top},500);
    });

    //휠 애니메이션
    function wheel(){
      $('.wheel span').animate({'bottom':'65%'},1500).animate({'bottom':'25%'},1500);
    };
    setInterval(wheel, 1500);

    //about 탭 콘텐츠
    $('#about_box01 .profile').show();

    let t_con = $('#about_box01 > ul > li > a');

    t_con.click(function(){

      $('#about_box01 > ul > li > a').removeClass('font');
      $(this).addClass('font');
      $('#about_box01 > ul > li > div').stop().slideUp(700);
      $(this).next().fadeIn(2500);

      return false;
    });

    let n = 0;

    function fadeInOut(){

      $('.p_box02 li').stop().fadeOut(1500);

      if(n==3){
        n=0;
      }else{
        n++;
      };

      $('.p_box02 li').eq(n).fadeIn(4000);
    };
    let Timer = setInterval(fadeInOut, 4500);

    


    //타이핑
    // var typingEnd=false;
    //  function typingStart(){   //typingStart() 함수를 실행시키면 타이핑 효과가 시작되게 된다. 
    //   if(!typingEnd){
    //     var typingBool = false;
    //     var typingIdx=0;
    //      var typingTxt = $("#typing-txt").val(); // 타이핑될 텍스트를 가져온다
    //      typingTxt=typingTxt.split(""); // 한글자씩 자른다.
    //      if(typingBool==false){ // 타이핑이 진행되지 않았다면
    //         typingBool=true;

    //         var tyInt = setInterval(typing,500); // 반복동작(타이핑 시간을 제어할 수 있음)
    //       }

    //     function typing(){
    //        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
    //          $("#typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    //         typingIdx++;
    //       } else{
    //          clearInterval(tyInt); //끝나면 반복종료
    //         typingEnd=true;
    //       }
    //     }
    //   }
    // }
    // typingStart();

  });

