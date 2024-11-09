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


function chercher(){

  const input_1=document.getElementById("depart").value;
  const input_2=document.getElementById("arrivee").value;
  const input_3=document.getElementById("date").value;
  const deu_section=document.getElementById("section2");

  deu_section.style.display="none";
  dic_prt.innerHTML=` <div class='tab tab-2' id="section3">
              <h1>Les resultats de recherche</h1>`
  const newarray = tab_data.filter((item)=>item.gare_depart==input_1&&item.gare_arrivee==input_2&&item.date_depart==input_3)
  console.log(newarray);
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
}

function reserver(){
  const troi_section=document.getElementById("section3");
  troi_section.style.display="none";
  dic_prt.innerHTML=`<div class='tab tab-3' id="section5">
              <h1>Voyageurs</h1>
                <div style="display: flex; justify-content: space-between; padding: 10px;">
                    <div>
                        <h4>Adult (Prix 500DH)</h4>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <button onclick="pre_augmenter()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">+</button>
                            <span id="nbr1">1</span>
                            <button onclick="pre_diminuer()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                        </div>
                    </div>
                    <div style="width: 5px; background-color: #2e6c8e;"></div>
                    <div>
                        <h4>Enfant (Prix 100DH)</h4>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <button onclick="deu_augmenter()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">+</button>
                            <span id="nbr2">1</span>
                            <button onclick="deu_diminuer()" style="border-radius: 50%; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                        </div>
                    </div>
                </div>
                <h4>Choisissez votre place</h4>
                <div style="display: grid; justify-content: center; grid-template-columns: auto auto auto auto; gap: 20px;">
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                    <button style="border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;">-</button>
                </div>
                <h4 id="total">Prix Total : 0000DH</h4>
            </div>`
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
  
  function calculer(){
  let adult=document.getElementById("nbr1").textContent;
  let enfant=document.getElementById("nbr2").textContent;
  const Total_affiche=document.getElementById("total");
  let total=(Number(adult)*500)+(Number(enfant)*100);
  Total_affiche.innerHTML=total;
}

