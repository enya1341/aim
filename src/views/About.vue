
// Data用のページ。各日付のデータと週で平均値を出す



<template>
  <div id="data">
    <table>
      <tr>
        <th>日付</th>
        <th>エイム:</th>
        <th>追いエイム:</th>
        <th>フリックエイム:</th>
      </tr>
      <tr v-for="(aimdata,index) in localStorage.getItem('xddgooooood')" :key="index" class=day>
        <th>{{aimdata.day}}</th>
        <td>{{aimdata.aimtime}}</td>
        <td>{{aimdata.aimcount}}</td>
        <td>{{aimdata.aimaccurac}}</td>
        
        <td>{{aimdata.trackingtime}}</td>
        <td>{{aimdata.trackingcount}}</td>
        <td>{{aimdata.trackingaccuracy}}</td>
        
        <td>{{aimdata.flicktime}}</td>
        <td>{{aimdata.flickcount}}</td>
        <td>{{aimdata.flickaccuracy}}</td>
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