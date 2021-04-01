
// Data用のページ。各日付のデータと週で平均値を出す



<template>
  <div id="data">
    <table>
      <tr v-for="(aimdata,index) in localStorage.getItem('xddgooooood')" :key="index">
        <th></th>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  
  data() {
    return {

    };
  },
};
</script>

<style>

</style>