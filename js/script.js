const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const maleFirst = document.getElementById("male1");
const maleSecond = document.getElementById("male2");
const maleThird = document.getElementById("male3");
const femaleFirst = document.getElementById("female1");
const femaleSecond = document.getElementById("female2");
const femaleThird = document.getElementById("female3");

const cardArr = [maleFirst, maleSecond, maleThird, femaleFirst, femaleSecond, femaleThird]


const fillCard = (member) => {
  return `
  <div class="card text-bg-dark" style="width: 18rem;">
                    <img src="${member.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">
                          <strong>Ruolo</strong>: ${member.role}
                          <br>
                          <strong>Email</strong>: ${member.email}
                        </p>
                    </div>
                </div>
  `
}

let j = 0;

for (let i = 0; i < cardArr.length; i++){


  cardArr[i].innerHTML = fillCard(teamMembers[j]);

  console.log(fillCard(teamMembers[j]));
  j++;

  

}

const newMembSect = document.querySelector(".new-members");

const formElem = document.getElementById("addMemb");
const nameInput = document.getElementById("newName");
const roleInput = document.getElementById("newRole");
const mailInput = document.getElementById("newMail");
const imgInput = document.getElementById("newImg");

formElem.addEventListener("submit", function (event) {

  event.preventDefault();

  const newMember = {
    name: nameInput.value,
    role: roleInput.value,
    email: mailInput.value,
    img: imgInput.value
  }

  newMembSect.innerHTML += `
  <div class="col-12 col-md-6 col-lg-4 mt-5">

    ${fillCard(newMember)}

            </div>
  `
})