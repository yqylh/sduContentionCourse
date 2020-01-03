var kch = [];
var kxh = [];
var kcpage = [];
var kcpagerank = [];
var pagenum = 0;
var firstDo, secondDo;
var num = 0;
function trySelect() {
	var pushsearch = "type=kc&currentPage=" + kcpage[num] + "&kch=&jsh=&skxq=&skjc=&kkxsh="
	MyApp.post("/b/xk/xs/kcsearch", pushsearch, function(data) {
		var there = data.object.resultList[kcpagerank[num]];
		num = num + 1;
		if (num == kcpage.length) num = 0;
		if (there.kyl > 0) {
			var url = "/b/xk/xs/add/" + there.KCH + "/" + there.KXH;
			MyApp.post(url, function(data) {
// 				console.log(data.msg)
				alert(data.msg)
			});
		} else {
			console.log(there.KCM + "课程号：" + there.KCH + "课序号：" + there.KXH + "  抱歉无课\n")
		}
	})
}
function getwz() {
	var pushsearch = "type=kc&currentPage=" + pagenum + "&kch=&jsh=&skxq=&skjc=&kkxsh="
	pagenum = pagenum + 1;
	MyApp.post("/b/xk/xs/kcsearch", pushsearch, function(data) {
		var testlist = data.object.resultList;
		for (var j = 0; j < data.object.resultList.length; j++) {
            for (var k = 0; k < kch.length; k++) {
                if (testlist[j].KCH == kch[k] && testlist[j].KXH == kxh[k]) {
                    kcpage.push(data.object.currentPage)
                    kcpagerank.push(j)
                    console.log(data.object.currentPage, j)
                }
            }
        }
		if (data.object.currentPage == data.object.totalPages) {
            clearInterval(firstDo);
            console.log('读取完毕');
            secondDo = setInterval(trySelect, 300)
        }
	})
}
firstDo = setInterval(getwz, 300)
