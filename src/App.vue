<script setup>
  import { useStore } from "vuex";
  import {Container, Screen, Scroller, Navbar} from "./components";
  import { computed } from "vue";

  const store = useStore();
</script>

<template>
  <Screen>
    <Scroller>
      <Navbar />
      <Container>
        <router-view></router-view>
      </Container>
    </Scroller>
  </Screen>
</template>