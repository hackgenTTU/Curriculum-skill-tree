function load() {
    var xmlhttp = null;
    var json = null;
    if (window.XMLHttpRequest) { // code for all new browsers
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5 and IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = state_Change;

        xmlhttp.open("get", "./class.json", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();

    } else {
        alert("Your browser does not support XMLHTTP.");
    }

    function state_Change() {
        if (xmlhttp.readyState == 4) { // 4 = "loaded"
            if (xmlhttp.status == 200) { // 200 = OK
                console.log(xmlhttp.response);
                json=eval(xmlhttp.response);
            } else {
                alert("Problem retrieving XML data");
            }
        }
    }
    return json;
}
