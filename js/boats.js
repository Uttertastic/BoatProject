
// alert('test') // use in every js, makes sure no errors, will load when ok

// Boats Page - Lists my boats for sale. Get blog from api.  Show price, name, picture, description
// in the API (console log): Object -> boats, boats is an actual array. Need to add ".boats" after "response"

$.ajax({
	url: 'https://tiyagencyweek.herokuapp.com/boats',
    success: (response) => {
        	response.boats.forEach((boats) =>{
        			$(".boatsGoHere").append(`
        				<div class="col-md-6 boatDiv">
	        				<div class="col-md-12 boatPic">
	        					<img class="boatPic" src=${boats.picture}>
	        				</div>
	        				<div class="col-md-12 boatDescription">
	        					<h1>${boats.name}</h1>
	        					<h5 class="col-md-8">${boats.description}</h5>
	        					<h2 class="col-md-8">$${boats.price.formatMoney(2, '.', ',')}</h2>
										<button>Schedule a Meeting Today</button>
					    	</div>
				    	</div>
			        `)
			})
    }
});

// how to convert string to currency - http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

// (from Jake) function
Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

// And use it with:
//money to be formated.formatMoney(2, '.', ',')


$.ajax({
	url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=47353&cnt=1&units=imperial&APPID=d0458c4189cf033bf80c84d7a0d38ab0`,
	success:(result)=>{
		console.log(result)
		$(".weather").html(`
			<img src="http://openweathermap.org/img/w/${result.list[0].weather[0].icon}.png" />
			<h2>${result.list[0].temp.max}°</h2>
			`)
	}
})

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1};
		if(x[slideIndex-1])
		{
    	x[slideIndex-1].style.display = "block";
    	setTimeout(carousel, 3000); // Change image every 2 seconds
		}
}
