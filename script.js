let count = 0;
let increbutton = document.getElementById("increbutton");
let decrebutton = document.getElementById("decrebutton");
let resetbutton = document.getElementById("resetbutton");
let countlabel = document.getElementById("countlabel");

increbutton.onclick = function () {
  count = count + 1;
  countlabel.textContent = count;
};
decrebutton.onclick = function () {
  count = count - 1;
  countlabel.textContent = count;
};
resetbutton.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
