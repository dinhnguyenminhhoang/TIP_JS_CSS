const clickbtn = () => {
    console.log("order");
};
const initApp = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", debounce(clickbtn, 2000));
};
document.addEventListener("DOMContentLoaded", initApp);
const debounce = (fn, delay) => {
    delay = delay || 0;
    let timeId;
    return () => {
        if (timeId) {
            clearTimeout(timeId);
            timeId = null;
        }
        timeId = setTimeout(() => {
            fn();
        }, delay);
    };
};
