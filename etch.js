const righttab = document.getElementById('right');
var cell = document.createElement('div');
cell.style.borderBlockColor = 'solid white';
cell.style.borderWidth = '4px';
cell.style.width= '20px';
cell.style.height = '20px';
cell.style.backgroundColor = 'black'
cell.style.padding = "0";
cell.setAttribute('class', 'grid');
cell.addEventListener('click', () => cell.style.backgroundColor ='white');

for(i=0; i<16; i++)
{
    const grid = cell.cloneNode();
    grid.addEventListener('click', () =>grid.style.backgroundColor ='white')
    righttab.appendChild(grid);
}
righttab.appendChild(cell);
