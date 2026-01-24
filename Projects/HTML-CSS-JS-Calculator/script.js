const buttons = document.querySelectorAll("button");
const input = document.getElementById("inp");
const ope = ["+", "-", "*", "/", "%"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let btnClass = button.classList[0];
    let btnValue = button.innerText;

    if (btnClass === "allClear") {
      input.value = "";
      return;
    }

    if (btnClass === "remove") {
      input.value = input.value.slice(0, -1);
      return;
    }

    if (btnClass === "operator") {
      if (input.value === "") return;

      if (ope.includes(input.value.slice(-1))) {
        input.value = input.value.slice(0, -1) + btnValue;
      } else {
        input.value += btnValue;
      }

      return;
    }

    if (btnClass === "equal") {
      if (input.value === "") return;

      if (ope.includes(input.value.slice(-1))) {
        input.value = input.value.slice(0, -1);
      }

      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Invalid";
      }

      return;
    }

    input.value += btnValue;
  });
});
