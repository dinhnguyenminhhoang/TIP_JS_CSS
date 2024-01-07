const clickbtn = () => {
    console.log("order");
};
const initApp = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", throttle(clickbtn, 2000));
};
document.addEventListener("DOMContentLoaded", initApp);
const throttle = (fn, delay) => {
    delay = delay || 0;
    let last = 0;
    return () => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        fn();
    };
};
