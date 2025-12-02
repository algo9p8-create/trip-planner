// let visibility_on;
// let visibility_off;
// let password;
// document.getElementsByClassName("visibility-img-btn").addEventListener("click", () => {
// 	visibility_on = document.getElementsByid("visibility-on");
// 	visibility_off = document.getElementById("visibility-off");
// 	password = document.getElementById("passwords");
// 	if (password.type = "password") {
// 		password.type = "text";
// 		visibility_off.style.display = "block";
// 		visibility_on.style.display = "none";
// 	} else {
// 		password.type = "password";
// 		visibility_off.style.display = "none";
// 		visibility_on.style.display = "block";
// 	}
// });
const visibility_on = document.getElementById("visibility-on");
const visibility_off = document.getElementById("visibility-off");
const password = document.getElementById("password");

document.getElementById("visibility-on").addEventListener("click", () => {
	password.type = "text";
	visibility_on.style.display = "none";
	visibility_off.style.display = "block";
});

document.getElementById("visibility-off").addEventListener("click", () => {
	password.type = "password";
	visibility_on.style.display = "block";
	visibility_off.style.display = "none";
});
