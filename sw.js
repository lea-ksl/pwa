self.addEventListener("fetch", event => 
    { console.log(event.request.url); }
);

window.addEventListener("beforeinstallprompt", e => { 
    e.preventDefault() ; 
    deferredPrompt = e ;
    btn.addEventListener("click", e =>{ 
        deferredPrompt.promptprompt() ; 
    }) ; 
});
