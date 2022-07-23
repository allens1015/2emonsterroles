<template>
  <v-text-field
    :type="type"
    :label="label"
    :value="monsterRoles[property]"
    @input="updateMonsterRoles(property,$event)"
  >
  </v-text-field>
</template>

<script>
import monsterRoles from "../models/monsterRoles.js";

export default {
    name: "inputEntry",
    props: ["type","label","property"],
    data: () => ({
      monsterRoles
    }),
    methods: {
      updateMonsterRoles(property,value) {
        monsterRoles[property] = value
      }
    }
}
</script>
