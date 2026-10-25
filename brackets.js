
class EffectBracket {
  constructor(min, max, eff) {
  this.min = min;
  this.max = max;
  this.eff = eff;
  }
}

function getValue() {
  const rawinput = document.getElementById("rawstat");
  const rawstat = rawinput.value;
  const rawmode = document.getElementById("mode");
  const mode = rawmode.value;
}

const maxieff1 = new EffectBracket(0, 40, 1.0);
const maxieff2 = new EffectBracket(40, 80, 0.75);
const maxieff3 = new EffectBracket(80, 120, 0.5);
const maxieff4 = new EffectBracket(120, 160, 0.25);

const criteff1 = new EffectBracket(0, 40, 1.0);
const criteff2 = new EffectBracket(40, 75, 0.80);
const criteff3 = new EffectBracket(75, 105, 0.60);
const criteff4 = new EffectBracket(105, 140, 0.40);

function stat_calc() {
  switch (mode) {
    case "maxi":
      
      if (rawstat >= maxieff4.max) {
        return "100%";
      } else if (rawstat >= maxieff4.min) {
        return (maxieff4.eff * (rawstat - maxieff4.min) ) + 90 + " %";
      } else if (rawstat >= maxieff3.min) {
        return (maxieff3.eff * (rawstat - maxieff3.min) ) + 70 + " %";
      } else if (rawstat >= maxieff2.min) {
        return (maxieff2.eff * (rawstat - maxieff2.min) ) + 40 + " %";
      } else if (rawstat >= maxieff1.min) {
        return (maxieff1.eff * (rawstat - maxieff1.min) ) + " %";
      }
    break;
    
  case "crit":
    
     if (rawstat >= criteff4.max) {
        return "100%";
      } else if (rawstat >= criteff4.min) {
        return (criteff4.eff * (rawstat - criteff4.min) ) + 86 + " %";
      } else if (rawstat >= criteff3.min) {
        return (criteff3.eff * (rawstat - criteff3.min) ) + 68 + " %";
      } else if (rawstat >= criteff2.min) {
        return (criteff2.eff * (rawstat - criteff2.min) ) + 40 + " %";
      } else if (rawstat >= criteff1.min) {
        return (criteff1.eff * (rawstat - criteff1.min) ) + " %";
      }
    break;
  }
}

let total = stat_calc();
