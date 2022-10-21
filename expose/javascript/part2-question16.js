for(let property in statistics) {
	if(statistics[property] % 2 == 1 || property.charAt(0) == 'r')
                alert(statistics[property]);
}