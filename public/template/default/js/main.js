/**
 * Created by Administrator on 2017/7/13.
 */
$(window).ready(function(){
    $('body').on('touchstart',function(){});
    $(function() {
        FastClick.attach(document.body);
    });
    var ww=$(window).width();

    //search
    $('.search-opean').click(function(){
        $(this).parents('.search-box').toggleClass('active');
        //$('.nav-box').addClass('active');
        //$('.language-box').addClass('hide');
    });
    $('.search-close').click(function(){
        $(this).parents('.search-box').removeClass('active');
        $('.nav-box').removeClass('active');
        $('.language-box').removeClass('hide');
    });
    $('#menu-handler').click(function(){
        $(this).toggleClass('active');
        $("body,html").toggleClass('hide');
        $('.nav-box,.header-top').toggleClass('active');
    });
    //返回顶部
    $('.return_top').click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},300);
    });

    function fixedHeader(){
        if($(window).scrollTop()>40){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    }
    fixedHeader();
    //显示右侧
    $(window).scroll(function(){
        fixedHeader();
        $('.search-box').removeClass('active');
        if($(window).scrollTop()>200){
            $('.right-fixed').addClass('active')
        }else{
            $('.right-fixed').removeClass('active')
        }
    });

    if(ww<1200){
        var li=$('.nav-er-list');
        for(var i=0;i<li.length;i++){
            var box=li.eq(i).find('.nav-san-box');
            if(box.length>0){
                li.eq(i).addClass('has');
            }else{
                li.eq(i).addClass('none');
            }
        }
        //点二级
        li.click(function(e){
            e.stopPropagation();
            $(this).toggleClass('in').find('.nav-san-box').stop().slideToggle().parent().siblings().removeClass('in').find('.nav-san-box').slideUp();
            $(this).parents('li').siblings().find('.nav-er-list').removeClass('in').find('.nav-san-box').slideUp();
        });
        //点一级
        $('.nav-box li').click(function(){
            $(this).toggleClass('on').find('.nav-er-box').stop().slideToggle().parent().siblings().removeClass('on').find('.nav-er-box').slideUp();
        });
    }


});