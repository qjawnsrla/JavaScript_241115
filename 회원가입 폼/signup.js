const setErrorMessage = (elementId, isValid, message) => {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.className = isValid ? "" : "error-message"; // Add 'error-message' class if not valid
  element.style.color = isValid ? "green" : "red"; // Sets the color
};

document.getElementById("signupForm").addEventListener("input", function () {
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const idValid = /^[a-zA-Z0-9_]{8,20}$/.test(id);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const phoneValid = /^01\d{1}-\d{4}-\d{4}$/.test(phone);

  setErrorMessage(
    "idMessage",
    idValid,
    idValid ? "사용 가능 합니다." : "입력 조건이 맞지 않습니다."
  );
  setErrorMessage(
    "passwordMessage",
    passwordValid,
    passwordValid ? "사용 가능 합니다." : "입력 조건이 맞지 않습니다."
  );
  setErrorMessage(
    "emailMessage",
    emailValid,
    emailValid ? "사용 가능 합니다." : "입력 조건이 맞지 않습니다."
  );
  setErrorMessage(
    "phoneMessage",
    phoneValid,
    phoneValid ? "사용 가능 합니다." : "입력 조건이 맞지 않습니다."
  );

  document.getElementById("submitBtn").disabled = !(
    idValid &&
    passwordValid &&
    emailValid &&
    phoneValid
  );
});
