function showProjects() {
  const projects = [
    {
      thumbnailProject: "img/node.webp",
      titleProject: "Api Rest",
      descriptionProject: "Meu primeiro projeto feito em Node Js e Mongo Db",
      tecnologiesProject: ["Node Js", "MongoDb"],
      buttonsProject: [
        {
          buttonName: "Repositório",
          buttonLink: "#",
        },
        {
          buttonName: "Acessar",
          buttonLink: "#",
        },
      ],
    },
    {
      thumbnailProject: "img/preto.webp",
      titleProject: "Pibce",
      descriptionProject: "Projeto ainda em desenvolvimento...",
      tecnologiesProject: ["Php", "MySql"],
      buttonsProject: [
        {
          buttonName: "Repositório",
          buttonLink: "#",
        },
        {
          buttonName: "Acessar",
          buttonLink: "#",
        },
      ],
    },
  ];

  projects.reverse();

  const projectsId = document.querySelector("#projects");

  projects.forEach((project) => {
    //  Project Article

    const projectArticle = document.createElement("article");
    projectArticle.className = "project";

    //  Project Thumbnail

    const projectThumbnail = document.createElement("div");
    projectThumbnail.className = "projectThumbnail";

    //  Img Project Thumbnail

    const imgProjectThumbnail = document.createElement("img");
    imgProjectThumbnail.src = project.thumbnailProject;

    //  Project Content

    const projectContent = document.createElement("div");
    projectContent.className = "projectContent";

    //  Project Title

    const projectTitle = document.createElement("div");
    projectTitle.className = "projectTitle";

    //  H3 Project Title

    const h3ProjectTitle = document.createElement("h3");
    h3ProjectTitle.textContent = project.titleProject;

    //  Project Description

    const projectDescription = document.createElement("div");
    projectDescription.className = "projectDescription";

    //  P Project Description

    const pProjectDescription = document.createElement("p");
    pProjectDescription.textContent = project.descriptionProject;

    //  Project Technologies

    const projectTechnologies = document.createElement("div");
    projectTechnologies.className = "projectTechnologies";

    //  Ul Project Technologies

    const uLProjectTechnologies = document.createElement("ul");

    //  Li Project Technologies

    project.tecnologiesProject.forEach((projectTecnologie) => {
      const lIProjectTechnologies = document.createElement("li");

      uLProjectTechnologies.appendChild(lIProjectTechnologies);

      lIProjectTechnologies.textContent = projectTecnologie;
    });

    //  Project Buttons

    const projectButtons = document.createElement("div");
    projectButtons.className = "projectButtons";

    //  Button Project Buttons

    project.buttonsProject.forEach((projectButton) => {
      //  Button Project Buttons

      const buttonProjectButtons = document.createElement("button");
      projectButtons.appendChild(buttonProjectButtons);

      //  A Button Project Buttons

      const aProjectButtons = document.createElement("a");
      buttonProjectButtons.appendChild(aProjectButtons);
      aProjectButtons.href = projectButton.buttonLink;
      aProjectButtons.target = "_blank";
      aProjectButtons.textContent = projectButton.buttonName;
    });

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
  });
}

showProjects();

const nameWebsite = "Raphael Lima";

document.title = nameWebsite;

//  Title

const divTitle = document.querySelector(".title");

const h1Title = document.createElement("h1");

divTitle.appendChild(h1Title);

h1Title.innerText = nameWebsite;

//  Menu

const menu = [
  ["Meus Projetos", "#"],
  ["Fale Comigo", "#"],
  ["Sobre Mim", "#"],
];

const navMenu = document.querySelector(".menu");

const ulMenu = document.createElement("ul");

navMenu.appendChild(ulMenu);

for (let i = 0; i < menu.length; i++) {
  const liMenu = document.createElement("li");

  ulMenu.appendChild(liMenu);

  const aMenu = document.createElement("a");

  liMenu.appendChild(aMenu);

  aMenu.href = menu[i][1];

  aMenu.innerText = menu[i][0];
}

//  Social Medias

const socialMedias = [
  ["GitHub", "https://github.com/raphaellimarjbr", "fa fa-github"],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/raphaellimarjbr/",
    "fa fa-linkedin",
  ],
];

const navSocialMedias = document.querySelector(".socialMedias");

const ulSocialMedias = document.createElement("ul");

navSocialMedias.appendChild(ulSocialMedias);

for (let i = 0; i < socialMedias.length; i++) {
  const liSocialMedias = document.createElement("li");

  ulSocialMedias.appendChild(liSocialMedias);

  const aSocialMedias = document.createElement("a");

  liSocialMedias.appendChild(aSocialMedias);

  aSocialMedias.href = socialMedias[i][1];

  aSocialMedias.target = "_blank";

  aSocialMedias.title = socialMedias[i][0];

  const iSocialMedias = document.createElement("i");

  aSocialMedias.appendChild(iSocialMedias);

  iSocialMedias.className = socialMedias[i][2];
}

//  Footer

const footer = document.querySelector("#footer");

const pFooter = document.createElement("p");

footer.appendChild(pFooter);

pFooter.innerHTML = `&copy; ${nameWebsite}`;
