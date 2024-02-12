const data = [
  {
    level: 1,
    name: "CEO",
    CEO: {
      name: "Sheraz",
      age: 27,
      img: "/assesst/sheraz.png",
      designation: "CEO",
    },
    hir: {
      level: 2,
      name: "Manager",
      managers: {
        name: "Saleem",
        age: 27,
        img: "/assesst/saleem.png",
        designation: "HR Manager",
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
                img: "/assesst/saqib.png",
                designation: "Front-end Developer",
              },
              {
                name: "ALiyan",
                skill: "html,js",
                img: "/assesst/saqib.png",
                designation: "Front-end Developer",
              },
              {
                name: "Shakir",
                skill: "react.js",
                img: "/assesst/saqib.png",
                designation: "Front-end Developer",
              },
            ],
          },
          {
            name: "backend",
            developers: [
              {
                name: "Sheraz",
                skill: "nodejs/php/blockchain",
                img: "/assesst/sheraz.png",
                designation: "Back-end Developer",
              },
              {
                name: "Asad",
                skill: "Nodejs/php",
                img: "/assesst/Asad.png",
                designation: "Back-end Developer",
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
            img: "/assesst/saqib.png",
            designation: "Front-end intern",
          },
          {
            name: "Ali Abbass",
            img: "/assesst/saqib.png",
            designation: "Front-end intern",
          },
          {
            name: "Kashif",
            img: "/assesst/saqib.png",
            designation: "Back-end intern",
          },
          {
            name: "Maqbool",
            img: "/assesst/saqib.png",
            designation: "Back-end intern",
          },
        ],
      },
    },
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelectorAll(".Parentnode");

  for (let i = 0; i < container.length; i++) {
    container[i].innerHTML += `
        <div class="Sheraz">
            <div class="CEO-info">
                <img src="${data[i].CEO.img}">
                <div class="CEO-text">
                    <h1> Name : ${data[i].CEO.name}</h1>
                    <h2>Age : ${data[i].CEO.age}</h2>
                    <h3>Title: ${data[i].CEO.designation}</h3>
                </div>
            </div>
        </div>`;

    let btnCEO = document.querySelector(".CEO");
    btnCEO.addEventListener("click", () => {
      btnCEO.style.display = "none";
      let ceo = document.querySelectorAll(".Sheraz");
      ceo[i].style.display = "block";
    });
  }

  let childnode = document.querySelectorAll(".Childnode");

  for (let i = 0; i < childnode.length; i++) {
    childnode[i].innerHTML += `
        <div class="Saleem">
            <div class="Manager-info">
                <img src ="${data[i].hir.managers.img}">
                <div class="Manager-text">
                    <h1> Name: ${data[i].hir.managers.name}</h1>
                    <h2> Age :${data[i].hir.managers.age}</h2>
                    <h3> Title :${data[i].hir.managers.designation}</h3>
                </div>
            </div>
        </div>`;
    let btnManager = document.querySelector(".manager");

    btnManager.addEventListener("click", () => {
      btnManager.style.display = "none";
      let manager = document.querySelectorAll(".Saleem");
      manager[i].style.display = "block";
    });
  }

  // let info = document.querySelectorAll(".info");
  // for (let i = 0; i < info.length; i++) {
  //   info[i].innerHTML += `
  //       <div class="info-info">
  //           <h1>${data[i].hir.subhir1.types[0].name}</h1>
  //           <h2>${data[i].hir.subhir1.types[1].name}</h2>
  //       </div>`;
  //   let btnInfo = document.querySelector(".info");
  //   btnInfo.addEventListener("click", () => {
  //     btnInfo.style.display = "none";
  //     let info = document.querySelectorAll(".infodev");
  //     infodev[i].style.display = "block";
  //   });
  // }

  let frontend = document.querySelectorAll(".dev-info");

  for (let i = 0; i < frontend.length; i++) {
    frontend[i].innerHTML += `
        <div class="frontend-dev">
            <div class ="fdeveloper">
                <div class ="Saqib-info">
                    <img src = "${data[i].hir.subhir1.types[0].developers[0].img}">
                    <div class ="Saqib-text">
                        <h1>${data[i].hir.subhir1.types[0].developers[0].name}</h1>
                        <h2>${data[i].hir.subhir1.types[0].developers[0].skill}</h2>
                    </div>
                </div>
                <div class ="Aliyan-info">
                    <img src = "${data[i].hir.subhir1.types[0].developers[1].img}">
                    <div class ="Aliyan-text">
                        <h1>${data[i].hir.subhir1.types[0].developers[1].name}</h1>
                        <h2>${data[i].hir.subhir1.types[0].developers[1].skill}</h2>
                    </div>
                </div>
                <div class ="Shakir-info">
                    <img src = "${data[i].hir.subhir1.types[0].developers[2].img}">
                    <div class ="Shakir-text">
                        <h1>${data[i].hir.subhir1.types[0].developers[2].name}</h1>
                        <h2>${data[i].hir.subhir1.types[0].developers[2].skill}</h2>
                    </div>
                </div>
            </div>
        </div>`;

    let btnFrontend = document.querySelector(".frontend-info");
    btnFrontend.addEventListener("click", () => {
      console.log("Front");
      btnFrontend.style.display = "none";
      let frontend = document.querySelectorAll(".frontend-dev");
      frontend[i].style.display = "block";
    });
  }

  let backend = document.querySelectorAll(".dev-info");

  for (let i = 0; i < backend.length; i++) {
    backend[i].innerHTML += `
        <div class="backend-dev">
            <div class ="bdeveloper">
                <div class ="Sheraz-info">
                    <img src = "${data[i].hir.subhir1.types[1].developers[0].img}">
                    <div class ="Sheraz-text">
                        <h1>${data[i].hir.subhir1.types[1].developers[0].name}</h1>
                        <h2>${data[i].hir.subhir1.types[1].developers[0].skill}</h2>
                    </div>
                </div>
                <div class="Asad-info">
                    <img src = "${data[i].hir.subhir1.types[1].developers[1].img}">
                    <div class ="Asad-text">
                        <h1>${data[i].hir.subhir1.types[1].developers[1].name}</h1>
                        <h2>${data[i].hir.subhir1.types[1].developers[1].skill}</h2>
                    </div>
                </div>
            </div>
        </div>`;

    let btnBackend = document.querySelector(".backend-info");
    btnBackend.addEventListener("click", () => {
      btnBackend.style.display = "none";
      let backend = document.querySelectorAll(".backend-dev");
      backend[i].style.display = "block";
    });
  }
  let intern = document.querySelectorAll(".interns-info");
  for (let i = 0; i < intern.length; i++) {
    intern[i].innerHTML += `
        <div class="intern-info">
        <div class ="frontend-intern">
        <div class ="Mansoor-info">
        <img src = "${data[i].hir.subhir2.interns[0].img}">
        <div class ="Mansoor-text">
            <h1>${data[i].hir.subhir2.interns[0].name}</h1>
            <h2>${data[i].hir.subhir2.interns[0].designation}</h2>
             </div>
            </div>
            <div class ="Ali-info">
            <img src = "${data[i].hir.subhir2.interns[1].img}">
            <div class ="Ali-text">
            <h1>${data[i].hir.subhir2.interns[1].name}</h1>
            <h2>${data[i].hir.subhir2.interns[1].designation}</h2>
            </div>
            </div>
        </div>
        </div>`;
    let btnIntern = document.querySelector(".Frontend-intern");
    btnIntern.addEventListener("click", () => {
      btnIntern.style.display = "none";
      let intern = document.querySelectorAll(".intern-info");
      intern[i].style.display = "block";
    });
  }
  let backintern = document.querySelectorAll(".interns-info");
  for (let i = 0; i < backintern.length; i++) {
    backintern[i].innerHTML += `
     <div class="b-intern-info">
     <div class ="backend-intern">
     <div class ="Kashif-info">
     <img src = "${data[i].hir.subhir2.interns[2].img}">
     <div class ="Kashif-text">
     <h1>${data[i].hir.subhir2.interns[2].name}</h1>
     <h2>${data[i].hir.subhir2.interns[2].designation}</h2>
   </div>
    <div class ="Maqbul-info">
    <img src = "${data[i].hir.subhir2.interns[3].img}">
    <div class ="Maqbul-text">
    <h1>${data[i].hir.subhir2.interns[3].name}</h1>
    <h2>${data[i].hir.subhir2.interns[3].designation}</h2>
        </div>
        </div>
        </div>
    `;
    let btnBackintern = document.querySelector(".Backend-intern");
    btnBackintern.addEventListener("click", () => {
      btnBackintern.style.display = "none";
      let backintern = document.querySelectorAll(".b-intern-info");
      backintern[i].style.display = "block";
    });
  }
});
