function postIt(url){
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("feed").innerHTML = this.responseText;
          }};
          xhttp.open("GET", url, true);
          xhttp.send();
}

if (window.location.pathname == "/") {
          postIt("PTposts.txt");
} else if (window.location.pathname == "/matrixintl.html") {
          postIt("ENposts.txt");
}

window.onscroll = function infobox() {
          if (window.scrollY >= 195) {
                    document.getElementById("infobox").style.position = "fixed";
                    document.getElementById("infobox").style.top = "95px";
          } else {
                    document.getElementById("infobox").style.position = "absolute";
                    document.getElementById("infobox").style.top = "290px";
          }
};

function getquery(num) {
          if (/\?/.test(location.href)) {
                    var string = location.href.replace(/.*?\?/,"");
                    var string = string.split("&")[num].replace(/.*?=/,"");
                    if (string == "") {
                              return "NULL";
                    } else {
                              return string.replace(/\+/g," ");
                    }
          }
}

function post() {
          var language = getquery(0);
          var title = decodeURIComponent(getquery(1));
          var text = decodeURIComponent(getquery(2)).replace(/(\n|$)/g,"&#60;br&#62;$1");
          var photo = decodeURIComponent(getquery(3));
          var link = decodeURIComponent(getquery(5));
          var name = decodeURIComponent(getquery(4));
          
          if (photo == "NULL") {
                    photo = ''
          } else {
                    photo = "\n&#60;img src=\"" + photo + "\" class=\"postimg\"&#62;"
          }
          
          if (language == "PT") { 
                    language = "Faça um pull request \
                    <a href=\"https://github.com/BemVindoAMatrix/BemVindoAMatrix.github.io\" target=\"_blank\">AQUI</a> \
                    no arquivo PTposts.txt com o seguinte conteúdo\n\n";
          } else {
                    language = "make a pull request \
                    <a href=\"https://github.com/BemVindoAMatrix/BemVindoAMatrix.github.io\" target=\"_blank\">HERE</a> \
                    on file ENposts.txt with the content below\n\n";
          }
          
          var string = "\
          &#60;article class=\"post\"&#62;\n\
          &#60;h2 class=\"posttext\"&#62;" + title + "&#60;/h2&#62;\
          &#60;p class=\"posttext\"&#62;\n" + text + "\n&#60;p&#62;" + photo + "\n\
          &#60;p class=\"posttext\"&#62;\n\
          By: &#60;a href=\"" + link + "\"&#62;" + name + "&#60;/a&#62;\n&#60;/p&#62;\n\
          &#60;/article&#62;\n&#60;/br&#62;";
          
          document.write(language.replace(/\n/g,"<br>"));
          document.write(string.replace(/\n/g,"<br>"));
}

if (window.location.pathname == "/posttemplate.html") post();

window.onresize = function sizeProperty() {
          if (window.innerWidth <= 990) {
                    document.getElementById("infobox").style.display = "none";
                    document.getElementById("feed").style.left = "3%";
                    document.getElementById("feed").style.width = "94%";
          } else {
                    document.getElementById("infobox").style.display = "block";
                    document.getElementById("feed").style.left = "10%";
                    document.getElementById("feed").style.width = "45%";
          }
};
