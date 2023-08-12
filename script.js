const buttons = document.querySelectorAll('.transition-buttons__button, .arrow-buttons__button');
const cards = document.querySelectorAll('.cards');
const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');

const catalogs = ['catalog-about-houses', 'catalog-about-villas', 'catalog-about-apartaments'];
let currentCatalogIndex = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    cards.forEach(card => card.classList.remove('active'));
    document.getElementById(catalogs[index]).classList.add('active');
    currentCatalogIndex = index;
    updateButtons();
  });
});

prevButton.addEventListener('click', () => {
  if (currentCatalogIndex > 0) {
    currentCatalogIndex--;
  }
  updateCatalog(currentCatalogIndex);
  updateButtons();
});

nextButton.addEventListener('click', () => {
  if (currentCatalogIndex < catalogs.length - 1) {
    currentCatalogIndex++;
  }
  updateCatalog(currentCatalogIndex);
  updateButtons();
});

function updateButtons() {
    if (currentCatalogIndex === 0) {
      nextButton.classList.add('active') 
      prevButton.classList.remove('active')
    } else if (currentCatalogIndex === 1) {
        prevButton.classList.add('active')
        nextButton.classList.add('active')
    } else if (currentCatalogIndex === 2) {
      prevButton.classList.add('active')
      nextButton.classList.remove('active')
    }
}

function updateCatalog(index) {
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[index].classList.add('active');
  cards.forEach(card => card.classList.remove('active'));
  cards[index].classList.add('active');
}


