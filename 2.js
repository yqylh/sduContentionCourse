var pushsearch = `aoData=%5B%7B%22name%22%3A%22sEcho%22%2C%22value%22%3A1%7D%2C%7B%22name%22%3A%22iColumns%22%2C%22value%22%3A5%7D%2C%7B%22name%22%3A%22sColumns%22%2C%22value%22%3A%22%22%7D%2C%7B%22name%22%3A%22iDisplayStart%22%2C%22value%22%3A0%7D%2C%7B%22name%22%3A%22iDisplayLength%22%2C%22value%22%3A-1%7D%2C%7B%22name%22%3A%22mDataProp_0%22%2C%22value%22%3A%22kch%22%7D%2C%7B%22name%22%3A%22mDataProp_1%22%2C%22value%22%3A%22kcm%22%7D%2C%7B%22name%22%3A%22mDataProp_2%22%2C%22value%22%3A%22jsm%22%7D%2C%7B%22name%22%3A%22mDataProp_3%22%2C%22value%22%3A%22function%22%7D%2C%7B%22name%22%3A%22mDataProp_4%22%2C%22value%22%3A%22function%22%7D%2C%7B%22name%22%3A%22iSortCol_0%22%2C%22value%22%3A0%7D%2C%7B%22name%22%3A%22sSortDir_0%22%2C%22value%22%3A%22asc%22%7D%2C%7B%22name%22%3A%22iSortingCols%22%2C%22value%22%3A1%7D%2C%7B%22name%22%3A%22bSortable_0%22%2C%22value%22%3Atrue%7D%2C%7B%22name%22%3A%22bSortable_1%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22bSortable_2%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22bSortable_3%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22bSortable_4%22%2C%22value%22%3Afalse%7D%5D`
MyApp.post("/b/pg/xs/list", pushsearch, function(data) {
    (async () =>{
        for (let i of data.object.aaData) {
            var pushsearch = `xnxq=${i.xnxq}&kch=${i.kch}&jsh=${i.jsh}&wjid=${i.wjid}&wjmc=%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%E8%AF%BE%E5%A0%82%E6%95%99%E5%AD%A6%E8%AF%84%E4%BB%B7(2017)&zbid=36&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_0=5.0&zbid=37&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_1=5.0&zbid=38&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_2=5.0&zbid=39&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_3=5.0&zbid=40&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_4=5.0&zbid=41&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_5=5.0&zbid=42&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_6=5.0&zbid=43&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_7=5.0&zbid=44&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_8=5.0&zbid=45&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_9=5.0&zbid=46&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_10=5.0&zbid=47&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_11=5.0&zbid=48&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_12=5.0&zbid=49&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_13=5.0&zbid=50&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_14=5.0&zbid=52&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_15=5.0&zbid=53&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_16=5.0&zbid=54&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_17=5.0&zbid=55&zblx=%E9%80%89%E6%8B%A9&sfbt=&zbda_18=10.0&zbid=51&zblx=%E4%B8%BB%E8%A7%82%E9%80%89%E6%8B%A9&sfbt=&zbda_19=%E8%AF%BE%E7%A8%8B%E8%BF%87%E9%9A%BE&zbid=56&zblx=%E4%B8%BB%E8%A7%82%E9%80%89%E6%8B%A9&sfbt=&zbda_20=%E6%8E%A8%E8%8D%90&zbid=57&zblx=%E4%B8%BB%E8%A7%82&sfbt=%E6%98%AF&zbda_21=233`
            await MyApp.post("/b/pg/xs/add", pushsearch, function(data) {
                console.log(data)
            })
            await new Promise((resolve, reject) =>{
                setTimeout(resolve, 2000);
            })
        }
        console.log("结束了");
    })()
})
