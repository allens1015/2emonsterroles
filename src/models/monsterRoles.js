import monsterSpecials from "../assets/monsterSpecials.json";
import monsterStats from "../assets/monsterStats.json";

class MonsterRoles {
  constructor() {
    this.selectedRole = "";
    this.selectedLevel = 0;
    this.specialList = [];
    this.comboboxContents = [];
    this.distinctTags = [];
    this.stats= monsterStats.stats;
    this.ac= monsterStats.ac;
    this.hp= monsterStats.hp;
    this.perception= monsterStats.perception;
    this.resistAndWeakness= monsterStats.resistAndWeakness;
    this.safeItemLevel= monsterStats.safeItemLevel;
    this.saves= monsterStats.saves;
    this.skills= monsterStats.skills;
    this.spellAttack= monsterStats.spellAttack;
    this.spellDC= monsterStats.spellDC;
    this.attacks= monsterStats.strikeAttack;
    this.damage= monsterStats.strikeDamage;
  }

  getDistinctTags() {
    monsterSpecials.forEach(element => {
      element.tags.forEach(tag => {
        if(this.distinctTags.indexOf(tag) == -1) {
          this.distinctTags.push(tag);
        }
      })
    })
  }
}

const monsterRoles = new MonsterRoles();

export default monsterRoles;