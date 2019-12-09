export default () => {
    const doc = document.documentElement;
    const dpr = Number(window.devicePixelRatio.toFixed(5)) || 1;
    let rem = doc.clientWidth / 10;

    // 设置data-dpr属性，留作的css hack之用
    doc.setAttribute("data-dpr", dpr.toString());

    doc.style.fontSize = `${rem}px`;

    const i = setInterval(() => {
        if (rem === 0) {
            rem = doc.clientWidth / 10;
            doc.style.fontSize = `${rem}px`;
        } else {
            setTimeout(() => {
                // 避免屏幕宽度值不准确
                if (rem !== doc.clientWidth / 10) {
                    rem = docEl.clientWidth / 10;
                    docEl.style.fontSize = rem + "px";
                } else {
                    clearInterval(i);
                }
            }, 1000);
        }
    }, 500)
}