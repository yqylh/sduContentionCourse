// 在选课页面F12-console 复制粘贴运行
// 支持必修课 选修课 限选课内能查询到的课 , 辅修和重修不存在课余量限制请自行选课
// 请按照下面两行的格式填入课程号和课序号
let kch = ["sd01332200" , "sd00812930" , "sd07517850"];
let kxh = ["100" , "900" , "600"];
let kchid = [];
let kxhid = [];
let kctype = [];
let reqData = [
    { "name": "sEcho", "value": "1" },
    { "name": "iColumns", "value": "1" },
    { "name": "sColumns", "value": "" },
    { "name": "iDisplayStart", "value": "0" },
    { "name": "iDisplayLength", "value": "1" },
    { "name": "mDataProp_0", "value": "kch" },
    { "name": "mDataProp_1", "value": "kcmc" },
    { "name": "mDataProp_2", "value": "kxhnew" },
    { "name": "mDataProp_3", "value": "jkfs" },
    { "name": "mDataProp_4", "value": "xmmc" },
    { "name": "mDataProp_5", "value": "xf" },
    { "name": "mDataProp_6", "value": "skls" },
    { "name": "mDataProp_7", "value": "sksj" },
    { "name": "mDataProp_8", "value": "skdd" },
    { "name": "mDataProp_9", "value": "xqmc" },
    { "name": "mDataProp_10", "value": "xkrs" },
    { "name": "mDataProp_11", "value": "syrs" },
    { "name": "mDataProp_12", "value": "ctsm" },
    { "name": "mDataProp_13", "value": "szkcflmc" },
    { "name": "mDataProp_14", "value": "czOper"}
];
var RXdata, BXdata, AllData , XXdata;
// 加载任选
let searchRX = ()=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            type:"post",
            url:"/jsxsd/xsxkkc/xsxkGgxxkxk?kcxx=&skls=&skxq=&skjc=&sfym=false&sfct=true&szjylb=&sfxx=false&skfs=",
            data:reqData,
            success:function(resp){ 
                RXdata = $.parseJSON(resp);
                resolve();
            }
        });
    });
}
// 加载必修
let searchBX = ()=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            type:"post",
            url:"/jsxsd/xsxkkc/xsxkBxxk?1=1&kcxx=&skls=&skfs=",
            data:reqData,
            success:function(resp){ 
                BXdata = $.parseJSON(resp);
                resolve();
            }
        });
    });
}
// 加载限选
let searchXX = () =>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            type:"post",
            url:"/jsxsd/xsxkkc/xsxkXxxk?1=1&kcxx=&skls=&skfs=",
            data:reqData,
            success:function(resp){ 
                XXdata = $.parseJSON(resp);
                resolve();
            }
        });
    });
}
// 选修选课
function xsxkOper(_kchid,_kxhid){
    return new Promise((resolve,reject)=>{
        let bac = String(_kchid);
        var param = "?kcid="+_kxhid+"&cfbs=null";
        $.ajax({
            url:"/jsxsd/xsxkkc/ggxxkxkOper"+param,
            data:{
                jx0404id:_kchid,
                xkzy:"",
                trjf:""
            },
            success:function(resp){
                resp = JSON.parse(resp);
                console.log(resp.message);
                if (resp.success == true) {
                    kxhid.splice(kchid.indexOf(bac) , 1);
                    kctype.splice(kchid.indexOf(bac) , 1);
                    kchid.splice(kchid.indexOf(bac) , 1);
                }
                resolve();
            }
        })
    })
}
// 必修和限选选课
function xxxkOper(_kchid,_kxhid){
    return new Promise((resolve,reject)=>{
        let bac = String(_kchid);
        var param = "?kcid="+_kxhid+"&cfbs=null";
        $.ajax({
            url:"/jsxsd/xsxkkc/xxxkOper"+param,
            data:{
                jx0404id:_kchid,
                xkzy:"",
                trjf:""
            },
            success:function(resp){
                resp = JSON.parse(resp);
                console.log(resp.message);
                if (resp.success == true) {
                    kxhid.splice(kchid.indexOf(bac) , 1);
                    kctype.splice(kchid.indexOf(bac) , 1);
                    kchid.splice(kchid.indexOf(bac) , 1);
                }
                resolve();
            }
        })
    })
}
let main = async function() {
    await searchRX();
    let allNum = RXdata.iTotalRecords;
    reqData[1].value = allNum;
    reqData[4].value = allNum;
    await searchRX();
    //
    reqData[1].value = 1;
    reqData[4].value = 1;
    //
    await searchBX();
    allNum = BXdata.iTotalRecords;
    reqData[1].value = allNum;
    reqData[4].value = allNum;
    await searchBX();

    //
    reqData[1].value = 1;
    reqData[4].value = 1;
    //
    await searchXX();
    allNum = XXdata.iTotalRecords;
    reqData[1].value = allNum;
    reqData[4].value = allNum;
    await searchXX();

    for (let i = 0; i < kch.length; i++) {
        for (let j of BXdata.aaData) {
            if (j.kch == kch[i] && j.kxh == kxh[i]) {
                kchid.push(j.jx0404id);
                kxhid.push(j.jx02id);
                kctype.push(0);
            }
        }
        for (let j of RXdata.aaData) {
            if (j.kch == kch[i] && j.kxh == kxh[i]) {
                kchid.push(j.jx0404id);
                kxhid.push(j.jx02id);
                kctype.push(1);
            }
        }
        for (let j of XXdata.aaData) {
            if (j.kch == kch[i] && j.kxh == kxh[i]) {
                kchid.push(j.jx0404id);
                kxhid.push(j.jx02id);
                kctype.push(2);
            }
        }
    }
    setInterval(() =>{
        for (let i = 0; i < kchid.length; i++) {
            if (kctype[i] == 1) xsxkOper(kchid[i],kxhid[i]);
            else xxxkOper(kchid[i],kxhid[i]);
        }
    }, 500);
}
main();
