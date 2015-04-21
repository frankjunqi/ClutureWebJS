/**
 * Created by kjh08490 on 2015/4/21.
 */
/**
 * 获取新闻详情
 */
/*
常遇到下面的几种情况:
    1、 服务端需要返回一段普通文本给客户端，Content-Type="text/plain"
2 、服务端需要返回一段HTML代码给客户端 ，Content-Type="text/html"
3 、服务端需要返回一段XML代码给客户端 ，Content-Type="text/xml"
4 、服务端需要返回一段javascript代码给客户端
5 、服务端需要返回一段json串给客户端

我们主要讨论返回javascript代码和Json对象的情况。

javascript 的 contentType 按最标准的写法 应该是 application/javascript。而常用的 text/javascript 已经被 rfc定义为废弃的。

但是 在这里暂时不建议使用 application/javascript . 大家还是继续使用 text/javascript 为好. 因为很多老旧浏览器并不支持 application/javascript . 而所有浏览器都支持text/javascript. 在标准和广泛的兼容性之间 还是暂且选择后者吧。

json 的 contentType 常见写法有 : text/json & text/javascript .
    但是 这个 text/json 其实是根本不存在的, 而 text/javascript 在有些时候客户端处理起来会有歧义. 对于json的contentType , rfc里定义的标准写法是 :application/json.
    在这里毫无疑问 我们应该选择标准写法的 application/Json。*/

function clickGetNewsDetail() {

    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "newDetaildata.txt",
        type: "POST",
        contentType: "application/json", // 必须有
        dataType: "text", // 表示返回值类型，不必须
        data: JSON.stringify({
            "request": {
                "body": {
                    "clientInfo": {
                        "clientIp": "10.228.237.141",
                        "deviceId": "68a116b07394858b",
                        "networktype": "wifi",
                        "refId": "5866720",
                        "versionNumber": "1.0",
                        "versionType": "android"
                    },
                    "activeId": "467"
                },
                "header": {
                    "accountID": "c26b007f-c89e-431a-b8cc-493becbdd8a2",
                    "digitalSign": "7c0a13565e8a110eb4e3875708c056c4",
                    "reqTime": "1429289137608",
                    "serviceName": "GetActiveDetailById",
                    "version": "20111128102912"
                }
            }
        }), // 相当于请求的json
        success: function (data) {
            var htmls = data;
            $("#news_content").html(htmls);
            // 重定向地址
            //window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    });
}