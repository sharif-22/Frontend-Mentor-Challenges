// grabing el
let btnEl = $(".submit-btn");
let boxEl = $(".box");
let box1El = $(".box-1");
let box2El = $(".box-2");
let ratingbtnsEl = $(".rating-btns");
let ratedTextEl = document.getElementById("ratingText");

let selectedRatingEl;
let givenRating;

// event listeners
ratingbtnsEl.click((event) => {
  const target = event.target;
  // if we select div it return and event exist
  if (target.tagName === "DIV") return;

  // removing previous ratingEl styles
  if (selectedRatingEl != undefined) {
    selectedRatingEl.classList.remove("rating-clicked");
  }
  selectedRatingEl = target; //assigning rateing El
  // console.log(selectedRatingEl);

  // rateing clicked
  selectedRatingEl.classList.add("rating-clicked");

  givenRating = selectedRatingEl.textContent;
  console.log(givenRating);
  ratedTextEl.childNodes[1].textContent = ` ${givenRating} `;
});

btnEl.click(() => {
  // check if the user in rated or not
  if (givenRating >= 1) {
    box2El.toggle(box2El.removeClass("d-none"), box1El.addClass("d-none"));
  }
});
