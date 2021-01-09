menu_list_array = [
    "Extravaganza Pizza",
    "Veg Supreme Pizza",
    "Paneer masal Pizza",
    "Deluxe Veggie Pizza",
    "Veg master Pizza",
];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0; i < menu_list_array.length; i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0; i < menu_list_array.length; i++){
       
        htmldata=htmldata+'<div class="card">' +'<img src="https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/bc340017-9684-4572-bb08-829b260f818c.png"/>' + menu_list_array[i] + '</div>'
    
    }
htmldata = htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
