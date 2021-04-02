
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
      <tr v-for="(aimdata,index) in $store.state.aimdatas" :key="index">    //stateに保存されているデータを取得して書き込み。上手くデータを送られてきてない。取得は多分これで出来てるはずだからできてないのは
        <th>{{aimdata[index].day}}</th>
        <td>{{aimdata[index].aimtime}}</td>
        <td>{{aimdata[index].aimcount}}</td>
        <td>{{aimdata[index].aimaccuracy}}</td>
        
        <td>{{aimdata[index].trackingtime}}</td>
        <td>{{aimdata[index].trackingcount}}</td>
        <td>{{aimdata[index].trackingaccuracy}}</td>
        
        <td>{{aimdata[index].flicktime}}</td>
        <td>{{aimdata[index].flickcount}}</td>
        <td>{{aimdata[index].flickaccuracy}}</td>
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