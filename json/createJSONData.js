//var nameStr = "赵钱孙李周吴郑王冯陈楚卫蒋沈韩杨朱秦尤许何吕施张孔操燕华金魏曹姜";//->0-31
//var nameStr = ['赵钱','孙李','周吴','郑王','冯陈楚卫蒋沈韩杨朱秦尤许何吕施张孔操燕华金魏','曹姜'];//->0-31
//var nameStr2 = "一二三四五六七八九";//->0-8
var companyname = ['腾讯','百度','阿里巴巴','网易','新东方','新浪','优酷','携程','分众传媒','奇虎','人人','搜狐','搜房网','前程无忧','盛大游戏','畅游','巨人网络','土豆','易居中国','完美时空'];
var position = ["Java","Python","PHP",".NET","C#","C++","C","VB","Delphi","Perl","Ruby","Hadoop","Node.js","数据挖掘","自然语言处理","搜索算法","精准推荐","全栈","Go","ASP","Shell","后端开发其它","移动开发","HTML5","Android","iOS","WP","移动开发其它","前端开发","web前端","Flash","html5","JavaScript","U3D","COCOS2D-X"];
var salary = ["10k-20k","15k以上","18k","20k-30k","18k-30k"];
var experience= ["经验3-5年","经验1-2年"];
var education = ["专科","本科","硕士","博士","高中以上"];
var companytype = ["互联网·电子商务 / 初创型（天使轮）","移动互联网 · 数据服务 / 成长型(不需要融资)","移动互联网 / 成长型(B轮)","金融 / 成长型(A轮)"];
var companydis= ["拥有5000w月流水项目，职位晋升空间大","五险一金 绩效奖金 技术大拿多/氛围好","发展空间大","薪资+高额年终奖+团队项目期权","五险一金 免费双餐 30天年假"];
var companygood = ["股票期权","半年调薪","绩效奖金多","生日/满年趴","结婚生育礼金","岗位晋升","年度旅游","年底双薪","五险一金"]
function ran(n, m) {
    return Math.round(Math.random() * (m - n) + n);
}
var ary = [];
for (var i = 1; i <= 15; i++) {
    var obj = {};
    obj["num"] = i < 10 ? "00" + i : "0" + i;
    obj["position"]=position[ran(0,35)]+"工程师";
    obj["companyname"] = companyname[ran(0, 20)];
    obj["salary"] = salary[ran(0,4)];
    obj["experience"] = experience[ran(0,1)];
    obj["education"] =education[ran(0, 4)] ;
    obj["companytype"] = companytype[ran(0,3)];
    obj["companydis"] = companydis[ran(0,4)];
    obj["companygood"]= companygood[ran(0,7)]+companygood[ran(0,7)];
    console.log(obj["lgsalary"]);
    ary.push(obj);
}
console.log(obj["lgsalary"]);
console.log(JSON.stringify(ary));








var str00 =" 腾讯           578 2       百度           424 3       阿里巴巴       350 4       网易           82.1 5       新东方         42.5 6       新浪           35.6 7       优酷           27.2 8       携程           26.8 9       分众传媒       26.5 10      奇虎360       22.9 11      人人           17.50 设置左右滚动的iscroll      搜狐           17.2 13      搜房网         13.6 14      前程无忧       13.13. 15      盛大游戏       11.3 16      畅游           11.2 17      巨人网络       10.9 18      土豆           10.1 19      易居中国       4.5 20      完美时空       4.5 ";
var reg0 = /\d+|\.|\d+/g;
var str0 =str00.replace(reg0,"").replace(/ +/g,"','");
//console.log(str0);
var ary0=['腾讯','百度','阿里巴巴','网易','新东方','新浪','优酷','携程','分众传媒','奇虎','人人','搜狐','搜房网','前程无忧','盛大游戏','畅游','巨人网络','土豆','易居中国','完美时空'];

var str01="Java Python PHP .NET C# C++ C VB Delphi Perl Ruby Hadoop Node.js 数据挖掘 自然语言处理 搜索算法 精准推荐 全栈工程师 Go ASP Shell 后端开发其它 移动开发 HTML5 Android iOS WP 移动开发其它 前端开发 web前端 Flash html5 JavaScript U3D COCOS2D-X ";

var str02 = str01.replace(/ +/g,'","');
//console.log(str02);
str02 = "Java","Python","PHP",".NET","C#","C++","C","VB","Delphi","Perl","Ruby","Hadoop","Node.js","数据挖掘","自然语言处理","搜索算法","精准推荐","全栈工程师","Go","ASP","Shell","后端开发其它","移动开发","HTML5","Android","iOS","WP","移动开发其它","前端开发","web前端","Flash","html5","JavaScript","U3D","COCOS2D-X";