// Magic 8ball!!!

//gbl vars
let total = 0;
let q1 = false;
let q2 = false;
let q3 = false;
let q4 = false;
//answer check for q1
document.getElementById("q1Inpt").addEventListener("change", ans1Check);
function ans1Check() {
  let q1In = document.getElementById("q1Inpt").value;
  if (
    q1In.toLowerCase() == "amber" ||
    q1In.toLowerCase() == "outrider amber" ||
    q1In.toLowerCase() == "gliding champion of mondstadt"
  ) {
    console.log(q1In);
    q1 = true;
  } else {
    console.log(q1In);
    q1 = false;
  }
  console.log(q1);
}
//answer check for q2
document.getElementById("q2Inpt").addEventListener("change", ans2Check);
function ans2Check() {
  let q1In = document.getElementById("q2Inpt").value;
  if (q1In.toLowerCase() == "snezhnaya" || q1In.toLowerCase() == "natlan") {
    console.log(q1In);
    q2 = true;
  } else {
    console.log(q1In);
    q2 = false;
  }
  console.log(q1);
}
//answer check for q3
document.getElementById("q3Inpt").addEventListener("change", ans3Check);
function ans3Check() {
  let q3In = document.getElementById("q3Inpt").value;
  if (
    q3In.toLowerCase() == "first sage of buer" ||
    q3In.toLowerCase() == "first sage"
  ) {
    console.log(q3In);
    q3 = true;
  } else {
    console.log(q3In);
    q3 = false;
  }
  console.log(q3);
}
//answer check for q4
document.getElementById("q4Inpt").addEventListener("change", ans4Check);
function ans4Check() {
  let q4In = document.getElementById("q4Inpt").value;
  if (
    q4In.toLowerCase() == "lyney" ||
    q4In.toLowerCase() == "freminet" ||
    q4In.toLowerCase() == "lynette"
  ) {
    console.log(q4In);
    q4 = true;
  } else {
    console.log(q4In);
    q4 = false;
  }
  console.log(q4);
}
//sumbit button + variables
let ttlMrk = document.getElementById("results");
document.getElementById("sbmt").addEventListener("click", submtAns);
function submtAns() {
  let Cans = 0;
  let Wans = 0;
  let q1Otpt = document.getElementById("rslt1");
  let q2Otpt = document.getElementById("rslt2");
  let q3Otpt = document.getElementById("rslt3");
  let q4Otpt = document.getElementById("rslt4");

  //this counts the wrong and right answers and outputs it
  while (Cans + Wans < 4) {
    if (q1 == true) {
      Cans++;
      q1Otpt.innerHTML = `<span class="correct"> Correct! <span>`;
    } else {
      Wans++;
      q1Otpt.innerHTML = `<span class="incorrect"> Incorrect.<span>`;
    }
    if (q2 == true) {
      Cans++;
      q2Otpt.innerHTML = `<span class="correct"> Correct! <span>`;
    } else {
      Wans++;
      q2Otpt.innerHTML = `<span class="incorrect"> Incorrect. <span>`;
    }
    if (q3 == true) {
      Cans++;
      q3Otpt.innerHTML = `<span class="correct"> Correct! <span>`;
    } else {
      Wans++;
      q3Otpt.innerHTML = `<span class="incorrect"> Incorrect. <span>`;
    }
    if (q4 == true) {
      Cans++;
      q4Otpt.innerHTML = `<span class="correct"> Correct! <span>`;
    } else {
      Wans++;
      q4Otpt.innerHTML = `<span class="incorrect"> Incorrect. <span>`;
    }
    console.log(Cans, Wans);
  }
  //calculate marks, outputs results
  let rslt = Cans / 4;
  if (rslt == 0) {
    ttlMrk.innerHTML =
      "yikes... looks like you should pay more attention to the storyline.. 0/0; 0%. ";
  } else if (rslt == 0.25) {
    ttlMrk.innerHTML =
      "You earned a 1/4, that's 25%. Looks like you don't quite understand.. Better luck next time? ";
  } else if (rslt == 0.5) {
    ttlMrk.innerHTML =
      "You earned a 2/4, that's 50%. Not bad, but you could do better. Better luck next time! ";
  } else if (rslt == 0.75) {
    ttlMrk.innerHTML =
      "Wow! you know your stuff! you earned a 3/4, that's 75%! Just one off though!";
  } else if (rslt == 1) {
    ttlMrk.innerHTML = "Fantastic job! you got 4/4, that's 100%!";
  }
}
