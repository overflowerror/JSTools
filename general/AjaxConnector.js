var AjaxConnector = function() {
}
AjaxConnector.reqGet = function(file, pars, bg, after) {
	var http = new XMLHttpRequest();
	http.open("GET", file + "?" + pars, bg);
	if (bg) {
		http.onreadystatechange = function() {
			if (http.readyState == 4) {
				after(http.responseText);
			}
		};
	}
	http.send(null);
	if (!bg)
		return after(http.responseText);
}
AjaxConnector.reqPost = function(file, get, pars, bg, after) {
	var http = new XMLHttpRequest();
	http.open("POST", file + "?" + get, bg);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", pars.length);
	http.setRequestHeader("Connection", "close")
	if (bg) {
		http.onreadystatechange = function() {
			if (http.readyState == 4) {
				after(http.responseText);
			}
		};
	}
	http.send(pars);
	if (!bg) 
		return after(http.responseText);
}
AjaxConnector.reqCrossDomainGet = function(host, file, get, bg, after) {
	// TODO
}	
