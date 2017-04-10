

var car1 = {
	x: 400;
	y: 75;
	speed: -120;
	
var car2 = {
	x: 0;
	y: 0;
	speed: -120;
var car3 = {
	x: 0;
	y: 0;
	speed: -120;
var car4 = {
	x: 0;
	y: 0;
	speed: -120;
	

var carReady = false;
var carImage = new Image();
carImage.onload = function () {
	carReady = true;
};
carImage.src = "car.png";
