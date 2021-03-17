<template>
  <div>
    <div v-if="Status">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <p v-for="(item, i) in Dados.results" :key="i">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class index extends Vue {
  created() {
    this.$store.dispatch("BUSCA_DADOS");
  }

  private get Status() {
    return this.$store.getters["LOADING"];
  }

  private get Erro() {
    return this.$store.getters["ERRO"];
  }

  private get Dados() {
    return this.$store.getters["DADOS_POKEMON"];
  }
}
</script>

<style></style>
