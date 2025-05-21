let btn = document.querySelector("button");

let tr = true;

btn.onclick = () => {
    console.log("Button clicked");
   
  if (tr) {
    tr = false;
    console.log(tr);
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    btn.innerText = "Dark Mode";
  }
  else {
    tr = true;
    console.log(tr);
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.innerText = "Light Mode";
  }
}