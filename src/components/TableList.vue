<template>
  <v-container>
    <!-- <Table /> -->
    <Table tableTypeIn="stats" />
    <Table tableTypeIn="ac" />
    <Table tableTypeIn="hp" />
    <Table tableTypeIn="perception" />
    <Table tableTypeIn="saves" />
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import Table from "./Table";

export default ({
  name: "TableList",
  components: {
    Table
  },
  data: () => ({
    // models
    monsterRoles
  })
})
</script>
