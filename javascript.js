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

window.onscroll = function infobox() {
          if (window.scrollY >= 195) {
                    document.getElementById("infobox").style.position = "fixed";
                    document.getElementById("infobox").style.top = "95px";
          } else {
                    document.getElementById("infobox").style.position = "absolute";
                    document.getElementById("infobox").style.top = "290px";
          }
}

function getquery(num) {
          if (/\?/.test(location.href)) {
                    var string = location.href.replace(/.*?\?/,"");
                    var string = string.split("&")[num].replace(/.*?=/,"");
                    if (string == "") {
                              return "<mark>NULL (DO NOT use this line)</mark>";
                    } else {
                              return string.replace(/\+/g," ");
                    }
          }
}

function post() {
          var title = getquery(0);
          var text = decodeURIComponent(getquery(1)).replace(/(\n|$)/g,"&#60;br&#62;$1");
          var photo = decodeURIComponent(getquery(2));
          var link = decodeURIComponent(getquery(4));
          var name = decodeURIComponent(getquery(3));
          
          var string = "\
          &#60;article class=\"post\"&#62;\n\
          &#60;h2 class=\"posttext\"&#62;" + title + "&#60;/h2&#62;\
          &#60;p class=\"posttext\"&#62;\n" + text + "\n&#60;p&#62;\n\
          &#60;img src=\"" + photo + "\" class=\"postimg\"&#62;\n\
          &#60;p class=\"posttext\"&#62;\n\
          By: &#60;a href=\"" + link + "\"&#62;" + name + "&#60;/a&#62;\n&#60;/p&#62;\n\
          &#60;/article&#62;\n&#60;/br&#62;";
          
          document.write(string.replace(/\n/g,"<br>"));
}

if (window.location.pathname == "/posttemplate.html") {
          post();
}
