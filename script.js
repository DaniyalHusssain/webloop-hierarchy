const data = {
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
              img: "/assesst/Aliyan.png",
              designation: "Front-end Developer",
            },
            {
              name: "Shakir",
              skill: "react.js",
              img: "/assesst/shakir.png",
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
            {
              name: "Kashif",
              img: "/assesst/kashif.png",
              designation: "Back-end developer",
            },
            {
              name: "Nasir",
              img: "/assesst/Nasir.png",
              designation: "Back-end developer",
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
          name: "Shehzad",
          img: "/assesst/shahzad.png",
          designation: "Front-end intern",
        },
        {
          name: "Ali Abbass",
          img: "/assesst/saqib.png",
          designation: "Front-end intern",
        },
      ],
    },
  },
};

const Ceo = document.querySelectorAll(".CeoDiv");

const ceobtn = document.getElementById("Ceobtn");
// console.log(data.CEO);
ceobtn.addEventListener("click", () => {
  const CEO = data.CEO;
  ceobtn.style.display = "none";
  for (let i = 0; i < Ceo.length; i++) {
    console.log(CEO.age);
    Ceo[i].innerHTML += `
    <div class="Ceo dp3">
    <img src="${CEO.img}"  class="img ceo_img">
     <div id="CeoInfo" class= "info dvlprsDp">
      <h2 class= "ceoH2"> Name :${CEO.name} <br>
      Age :${CEO.age}</h2>
    </div>
    </div>
          `;
  }
});
const managr = document.querySelectorAll(".HrDiv");

const hrbtn = document.getElementById("hrbtn");

hrbtn.addEventListener("click", () => {
  hrbtn.style.display = "none";
  const HR = data.hir.managers;
  for (let i = 0; i < managr.length; i++) {
    console.log(HR.age);
    managr[i].innerHTML += `
    <div class="Hr dp3">
    <img src="${HR.img}"  class="img hr_img">
     <div id="HrInfo" class= "info dvlprsDp">
      <h2 class= "hrH2"> Name :${HR.name} <br>
      Age :${HR.age}</h2>
    </div>
    </div>
          `;
  }
});

const frnt_dev = document.getElementById("F_Dvlpr");
const Frnt = document.getElementById("FrontDevbtn");
Frnt.addEventListener("click", () => {
  Frnt.style.display = "none";
  const FrntDvlpr = data.hir.subhir1.types[0].developers;
  for (let i = 0; i < FrntDvlpr.length; i++) {
    console.log(FrntDvlpr[i].name);
    frnt_dev.innerHTML += `
        <div class="FDev dp3">
        <img src="${FrntDvlpr[i].img}"  class="img frnt_img">
         <div id="FrDevInfo" class= "info dvlprsDp">
          <h2 class= "frntH2"> Name :${FrntDvlpr[i].name} <br>
          Skills :${FrntDvlpr[i].skill}</h2>
        </div>
        </div>
       <div class="h_line nonelines" ></div>
        `;
  }
});
const interns = document.getElementById("intrns");
const InternBtn = document.getElementById("FrontInters");

InternBtn.addEventListener("click", () => {
  InternBtn.style.display = "none";
  const Interns = data.hir.subhir2.interns;
  for (let i = 0; i < Interns.length; i++) {
    console.log(Interns[i].name);
    interns.innerHTML += `
        <div class="intns dp3">
        <img src="${Interns[i].img}"  class="img intns_img">
         <div id="intnsInfo" class= "info dvlprsDp">
          <h2 class= "intnsH2"> Name :${Interns[i].name} <br>
          Skills :${Interns[i].designation}</h2>
        </div>
        </div>
         <div class="h_line nonelines" ></div>
        `;
  }
});

const back_dev = document.getElementById("B_Dvlpr");

const Back = document.getElementById("bckDev");

Back.addEventListener("click", () => {
  Back.style.display = "none";
  const BackDvlpr = data.hir.subhir1.types[1].developers;
  for (let i = 0; i < BackDvlpr.length; i++) {
    console.log(BackDvlpr[i].name);
    back_dev.innerHTML += `
        <div class="BDev dp3">
        <img src="${BackDvlpr[i].img}"  class="img back_img">
         <div id="BackDevInfo" class= "info dvlprsDp">
          <h2 class= "backH2"> Name :${BackDvlpr[i].name} <br>
          Skills :${BackDvlpr[i].designation}</h2>
        </div>
        </div>
         <div class="h_line nonelines" ></div>
        `;
  }
});
