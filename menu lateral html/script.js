const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  pesquisabtn = body.querySelector(".pesquisa-box"),
  modeswitch = body.querySelector(".toggle-switch"),
  modetext = body.querySelector(".mode-text");

  toggle .addEventListener("click", ()=> {
    sidebar.classList.toggle("close");
  });
  pesquisabtn.addEventListener("click", ()=> {
    sidebar.classList.remove("close");
  });

  modeswitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modetext.innerText = "Light mode "
    }else{
        modetext.innerText = "Dark mode "
    }
  });