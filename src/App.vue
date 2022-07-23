<template>
  <v-app>
    <v-main>
      <OptionSelections />
      <MonsterSpecials />
      <Table />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import MonsterSpecials from './components/MonsterSpecials';
import OptionSelections from './components/OptionSelections';
import Table from './components/Table';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    MonsterSpecials,
    OptionSelections,
    Table
  },

  data: () => ({
    //
  }),
};
</script>
