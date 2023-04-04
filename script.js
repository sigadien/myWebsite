document.addEventListener('DOMContentLoaded', e => {
    document.body.append("Thanks for seeing by!");

    // creat text with random color when reloading website
    let el = document.querySelector("#world");
    el.style.color= "#"
    + Math.floor(Math.random()*16777215).toString(16);
 });
