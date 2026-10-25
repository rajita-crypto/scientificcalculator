const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === "clear") {
      display.value = "";
      return;
    }

    if (action === "delete") {
      display.value = display.value.slice(0, -1);
      return;
    }

    if (action === "equals") {
      try {
        display.value = calculate(display.value);
      } catch (error) {
        display.value = "Error";
      }
      return;
    }

    display.value += value;
  });
});

function calculate(expression) {
  let e = expression
    .replace(/÷/g, "/")
    .replace(/×/g, "*")
    .replace(/π/g, "Math.PI")
    .replace(/e/g, "Math.E")
    .replace(/\^/g, "**")
    .replace(/sin\(/g, "sinDeg(")
    .replace(/cos\(/g, "cosDeg(")
    .replace(/tan\(/g, "tanDeg(")
    .replace(/log\(/g, "log10(")
    .replace(/ln\(/g, "ln(")
    .replace(/sqrt\(/g, "sqrt(");

  const fn = new Function(
    "sinDeg",
    "cosDeg",
    "tanDeg",
    "log10",
    "ln",
    "sqrt",
    `return (${e});`
  );

  const result = fn(
    x => Math.sin((x * Math.PI) / 180),
    x => Math.cos((x * Math.PI) / 180),
    x => Math.tan((x * Math.PI) / 180),
    x => Math.log10(x),
    x => Math.log(x),
    x => Math.sqrt(x)
  );

  if (!Number.isFinite(result)) {
    throw new Error("Invalid result");
  }

  return format(result);
}

function format(value) {
  if (Math.abs(value) < 1e-12) return "0";
  return Number(value.toFixed(10)).toString();
}