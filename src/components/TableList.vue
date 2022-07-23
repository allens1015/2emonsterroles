<template>
  <v-container>
    <!-- <Table /> -->
    <Table tableTypeIn="stats" />
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
