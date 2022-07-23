<template>
  <v-container>
    <TableList />
    <MonsterSpecials />
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import TableList from "./TableList";
import MonsterSpecials from "./MonsterSpecials";

export default ({
  name: "Results",
  components: {
    TableList,
    MonsterSpecials
  },
  data: () => ({
    // models
    monsterRoles
  })
})
</script>
