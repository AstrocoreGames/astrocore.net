//Date
function calendar() {
	var d = new Date();
	var day = d.getDate();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var weekday = d.getDay();
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	if (day < 10) {
		day = `0${day}`;
	}

	//Changes the html element to display the date
	date.innerHTML = `${days[weekday]} ${month}-${day}-${year}`;
}

//Time
function clock() {
	var t = new Date();
	var hour = t.getHours();
	var minute = t.getMinutes();
	var second = t.getSeconds();
	var am = "AM";
	if (hour > 12) {
		am = "PM";
		hour = hour - 12;
	}
	if (minute < 10) {
		minute = `0${minute}`;
	}
	if (second < 10) {
		second = `0${second}`;
	}
	//Changes the html element time to display the time
	time.innerHTML = `${hour}:${minute}:${second} ${am}`;
}
//Calls the calendar function
calendar();
setInterval(calendar, 60000);
//Calls the clock function
clock();
setInterval(clock, 50);
