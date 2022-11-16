{
    const tasks = [];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString +=
                `<li ${task.done ? "style = \"text-decoration: line-through\"" : ""}>
                ${task.content};
                </li>`;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const addNewTask = (addTaskElement) => {
        tasks.push({ content: addTaskElement });
        render();
    }

    const onFormSubmit = (event) => {
            event.preventDefault();
            const addTaskElement = document.querySelector(".js-addTask").value.trim();
            if (addTaskElement === "") {
                return;
            }
            addNewTask(addTaskElement);
        }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}