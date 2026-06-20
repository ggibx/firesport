<script setup>
//占位组件
</script>

<template>
  <div class="app-container">
  <main class="main-content">
    <router-view/>
  </main>
  
  
  <footer class="tar-bar">
    <router-link to="/sports" class="tab-item" active-class="tab-active">
      <span class="tab-icon">🏃</span>
      <span class="tab-text">运动</span>
    </router-link>
    <router-link to="/food" class="tab-item" active-class="tab-active">
      <span class="tab-icon">🍽️</span>
      <span class="tab-text">饮食</span>
    </router-link>
    <router-link to="/userlist" class="tab-item" active-class="tab-active">
      <span class="tab-icon">👤</span>
      <span class="tab-text">我的</span>
    </router-link>
  </footer>
  </div>
</template>
<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html,body,#app{
  height:100%;
  font-family: -apple-system , BlinkMacSystemFont , 'Segoe UI' , sans-serif;

}

</style>
<style scoped>
.app-container{
  display:flex;
  flex-direction:column;
  height:100vh;
  max-width:460px;
  margin:0 auto;
  background:#f5f5f5;
  position:relative;
  overflow:hidden;
}
.main-content{
  flex:1;
  overflow-y:auto;
  padding-bottom:60px;
}

.tab-bar{
  position:fixed;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  width:100%;
  max-width:460px;
  height:56px;
  display:flex;
  background:#fff;
  z-index:999;
}

.tab-item{
  flex:1;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-decoration:none;
  transition: all 0.3s;
  position:relative;
}
.tab-item.tab-active{
  color:#fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  margin:4px 8px;
  padding: 4px 0;
}
.tab-icon{
  font-size:20px;
  margin-bottom:1px;
}
.tab-text{
  font-size:10px;
}

</style>


