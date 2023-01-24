const container = document.querySelector(".container");
const selector = document.getElementById("movielist");
const count = document.getElementById("count");
const total = document.getElementById("total");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

let price = +selector.value;

populateUI();

function populateUI() {
  const indexList = JSON.parse(localStorage.getItem("selectedSeatIndex"));

  seats.forEach((seat, index) => {
    if (indexList.indexOf(index) > -1) {
      console.log(index);
      seat.classList.add("selected");
    }
  });

  selector.selectedIndex = +localStorage.getItem("selectedMovieIndex");
  price = +localStorage.getItem("selectedMoviePrice");

  updateBookingDetail();
}

function updateBookingDetail() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedIndex = [...selectedSeats].map((seat) =>
    [...seats].indexOf(seat)
  );

  localStorage.setItem("selectedSeatIndex", JSON.stringify(selectedIndex));

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * price;
}

//Add event listener
selector.addEventListener("change", (e) => {
  price = +e.target.value;

  localStorage.setItem("selectedMoviePrice", e.target.value);
  localStorage.setItem("selectedMovieIndex", e.target.selectedIndex);

  updateBookingDetail();
});

//Add event listener
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateBookingDetail();
  }
});
