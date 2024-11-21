<template>
  <v-container>
    <v-btn
      @click="isVisible = !isVisible"
    >
      Toggle Stat Arrays
    </v-btn>
    <TableList v-show="isVisible" />
    <MonsterSpecials />
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import TableList from "./TableList";
import MonsterSpecials from "./MonsterSpecials";

export default ({
  name: "TableResults",
  components: {
    TableList,
    MonsterSpecials
  },
  data: () => ({
    // models
    monsterRoles,
    isVisible: true
  })
})
</script>
