{
    const tasks = [
        {
            content: "Zrobić listę",
            done: false,
        },
        {
            content: "Nauczyć się x-raya",
            done: true,
        },
        {
            content: "Zagrać",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li>
                   ${task.content};
                </li>
                `;
        };

    document.querySelector(".js-tasks").innerHTML = htmlString;

    }

    const init = () => {
        render();
    }

    init();
}