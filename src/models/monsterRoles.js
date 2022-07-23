import monsterSpecials from "../assets/monsterSpecials.json";

class MonsterRoles {
  constructor() {
    this.selectedRole = "";
    this.selectedLevel = 0;
    this.specialList = [];
    this.comboboxContents = [];
    this.distinctTags = [];
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