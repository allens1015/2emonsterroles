<template>
  <v-container>
    <h3>{{ monsterRoles.tableMap[tableTypeIn] }}</h3>
    <v-row>
      <v-col
        v-for="(header,i) in getTableHeaders(tableTypeIn)"
        :key="i"
      >
        {{ header }}
      </v-col>
    </v-row>
    <v-row
      v-for="(row,i) in getTableData(tableTypeIn)"
      :key="i"
    >
      <v-col
        v-show="(i-1) == monsterRoles.selectedLevel"
        v-for="(col,j) in row"
        :key="j"
      >
        {{ col }}
      </v-col>
    </v-row>

<!-- {{ getTableData(tableTypeIn) }} -->
    <!-- {{ headers }}
    {{ getTableData() }}
    {{ tableType }} -->
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";

export default ({
  name: "Table",
  props: ["tableTypeIn"],
  data: () => ({
    // models
    monsterRoles,
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
    }
  }
})
</script>
