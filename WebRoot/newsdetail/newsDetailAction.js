/**
 * 新闻详情处理
 */
function clickGetNewsDetail() {

	$.ajax({
		// url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
		url : "newsdetaildata.json",
		type : "POST",
		contentType : "application/json", // 必须有
		dataType : "json", // 表示返回值类型，不必须
		data : JSON.stringify({
			"request" : {
				"body" : {
					"clientInfo" : {
						"clientIp" : "10.228.237.141",
						"deviceId" : "68a116b07394858b",
						"networktype" : "wifi",
						"refId" : "5866720",
						"versionNumber" : "1.0",
						"versionType" : "android"
					},
					"activeId" : "467"
				},
				"header" : {
					"accountID" : "c26b007f-c89e-431a-b8cc-493becbdd8a2",
					"digitalSign" : "7c0a13565e8a110eb4e3875708c056c4",
					"reqTime" : "1429289137608",
					"serviceName" : "GetActiveDetailById",
					"version" : "20111128102912"
				}
			}
		}), // 相当于请求的json
		success : function(data) {
			var jsonText = JSON.stringify(data);
			alert(jsonText);
			alert("newsid == " + getQueryString("newsid"));
		}
	});
}
/**
 * 获取链接嗲之中?的参数
 * 
 * @param name
 * @returns
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}