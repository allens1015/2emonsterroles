<template>
  <v-container>
    <h3>{{ localMaps.monsterStatsMap[tableTypeIn] }}</h3>
    <!-- <v-row>
      <v-col
        v-for="(header,i) in getTableHeaders(tableTypeIn)"
        :key="i"
      >
        {{ header }}
      </v-col>
    </v-row> -->
    <v-row
      v-for="(row,i) in getTableData(tableTypeIn)"
      :key="i"
    >
      <v-col
        v-show="(i-1) == monsterRoles.selectedLevel"
        v-for="(col,j) in row"
        :key="j"
      >
        {{ processColumn(col) }}
      </v-col>
    </v-row>
    <v-divider></v-divider>

<!-- {{ getTableData(tableTypeIn) }} -->
    <!-- {{ headers }}
    {{ getTableData() }}
    {{ tableType }} -->
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
    headers: ["Extreme","High","Moderate","Low","Terrible"],
    defaultHeaders: ["Extreme","High","Moderate","Low","Terrible"],
    tableData: []
  }),
  methods: {
    getTableHeaders(prop) {
      const tableData = monsterRoles[prop];
      if(tableData[0].length == 4) {
        return ["Extreme","High","Moderate","Low"]
      }
      if(prop == "spellAttack" || prop == "spellDC") {
        if(tableData[0].length == 3) {
          return ["Extreme","High","Moderate"]
        }
      }
      else {
        if(tableData[0].length == 3) {
          return ["High","Moderate","Low"]
        }
      }
      if(tableData[0].length == 2) {
        return ["Maximum","Minimum"]
      }
      return this.defaultHeaders;
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
    }
  }
})
</script>
