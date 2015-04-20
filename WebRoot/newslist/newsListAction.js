/**
 * 获取新闻列表请求数据
 */

function clickGetNewsList() {

    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "newslistdata.json",
        type: "POST",
        contentType: "application/json", // 必须有
        dataType: "json", // 表示返回值类型，不必须
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
            // 将json转string
            var jsonText = JSON.stringify(data);
            alert(jsonText);
            // 解析json里面的数据
            var response = data.response;
            var newsList = data.response.body.newsList;
            $.each(newsList, function (i, v) {
                alert(newsList[i].thumbimage);
            });
            // 重定向地址
            window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    });
}