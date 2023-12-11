let cardCounter = 0;

function addCard() {
  const cardContainer = document.getElementById('cardContainer');

  const newCard = document.createElement('div');
  newCard.className = 'custom-card';
  newCard.innerHTML = `
    <div class="card-header">
      <h1>Module ${++cardCounter}</h1>
      <div class="edit-icon" onclick="editCard(event, this.parentNode.parentNode)">&#9998;</div>
      <div class="delete-icon" onclick="confirmDelete(event, this.parentNode.parentNode)">&#10006;</div>
    </div>
    <p class="card-paragraph">This module provides an in-depth exploration of urban farming, a sustainable and innovative approach to agriculture within urban environments.</p>
  `;

  const paragraphs = newCard.querySelectorAll('.card-paragraph');
  paragraphs.forEach(paragraph => {
    paragraph.style.textAlign = 'justify';
    paragraph.style.fontSize = '16px';
  });

  newCard.addEventListener('click', function() {
    alert(`You clicked on Module ${cardCounter}`);
  });

  cardContainer.appendChild(newCard);
}

function confirmDelete(event, card) {
  event.stopPropagation();

  const confirmation = confirm("Do you really want to delete this card?");

  if (confirmation) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.removeChild(card);
    cardCounter--;
  } else {
    // User clicked Cancel
    alert("Deletion canceled.");
  }
}

function editCard(event, card) {
  event.stopPropagation();

  const cardHeader = card.querySelector('.card-header h1');
  const cardParagraph = card.querySelector('.card-paragraph');

  const newTitle = prompt("Edit Title:", cardHeader.innerText);
  const newParagraph = prompt("Edit Paragraph:", cardParagraph.innerText);

  if (newTitle !== null && newParagraph !== null) {
    cardHeader.innerText = newTitle;
    cardParagraph.innerText = newParagraph;
  }
}

const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", function() {
  // Toggle the class to switch between bx-menu and bx-arrow-right
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; // SELECTS MAIN PARENT ARROW
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
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

  // CLOCK UPDATE
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
document.addEventListener('DOMContentLoaded', function() {
  // Get all menu items
  var menuItems = document.querySelectorAll('.sidebar .nav-links li');

  // Variable to store the currently active menu item
  var activeMenuItem = null;

  // Add click event listener to each menu item
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // If there is an active menu item, remove its 'active' class
      if (activeMenuItem) {
        activeMenuItem.classList.remove('active');
      }

      // Set the clicked menu item as the active one
      activeMenuItem = this;

      // Add 'active' class to the clicked menu item
      this.classList.add('active');
    });
  });
});


var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'],
        datasets: [{
            label: 'User',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});