<template>
  <router-view/>
</template>

<script>
export default  {

}

</script>



<style lang="scss">
:root {
  --primary: rgba(94, 197, 255);
  --primary-50: rgba(94, 197, 255, 0.5);
  --gray: #B4CDDB;
  --text-gray: #305367;
  --light: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fredoka', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

h1,h2,h3,h4,h5,span,p {
  color: var(--text-gray);
}

body {
  background: var(--light);
}

h2 {
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
}

a {
  color: blue;
  text-decoration: none; /* no underline */
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
</style>
