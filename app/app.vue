<template>
  <div class="page_bg">
    <!-- 標題區塊 -->
    <div id="titleElement" class="text_common text_box">
      Tailwind CSS 載入成功！
    </div>

    <!-- 🎯 獨立的按鈕群組容器（使用 ID 讓 TS 去計算寬度並連動尺寸） -->
    <div id="selectContainer" class="select_common">
      <button 
        v-for="(item, index) in ['用戶登入', '商家登入', '新用戶註冊']" 
        :key="index"
        @click="selectButton(index)" 
        :class="activeIndex === index ? 'select' : 'no_select'"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 分別對標題與按鈕容器進行動態尺寸連動
  useTextResize('titleElement');
  useTextResize('selectContainer');
  
  const { activeIndex, selectButton } = useSelectState(0);
</script>