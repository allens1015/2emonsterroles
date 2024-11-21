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
        <div
          v-show="isFocused(tableTypeIn,i,j) && hasText(tableTypeIn,i,j)"
        >
          <v-label>{{ getFocusedText(tableTypeIn,i,j) }}</v-label>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import localMaps from "../assets/localMaps.json";

export default ({
  name: "DataTable",
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
    hasText(table,i,j) {
      const level = i-1;
      const column = j;
      if(level == monsterRoles.selectedLevel) {
        const selectedCol = localMaps.rolesDataMap[monsterRoles.selectedRole][table];
        const colIndex = selectedCol["index"].indexOf(column);
        if(colIndex != -1 && selectedCol["text"]) {
          const textIndex = selectedCol["text"][colIndex];
          return textIndex != -1 ? true : false; 
        }
      }
      return;
    },
    getFocusedText(table,i,j) {
      const level = i-1;
      const column = j;
      if(level == monsterRoles.selectedLevel && monsterRoles.selectedRole) {
        const selectedCol = localMaps.rolesDataMap[monsterRoles.selectedRole][table];
        const colIndex = selectedCol["index"].indexOf(column);
        if(colIndex != -1 && selectedCol["text"]) {
          const text = selectedCol["text"][colIndex];
          return text;
        }
      }
      return;
    },
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
      if(level == monsterRoles.selectedLevel && localMaps.rolesDataMap[monsterRoles.selectedRole][table]["index"].indexOf(column) != -1)
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
