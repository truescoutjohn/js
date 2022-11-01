//algo
//Find -> create handlers -> add event to every element according to task
const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const removeHandlersButton = document.querySelector('.remove-handlers-btn');
const attachHandlersButton = document.querySelector('.attach-handlers-btn');
const eventsList = document.querySelector('.events-list');

const _insertElement = function (color, text) {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const divClickHandlerCapture = _insertElement.bind(null, 'grey', 'div');

const pClickHandlerCapture = _insertElement.bind(null, 'grey', 'p');

const spanClickHandlerCapture = _insertElement.bind(null, 'grey', 'span');

const divClickHandlerBubbling = _insertElement.bind(null, 'green', 'div');

const pClickHandlerBubbling = _insertElement.bind(null, 'green', 'p');

const spanClickHandlerBubbling = _insertElement.bind(null, 'green', 'span');

const _initializeHandlers = () => {
  divElement.addEventListener('click', divClickHandlerCapture, true);
  divElement.addEventListener('click', divClickHandlerBubbling);
  pElement.addEventListener('click', pClickHandlerCapture, true);
  pElement.addEventListener('click', pClickHandlerBubbling);
  spanElement.addEventListener('click', spanClickHandlerCapture, true);
  spanElement.addEventListener('click', spanClickHandlerBubbling);
};

const clearButtonClickHandler = () => {
  eventsList.innerHTML = '';
};

const removeButtonClickHandler = () => {
  divElement.removeEventListener('click', divClickHandlerCapture, true);
  divElement.removeEventListener('click', divClickHandlerBubbling);
  pElement.removeEventListener('click', pClickHandlerCapture, true);
  pElement.removeEventListener('click', pClickHandlerBubbling);
  spanElement.removeEventListener('click', spanClickHandlerCapture, true);
  spanElement.removeEventListener('click', spanClickHandlerBubbling);
};

const attachButtonClickHandler = () => _initializeHandlers();

_initializeHandlers();

clearButton.addEventListener('click', clearButtonClickHandler);
attachHandlersButton.addEventListener('click', attachButtonClickHandler);
removeHandlersButton.addEventListener('click', removeButtonClickHandler);
