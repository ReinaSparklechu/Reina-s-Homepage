//declare calender components


const Header = document.getElementById('Header')
const Footer = document.getElementById('footer');
const dateCells = document.createElement('div');
const dateRows = document.createElement('div');
dateCells.setAttribute('class', 'cells');
var cellid=0;
let Month = ['January' , 'Febuary', 'March' , 'April' , 'May', 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
let currentMonth = new Date;
// Set header content
Header.textContent = Month[currentMonth.getMonth()];

//set footer display
Footer.style.display = 'flex';
Footer.style.flexDirection = 'column';
//style date cells;
dateCells.style.width = '10vh';
dateCells.style.height = '10vh';
dateCells.style.border = '1px solid black';
dateRows.style.direction ='row';
dateRows.style.display = 'flex';
// get top row to state days
const toprow = document.createElement('div');
toprow.style.direction = 'row';
toprow.style.display = 'flex';

let days = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];
Footer.appendChild(toprow)
//create date rows and insert into footer via nested loops

for(var i = 0; i<7;i ++)
{
    const cell = dateCells.cloneNode(true);
    cell.style.height = '4vh';
    cell.textContent = days[i].toString();
    toprow.appendChild(cell);
}
Footer.appendChild(toprow)
for(var i = 0; i< 5; i++)
{
    const row =dateRows.cloneNode(true);
    for(var j =0; j<7; j++)
    {
        //adding cells to row
        const cell = dateCells.cloneNode(true);
        cell.setAttribute('id', cellid.toString());
        cell.textContent = cellid.toString();
        row.appendChild(cell);
        cellid++;
    }
    Footer.appendChild(row);
}


