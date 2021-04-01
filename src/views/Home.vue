<template>
  <div class="home">
    <h1>kovaakでの日記帳。毎日やったタイムと回数と精度を記録しましょう</h1>
    <h3>エイム</h3>
    <label for="aim-time">time:</label>
    <input type="text" name="aim-time" v-model="aimtime" />
    <label for="aim-count">count:</label>
    <input type="text" name="aim-count" v-model="aimcount" />
    <label for="aim-accuracy">accuracy:</label>
    <input type="text" name="aim-accuracy" v-model="aimaccuracy" />
    <h3>追いエイム</h3>
    <label for="tracking-time">time:</label>
    <input type="text" name="tracking-time" v-model="trackingtime" />
    <label for="tracking-count">count:</label>
    <input type="text" name="tracking-count" v-model="trackingcount" />
    <label for="tracking-accuracy">accuracy:</label>
    <input type="text" name="tracking-accuracy"    v-model="trackingaccuracy" />
    <h3>フリックエイム</h3>
    <label for="flick-time">time:</label>
    <input type="text" name="flick-time" v-model="flicktime" />
    <label for="flick-count">count:</label>
    <input type="text" name="flick-count" v-model="flickcount" />
    <label for="flick-accuracy">accuracy:</label>
    <input type="text" name="flick-accuracy" v-model="flickaccuracy" />
    <table>
      <tr>
        <th>日付</th>
        <th>記録の種類</th>
        <th>エイム</th>
        <th>追いエイム</th>
        <th>フリックエイム</th>
      </tr>
      <tr>
        <th>{{day}}</th>
        <th>タイム</th>
        <th>{{aimtime}}</th>
        <th>{{trackingtime}}</th>
        <th>{{flicktime}}</th>
      </tr>
      <tr>
        <th></th>
        <th>回数</th>
        <th>{{aimcount}}回</th>
        <th>{{trackingcount}}回</th>
        <th>{{flickcount}}回</th>
      </tr>
      <tr>
        <th></th>
        <th>精度</th>
        <th>{{aimaccuracy}}%</th>
        <th>{{trackingaccuracy}}%</th>
        <th>{{flickaccuracy}}%</th>
      </tr>      
    </table>
    <button @click="value">日記送信</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data(){
    
    return{
      day:moment().format("YYYY-MM-DD"),
      aimdata:[{
      aimtime:"",
      aimcount:"",
      aimaccuracy:"",
      trackingtime:"",
      trackingcount:"",
      trackingaccuracy:"",
      flicktime:"",
      flickcount:"",
      flickaccuracy:"",
      
      }]

    };
    
  },
  
  value() {
  // ;wep storage APIでの取得。これをVuex-persistedstate用に変える
  this.$store.commit(this.day[]),
  this.aimdata.forEach(function(data,index){
      if(this.day!=$store.state.day){
        this.$store.state.{{this.day}}.commit.push(data)
        
      }

    });
    return{
    aimdata:[{
      aimtime:"",
      aimcount:"",
      aimaccuracy:"",
      trackingtime:"",
      trackingcount:"",
      trackingaccuracy:"",
      flicktime:"",
      flickcount:"",
      flickaccuracy:"",
      
    }]
  }

  }
}
</script>
