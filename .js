//hacer responsive
let bobody=document.getElementsByClassName('bobody');
let boheader=document.getElementsByClassName('boheader');
let bofooter=document.getElementsByClassName('bofooter');

//funcion para responsive
function responsive(){
    if(window.innerWidth<768){
        bobody[0].style.width="100%";
        bobody[0].style.height="100%";
        boheader[0].style.width="100%";
        bofooter[0].style.width="100%";
    }
    else{
        bobody[0].style.width="80%";
        bobody[0].style.height="100%";
        boheader[0].style.width="80%";
        bofooter[0].style.width="80%";
    }
    //header responsive
    if(window.innerWidth<768){ 
    }
}

//funcion para modal
function modal(){
    //crear elementos
    let modal=document.createElement('div');
    let modalcontent=document.createElement('div');
    let modalheader=document.createElement('div');
    let modalbody=document.createElement('div');
    let modalfooter=document.createElement('div');
    let modalclose=document.createElement('span');
    let modaltitle=document.createElement('h2');
    let modaltext=document.createElement('p');
    let modalbutton=document.createElement('button');
    //agregar clases
    modal.classList.add('modal');
    modalcontent.classList.add('modal-content');
    modalheader.classList.add('modal-header');
    modalbody.classList.add('modal-body');
    modalfooter.classList.add('modal-footer');
    modalclose.classList.add('close');
    modaltitle.classList.add('modal-title');
    modaltext.classList.add('modal-text');
    modalbutton.classList.add('modal-button');
    //agregar contenido
    modalclose.innerHTML="&times;";
    modaltitle.innerHTML="Modal Title";
    modaltext.innerHTML="Modal Text";
    modalbutton.innerHTML="Modal Button";
    //agregar elementos
    modalheader.appendChild(modalclose);
    modalheader.appendChild(modaltitle);
    modalbody.appendChild(modaltext);
    modalfooter.appendChild(modalbutton);
    modalcontent.appendChild(modalheader);
    modalcontent.appendChild(modalbody);
    modalcontent.appendChild(modalfooter);
    modal.appendChild(modalcontent);
    boheader[0].appendChild(modal);
    // donde guardar la modal
    let modal1=document.getElementsByClassName('modal')[0];
    //funcion para abrir modal
    function openmodal(){
        modal1.style.display="block";
    }
    //funcion para cerrar modal
    function closemodal(){
        modal1.style.display="none";
    }
    //evento para abrir modal
    modalbutton.addEventListener('click',openmodal);
    //evento para cerrar modal
    modalclose.addEventListener('click',closemodal);
    //dar tamaño
    if(window.innerWidth<768){
        modal1.style.width="100%";
        modal1.style.height="100%";
    }
    else{
        modal1.style.width="80%";
        modal1.style.height="80%";
    }

}
//funcion para dropdown
function dropdown(){
    //stilo de la funcion
    let style=document.createElement('style');
    style.innerHTML=`
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 100%;
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content a:hover {background-color: #ddd;}
    .dropdown:hover .dropdown-content {display: block;}
    .dropdown:hover .dropbtn {background-color: #3e8e41;}
    `
    boheader[0].appendChild(style);

    //crear elementos
    let dropdown=document.createElement('div');
    let dropdownbutton=document.createElement('button');
    let dropdowncontent=document.createElement('div');
    let dropdownitem1=document.createElement('a');
    let dropdownitem2=document.createElement('a');
    let dropdownitem3=document.createElement('a');
    //agregar clases
    dropdown.classList.add('dropdown');
    dropdownbutton.classList.add('dropbtn');
    dropdowncontent.classList.add('dropdown-content');
    dropdownitem1.classList.add('dropdown-item');
    dropdownitem2.classList.add('dropdown-item');
    dropdownitem3.classList.add('dropdown-item');
    //agregar contenido
    dropdownbutton.innerHTML="Dropdown";
    dropdownitem1.innerHTML="Dropdown 1";
    dropdownitem2.innerHTML="Dropdown 2";
    dropdownitem3.innerHTML="Dropdown 3";
    //agregar elementos
    dropdowncontent.appendChild(dropdownitem1);
    dropdowncontent.appendChild(dropdownitem2);
    dropdowncontent.appendChild(dropdownitem3);
    dropdown.appendChild(dropdownbutton);
    dropdown.appendChild(dropdowncontent);
    boheader[0].appendChild(dropdown);
    //donde guardar el dropdown
    let dropdown1=document.getElementsByClassName('dropdown')[0];
    //funcion para abrir dropdown
    function opendropdown(){
        dropdowncontent.style.display="block";
    }
    //funcion para cerrar dropdown
    function closedropdown(){
        dropdowncontent.style.display="none";
    }
    //evento para abrir dropdown
    dropdownbutton.addEventListener('click',opendropdown);
    //evento para cerrar dropdown
    dropdowncontent.addEventListener('mouseleave',closedropdown);
}
//funcion para tooltip
function tooltip(){
    //crear elementos
    let tooltip=document.createElement('div');
    let tooltipbutton=document.createElement('button');
    //agregar clases
    tooltip.classList.add('tooltip');
    tooltipbutton.classList.add('tooltiptext');
    //agregar contenido
    tooltipbutton.innerHTML="Tooltip text";
    //agregar elementos
    tooltip.appendChild(tooltipbutton);
    boheader[0].appendChild(tooltip);
    //donde guardar el tooltip
    let tooltip1=document.getElementsByClassName('tooltip')[0];
    //funcion para abrir tooltip
    function opentooltip(){
        tooltipbutton.style.visibility="visible";
    }
    //funcion para cerrar tooltip
    function closetooltip(){
        tooltipbutton.style.visibility="hidden";
    }
    //evento para abrir tooltip
    tooltip.addEventListener('mouseover',opentooltip);
    //evento para cerrar tooltip
    tooltip.addEventListener('mouseleave',closetooltip);
}