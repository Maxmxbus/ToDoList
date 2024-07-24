import createTask from "./task";


function moveCard(card, isCompleted) {
    const doing = document.querySelector('.doing');
    const finished = document.querySelector('.finished');

    const finishedArr = createTask.finishedTasks;
    const doingArr = createTask.tasks;

    if (isCompleted) {
        finishedArr.push(card);
        doingArr.splice(doingArr.indexOf(card), 1);

        finished.appendChild(card);
    } else {
        doingArr.push(card);
        finishedArr.splice(finishedArr.indexOf(card), 1);

        doing.appendChild(card);
    }
}

export default moveCard;