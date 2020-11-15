const LengthSlider = document.getElementById("LengthSlider");
const LengthLabel = document.getElementById("LengthLabel");
const PasswordLabel = document.getElementById("Password");

LengthLabel.innerHTML = "Length: " + LengthSlider.value;

LengthSlider.oninput = function () {
  LengthLabel.innerHTML = "Length: " + this.value;
};

function GeneratePassword() {
  const Uppercase = document.getElementById("Uppercase");
  const Lowercase = document.getElementById("Lowercase");
  const Numbers = document.getElementById("Numbers");
  const Symbols = document.getElementById("Symbols");
  const Ambiguous = document.getElementById("Ambiguous");
  let result = "";
  let characters = "";
  if (Uppercase.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (Lowercase.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (Numbers.checked) {
    characters += "0123456789";
  }
  if (Symbols.checked) {
    characters += '`!@#$%^&*_+-=|:;,./?"' + "'";
  }
  if (Ambiguous.checked) {
    characters += "[]{}()<>";
  }
  const charactersLength = characters.length;
  for (let i = 0; i < LengthSlider.value; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Generate() {
  PasswordLabel.innerHTML = GeneratePassword();
}
