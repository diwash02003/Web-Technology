let text = "Hello I am Ram Prasad. Ram lives in Kathmandu.";

let value = document.getElementById("regex");

let modified = text.replace(/ram/gi, "Shyam");
modified = modified.replace(/kathmandu/gi, "Damak");

if (modified) {
  value.addEventListener("mouseover", function () {
    value.innerText = modified;
  });
  value.addEventListener("mouseout", function () {
    value.innerText = text;
  });
  value.innerText = text;
}