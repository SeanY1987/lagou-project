var http = require("http");
var url = require("url");
var fs = require("fs");
function querySuffixType(suffix) {
    var suffixType = null;
    switch (suffix) {
        case "HTML":
            suffixType = "text/html";
            break;
        case "CSS":
            suffixType = "text/css";
            break;
        case "JS":
            suffixType = "text/javascript";
            break;
        case "TXT":
            suffixType = "text/plain";
            break;
        case "JSON":
            suffixType = "application/json";
            break;
        case "JPG":
        case "JPEG":
            suffixType = "image/jpeg";
            break;
        case "PNG":
            suffixType = "image/png";
            break;
        case "GIF":
            suffixType = "image/gif";
            break;
        case "BMP":
            suffixType = "application/x-MS-bmp";
            break;
        case "ICO":
            suffixType = "image/x-icon";
            break;
        case "SVG":
            suffixType = "image/svg+xml";
            break;
        default:
            suffixType = "text/plain";
    }
    return suffixType;
}

var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;

    var reg = /\.(HTML|JS|CSS|TXT|JSON|JPG|JPEG|PNG|GIF|BMP|ICO|SVG)/i;
    if (reg.test(pathname)) {
        try {
            var suffix = reg.exec(pathname)[1].toUpperCase();
            var suffixType = querySuffixType(suffix);
            var conFile = /^(HTML|JS|CSS|TXT|JSON)$/i.test(suffix) ? fs.readFileSync("." + pathname, "utf8") : fs.readFileSync("." + pathname);
            response.writeHead(200, {'content-type': suffixType + ";charset=utf-8;"});
            response.end(conFile);
        } catch (e) {
            response.writeHead(404);
            response.end();
        }
        return;
    }
    if(pathname =="/getData"){
        var con= fs.readFileSync("./json/data.json","utf8");
        response.writeHead(200,{"content-type":suffixType+";charset=utf-8;"});
        response.end(con);
        return;
    }
    response.writeHead(404);
    response.end();

});
server.listen(80, function () {
    console.log("监听80端口成功");
});