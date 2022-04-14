//declare calender components

const Calender = document.getElementById('Calender');
Calender.style.width = '70vh';
Calender.style.background ='transparent';
const Header = document.createElement('div');
const Footer = document.createElement('div');
const dateCells = document.createElement('div');
Header.setAttribute('class', 'calenderHead');
dateCells.setAttribute('class', 'cells');
let Month = ['January' , 'Febuary', 'March' , 'April' , 'May', 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
let currentMonth = new Date;
// Set header content
Header.textContent = Month[currentMonth.getMonth()];
Header.style.textAlign = "Center";
Header.style.verticalAlign = "Center";
Header.style.fontSize = '6vh';
Header.style.margin = 'auto';
Header.style.height = '8vh';
//set footer conter
Footer.style.height = '60vh';
Footer.style.margin = '1vh';

//create date cells;
dateCells.style.
Calender.appendChild(Header);
Calender.append(Footer);
Calender.appendChild(dateCells);
