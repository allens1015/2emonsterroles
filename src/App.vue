<template>
  <v-app>
    <v-main>
      <OptionSelections />
      <Results />
    </v-main>
  </v-app>
</template>

<script>
import OptionSelections from './components/OptionSelections';
import Results from './components/Results';

export default {
  name: 'App',

  components: {
    OptionSelections,
    Results
  },

  data: () => ({
    //
  }),
};
</script>
