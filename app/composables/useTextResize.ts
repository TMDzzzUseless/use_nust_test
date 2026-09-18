export function useTextResize(elementId: string, maxSize: number = 5, scaleFactor: number = 0.02) {
    const adjustFontSize = (): void => {
        const textElement = document.getElementById(elementId);
        if (!textElement) return;

        const containerWidth: number = textElement.clientWidth;
        let fontSize: number = (containerWidth * scaleFactor);
        fontSize = Math.min(fontSize, maxSize);

        // 1. 設定文字大小
        textElement.style.fontSize = `${fontSize}rem`;

        // 2. 🎯 讓圓角與間距跟著字體大小動態連動（以 fontSize 比例計算）
        textElement.style.setProperty('--dynamic_radius', `${fontSize* 0.5}rem`);
        textElement.style.setProperty('--dynamic_padding', `${fontSize * 0.25}rem ${fontSize * 0.25}rem`);
        textElement.style.setProperty('--dynamic_gap', `${fontSize * 0.25}rem`);
        textElement.style.setProperty('--dynamic_border', `${fontSize * 0.1}rem`);
    };

    onMounted(() => {
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', adjustFontSize);
    });
}