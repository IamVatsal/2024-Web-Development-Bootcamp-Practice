function anothereventlistiner(typeOfEvent, callback) {
  var eve = {
    eventType: "keypress",
    duration: 1,
    key: "v",
  };
  if (eve.eventType === typeOfEvent) {
    callback(eve);
  }
}

// debugger;
// anothereventlistiner("keypress" , function (event){
//     console.log(event);
// });