// algo
// 1. Create event
//   1.1 Remember own dataset
//   1.2 Remember dataset of parent
//   1.3 Remember dataset of the highest parent
// 2. Create function generator from 1 to 10
// 3. Create a cell and plugin event
// 4. Create a row from 10 cells
// 5. Create a sector from 10 rows
// 6. Create 3 sectors and place to main div
// 7. iterate through cell and plugin event
const DEFAULT_SIZE_DIMENSION = 10;
const DEFAULT_AMOUNT_SECTORS = 3;

const clickHandler = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }

  const seat = event.target;
  let place = `S ${seat.closest('.sector').dataset.number} - `;
  place += `L ${seat.closest('.sector__line').dataset.number}`;
  place += ` - S ${seat.dataset.number}`;

  document.querySelector('.board__selected-seat').textContent = place;
};

const generateArray = number => {
  return Array(number)
    .fill()
    .map((_, index) => index + 1);
};

const createCell = index => `<div data-number=${index} class="sector__seat"></div>`;

const createRow = index => {
  const indexesArray = generateArray(DEFAULT_SIZE_DIMENSION);
  const cellsString = indexesArray.map(index => createCell(index)).join('');
  return `<div data-number=${index} class="sector__line">${cellsString}</div>`;
};

const createSector = index => {
  const indexesArray = generateArray(DEFAULT_SIZE_DIMENSION);
  const rowsString = indexesArray.map(index => createRow(index)).join('');
  return `<div data-number=${index} class="sector">${rowsString}</div>`;
};

const placeSectorsToArena = index => {
  const indexesArray = generateArray(index);
  const sectorsString = indexesArray.map(index => createSector(index)).join('');
  document.querySelector('.arena').innerHTML = sectorsString;
};

const loadHandler = () => {
  placeSectorsToArena(DEFAULT_AMOUNT_SECTORS);
  const seats = [...document.querySelectorAll('.sector')];
  seats.forEach(seat => seat.addEventListener('click', clickHandler));
};

document.addEventListener('DOMContentLoaded', loadHandler);
