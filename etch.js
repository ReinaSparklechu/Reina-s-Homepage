const righttab = document.getElementById('right');
var panel = document.createElement('div');
var cell = document.createElement('div');
var row = document.createElement('div');
cell.style.borderBlockColor = 'solid white';
cell.style.borderWidth = '4px';
cell.style.width= '20px';
cell.style.height = '20px';
cell.style.backgroundColor = 'black'
cell.style.padding = "0";
cell.setAttribute('class', 'grid');
cell.click.call()
row.style.display = "flex";
row.style.flexDirection = "row"
panel.style.width = '320px';
panel.style.height = '320px';
panel.style.display ="flex";
panel.style.flexDirection = "column"
panel.style.justifyContent = "space-evenly";
panel.click
function colorchange(cell)
{   
    const updatingcell = cell;
    updatingcell.style.backgroundColor = 'white';
    alert('hello!')
}
panel.addEventListener('click', function(){colorchange(panel)},false);
for(var i = 0; i<16; i++)
{
    row.appendChild(cell.cloneNode(true));
    row.
}
for(var i=0; i<16;i++)
{
    panel.appendChild(row.cloneNode(true));
}

righttab.appendChild(panel);
