function GetInfo () {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"

    fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=15688064176225d4db63943f5e4b8620")
    .then(response => response.json())
    .then(data => {
        for(i=0;i<5;i++) {
            document.getElementById("day"+(i+1)+"Min").innerHTML ="Min:"+Number(data.list[i].main.temp_min - 293.22).toFixed(1)+"°";
        }

        for(i=0;i<5;i++) {
            document.getElementById("day"+(i+1)+"Max").innerHTML ="Max:"+Number(data.list[i].main.temp_max - 293.22).toFixed(1)+"°";
        }

        for(i=0;i<5;i++) {
            document.getElementById("img"+(i+1)).src = "http://openweathermap.org/img/wn" +data.list[i].weather[0].icon+".png";
        }
    })
    .catch(err => alert("Something Went Wrong!"))
}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if(day +d.getDay() > 6) {
        return day +d.getDay() -7;
    }
    else {
        return day +d.getDay();
    }
}

for(i=0; i<5; i++) {
    document.getElementById("day" +(i+1)).innerHTML = weekday[checkDay(i)];
}