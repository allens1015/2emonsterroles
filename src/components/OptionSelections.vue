<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          :value="monsterRoles.selectedLevel"
          type="number"
          label="Level"
          min="-1"
          max="24"
          v-model="monsterRoles.selectedLevel"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          v-model="monsterRoles.selectedRole"
          :items="possibleRoles"
          label="Role"
        ></v-select>
      </v-col>
      <v-col>
        <v-combobox
          v-model="monsterRoles.comboboxContents"
          :items="monsterRoles.distinctTags"
          label="Select Special Tags"
          multiple
          clearable
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import monsterSpecials from "../assets/monsterSpecials.json";
// import InputEntry from "./InputEntry";

export default ({
  name: "OptionSelections",  
  // components: { InputEntry },
  mounted() {
    monsterRoles.getDistinctTags()
  },
  data: () => ({
    // models
    monsterRoles,
    monsterSpecials,
    possibleRoles: ["","Artillery","4e Brute","Controller","Lurker","Minion","Skirmisher","Soldier","2e Brute","Magical Striker","Skill Paragon","Skirmisher","Sniper","Soldier","Spellcaster"]
  })
})
</script>
