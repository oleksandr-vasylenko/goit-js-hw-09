!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3);t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(timerID),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.342834ee.js.map
