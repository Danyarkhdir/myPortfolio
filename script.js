function myFunction(clicked_element) {
  let properties = {
    html: "<h4 style='color:#f06529;'>HTML and HTML5 </h4> - Complete online Course about HTML and HTML5<br>- Complete a in Class course at University",
    css: "<h4 style='color:#2965f1;'>CSS</h4> - Complete online Course about CSS<br>- Grid and Flex layout",
    js: "<h4 style='color:rgb(247, 223, 30);'>JAVASCRIPT</h4> - Js DOM manipulation<br>- Event and Error Handling<br>- Functions",
    java: "<h4 style='color:#5382a1;'>JAVA</h4> - Java Programming Algorithms<br>- Java Programming Principles <br>- Java OOP",
    php: "<h4 style='color:#474A8A;'>PHP</h4> - Form handling in PHP <br>- Connection to Database in PHP",
  };

  let html = document.getElementById(clicked_element);
  let id = html.id;
  let description = document.getElementById("description");

  switch (id) {
    case "html":
      description.innerHTML = properties.html;
      break;
    case "css":
      description.innerHTML = properties.css;
      break;
    case "js":
      description.innerHTML = properties.js;
      break;
    case "java":
      description.innerHTML = properties.java;
      break;
    case "php":
      description.innerHTML = properties.php;
      break;
  }
}
