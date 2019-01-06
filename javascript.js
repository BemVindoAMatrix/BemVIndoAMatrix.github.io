function postIt(url){
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("feed").innerHTML = this.responseText;
          }};
          xhttp.open("GET", url, true)
          xhttp.send();
}

if (window.location.pathname == "/") {
          window.onload = postIt("PTposts.txt");
} else if (window.location.pathname == "/matrixintl.html") {
          window.onload = postIt("ENposts.txt");
}
