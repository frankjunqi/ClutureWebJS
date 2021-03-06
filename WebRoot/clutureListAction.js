/**
 * 获取文化列表请求数据
 */

function clickGetCluturesList() {

    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "cluturelistdata.json",
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
            //alert(jsonText);
            // 解析json里面的数据
            var response = data.response;
            var newsList = data.response.body.newsList;
            $.each(newsList, function (i, v) {
                //alert(newsList[i].newsId);
            });
            var htmls = "";
            $.each(newsList, function (i, v) {
                htmls = htmls + "<div class='item'> <a href='12'>" +
                "<img style ='  width: 480px; height: 320px;' src='" + newsList[i].thumbimage + "'" + " /></a><!-- /box --></div>";
            });
            $("#hpage_slider").html(htmls);
            initBanner(newsList);
            // 重定向地址
            //window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    });
}
/**
 * 获取公司简介信息
 */

function clickGetCompanyProfile() {

    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "cluturelistdata.json",
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
            //alert(jsonText);
            // 解析json里面的数据
            var response = data.response;
            var newsList = data.response.body.newsList;
            $.each(newsList, function (i, v) {
                //alert(newsList[i].newsId);
            });
            var htmls = "";
            $.each(newsList, function (i, v) {
                htmls = htmls + "<div class='item'> <a href='12'>" +
                "<img style ='  width: 940px; height: 320px;' src='" + newsList[i].thumbimage + "'" + " /></a><!-- /box --></div>";
            });
            $("#companyprofile_hpage_slider").html(htmls);
            initCompanyProfileBanner(newsList);
            // 重定向地址
            //window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    });
}


/**
 * 公司简介的banner
 * @param newsList
 */
function initCompanyProfileBanner(newsList) {
    $('#companyprofile_hpage_slider').after('<div id="fsn"><ul id="fs_pagination">').cycle({
        timeout: 1000, // milliseconds between slide transitions (0 to disable auto advance)
        fx: 'fade', // choose a transition type, ex: fade, scrollUp, shuffle, etc...
        pager: '#fs_pagination', // selector for element to use as pager container
        pause: 1, // true to enable "pause on hover"
        after: function (currSlideElement, nextSlideElement, options, forwardFlag) {
            // banner滑动事件index
            //alert('s' + newsList[options.currSlide]);
            // 根据id的显示数据
            $('#cluture_title').text(newsList[options.currSlide].title);
            //$('#cluture_type').html("<strong>类型:</strong>" + newsList[options.currSlide].typelx);
            //$('#cluture_desc').text(newsList[options.currSlide].desc);
            // 获取公司简介信息
            clickShowCompanyProfile();
            // 赋值a标签href
            //$('#cluture_url').attr('href', (newsList[options.currSlide].newsId));
        },
        pauseOnPagerHover: 0 // true to pause when hovering over pager link
    });
};
/**
 * 获取公司简介信息
 */
function clickShowCompanyProfile() {
    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "companyprofiletxt.txt",
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
            $("#cluture_desc").html(htmls);
            // 重定向地址
            //window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    })
}
/**
 * 首页文化banner滚动的js
 *
 * 图片轮播--文字也要轮播
 *
 */
function initBanner(newsList) {
    $('#hpage_slider').after('<div id="fsn"><ul id="fs_pagination">').cycle({
        timeout: 1000, // milliseconds between slide transitions (0 to disable auto advance)
        fx: 'fade', // choose a transition type, ex: fade, scrollUp, shuffle, etc...
        pager: '#fs_pagination', // selector for element to use as pager container
        pause: 1, // true to enable "pause on hover"
        after: function (currSlideElement, nextSlideElement, options, forwardFlag) {
            // banner滑动事件index
            //alert('s' + newsList[options.currSlide]);
            // 根据id的显示数据
            $('#cluture_title').text(newsList[options.currSlide].title);
            $('#cluture_type').html("<strong>类型:</strong>" + newsList[options.currSlide].typelx);
            $('#cluture_desc').text(newsList[options.currSlide].desc);
            // 赋值a标签href
            //$('#cluture_url').attr('href', ("gallery.html");
            $('#cluture_url').attr('href', ("gallery.html?"+newsList[options.currSlide].newsId));
        },
        pauseOnPagerHover: 0 // true to pause when hovering over pager link
    });
};

/**
 * 新闻
 */
function clickGetNewsList() {
    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "cluturelistdata.json",
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
            //alert(jsonText);
            // 解析json里面的数据
            var response = data.response;
            var newsList = data.response.body.newsList;
            $.each(newsList, function (i, v) {
                //alert(newsList[i].newsId);
            });
            var htmls = "";
            $.each(newsList, function (i, v) {
                if (i > 3) {
                    return;
                }
                htmls = htmls + "<li> <p class='name'><strong>" + "作者：" + "</strong>" + newsList[i].author + "</p> <blockquote>" + newsList[i].content + "</blockquote> <p class='readmore' ><a target='_blank' href='" + newsList[i].newsId + "'><strong>" + "阅读详情" + "</strong></a></p> </li>";
            });
            $("#newslist").html(htmls);

            // 重定向地址
            //window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    })
}

/**
 * 招聘
 */
function clickGetJoinOurTeam() {
    $.ajax({
        // url : "http://yundong.shenghuo365.net/ActiveHandler.ashx",
        url: "joinourteam.txt",
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
            $("#joinourteam_content").html(htmls);
            // 重定向地址
            //window.location.href = "../newsdetail/newsdetailpage.html?newsid=1"
        }
    })
}
