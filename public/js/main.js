
get_links = function(){
    var input = document.getElementById("url");
	var table = document.getElementById("links");	
    var yt_url =  input.value;

	// reset values
	table.innerHTML= "<tr><th>Quality</th><th>Download</th></tr>";
    input.value = "";
    var api_url = "http://ffk-ytd.herokuapp.com/api/info?url="  + yt_url;

    function reqListener () {
        console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", api_url);
    oReq.send();

    //fetch(api_url, {
    //    method: 'GET',
	//		headers: new Headers({
	//			"Access-Control-Allow-Origin" : "*",
	//		})
    //})
    //.then(data =>{return data.json()})
    //.then(res => {
	//	var fmts = res.info.formats;
	//	console.log(fmts);
	//	for(var i= 0; i< fmts.length; i++){
	//		if(fmts[i].acodec != "none" && fmts[i].vcodec != "none"){
	//			var url;
	//			fetch(fmts[i].url, {
	//				method: 'GET',
	//				headers: new Headers({
	//					"Access-Control-Allow-Origin" : "*",
	//				})
	//			})
	//			.then(data => {return data.blob()})
	//			.then(blob =>{
	//				url = window.URL.createObjectURL(blob);
	//			})
	//			console.log(url);
	//			table.innerHTML += `<tr> ${fmts[i].format_note} </tr> <tr> <a href=${url} download="${res.info.title}.mp4">link</a></tr>`
	//		}
	//	}
	//	console.log(res.info)
	//});


    //console.log("Submitted!");
}
