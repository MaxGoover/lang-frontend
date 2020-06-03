<template>
  <div>
    <!--Верхнее меню-->
    <toolbar/>

    <!--Левое меню-->
    <drawer/>
  </div>
</template>

<script>
const Drawer = () => import('../menu/drawer/Drawer')
const Toolbar = () => import('../menu/toolbar/Toolbar')

export default {
  name: 'Main',
  components: {
    Drawer,
    Toolbar
  }
}
</script>

<style scoped>

</style>
