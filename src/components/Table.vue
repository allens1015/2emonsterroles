<template>
  <v-container>
    Table!
    <TableRow />
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import TableRow from "./TableRow";

export default ({
  name: "Table",
  components: {
    TableRow
  },
  data: () => ({
    // models
    monsterRoles
  })
})
</script>
