//頁面列表
let pageList=["login","sec1","sec2","sec3","sec4"];
//要去的頁面
let chosen=undefined;

//顯示要去的頁面
function showChosen(choose){
    document.getElementById(`${choose}`).style.display="inline-block"
}
//找到其他頁面並隱藏它們
function findOthers(choose){
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
            showChosen(chosen);
            findOthers(chosen);
            break;
        case "sec1":
            chosen="sec1";
            showChosen(chosen);
            findOthers(chosen);
            break;
        case "sec2":
            chosen="sec2";
            showChosen(chosen);
            findOthers(chosen);
            break;
        case "sec3":
            chosen="sec3";
            showChosen(chosen);
            findOthers(chosen);
            break;
        case "sec4":
            chosen="sec4";
            showChosen(chosen);
            findOthers(chosen);
            break;          
    }
}

