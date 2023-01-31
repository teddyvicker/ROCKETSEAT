function creatGame(player1, hour, player2){
  return `
  <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
            `
}

function createCard (date, day, games){
  return `<div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
           </li>
          </ul>
        </div>
      `
}
document.querySelector('#cards').innerHTML = 
        createCard('24/11', 'Quinta',
          creatGame('Brazil', '16:00', 'Serbia')) +
        createCard('28/11', 'Segunda',
          creatGame('Brazil', '13:00', 'Switzerland') + creatGame('Portugal', '16:00', 'hungary')
        )
        createCard('02/12','Sexta', creatGame('Brazil', '20:00', 'Camaroon')
        )
     
      