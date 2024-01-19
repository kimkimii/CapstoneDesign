const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", function() {
  // Toggle the class to switch between bx-menu and bx-arrow-right
  menuIcon.classList.toggle("bxs-chevron-right");
  menuIcon.classList.toggle("bxs-chevron-left");
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; // SELECTS MAIN PARENT ARROW
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebarLinks = document.querySelectorAll(".sidebar a");
console.log(sidebarLinks);
sidebarLinks.forEach(link => {
  link.addEventListener("click", function() {
    sidebarLinks.forEach(side => side.classList.remove("active"));
    this.classList.add("active");
  });
});

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bxs-chevron-right");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// SCROLL
function handleScroll() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
}

window.addEventListener("scroll", handleScroll);

function updateClockAndDate() {
  var now = new Date();
   var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var timeString = hours + ':' + minutes + ':' + seconds + ampm;
  document.getElementById('clock').innerHTML = timeString;

  // DATE UPDATE
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = daysOfWeek[now.getDay()];
  var dayOfMonth = now.getDate();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = months[now.getMonth()];
  var year = now.getFullYear();

  var dateString = dayOfWeek + ', ' + month + ' ' + dayOfMonth + ', ' + year + ', ';
  document.getElementById('date').innerHTML = dateString;

  setTimeout(updateClockAndDate, 1000);
}

updateClockAndDate();
