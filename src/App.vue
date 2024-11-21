<template>
  <v-app>
    <v-main>
      <OptionSelections />
      <TableResults />
    </v-main>
  </v-app>
</template>

<script>
import OptionSelections from './components/OptionSelections';
import TableResults from './components/TableResults';

export default {
  name: 'App',

  components: {
    OptionSelections,
    TableResults
  },

  data: () => ({
    //
  }),
};
</script>
