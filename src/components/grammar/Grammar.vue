<template>
    <div>
        <!--Верхнее меню-->
        <toolbar/>
    </div>
</template>

<script>
const Toolbar = () => import('../../components/toolbar/Toolbar')

export default {
  name: 'Grammar',
  components: { Toolbar }
}
</script>

<style scoped>

</style>
