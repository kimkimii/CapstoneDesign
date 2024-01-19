let cardCounter = 0;

function toggleLike(button) {
  button.classList.toggle('active');
}

function toggleCommentBox(button) {
  var commentBox = button.parentElement.parentElement.querySelector('.comment-box');
  commentBox.style.display = (commentBox.style.display === 'block') ? 'none' : 'block';
}

function sharePost() {
  // You can add code here to handle the share functionality
  console.log('Sharing post');
}

function postComment() {
  // You can add code here to handle posting a comment
  console.log('Posting comment');
}

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