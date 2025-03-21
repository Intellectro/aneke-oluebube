<script setup>
  import {Container, Screen, Scroller} from "./components";
</script>

<template>
  <Screen>
    <Scroller>
      <Container>
        <router-view></router-view>
      </Container>
    </Scroller>
  </Screen>
</template>