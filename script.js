function togglePopOut(button, text) {
  const popOut = button.nextElementSibling;
  const ljus = button.parentElement; // cirkeln som knappen tillhör

  // Stäng alla andra pop-outs
  document.querySelectorAll('.pop-out').forEach(p => {
    if (p !== popOut) {
      p.classList.remove('show');
    }
  });

  // Sätt pop-out färg till samma som cirkeln
  const ljusFärg = window.getComputedStyle(ljus).backgroundColor;
  popOut.style.backgroundColor = ljusFärg;

  // Toggle aktuell pop-out
  if (popOut.classList.contains('show')) {
    popOut.classList.remove('show');
  } else {
    popOut.innerText = text;
    popOut.classList.add('show');
  }
}
