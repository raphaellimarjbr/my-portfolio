const projects = [
    [
        "img/node.webp",
        "Api Rest",
        "Meu primeiro projeto feito em Node Js e Mongo Db",
        [
            "Node Js",
            "Mongo Db"
        ],
        [
            [
                "Repositório",
                "https://github.com/raphaellimarjbr/first-project-nodeJS-mongoDb-apiRestFul"                
            ],
            [
                "Acessar",
                "https://github.com/raphaellimarjbr/first-project-nodeJS-mongoDb-apiRestFul"
            ]
        ]
    ],
    [
        "img/preto.webp",
        "Pibce",
        "Projeto ainda em desenvolvimento...",
        [
            "Php",
            "Mysql"
        ],
        [
            [
                "Repositório",
                "https://github.com/raphaellimarjbr/pibce"                
            ]
        ]
    ]
]

const projectsId = document.querySelector("#projects");

for (let i = 0; i < projects.length; i++) {

    //  Project Article

        const projectArticle = document.createElement("article");
        projectArticle.className = "project";

    //  Project Thumbnail

        const projectThumbnail = document.createElement("div");
        projectThumbnail.className = "projectThumbnail";

        //  Img Project Thumbnail

            const imgProjectThumbnail = document.createElement("img");
            imgProjectThumbnail.src = projects[i][0];

    //  Project Content

        const projectContent = document.createElement("div");
        projectContent.className = "projectContent";

        //  Project Title

            const projectTitle = document.createElement("div");
            projectTitle.className = "projectTitle";

            //  H3 Project Title

                const h3ProjectTitle = document.createElement("h3");
                h3ProjectTitle.innerText = projects[i][1];

        //  Project Description

            const projectDescription = document.createElement("div");
            projectDescription.className = "projectDescription";

            //  P Project Description

                const pProjectDescription = document.createElement("p");
                pProjectDescription.innerText = projects[i][2];


        //  Project Technologies

            const projectTechnologies = document.createElement("div");
            projectTechnologies.className = "projectTechnologies";

            //  Ul Project Technologies

                const uLProjectTechnologies = document.createElement("ul");

                //  Li Project Technologies

                    for (let j = 0; j < projects[i][3].length; j++) {
                        const lIProjectTechnologies = document.createElement("li");

                        uLProjectTechnologies.appendChild(lIProjectTechnologies);

                        lIProjectTechnologies.innerText = projects[i][3][j];
                    }

        //  Project Buttons

            const projectButtons = document.createElement("div");
            projectButtons.className = "projectButtons";

            //  Button Project Buttons

                for (let k = 0; k < projects[i][4].length; k++) {

                    //  Button Project Buttons

                        const buttonProjectButtons = document.createElement("button");
                        projectButtons.appendChild(buttonProjectButtons);

                        //  A Button Project Buttons

                            const aProjectButtons = document.createElement("a");
                            buttonProjectButtons.appendChild(aProjectButtons);
                            aProjectButtons.href = projects[i][4][k][1];
                            aProjectButtons.target = "_blank";
                            aProjectButtons.innerText = projects[i][4][k][0];

                }


    projectsId.appendChild(projectArticle);

    projectArticle.appendChild(projectThumbnail);

    projectThumbnail.appendChild(imgProjectThumbnail);

    projectArticle.appendChild(projectContent);

    projectContent.appendChild(projectTitle);

    projectTitle.appendChild(h3ProjectTitle);

    projectContent.appendChild(projectDescription);
    
    projectDescription.appendChild(pProjectDescription);

    projectContent.appendChild(projectTechnologies);

    projectTechnologies.appendChild(uLProjectTechnologies);
    
    projectContent.appendChild(projectButtons);
}