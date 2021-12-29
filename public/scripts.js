
  function onOff() {
    document
        .querySelector("#modal")
        .classList /* essa classe possuí a funcionalidade toogle que é "tirar e colocar"*/
        .toggle("hide")


    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
      .querySelector("#modal")
      .classList
      .toggle("addScroll")
  }
  /*document
        /*.querySelector("button.fat") /*procure o botão fat -> na linha debaixo adicione o evento link*/
       /* .addEventListener("click", onoff)/*sem parenteses, pois segura a função até clicar, se não vai rodar a função na hora*/
       