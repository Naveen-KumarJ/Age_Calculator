let result = document.querySelector("#output-text");
let input = document.querySelector("#dob");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  let dob = new Date(document.querySelector("#dob").value);
  if (isNaN(dob.getFullYear())) alert("Please Enter Your Date of Birth");
  else {
    const todayDate = new Date();
    let age = todayDate.getFullYear() - dob.getFullYear();
    const monthDifference = todayDate.getMonth() - dob.getMonth();
    const dayDifference = todayDate.getDate() - dob.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0))
      age--;
    result.innerText = `Your age is ${age} years old`;
  }
});
