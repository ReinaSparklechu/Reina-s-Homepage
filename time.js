const timeWidget = document.getElementById("time");
const clock = new Date;
while(true)
{
    timeWidget.textContent=toString(clock.getTime());
}