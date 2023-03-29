import './styles.css';

const activities = [
  {
    index: 0,
    description: 'Complete house chores',
    completed: true,
  },
  {
    index: 1,
    description: 'Buy Groceries',
    completed: true,
  },
  {
    index: 2,
    description: 'complete To Do list project',
    completed: true,
  },
  {
    index: 3,
    description: 'Play Call of Duty',
    completed: true,
  },
];

const list = document.querySelector('.to-do');

activities.forEach((activities) => {
  list.innerHTML += `
     <li class="lst">
         <input type="checkbox">
         <span>${activities.description}</span>
    </li>           
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
// list.appendchild(activities)
});