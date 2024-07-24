function contentCreator(){
    const content = document.querySelector('#content');
    content.innerHTML = `
        
            <div class="pages doing"></div>
            <div class="pages finished"></div>
            <div class="pages tab">
                <form action="#" id="form" method="post">
                    <div id="inputFields">
                        <input type="text" name="title" id="title" class="taskAdder" placeholder="Task" min="1" >
                        <input type="text" name="description" id="description" class="taskAdder" placeholder="Description (optional)" max="20">
                        <input type="date" name="date" id="date" class="taskAdder" placeholder="Date" >
                    </div>
                        <div class="priorityDiv">
                            <h2>Priority</h2>
                            <select title="Priority" name="priority" id="priority" class="">
                                <option value="Optional">Optional</option>
                                <option value="Important">Important</option>
                                <option value="Critical">Critical</option>
                            </select>
                        </div>
                    <div id="sub">
                        <input type="submit" value="Add task" id="submit">
                    </div>
                </form>
            </div>
    
    `
}

export default contentCreator;