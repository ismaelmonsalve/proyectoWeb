function filterCars(brand) {
  const cars = document.querySelectorAll(".car-card");
  cars.forEach((car) => {
    if (brand === "all") {
      car.style.display = "block";
    } else {
      if (car.classList.contains(brand)) {
        car.style.display = "block";
      } else {
        car.style.display = "none";
      }
    }
  });
}
