import { ref } from 'vue'

export function useSelectState(initialIndex: number = 0) {
  // 記錄目前被選中的按鈕索引
  const activeIndex = ref<number>(initialIndex)

  // 點擊時更新索引的函式
  const selectButton = (index: number) => {
    activeIndex.value = index
  }

  return {
    activeIndex,
    selectButton
  }
}