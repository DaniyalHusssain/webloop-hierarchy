const data = [
  {
    level: 1,
    name: "CEO",
    CEO: {
      name: "Sheraz",
      age: 27,
    },
    hir: {
      level: 2,
      name: "Manager",
      managers: {
        name: "Saleem",
        age: 27,
      },
      subhir1: {
        level: 3,
        types: [
          {
            name: "front-end",
            developers: [
              {
                name: "Saqib",
                skill: "react.js",
              },
              {
                name: "ALiyan",
                skill: "html,js",
              },
            ],
          },
          {
            name: "backend",
            developers: [
              {
                name: "Sheraz",
                skill: "nodejs/php/blockchain",
              },
              {
                name: "Asad",
                skill: "Nodejs/php",
              },
            ],
          },
        ],
      },
      subhir2: {
        level: 4,
        name: "interns",
        interns: [
          {
            name: "Mansoor",
          },
          {
            name: "Ali Abbass",
          },
        ],
      },
    },
  },
];
for (let i = 0; i < data.length; i++) {
  let btnCEO = document.querySelector(".CEO");
  btnCEO.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="CEO-info">
      <h1>${data[i].CEO.name}</h1>
      <h2>${data[i].CEO.age}</h2>
    </div>`;
  });
  let btnManager = document.querySelector(".manager");
  btnManager.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="manager-info">
      <h1>${data[i].hir.managers.name}</h1>
      <h2>${data[i].hir.managers.age}</h2>
    </div>`;
  });

  let btnInfo = document.querySelector(".info");
  btnInfo.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="info-info">
      <h1>${data[i].hir.subhir1.types[0].name}</h1>
      <h2>${data[i].hir.subhir1.types[1].name}</h2>
    </div>`;
  });

  let btnFrontend = document.querySelector(".frontend-info");
  btnFrontend.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="frontend-info">
      <h1>${data[i].hir.subhir1.types[0].developers[0].name}</h1>
      <h2>${data[i].hir.subhir1.types[0].developers[0].skill}</h2>

       <h1>${data[i].hir.subhir1.types[0].developers[1].name}</h1>
        <h2>${data[i].hir.subhir1.types[0].developers[1].skill}</h2>

    </div>`;
  });

  let btnBackend = document.querySelector(".backend-info");
  btnBackend.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="backend-info">
      <h1>${data[i].hir.subhir1.types[1].developers[0].name}</h1>
      <h2>${data[i].hir.subhir1.types[1].developers[0].skill}</h2>
      <h1>${data[i].hir.subhir1.types[1].developers[1].name}</h1>
      <h2>${data[i].hir.subhir1.types[1].developers[1].skill}</h2>
    </div>`;
  });

  let btnFrontendIntern = document.querySelector(".Frontend-intern");
  btnFrontendIntern.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="intern-info">
      <h1>${data[i].hir.subhir2.interns[0].name}</h1>
    </div>`;
  });

  let btnBackendIntern = document.querySelector(".Backend-intern");
  btnBackendIntern.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.innerHTML += `
    <div class="intern-info">
      <h1>${data[i].hir.subhir2.interns[1].name}</h1>
    </div>`;
  });
}
