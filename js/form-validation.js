function validation() {
    const form = document.querySelector('.form');
    const email = document.querySelector('#email').value;
    const text = document.querySelector('#text');
    const send = document.querySelector('#send');
    const dnt = document.querySelector('#dnt-submit');
    const myform = document.querySelector('#my-form');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
      form.classList.add("Valid");
      form.classList.remove("Invalid");
      text.innerHTML = "Your email address is Valid.";
      text.style.backgroundColor = "lightgreen"
      text.style.color = "#fff";
      send.disabled = false;

      setTimeout(() => text.remove(), 2000);
    }
    else {
      form.classList.remove("Valid");
      form.classList.remove("Invalid");
      text.innerHTML = "Please enter valid email";
      text.style.color = "#fff";
      text.style.backgroundColor = "orangered";
      send.disabled = true;

    }

    if (email === "") {
      form.classList.remove("Valid");
      form.classList.remove("Invalid");
      text.innerHTML = "";
      text.style.backgroundColor = "white";
      send.disabled = false;
      text.style.color = "#ff0000";

    }

}