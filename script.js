// Mad Lib

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", showResult);

// Store order code in a function
function showResult() {
  // INPUT
  let pluralNoun = document.getElementById("text-1").value;
  let adjective = document.getElementById("text-2").value;
  let presentTenseVerb = document.getElementById("text-3").value;
  let noun = document.getElementById("text-4").value;

  // PROCESS
  let msg = ` 'There are too many ${pluralNoun}  on this ${adjective} airplane,' I screamed. 'somebody has to ${presentTenseVerb} on the ${noun} to solve this problem.' `;

  // OUTPUT
  document.getElementById("result").innerHTML = msg;
}
