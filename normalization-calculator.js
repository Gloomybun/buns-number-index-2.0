
//creates an EffectBracket class -- basically lets you make objects with their min, max, and eff numbers in brackets instead of assigning them all manually
class EffectBracket {
  constructor(min, max, eff) {
  this.min = min;
  this.max = max;
  this.eff = eff;
  }
}

//actually defines said values, the min, max, and effectiveness per bracket
const maxieff1 = new EffectBracket(0, 40, 1.0);
const maxieff2 = new EffectBracket(40, 80, 0.75);
const maxieff3 = new EffectBracket(80, 120, 0.5);
const maxieff4 = new EffectBracket(120, 160, 0.25);

const criteff1 = new EffectBracket(0, 40, 1.0);
const criteff2 = new EffectBracket(40, 75, 0.80);
const criteff3 = new EffectBracket(75, 105, 0.60);
const criteff4 = new EffectBracket(105, 140, 0.40);

const redmgeff1 = new EffectBracket(0, 20, 1.0);
const redmgeff2 = new EffectBracket(20, 45, 0.5);
const redmgeff3 = new EffectBracket(45, 75, 0.35);
const redmgeff4 = new EffectBracket(75, 95, 0.15);

//creates the calculation function
function showresult(calculate){
  
  //pulls the data from the "raw stat" box
  let rawstat=parseFloat(document.getElementById('rawstat').value);
  let r;
  let c=calculate;

    switch(c)
    	{
    	case '1': //maximize
    	  
    	   if (rawstat >= maxieff4.max) {
         r = 100;
          } else if (rawstat >= maxieff4.min) {
          r = ((maxieff4.eff * (rawstat - maxieff4.min) ) + 90);
            } else if (rawstat >= maxieff3.min) {
            r = ((maxieff3.eff * (rawstat - maxieff3.min) ) + 70);
              } else if (rawstat >= maxieff2.min) {
              r = ((maxieff2.eff * (rawstat - maxieff2.min) ) + 40);
                } else if (rawstat >= maxieff1.min) {
                r = (maxieff1.eff * (rawstat - maxieff1.min));
         }
         break;
      
     case '2': //critical
    
         if (rawstat >= criteff4.max) {
         r = 100;
          } else if (rawstat >= criteff4.min) {
          r = ((criteff4.eff * (rawstat - criteff4.min) ) + 86);
            } else if (rawstat >= criteff3.min) {
            r = ((criteff3.eff * (rawstat - criteff3.min) ) + 68);
              } else if (rawstat >= criteff2.min) {
              r = ((criteff2.eff * (rawstat - criteff2.min) ) + 40);
                } else if (rawstat >= criteff1.min) {
                r = (criteff1.eff * (rawstat - criteff1.min));
         }
         break;
         
      case '3': //damage reduction
    	  
    	   if (rawstat >= redmgeff4.max) {
         r = 45;
          } else if (rawstat >= redmgeff4.min) {
          r = ((redmgeff4.eff * (rawstat - redmgeff4.min) ) + 41.25);
            } else if (rawstat >= redmgeff3.min) {
            r = ((redmgeff3.eff * (rawstat - redmgeff3.min) ) + 32.5);
              } else if (rawstat >= redmgeff2.min) {
              r = ((redmgeff2.eff * (rawstat - redmgeff2.min) ) + 20);
                } else if (rawstat >= redmgeff1.min) {
                r = (redmgeff1.eff * (rawstat - redmgeff1.min));
         }
         break;
      }	
	
//writes the calculated value back into the page, into the "test" box
  document.getElementById('test').value=r;
}


//creates the function for socketing difference
function showSocketingResult(mode){
  
  //pulls the data from the "current stat" box
  let currentstat=parseFloat(document.getElementById('currentstat').value);
  let neededstat=parseFloat(document.getElementById('neededstat').value);
  let cs=mode;
  let rs;

    //case 1 is for socketing maximize and case 2 is for critical
    switch(cs){
      
//case for calculating maximize      
    	case '1':
          if ((neededstat >= maxieff4.min) && (currentstat >= maxieff4.min)){
          rs = ((neededstat-currentstat)/maxieff4.eff);
          
            }else if ((neededstat >= maxieff4.min) && (currentstat >= maxieff3.min) && (maxieff4.min >= currentstat)){
            rs = (((neededstat-maxieff4.min)/maxieff4.eff)+((maxieff3.max-currentstat)/maxieff3.eff));
            
              }else if ((neededstat >= maxieff4.min) && (currentstat >= maxieff2.min) && (maxieff3.min >= currentstat)){
              rs = (((neededstat-maxieff4.min)/maxieff4.eff)+((maxieff3.max-maxieff3.min)/maxieff3.eff)+((maxieff2.max-currentstat)/maxieff2.eff));
              
                }else if ((neededstat >= maxieff4.min) && (currentstat >= maxieff1.min) && (maxieff2.min >= currentstat)){
                rs = (((neededstat-maxieff4.min)/maxieff4.eff)+((maxieff3.max-maxieff3.min)/maxieff3.eff)+((maxieff2.max-maxieff2.min)/maxieff2.eff)+((maxieff1.max-currentstat)/maxieff1.eff));
                
                
          }else if ((neededstat >= maxieff3.min) && (currentstat >= maxieff3.min) && (maxieff4.min >= currentstat)){
          rs = ((neededstat-currentstat)/maxieff3.eff);
            }else if ((neededstat >= maxieff3.min) && (currentstat >= maxieff2.min) && (maxieff3.min >= currentstat)){
            rs = (((neededstat-maxieff3.min)/maxieff3.eff)+((maxieff2.max-currentstat)/maxieff2.eff));
              }else if ((neededstat >= maxieff3.min) && (currentstat >= maxieff1.min) && (maxieff2.min >= currentstat)){
              rs = (((neededstat-maxieff3.min)/maxieff3.eff)+((maxieff2.max-maxieff2.min)/maxieff2.eff)+((maxieff1.max-currentstat)/maxieff1.eff));
              
              
          } else if ((neededstat >= maxieff2.min) && (currentstat >=maxieff2.min) && (maxieff3.min >= currentstat)){
          rs = ((neededstat-currentstat)/maxieff2.eff);
            }else if ((neededstat >= maxieff2.min) && (currentstat >= maxieff1.min) && (maxieff2.min >= currentstat)){
            rs = (((neededstat-maxieff2.min)/maxieff2.eff)+((maxieff1.max-currentstat)/maxieff1.eff));

          } else if ((neededstat >= maxieff1.min) && (currentstat >=maxieff1.min) && (maxieff2.min >= currentstat)){
          rs = ((neededstat-currentstat)/maxieff1.eff);
                 
         } else {rs = "not yet implemented";}
         break;

     case '2':
       if ((neededstat >= criteff4.min) && (currentstat >= criteff4.min)){
      	rs = ((neededstat-currentstat)/criteff4.eff);
     	 
        	}else if ((neededstat >= criteff4.min) && (currentstat >= criteff3.min) && (criteff4.min >= currentstat)){
        	rs = (((neededstat-criteff4.min)/criteff4.eff)+((criteff3.max-currentstat)/criteff3.eff));
       	 
          	}else if ((neededstat >= criteff4.min) && (currentstat >= criteff2.min) && (criteff3.min >= currentstat)){
          	rs = (((neededstat-criteff4.min)/criteff4.eff)+((criteff3.max-criteff3.min)/criteff3.eff)+((criteff2.max-currentstat)/criteff2.eff));
         	 
            	}else if ((neededstat >= criteff4.min) && (currentstat >= criteff1.min) && (criteff2.min >= currentstat)){
            	rs = (((neededstat-criteff4.min)/criteff4.eff)+((criteff3.max-criteff3.min)/criteff3.eff)+((criteff2.max-criteff2.min)/criteff2.eff)+((criteff1.max-currentstat)/criteff1.eff));
           	 
           	 
      	}else if ((neededstat >= criteff3.min) && (currentstat >= criteff3.min) && (criteff4.min >= currentstat)){
      	rs = ((neededstat-currentstat)/criteff3.eff);
        	}else if ((neededstat >= criteff3.min) && (currentstat >= criteff2.min) && (criteff3.min >= currentstat)){
        	rs = (((neededstat-criteff3.min)/criteff3.eff)+((criteff2.max-currentstat)/criteff2.eff));
          	}else if ((neededstat >= criteff3.min) && (currentstat >= criteff1.min) && (criteff2.min >= currentstat)){
          	rs = (((neededstat-criteff3.min)/criteff3.eff)+((criteff2.max-criteff2.min)/criteff2.eff)+((criteff1.max-currentstat)/criteff1.eff));
         	 
         	 
      	} else if ((neededstat >= criteff2.min) && (currentstat >=criteff2.min) && (criteff3.min >= currentstat)){
      	rs = ((neededstat-currentstat)/criteff2.eff);
        	}else if ((neededstat >= criteff2.min) && (currentstat >= criteff1.min) && (criteff2.min >= currentstat)){
        	rs = (((neededstat-criteff2.min)/criteff2.eff)+((criteff1.max-currentstat)/criteff1.eff));

      	} else if ((neededstat >= criteff1.min) && (currentstat >=criteff1.min) && (criteff2.min >= currentstat)){
      	rs = ((neededstat-currentstat)/criteff1.eff);
            	 
     	} else {rs = "not yet implemented";}
         break;
}	
    
//writes the calculated value back into the page, into the "test" box
  document.getElementById('socket').value = rs;
}


function onmouseout(event) {
  this.src = '/Sitemap_1.png'
}

let chart;

function updateGraph2() {

//destroys a chart if one already exists so they dont overlap and overload the system thing whatever
if (chart) { chart.destroy(); }

  //pulls the variables from the text boxes in the html
  let allskilldmg=parseFloat(document.getElementById('allskilldmg').value);
  let specskilldmg=parseFloat(document.getElementById('specskilldmg').value);
  let skilltierdmg=parseFloat(document.getElementById('skilltierdmg').value);
  
  //establishes the existence of x and y values
  let xValues = [];
  let yValues1 = [];
  let yValues2 = [];
  let yValues3 = [];
  
  for (let x = 0; x <= 5; x++) {
    xValues.push(x);
    yValues1.push(x*((1+allskilldmg)*(1+specskilldmg+skilltierdmg)));
    yValues2.push(x*(1+allskilldmg)*(1+specskilldmg));
    yValues3.push(x*(1+skilltierdmg+specskilldmg));
}

const ctx = document.getElementById('ASDvsSPEC').getContext('2d');
    chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        { label: `all skill damage + skill tier damage`, data: yValues1, borderColor: 'blue', fill: false, pointRadius: 0 },
        { label: `all skill dmg (no skill tier)`, data: yValues2, borderColor: 'red', fill: false, pointRadius: 0 },
        { label: `skill tier (no asd)`, data: yValues3, borderColor: 'green', fill: false, pointRadius: 0 }
      ]
      },
    });
}

function updateGraph() {

//destroys a chart if one already exists so they dont overlap and overload the system thing whatever
if (chart) { chart.destroy(); }

  //pulls the variables from the text boxes in the html
  let damageincrease=parseFloat(document.getElementById('damageincrease').value);
  let cooldownreduction=parseFloat(document.getElementById('cooldownreduction').value);
  let basecooldown=parseFloat(document.getElementById('basecooldown').value);
  
  //establishes the existence of x and y values
  let xValues = [];
  let yValues1 = [];
  let yValues2 = [];
  let yValues3 = [];
  
  for (let x = 0; x <= 5; x++) {
    xValues.push(x);
    yValues1.push(x*((100+damageincrease)*(60)/basecooldown));
    yValues2.push(x*((100*60)/(basecooldown-(cooldownreduction*basecooldown/100))));
    yValues3.push(x*((100*60)/basecooldown));
}

const ctx = document.getElementById('CDRvsDMG').getContext('2d');
    chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        { label: `Raw Damage Increase`, data: yValues1, borderColor: 'blue', fill: false, pointRadius: 0 },
        { label: `Damage Increase With CDR`, data: yValues2, borderColor: 'red', fill: false, pointRadius: 0 },
        { label: `Base Damage`, data: yValues3, borderColor: 'green', fill: false, pointRadius: 0 }
      ]
      },
    });
}