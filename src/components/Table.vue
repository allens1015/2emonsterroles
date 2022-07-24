<template>
  <v-container>
    <h3 class="stat-table-header">{{ localMaps.monsterStatsMap[tableTypeIn] }}</h3>
    <v-row
      v-for="(row,i) in getTableData(tableTypeIn)"
      :key="i"
    >
      <v-col
        v-show="(i-1) == monsterRoles.selectedLevel"
        v-for="(col,j) in row"
        :key="j"
        :class="{ focus: isFocused(tableTypeIn,i,j)}"
        class="stat-table-column"
      >
        {{ processColumn(col) }}
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import localMaps from "../assets/localMaps.json";

export default ({
  name: "Table",
  props: ["tableTypeIn"],
  data: () => ({
    // models
    monsterRoles,
    localMaps,
    tableType: "stats",
    tableData: [],
    isFocusedArray: []
  }),
  methods: {
    getTableData(prop) {
      return monsterRoles[prop];
    },
    processColumn(col) {
      if(col.max && col.min) {
        if(col.max == col.min) {
          return col.max;
        }
        return `${col.min}-${col.max}`;
      }
      if(col.stringDamage) {
        return col.stringDamage
      }
      return col;
    },
    isFocused(table,i,j) {
      const level = i-1;
      const column = j;
      if(!monsterRoles.selectedRole) {
        return;
      }
      if(table == "resistAndWeakness") {
        return;
      }
      if(level == monsterRoles.selectedLevel && localMaps.rolesDataMap[monsterRoles.selectedRole][table] == column)
        return true;
      return;
    }
  }
})
</script>

<style scoped>
  .focus {
    color:blue;
    font-size: 1.5em;
    font-weight: bold;
  }
  .stat-table-header {
    margin-bottom: 0.5em;
  }
</style>
