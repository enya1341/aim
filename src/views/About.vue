
// Data用のページ。各日付のデータと週で平均値を出す



<template>
  <div id="databox">
    <h1>kovaakでの日記帳。毎日やったタイムと回数と精度を記録しましょう</h1>
    <table>
      <tr>
        <th>日付</th>
        <th>エイム:</th>
        <th>追いエイム:</th>
        <th>フリックエイム:</th>
      </tr>
      <tr v-for="(aimdata,index) in this.$store.state.aimdatas" :key="index">    //stateに保存されているデータを取得して書き込み。上手くデータを送られてきてない。取得は多分これで出来てるはずだからできてないのは
        <th>{{aimdata.day}}</th>
        <td>{{aimdata.aimtime}}</td>
        <td>{{aimdata.aimcount}}</td>
        <td>{{aimdata.aimaccuracy}}</td>
        
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