let info = document.querySelectorAll(".container");
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
                Skill: "Nodejs/php",
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

// console.log(data);
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  // console.log(element.hir.managers);
  // console.log(element.hir.subhir1.types[0].developers[1]);
  // console.log(element.hir.subhir1.types[0].developers[0].skill);
  // console.log(element.hir.subhir1.types[0].developers[1].skill);
  // console.log(element.hir.subhir1.types[1].developers[0].skill);
  // console.log(element.hir.subhir1.types[1].developers[1].skill);
  // console.log(element.hir.subhir2.interns[0].name);
  // console.log(element.hir.subhir2.interns[1].name);
  // console.log(element.hir.subhir2.interns[0].name);
  // console.log(element.hir.subhir2.interns[1].name);
  // console.log(element.hir.subhir2.interns[0].name);
  // Assuming you have only one button with class "CEO"
  let btn = document.querySelectorAll(".CEO");
  btn[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].CEO);
    element.innerhtml += `
    <div class=".CEO-info">
      <h1>${data[i].CEO.name}</h1>
      <h2>${data[i].CEO.age}</h2>
    </div>`;
  });
  let btn2 = document.querySelectorAll(".manager");
  btn2[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].hir.managers);
    element.innerhtml += `
    <div class=".manager-info">
    <h1>${data[i].hir.managers.name}</h1>
    <h2>${data[i].hir.managers.age}</h2>`;
  });
  let btn3 = document.querySelectorAll(".info");
  btn3[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].hir.subhir1.types[0].name);
    console.log(data[i].hir.subhir1.types[1].name);
    element.innerhtml += `
    <div class=".info-info">
    <h1>${data[i].hir.subhir1.types[0].name}</h1>
    <h2>${data[i].hir.subhir1.types[1].name}</h2>`;
  });
  let btn4 = document.querySelectorAll(".frontend-info");
  btn4[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].hir.subhir1.types[0].developers[0].skill);
    console.log(data[i].hir.subhir1.types[0].developers[1].skill);
    element.innerhtml += `
    <div class=".frontend-info">
    <h1>${data[i].hir.subhir1.types[0].developers[0].skill}</h1>
    <h2>${data[i].hir.subhir1.types[0].developers[1].skill}</h2>`;
  });
  let btn5 = document.querySelectorAll(".backend-info");
  btn5[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].hir.subhir1.types[1].developers[0].skill);
    console.log(data[i].hir.subhir1.types[1].developers[1].skill);
    element.innerhtml += `
    <div class=".backend-info">
    <h1>${data[i].hir.subhir1.types[1].developers[0].skill}</h1>
    <h2>${data[i].hir.subhir1.types[1].developers[1].skill}</h2>`;
  });
  let btn6 = document.querySelectorAll(".Frontend-intern");
  btn6[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].hir.subhir2.interns[0].name);
    console.log(data[i].hir.subhir2.interns[1].name);
    element.innerhtml += `
    <div class=".intern-info">
    <h1>${data[i].hir.subhir2.interns[0].name}</h1>
   `;
  });
  let btn7 = document.querySelectorAll(".Backend-intern");
  btn7[0].addEventListener("click", () => {
    // console.log(element);
    console.log(data[i].hir.subhir2.interns[0].name);
    console.log(data[i].hir.subhir2.interns[1].name);
    element.innerhtml += `
    <div class=".intern-info">
    <h1>${data[i].hir.subhir2.interns[1].name}</h1>
   `;
  });
}
