import moveCard from "./mover";

const createTask = {
    getValues: function () {
        const form = document.querySelector('#form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const titleValue = document.querySelector('#title').value;
            const descriptionValue = document.querySelector('#description').value;
            const dateValue = document.querySelector('#date').value;
            const priorityValue = document.querySelector('#priority').value;

            const newTask = new createTask.NewTask(titleValue, descriptionValue, dateValue, priorityValue);

            createTask.tasks.push(newTask);
            form.reset();
            displayCard();
        })
    },
    tasks: [],
    finishedTasks: [],
    NewTask: function (title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false;
    },
}

function displayCard() {
    const doing = document.querySelector('.doing');
    const finished = document.querySelector('.finished');

    doing.innerHTML = '';
    finished.innerHTML = '';

    createTask.tasks.forEach((task, index) => {
        const card = createCardElement(task, index, false);
        doing.appendChild(card);
    });

    createTask.finishedTasks.forEach((task, index) => {
        const card = createCardElement(task, index, true);
        finished.appendChild(card);
    });
}

function createCardElement(task, index, isFinished) {
    const card = document.createElement('div');
    card.classList.add(isFinished ? 'fin' : 'card');
    card.innerHTML = `
        <div>
            <h3 class="topic">${task.title}</h3>
            <p class="des">${task.description}</p>
            <p class="dat">${task.date}</p>
        </div>
        <div class='lvlImportance'>${task.priority}</div>
        <input type="checkbox" class="checkBox" ${isFinished ? 'checked' : ''}>
        <button class="deleteBtn">Delete</button>
    `;

    const checkbox = card.querySelector('.checkBox');
    checkbox.addEventListener('change', function() {
        task.completed = this.checked;
        moveTask(task, index, isFinished);
        displayCard();
    });

    const deleteBtn = card.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        if (isFinished) {
            createTask.finishedTasks.splice(index, 1);
        } else {
            createTask.tasks.splice(index, 1);
        }
        displayCard();
    });

    return card;
}

function moveTask(task, index, isFinished) {
    if (isFinished) {
        createTask.finishedTasks.splice(index, 1);
        createTask.tasks.push(task);
    } else {
        createTask.tasks.splice(index, 1);
        createTask.finishedTasks.push(task);
    }
}

export default createTask;