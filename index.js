//頁面列表
let pageList=["login","sec1","sec2","sec3","sec4"];
//要去的頁面
let chosen=undefined;

//顯示要去的頁面、隱藏其他頁面
function showChosenAndHideOthers(choose){
    document.getElementById(`${choose}`).style.display="inline-block";
    let others=pageList.filter(element=>
        element!=choose
    )
    others.forEach(element=>{
        document.getElementById(`${element}`).style.display="none"
    })
}
//去符合條件的頁面
function goDifferentPage(page){
    switch(page){
        case "login":
            chosen="login";
            break;
        case "sec1":
            chosen="sec1";
            break;
        case "sec2":
            chosen="sec2";
            break;
        case "sec3":
            chosen="sec3";
            break;
        case "sec4":
            chosen="sec4";
            break;          
    }
    showChosenAndHideOthers(chosen)
}
//條件判斷要去的頁面
function judgePage(){
    if(true){
        goDifferentPage("sec2")
    }
}