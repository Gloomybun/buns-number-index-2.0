class Skills {
  constructor(damage, cooldown, casttime, tier) {
  this.damage = damage;
  this.cooldown = cooldown;
  this.casttime = casttime;
  this.tier = tier;
  }
}

// damage is total ideal damage as a percentage, might not actually get that damage due to not hitting everything bc hitboxes suck
// cooldown is base cooldown and doesnt account for skill traits that extend or decreae them
// skill traits arent included at all actually, including the damage and speed and whatnot
// boo skill traits making my life harder


//note that since tiers are also expressed as numbers:
// 0 = special tier ie auras or wedding skills and stuff
// 1 = active skills
// 2 = tenacity skills
// 3 = strength skills 
// 4 = bravery skills 
// 5 = hyperactive skills
// 6 = master skills 

//lu and ciel's combination skills assume max combination gauge when calculating damage

//base luciel
const FlickShot = new Skills(7374, 12, 0, 3);
const Stomp = new Skills(2048, 6, 0, 2);
const EvilClaw = new Skills(2740, 6, 0, 2);
const NetherShredder = new Skills(13086, 20, 0, 4);
const AuraOfPunishment = new Skills(0, 10, 0, 0);
const HelpingHand = new Skills(0, 30, 0, 1);
const HuntingPreyLu = new Skills(1452, 6, 0, 1);
const HuntingPreyCiel = new Skills(992, 6, 0, 1);
const SoulInfest = new Skills(10837.6, 20, 4);

//chiliarch
const HelpingHand = new Skills();
const HelpingHand = new Skills();
const HelpingHand = new Skills();
const HelpingHand = new Skills();
const HelpingHand = new Skills();
const HelpingHand = new Skills();

