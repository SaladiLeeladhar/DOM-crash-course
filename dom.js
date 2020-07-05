// EXAMINE THE DOCUMENT OBJECT
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);

// document.title= 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent="hello";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');

//console.log(headerTitle);
//headerTitle.textContent= 'Hello';
//headerTitle.innerText='goodbye';
//headerTitle.innerHTML ='<h3>Hello</h3>'
//header.style.borderBottom ='solid 3px #000 ';

// GET ELE,ENTS BY CLASS NAME
//var items= document.getElementsByClassName('list-group-items');
//console.log(items);
//console.log(items [1]);
//items[1].style.fontWeight='bold';
//items.style.backGroundcolor='#f4f4f4';

//for( var i = 0; i < items.length; i++){
//	items[i].style.backgroundColor='#f4f4f4';
//}


//QUERY SELECTOR

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';
 
//var input=document.querySelector('input');
//input.value ='heloo world'; 

//var submit=document.querySelector('input[type="submit"]');
//submit.value='send';

//var item=document.querySelector('.list-group-items:last-child');
//item.style.color='blue';


//var odd= document.querySelectorAll('li:nth-child(odd)');
//for( var i=0; i<odd.length; i++){
//	odd[i].style.backgroundColor='#f4f4f4'
//}

//var itemList = document.querySelector('#Items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//CREATE NEW DIV
//var newDiv = document.createElement('div');

//newDiv.className='hello';
//newDiv.id='hello1';
//newDiv.setAttribute('title','hello Div');
//console.log(newDiv);

v//ar button = document.getElementById('button').addEventListener ('click',buttonClick);

//function buttonClick(e){
	//console.log('Button clicked');
//document.getElementById('header-title').textContent ='changed';
//document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);

//console.log(e);

//console.log(e.target.classList);

//console.log(e.clientX);
//console.log(e.clientY);

//console.log(e.altkey);
//console.log(e.ctrlkey);
//console.log(e.shiftkey);
//}

function runEvent(e){
	console.log('EVENT TYPE:')
}