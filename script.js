//*1- Creare un array di oggetti che rappresenta ciascun membro del team. 
//Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
//*2- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
//*3- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

//* 1.
const teamMembers = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
    },
    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor',
    },
    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',
    },
    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela lopez',
        role: 'Social Media Manager',
    },
    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer',
    },
    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },
]
console.log(teamMembers);


//Ref
const newNameData = document.getElementById('name');
const newRoleData = document.getElementById('role');
const newImageData = document.getElementById('image');
const btnAddMember = document.getElementById('addMemberButton');

//* 2.
 //Ref
const teamContainer = document.querySelector('.team-container');

layOutGen (teamMembers, teamContainer);

//* 3.
btnAddMember.addEventListener('click', function () {
    teamContainer.innerHTML = '';

    const newName = newNameData.value;
    const newRole = newRoleData.value;
    const newImage = newImageData.value;
    
    const newMember = {
        name: `${newName}`,
        role: `${newRole}`,
        image: `${newImage}`,
    };

    teamMembers.push(newMember);

    layOutGen (teamMembers, teamContainer);
});

/* 
* FUNCTION
*/

function layOutGen (array, indexRef) {
    //Clean the HTML area
    indexRef.innerHTML = '';
    
    //Loop for each element of the array
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(arrayElement);

        //Layout selected
        indexRef.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img src="${arrayElement.image}"
                alt="${arrayElement.name}"/>
            </div>
            <div class="card-text">
              <h3>${arrayElement.name}</h3>
              <p>${arrayElement.role}</p>
            </div>
        </div>
        `;
    }
}