const characterslist = ["Elsword", "Chung", "Add", "Noah", "Aisha", "Eve", "Laby", "Luciel", "Raven", "Ain", "Rose", "Rena", "Elesis", "Lithia", "Ara"];

const elswordclasses = ["Genesis", "Knight Emperor", "Rune Master", "Immortal"];
const chungclasses = ["Comet Crusader", "Centurion", "Fatal Phantom", "Dius Aer"];
const addclasses = ["Mad Paradox", "Doom Bringer", "Dominator", "Overmind"];
const noahclasses = ["Liberator", "Celestia", "Morpheus", "Nyx Pieta"];
const aiclasses = ["Metamorphy", "Lord Azoth", "Aether Sage", "Oz Sorcerer"];
const eveclasses = ["Code: Antithese", "Code: Sariel", "Code: Esencia", "Code: Ultimate"];
const labyclasses = ["Eternity Winner", "Radiant Soul", "Nisha Labyrinth", "Twins Picaro"];
const lucielclasses = ["Catastrophe", "Innocents", "Diangelion", "Demersio"];
const ravenclasses = ["Rage Hearts", "Nova Imperator", "Revenant", "Furious Blade"];
const ainclasses = ["Bluhen", "Herrscher", "Opferung", "Richter"];
const roseclasses = ["Tempest Burster", "Minerva", "Black Massacre", "Prime Operator"];
const renaclasses = ["Daybreaker", "Twilight", "Anemos", "Prophetess"];
const elesisclasses = ["Empire Sword", "Bloody Queen", "Flame Lord", "Adrestia"];
const lithiaclasses = ["Gembliss", "Avarice", "Achlys", "Mischief"];
const araclasses = ["Surya", "Devi", "Shakti", "Apsara"];

//use the selected character to give autocomplete options for class to make formatting easy
//list of skills for that class that you can choose from

function skilldmgtest(){
  
let skilldmg = parseFloat(document.getElementById('skilldmg').value);
let baseasd = parseFloat(document.getElementById('asd').value);
let asd = (baseasd+100)/100;
let basecritchance = parseFloat(document.getElementById('currentcrit').value);
let critchance = basecritchance/100;
let basecritdmg = parseFloat(document.getElementById('critdmg').value);
let critdmg = basecritdmg/100;
let skilltier = parseFloat(document.getElementById('skilltier').value);
let skillstack = parseFloat(document.getElementById('skillstack').value);
let skilldmgmodifier = (skillstack+skilltier+100)/100;
let demonrealmdebuff = parseFloat(document.getElementById('demonrealmdebuff').value);
//demonrealmdebuff

if (basecritchance>=100){
  truerealskilldmg = skilldmg * asd * skilldmgmodifier * critdmg;
  realskilldmg = truerealskilldmg.toFixed(2);
  document.getElementById("dmgoutput").innerHTML = (realskilldmg + "%");
  document.getElementById("not100warning").innerHTML = "";
}
else if (basecritchance<100){
  truerealskilldmg = (skilldmg * asd * skilldmgmodifier * critdmg * critchance)
  + (skilldmg * asd * skilldmgmodifier * (1-critchance));
  realskilldmg = truerealskilldmg.toFixed(2);
  document.getElementById("dmgoutput").innerHTML = (realskilldmg + "%");
  document.getElementById("not100warning").innerHTML = "Warning: Your critical chance is not 100%. This number is the average damage you will do, your real damage may be lower or higher.";
}}

function charactertest(){
let characterinput = (document.getElementById('character')).value.toLowerCase();
let currentchar = (characterinput+"classes");
let currentclass = currentchar.toString(", ");
console.log(currentclass);
}
// currenchar variable based on html menu selection
// pick class options and display those based on currentchar variable
// grab a list of skills and their damages based on currentclass

//input areas for relavent stats like all skill damage and patk power increase and all that
//calculate how much damage by default based on skill %, not accounting for critical and maximize
// if critical = 100 then do based on critical damage
// if critical less than 100 then take the average damage based on critical chance and give a warning for "hey your critical isnt 100 this might not be accurate"
// do the same with maximize
