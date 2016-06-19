~function () {
    /*//侧边栏
    console.log($(".mainNavs .menu_box").first().mouseover());
    $(".mainNavs .menu_box").first().mouseover().next().css({"display":"block"})*/



    //home_banner轮播图
    !function () {
        var oBanner = document.getElementById('home_banner');
        var oUl = oBanner.getElementsByTagName("ul")[0];
        var oEm = document.getElementById("banner_em");
        var oBtns = oBanner.getElementsByTagName("ul")[1].getElementsByTagName("li");

        function linear(t, b, c, d) {
            return t / d * c + b;
        }
        function animate(ele, attr, target, duration) {
            var time = 0;
            var begin = animate.getCss(ele, attr);
            var change = target - begin;
            var interval = 30;
            clearInterval(ele.timer);
            function move() {
                time += interval;
                if (time < duration) {
                    var val = linear(time, begin, change, duration);
                    animate.setCss(ele, attr, val);
                } else {
                    animate.setCss(ele, attr, target);
                    clearInterval(ele.timer);
                    ele.timer = null;
                }
            }

            ele.timer = window.setInterval(move, interval);
        }
        animate.getCss = function (ele, attr) {
            if (window.getComputedStyle) {
                return parseFloat(window.getComputedStyle(ele, null)[attr]);
            } else {

                return parseFloat(ele.currentStyle[attr]);
            }
        };
        animate.setCss = function (ele, attr, val) {
            ele.style[attr] = val + "px";
        };

        var step = 0;
        function autoMove() {
            if (step > 1) {
                step = -1;
                animate.setCss(oUl, "marginTop", 0);
                animate.setCss(oEm, "top", 0)
            }
            step++;
            animate(oUl, "marginTop", step * -160, 100);
            animate(oEm, "top", step * 55, 100);
            changeBtn();
        }
        var timer = window.setInterval(autoMove, 4000);
        oUl.onmouseover = function () {
            window.clearInterval(timer);
        };
        oUl.onmouseout = function () {
            timer = window.setInterval(autoMove, 4000);
        };
        ~function () {
            for (var i = 0; i < oBtns.length; i++) {
                var cur = oBtns[i];
                cur.index = i;
                cur.onclick = function () {
                    animate(oUl, "marginTop", this.index * -160, 100);
                    animate(oEm, "top", this.index * 55, 100);
                    step = this.index;
                    changeBtn();
                }
            }
        }();
        function changeBtn() {
            var tempStep = null;
            for (var i = 0; i < oBtns.length; i++) {
                if (step >= oBtns.length) {
                    tempStep = 0;
                } else {
                    tempStep = step;
                }
                if (i == tempStep) {
                    oBtns[i].className = "current";
                } else {
                    oBtns[i].className = "";
                }
            }
        }
    }();
    //遮罩层跟随鼠标效果 id=da_thumbs
    ~function ($) {
        //direction:计算进入或者离开的方向
        function direction(pageX, pageY) {
            var $o = $(this).offset(),//获取匹配元素在当前视口的相对偏移。返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。
                $w = $(this).outerWidth(),//获取第一个匹配元素外部宽度（默认包括补白和边框）.此方法对可见和隐藏元素均有效。
                $h = $(this).outerHeight();

            //->计算鼠标指针位于当前元素“比例空间”中的坐标位置:“比例空间”->以元素中心为坐标原点,以元素左边位置为X轴的-1,以元素右边位置为X轴的1,以元素顶部位置为Y轴的-1,以元素底部位置为Y轴的1,的直角坐标空间
            var $x = (pageX - $o.left - ($w / 2)) * ($w > $h ? ($h / $w) : 1);
            var $y = (pageY - $o.top - ($h / 2)) * ($h > $w ? ($w / $h) : 1);

            //->计算鼠标指针位于当前元素“比例空间”中的方位:0、1、2、3 => 上、右、下、左
            //->Math.PI:圆周率π
            //->Math.atan2($y, $x):返回-PI到PI之间的值,是从X轴正向逆时针旋转到点($y,$x)时经过的角度
            return Math.round((((Math.atan2($y, $x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        }

        //->根据方向实现对应的动画操作
        function mouseAnimate(interval) {
            interval = interval || 200;
            $(this).on("mouseenter mouseleave", function (e) {
                var $mark = $(this).children(".hot_info"), $posL = 0, $posT = 0, $tarL = 0, $tarT = 0, $dir = direction.call(this, e.pageX, e.pageY);
                if (e.type === "mouseenter") {
                    $dir === 0 ? $posT = "-100%" : null;
                    $dir === 1 ? $posL = "100%" : null;
                    $dir === 2 ? $posT = "100%" : null;
                    $dir === 3 ? $posL = "-100%" : null;
                    $mark.css({top: $posT, left: $posL, display: "block"}).stop().animate({
                        top: $tarT,
                        left: $tarL
                    }, interval);
                    return;
                }
                $dir === 0 ? $tarT = "-100%" : null;
                $dir === 1 ? $tarL = "100%" : null;
                $dir === 2 ? $tarT = "100%" : null;
                $dir === 3 ? $tarL = "-100%" : null;
                $mark.stop().animate({top: $tarT, left: $tarL}, interval, function () {
                    $mark.css({
                        display: "none"
                    });
                });
            });
        }

        $.fn.extend({mouseAnimate: mouseAnimate});
    }(jQuery);
    $(".da_thumbs li a").mouseAnimate(300);

// bindData -ajax 数据绑定 hotList
    var hotList = document.getElementById('hotListUl');
    bindData();
    function bindData(){
        function callback(jsonData){
            //console.log(Object.prototype.toString.call(jsonData),jsonData);
            var str = "";
            for (var i = 0; i < jsonData.length; i++) {
                var curData =jsonData[i];
                str+='<li class="position_list_item"><div class="pli_top"> <div class="fl pli_top_l"> <div class="position_name"> <h2> <a href="###" class="position_link fl wordCut">'+curData["position"]+'<span>[北京]</span> </a> </h2> </div>';
                str+='<div> <span class="salary fl">'+curData["salary"]+'</span>';
                str+='<span>"'+curData["experience"]+'"</span>'+'/'+'<span>'+curData["education"]+'</span></div> </div>';
                str+='<div class="fl pli_top_r"> <div class="company_name wordCut"> <a href="###" target="_blank">'+curData["companyname"]+'</a> </div>';
                str+='<div class="industry wordCut"> <span>'+curData["companytype"]+'</span> </div> </div> </div>';
                str+='<div class="pli_btm"> <div class="pli_btm_l fl wordCut">"'+curData["companydis"]+'" </div>';
                str+='<div class="pli_btm_r fl"> <span>'+curData["companygood"]+'</span> </div> </div> </li>';
                //console.log(str);
                hotList.innerHTML=str;
            }
            //console.log(str);
            //hotList.innerHTML=str;
        }

        var xhr = new XMLHttpRequest();
        xhr.open("get","/getData?_="+Math.random(),true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState ==4&&/^2\d{2}$/.test(xhr.status)){
                callback(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(null);

    }

//搜索自动下拉
    $(function () {
        var $searchInput = $("#search_input"),
            $search= $("#search_box"),
            $searchList = $search.children(".searchList");

        $searchInput.on("focus keyup", function () {
            var val = $(this).val().replace(/^ +| +$/g,"");
            if(val.length>0){
                showList();
                return;
            }
            $searchList.stop().slideUp(200);
        });
        //事件委托:点击的时候，如果事件源是文本框就不处理，若事件源是LI就让LI的内容进入文本框中，并且让列表区隐藏，如果事件源是其他的操作都隐藏
        $("body").on("click", function (e) {
            var tar = e.target,
                $tar = $(tar);
            if(tar.id ==="search_input"){
                return;
            }
            if(tar.tagName.toUpperCase() ==="LI"&&$tar.parent().hasClass("searchList")){
                $searchList.stop().slideUp(200);
                $searchInput.val($tar.html());
                return;
            }
            $searchList.stop().slideUp(200);
        });
        //通过jsonp跨域请求把输入的内容匹配回阿里的额数据获取到
        function showList(){
            var val = $searchInput.val().replace(/^ +| +$/g,"");
            if(val.length === 0){
                return;
            }
            $.ajax({
                url:"http://suggest.lagou.com/suggestion/mix?input="+val,
                type:"get",
                dataType:"jsonp",
                jsonp:"suggestback",
                success: function (data) {
                    var str ="";
                    if(data&&data["POSITION"]){
                        data = data["POSITION"];
                        $.each(data, function (index, item) {
//                            item= data["cont"];
                            if(index<10){
                                str +='<li>'+item["cont"]+'</li>';
                            }
                        });
                        if(!str){
                            $searchList.css("display","none");
                            return;
                        }
                        $searchList.html(str).stop().slideDown(200);
                    }
                }
            });
        }

    });

























}();




