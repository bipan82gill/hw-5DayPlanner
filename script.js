var timeEl=document.querySelector("#timeofEvent");
var eventofDayEl =document.querySelector("#eventofDay");
var ulEl =document.querySelector("#eventlist");
var liEl =document.querySelector("#li");
var dayEventsEl= document.querySelector("#dayEvents");
var saveEl = document.querySelector("#saveBtn");
var eventFormEl = document.querySelector("#event-form");
var events = [{ }];
function renderEvent(){
    for(i=0;i<events.length;i++){
        var newEvent=events[i];
        var li =document.createElement(li);
        li.textContent= newEvent;
        li.setattribute("data-index",i);
    
        var button=document.createElement("button");
        button.textContent = "Edit";
        liEl.appendChild(button);
        ulEl.appendChild(li);
    }
}
function init(){
    var storedEvents=JSON.parse(localStorage.getItems("events"));
    if(storedEvents!== null){
        events=storeEvents;
    }
    renderEvent();
}
function storeEvents(){
    localStorage.setItems("events",JSON.stringify(events[{}]));
}
eventFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    var time=timeEl.value;
    var ev = eventofDayEl.value;
    if(time ===""& ev ===""){
        return;
    }
    events.push({time:ev});
    timeEl = "";
    eventofDayEl= " ";
    storeEvents();
    renderEvent();
});
