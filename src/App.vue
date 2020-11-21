<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
/* variables */
:root {
  --min-screen-size: 320;
  --min-screen-size-px: 320px;
  --max-screen-size: 1280;
}
h1 {
  --min-font-size: 50;
  --min-font-size-px: 50px;
  --max-font-size: 90;
}
h2 {
  --min-font-size: 40;
  --min-font-size-px: 40px;
  --max-font-size: 60;
}
h3 {
  --min-font-size: 35;
  --min-font-size-px: 35px;
  --max-font-size: 45;
}
h4 {
  --min-font-size: 21;
  --min-font-size-px: 21px;
  --max-font-size: 31;
}
h5 {
  --min-font-size: 18;
  --min-font-size-px: 18px;
  --max-font-size: 22;
}
p {
  --min-font-size: 14;
  --min-font-size-px: 14px;
  --max-font-size: 18;
}

h1,
h2,
h3,
h4,
h5,
p {
  font-size: calc(
    var(--min-font-size-px) + (var(--max-font-size) - var(--min-font-size)) *
      (100vw - var(--min-screen-size-px)) /
      (var(--max-screen-size) - var(--min-screen-size))
  );
}

li {
  list-style: none;
}
</style>
