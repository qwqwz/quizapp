<template>
  <router-view/>
</template>

<script>
export default  {

}

</script>



<style lang="scss">
:root {
  --primary: #5EC5FF;
  --primary-50: #5EC5FF50;
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

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
</style>
