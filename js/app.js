//Event Listener
document.addEventListener('DOMContentLoaded', () => {
console.log('Javascript loaded');

const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick);

const newItemform = document.querySelector('#new-animal-form'); //adds to the Event listener the data typed into new-animal-form
newItemform.addEventListener('submit', handleNewItemFormSubmit);//Executes all code in handleNewItemFormSubmit once submit button is clicked.
})

//New form submit
const handleNewItemFormSubmit = function(event) {
  event.preventDefault();//Prevents an empty form being submitted

  const animalListItem = createAnimalListItem(event.target);//calls the createAnimalListItem function when the submit button is clicked.
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);

  event.target.reset();//Resets the form after each submission
}

//Creating a new animal with the info in form - once submit is clicked
const createAnimalListItem = function(form) {
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const species = document.createElement('h2');
  species.textContent = form.species.value;
  animalListItem.appendChild(species);

  const type = document.createElement('p');
  type.textContent = form.type.value;
  animalListItem.appendChild(type);

  const continent = document.createElement('p');
  continent.textContent = form.continent.value;
  animalListItem.appendChild(continent);

  const endangered = document.createElement('p');
  endangered.textContent = form.endangered.value;
  animalListItem.appendChild(endangered);

  return animalListItem;
}

const handleDeleteAllClick = function(event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}
