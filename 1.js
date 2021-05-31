// 在选课页面F12-console 复制粘贴运行
// 仅支持必修课 选修课内能查询到的课 , 辅修和重修请自行选课
// 请按照下面两行的格式填入课程号和课序号
let kch = ["SQ0000459H", "SQ0000411H"];
let kxh = ["400", "400"];
let kchid = [];
let kxhid = [];
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
var RXdata, BXdata, AllData;
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
function xsxkOper(kchid,kxhid){
    return new Promise((resolve,reject)=>{
        var param = "?kcid="+kxhid+"&cfbs=null";
        $.ajax({
            url:"/jsxsd/xsxkkc/ggxxkxkOper"+param,
            data:{
                jx0404id:kchid,
                xkzy:"",
                trjf:""
            },
            success:function(resp){ 
                console.log(resp);
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
    for (let i = 0; i < kch.length; i++) {
        for (let j of BXdata.aaData) {
            if (j.kch == kch[i] && j.kxh == kxh[i]) {
                kchid.push(j.jx0404id);
                kxhid.push(j.jx02id);
            }
        }
        for (let j of RXdata.aaData) {
            if (j.kch == kch[i] && j.kxh == kxh[i]) {
                kchid.push(j.jx0404id);
                kxhid.push(j.jx02id);
            }
        }
    }
    setInterval(() =>{
        for (let i = 0; i < kchid.length; i++) {
            xsxkOper(kchid[i],kxhid[i])
        }
    }, 1000);
}
main();
