var x = {
  name: "Roger",
  age: 25,
  city: "New York",
  information: function () {
    console.log(
      `${this.name} please you are ${this.age}. Behave yourSelf in the city of ${this.city}`
    );
  },
};
console.log(x.information());
var dat = new Date();
var x = dat.getFullYear();
var y = dat.getMonth();
var z = dat.getDate();
var p = dat.getHours();

console.log(dat);
console.log(x);
console.log(y);
console.log(z);
console.log(p);

var g = {
  qualification: "BSC_Degree",
  country: "Kenya",
  city: "Nairobi",
  seesion: function () {
    console.log(
      `Dear, You have a degree in ${this.qualification}. Please behave in your country ${this.country}`
    );
  },
};
console.log(g.seesion());

//SetInterval
setInterval(() => {
  console.log(`Please make sure to come on ${new Date()}`);
}, 4000);

//SetTimeout
setTimeout(() => {
  console.log(`This Funtion Will only be exected for Three Seconds`);
}, 1000);

var intID = setInterval(() => {
  console.log(`Please make sure to come on ${new Date()}`);
}, 4000);

//This is Used to clear
setTimeout(() => {
  clearInterval(intID);
  console.log("Interval Stopped");
}, 10000);
