<template>
  <v-container>
    <v-card
      v-if="getHelperText()"
    >
      <v-card-text>
        <p
          v-for="(text,i) in getHelperText()"
          :key="i"
        >
          {{ text }}
        </p>
      </v-card-text>
    </v-card>
    <!-- <Table /> -->
    <Table tableTypeIn="stats" />
    <Table tableTypeIn="ac" />
    <Table tableTypeIn="hp" />
    <Table tableTypeIn="perception" />
    <Table tableTypeIn="saves" />
    <Table tableTypeIn="skills" />
    <Table tableTypeIn="attacks" />
    <Table tableTypeIn="damage" />
    <Table tableTypeIn="spellAttack" />
    <Table tableTypeIn="spellDC" />
    <Table tableTypeIn="resistAndWeakness" />
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import localMaps from "../assets/localMaps.json";
import Table from "./Table";

export default ({
  name: "TableList",
  components: {
    Table
  },
  data: () => ({
    // models
    monsterRoles,
    localMaps
  }),
  methods: {
    getHelperText() {
      if(monsterRoles.selectedRole) {
        return localMaps.rolesDataMap[monsterRoles.selectedRole].text
      }
      return;
    }
  }
})
</script>
