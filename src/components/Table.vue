<template>
  <v-container>
    <h3>Ability Scores</h3>
    <v-row>
      <v-col
        v-for="(header,i) in headers"
        :key="i"
      >
        {{ header }}
      </v-col>
    </v-row>
    <v-row
      v-for="(row,i) in tableData"
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
    tableData: []
  }),
  mounted() {
    // let headers = this.defaultHeaders;
    const tableData = monsterRoles[this.tableType];
    this.tableData = tableData;
    if(tableData[0].length == 4) {
      this.headers.pop();
    }
    if(this.tableType == "spellAttack" || this.tableType == "spellDC") {
      if(tableData[0].length == 3) {
        this.headers.pop();
      }
    }
    else {
      if(tableData[0].length == 3) {
        this.headers.shift();
      }
    }
    if(tableData[0].length == 2) {
      this.headers = ["Maximum","Minimum"]
    }
  },
  methods: {
    getTableData() {
      return monsterRoles[this.tableType];
    }
  }
})
</script>
