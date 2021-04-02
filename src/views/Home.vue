<template>
  <div id="home">
    <h1>kovaakでの日記帳。毎日やったタイムと回数と精度を記録しましょう</h1>
    <h3>エイム</h3>
    <label for="aim-time">time:</label>
    <input type="text" name="aim-time" v-model="aimdata[0].aimtime" />
    <label for="aim-count">count:</label>
    <input type="text" name="aim-count" v-model="aimdata[0].aimcount" />
    <label for="aim-accuracy">accuracy:</label>
    <input type="text" name="aim-accuracy" v-model="aimdata[0].aimaccuracy" />
    <h3>追いエイム</h3>
    <label for="tracking-time">time:</label>
    <input type="text" name="tracking-time" v-model="aimdata[0].trackingtime" />
    <label for="tracking-count">count:</label>
    <input type="text" name="tracking-count" v-model="aimdata[0].trackingcount" />
    <label for="tracking-accuracy">accuracy:</label>
    <input type="text" name="tracking-accuracy"    v-model="aimdata[0].trackingaccuracy" />
    <h3>フリックエイム</h3>
    <label for="flick-time">time:</label>
    <input type="text" name="flick-time" v-model="aimdata[0].flicktime" />
    <label for="flick-count">count:</label>
    <input type="text" name="flick-count" v-model="aimdata[0].flickcount" />
    <label for="flick-accuracy">accuracy:</label>
    <input type="text" name="flick-accuracy" v-model="aimdata[0].flickaccuracy" />
    <table>
      <tr>
        <th>日付</th>
        <th>記録の種類</th>
        <th>エイム</th>
        <th>追いエイム</th>
        <th>フリックエイム</th>
      </tr>
      <tr>
        <th>{{aimdata[0].day}}</th>
        <th>タイム</th>
        <th>{{aimdata[0].aimtime}}</th>
        <th>{{aimdata[0].trackingtime}}</th>
        <th>{{aimdata[0].flicktime}}</th>
      </tr>
      <tr>
        <th></th>
        <th>回数</th>
        <th>{{aimdata[0].aimcount}}回</th>
        <th>{{aimdata[0].trackingcount}}回</th>
        <th>{{aimdata[0].flickcount}}回</th>
      </tr>
      <tr>
        <th></th>
        <th>精度</th>
        <th>{{aimdata[0].aimaccuracy}}%</th>
        <th>{{aimdata[0].trackingaccuracy}}%</th>
        <th>{{aimdata[0].flickaccuracy}}%</th>
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
      day:moment().format("YYYY-MM-DD")
      }]

    };
    
  },
  
  value() {
  let aimdatabox=[];   // 送信用配列用意
  this.aimdata[0].forEach(function(data){
        aimdatabox.push(data)   // 送信用配列にデータを挿入（ここで連想配列としてそのまま代入されているか不明）

    });
  if(this.day!=this.$store.state.aimdatas[this.day]){   //今日の日付と同じ日付のデータがあるかどうかの確認。複数あった場合全部と比較してくれるのかな？
      this.$store.commit('aimMutation',aimdatabox)    //ここでcommitしてデータを送る。現状送れてなさそう？
    }
    return{
    aimdata:[{    //ここでデータを削除。でもinputにデータ入ったままだからここでリロードさせてinput消す？このあとデータが送信されたか確認するためのウィンドウを表示させたいし
      aimtime:"",
      aimcount:"",
      aimaccuracy:"",
      trackingtime:"",
      trackingcount:"",
      trackingaccuracy:"",
      flicktime:"",
      flickcount:"",
      flickaccuracy:""
    }]
  }

  }
}
</script>
