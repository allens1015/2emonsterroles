<template>
  <v-container>
    <h3>{{ selectedSpecials.length }} Results</h3>
    <v-list class="special-list">
      <v-list-item
        v-for="(item,i) in selectedSpecials"
        :key="i"
      >
        <v-card
          class="special-result-card"
        >
          <v-card-text>
            <div
              v-for="(text,j) in item.content"
              :key="j"
            >
              <h2>{{ text.name }} - {{ item.source }} - {{ text.action }}</h2>
              <p>{{ text.text }}</p>
            </div>
            <div>
              <v-row
                dense
              >
                <v-col
                  v-for="(tag,j) in item.tags"
                  :key="j"
                >
                <span
                  :class="{ bold: isTagSelected(tag)}"
                >{{ tag }}</span>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          
        </v-card>
      </v-list-item>
    </v-list>
    <!-- {{ monsterRoles.comboboxContents }} -->
  </v-container>
</template>

<script>
import monsterRoles from "../models/monsterRoles";
import monsterSpecials from "../assets/monsterSpecials.json";

export default ({
  name: "MonsterSpecials",
  data: () => ({
    // models
    monsterRoles,
    monsterSpecials
  }),
  methods: {
    isTagSelected(tag) {
      return monsterRoles.comboboxContents.includes(tag)
    }
  },
  computed: {
    selectedSpecials() {
      const filteredItems = [];
      monsterSpecials.forEach(special => {
        if(monsterRoles.comboboxContents.every(selectedTag => special.tags.includes(selectedTag)) && special.tags.length > 0) {
          special.tags = special.tags.sort();
          filteredItems.push(special);
        }
      })

      
      return filteredItems;
    }
  }
})
</script>

<style scoped>
  .special-list {
    max-height: 70vh;
    overflow-y: scroll;
  }
  .special-result-card {
    margin-bottom: 1em;
  }
  .bold {
    color:blue;
    font-size: 1.5em;
    font-weight: bold;
  }
</style>
