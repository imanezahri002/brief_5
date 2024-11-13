const dic_prt=document.getElementById("section1");
const pr_section=document.getElementById("pr_section");

function commencer(){

        pr_section.style.display="none";
        dic_prt.innerHTML=`
                <div class='tab tab-1' id="section2" >
              <h1>La gare et la date</h1>
              <select id="depart" style="margin-top: 10px; padding: 15px 20px; width: 400px; text-align: center; border-radius: 8px; border: 2px solid #70afd0; color: #2e6c8e; font-weight: 700; font-size: 13pt;">
                <option value="">La gare de départ</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Casa-Blanca">Casa-Blanca</option>
                <option value="Errachidia">Errachidia</option>
                <option value="Oujda">Oujda</option>
                <option value="Tanger">Tanger</option>
                <option value="Agadir">Agadir</option>
                <option value="Fes">Fes</option>
                <option value="Sale">Sale</option>
                <option value="Nador">Nador</option>
                <option value="Laayoun">Laayoun</option>
                <option value="Dakhla">Dakhla</option>
                <option value="Hoceima">Hoceima</option>
              </select>
              <select id="arrivee" style="margin-top: 10px; padding: 15px 20px; width: 400px; text-align: center; border-radius: 8px; border: 2px solid #70afd0; color: #2e6c8e; font-weight: 700; font-size: 13pt;">
                <option value="">La gare d'arriver</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Casa-Blanca">Casa-Blanca</option>
                <option value="Errachidia">Errachidia</option>
                <option value="Oujda">Oujda</option>
                <option value="Tanger">Tanger</option>
                <option value="Agadir">Agadir</option>
                <option value="Fes">Fes</option>
                <option value="Sale">Sale</option>
                <option value="Nador">Nador</option>
                <option value="Laayoun">Laayoun</option>
                <option value="Dakhla">Dakhla</option>
                <option value="Hoceima">Hoceima</option>
              </select>
              <input id="date" type="date" style="margin-top: 10px; padding: 15px 20px; width: 400px; text-align: center; border-radius: 8px; border: 2px solid #70afd0; color: #2e6c8e; font-weight: 700; font-size: 13pt;"/>
              <button id="btn1" onclick="chercher()" class="bouton">Chercher</button>
            </div>
            `;
            
}
let tab_data=[];
async function getdata(){
await fetch("./database.json")
.then((resultat)=>resultat.json())
.then((data)=>{
      tab_data=data;
})
// console.log(tab_data);
}
getdata();

let input_1='';
let input_2='';
let input_3='';
function chercher(){
    input_1=document.getElementById("depart").value;
    input_2=document.getElementById("arrivee").value;
    input_3=document.getElementById("date").value;
    if (input_1 === "" || input_2 === "" || input_3 === ""){
      alert("il remplir les champs premierement");
    }
    else{
  const deu_section=document.getElementById("section2");
  deu_section.style.display="none";
  dic_prt.innerHTML=` <div class='tab tab-2' id="section3">
              <h1>Les resultats de recherche</h1>`
  const newarray = tab_data.filter((item)=>item.gare_depart==input_1&&item.gare_arrivee==input_2&&item.date_depart==input_3)
  
  const troi_section=document.getElementById("section3");
  for(let i=0;i<newarray.length;i++){
    
    troi_section.innerHTML+=`

                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 15px 20px; text-align: center; border-radius: 8px; box-shadow: 0px 2px 40px -15px #70afd0; border: 1px solid #70afd0; color: #2e6c8e; font-weight: 700; font-size: 13pt;">
                    <img height="50px" src="https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg" alt="">
                    <span>${newarray[i].heure_depart}</span>
                    <img width="70px" src="./imgs/vol-direct.png" alt="">
                    <span>${newarray[i].heure_arrivee}</span>
                    <button onclick="reserver()" class="btns">reserver</button>
                </div>`
}
troi_section.innerHTML+=`<button type="button" id="btn_retour" class="bouton" onclick="seretourner()">retour</button>`
};
}


function reserver(){
  const troi_section=document.getElementById("section3");
  troi_section.style.display="none";
  dic_prt.innerHTML=`<div class='tab tab-3' id="section5">
              <h1>Voyageurs</h1>
                <div  style="display: flex; justify-content: space-between; padding: 10px;">
                    <div >
                        <h4>Adult (Prix 500DH)</h4>
                        <div  id="incrementbtn1" style="display: flex; align-items: center; gap: 10px;">
                            <button  onclick="pre_augmenter()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">+</button>
                            <span id="nbr1">0</span>
                            <button  onclick="pre_diminuer()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                        </div>
                    </div>
                    <div style="width: 5px; background-color: #2e6c8e;"></div>
                    <div>
                        <h4>Enfant (Prix 100DH)</h4>
                        <div  id="next1" style="display: flex; align-items: center; gap: 10px;">
                            <button onclick="deu_augmenter()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">+</button>
                            <span id="nbr2">0</span>
                            <button  onclick="deu_diminuer()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                        </div>
                    </div>
                </div>
                
                <h4>Choisissez votre place</h4>
                <p id="message"></p>
                <div id="check_button" style="display: grid; justify-content: center; grid-template-columns: auto auto auto auto auto; gap: 20px;">
                </div>
                <h4 id="total"></h4>
                
            </div>`
            const checkbox=document.getElementById("check_button");
            for(let i=0;i<15;i++){
              checkbox.innerHTML+=`<button verification="false" class="places" onclick="check(${i})" style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;"></button>                    
              `
            }
            const div_section=document.getElementById("section5");
            div_section.innerHTML+=`  <button type="button" id="btn_retour" class="bouton" onclick="seretourner()">retour</button>`
}
  function pre_augmenter(){
    let number=document.getElementById("nbr1");
    let nombre=Number(number.textContent);
    nombre++;
    number.innerHTML=nombre;
    calculer();
  }
  function deu_augmenter(){
    let number_2=document.getElementById("nbr2");
    let nombre_2=Number(number_2.textContent);
    nombre_2++;
    number_2.innerHTML=nombre_2;
    calculer();
  }
  function pre_diminuer(){
    let number=document.getElementById("nbr1");
    let nombre=Number(number.textContent);
    nombre--;
    if(nombre<0){
      number.innerHTML=0;
    }else number.innerHTML=nombre;
    calculer();
  }
  function deu_diminuer(){
    let number_2=document.getElementById("nbr2");
    let nombre_2=Number(number_2.textContent);
    nombre_2--;
    if(nombre_2<0){
      number_2.innerHTML=0;
    }else number_2.innerHTML=nombre_2;
    calculer();
  }
  
  let adult='';
  let enfant='';
  function calculer(){
  adult=document.getElementById("nbr1").textContent;
  enfant=document.getElementById("nbr2").textContent;
  const Total_affiche=document.getElementById("total");
  let total=(Number(adult)*500)+(Number(enfant)*100);
  Total_affiche.innerHTML="Total: "+total+"Dh";
}

let cpt=0;
function check(i){
  const div_check=document.getElementById("section5");
  let msg_place=document.getElementById("message");
  let adult=document.getElementById("nbr1").textContent;
  let enfant=document.getElementById("nbr2").textContent;

  let prevuous1=document.getElementById("incrementbtn1");
  let next1=document.getElementById("next1");

  const total = (Number(adult)+Number(enfant));
  const but=document.getElementsByClassName("places")[i];
  if(cpt<total){
    if(but.getAttribute("verification")=="false"){
      but.style.backgroundColor="green";
      but.setAttribute("verification","true");
      cpt++;
    }
    else{
      but.style.backgroundColor="#a6cde2";
      but.setAttribute("verification","false");
      cpt--;
    } 
    if(cpt == total){
      prevuous1.style.display = "none";
      next1.style.display = "none";
      div_check.innerHTML +=`<button class="bouton" onclick="pr_ticket()">Ticket</button>`;

    }
  }
  console.log(cpt);
   msg_place.innerText=`il faut choisir ${total} places`;
}
let id=1000;

function pr_ticket(){

  const troi_section=document.getElementById("section5");
  troi_section.style.display="none";

  dic_prt.innerHTML=`<div class='tab tab-4' id="section6">
              <h1>Les tickets</h1>`
              
  const quatr_section=document.getElementById("section6");
  nombre_adulte=Number(adult);
  nombre_enfant=Number(enfant);
  for(let i=0;i<nombre_adulte;i++){
    quatr_section.innerHTML+=`
              <div style="height: 500px;display: flex; justify-content: center; align-items: center;">
              <div class="global" id="ticket_imp">
            <div class="nav">
                <div class="logo"><img src="./imgs/flight.png" alt="" class="lg">
                <h2>Imane-air</h2></div>
                <div class="type">Adult</div>
                <div class="type">500</div>
                <div class="serie">${id}</div>
            </div>
            <div class="contenu">
                <div class="group1">
                    <div>gare de depart:</div>
                    <h1>${input_1}</h1>
                    <h4>09:00</h4>
                </div>
                    <img src="./imgs/avvvvvvion.png" alt="" class="centre_image">
                <div class="group2">
                    <div>gare d'arrivee:</div>
                    <h1>${input_2}</h1>
                    <h4>11:30</h4>
                </div>
            </div>
            <div class="footer">
            <div class="date">${input_3}</div>
            <div><img src="./imgs/qr.png" alt=""></div>
            </div>
            <div class="ligne">--------------------------------------------------------------------------------------------</div>
        </div>

              </div>
              </div>`
              id++;
              console.log(id);
            };
            for(let i=0;i<nombre_enfant;i++){
              quatr_section.innerHTML+=`
              <div style="height: 500px;display: flex; justify-content: center; align-items: center;">
              <div class="global">
            <div class="nav">
                <div class="logo"><img src="./imgs/flight.png" alt="" class="lg">
                <h2>Imane-air</h2></div>
                <div class="type">enfant</div>
                <div class="type">100</div>
                <div class="serie">${id}</div>
            </div>
            <div class="contenu">
                <div class="group1">
                    <div>gare de depart:</div>
                    <h1>${input_1}</h1>
                    <h3>09:00</h3>
                </div>
                    <img src="./imgs/avvvvvvion.png" alt="" class="centre_image">
                <div class="group2">
                    <div>gare d'arrivee:</div>
                    <h1>${input_2}</h1>
                    <h3>11:30</h3>
                </div>
            </div>
            <div class="footer">
            <div class="date">${input_3}</div>
            <div><img src="./imgs/qr.png" alt=""></div>
            </div>
            <div class="ligne">--------------------------------------------------------------------------------------------</div>
        </div>

              </div>
              </div>`
              id++;
              console.log(id);
            }
              
            quatr_section.innerHTML+=`<button type="button" id="btn_retour" class="bouton" onclick="seretourner()">retour</button>
            <button type="button" onclick="imprimer()" id="btn" class="bouton">imprimer</button>`
}
function imprimer(){
          const div_ticket=document.getElementById("section6");
          const bouton=document.getElementById("btn");
          bouton.style.display="none";
          const options = {
            margin: 10,
            filename: 'Ticket.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          html2pdf().set(options).from(div_ticket).save().then(()=>
            bouton.style.display="flex"
          );

}

