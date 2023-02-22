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
    <DataTable tableTypeIn="stats" />
    <DataTable tableTypeIn="ac" />
    <DataTable tableTypeIn="hp" />
    <DataTable tableTypeIn="perception" />
    <DataTable tableTypeIn="saves" />
    <DataTable tableTypeIn="skills" />
    <DataTable tableTypeIn="attacks" />
    <DataTable tableTypeIn="damage" />
    <DataTable tableTypeIn="spellAttack" />
    <DataTable tableTypeIn="spellDC" />
    <DataTable tableTypeIn="resistAndWeakness" />
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import localMaps from "../assets/localMaps.json";
import DataTable from "./DataTable";

export default ({
  name: "TableList",
  components: {
    DataTable
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
