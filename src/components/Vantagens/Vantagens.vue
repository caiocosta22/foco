<script>
</script>

<template>
<section class="container">
  <div class="box" id="custos">
    <img src="/icons/custos.png" alt="icone de custos">
    <h4 class="text-lg texto-amarelo">
      <b> Menos Custos</b>
    </h4>
    <p class="text-md">
      Uma solução acessível que reúne tudo o que você precisa em um só lugar: organização, materiais de estudo e suporte emocional, sem pesar no bolso.
    </p>
  </div>
  <div class="box" id="tempo">
    <img src="/icons/tempo.png" alt="icone de custos">
    <h4 class="text-lg texto-amarelo">
      <b>Mais Tempo</b>
    </h4>
    <p class="text-md">
      Automatizamos tarefas como leitura
      de editais e criação de cronogramas,
      para que você dedique seu tempo ao
      que realmente importa: estudar.
    </p>
  </div>
  <div class="box" id="estudo">
    <img src="/icons/estudo.png" alt="icone de custos">
    <h4 class="text-lg texto-amarelo">
      <b>Estudo Organizado</b>
    </h4>
    <p class="text-md">
      Com cronogramas personalizados e
      acompanhamento de desempenho,
      você sabe exatamente onde está e
      o que precisa fazer para se preparar.
    </p>
  </div>
  <div class="box" id="apoio">
    <img src="/icons/apoio.png" alt="icone de custos">
    <h4 class="text-lg texto-amarelo">
      <b>Apoio Completo</b>
    </h4>
    <p class="text-md">
      Além de materiais de estudo e estratégias,
      conte com suporte emocional e feedbacks
      contínuos para se sentir mais confiante e
      preparado.
    </p>
  </div>
</section>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 60px;
  position: relative;
}

img {
  width: 50px;
  height: 50px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#custos {
  border-right: 1px solid var(--amarelo);
  border-bottom: 1px solid var(--amarelo);
}

#custos::after {
  content: "";
  width: 10px;
  background-image: url('/icons/uparrow.svg');
  background-repeat: no-repeat;
  position: absolute;
  top: -10px;
  right: -12.5px;
  padding: 10px;
}

#custos::before {
  content: "";
  width: 10px;
  background-image: url('/icons/uparrow.svg');
  background-repeat: no-repeat;
  position: absolute;
  bottom: -9px;
  left: -12.5px;
  padding: 10px;
  transform: rotate(270deg);
}

#tempo {
  border-left: 1px solid var(--amarelo);
  border-bottom: 1px solid var(--amarelo);;
}

#tempo::after {
  content: "";
  width: 10px;
  background-image: url('/icons/uparrow.svg');
  background-repeat: no-repeat;
  position: absolute;
  bottom: -12.5px;
  right: -12.5px;
  padding: 10px;
  transform: rotate(90deg);
}

#estudo {
  border-right: 1px solid var(--amarelo);
  border-top: 1px solid var(--amarelo);
}

#estudo::after {
  content: "";
  width: 10px;
  background-image: url('/icons/uparrow.svg');
  background-repeat: no-repeat;
  position: absolute;
  bottom: -10px;
  right: -9px;
  padding: 10px;
  transform: rotate(180deg);
}

#apoio {
  border-top: 1px solid var(--amarelo);
  border-left: 1px solid var(--amarelo);
}

@media screen and (max-width:1006px) {
  .box {
    gap: 5px;
    padding: 0px;
  }

  img {
    width: 30px;
    height: 30px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0px 0px 40px 0px;
  }

  #custos {
    border-right: 0px;
    border-bottom: 0px;
  }

  #custos::after {
    display: none;
  }

  #custos::before {
    display: none;
  }

  #tempo {
    border-left: 0px solid var(--amarelo);
    border-bottom: 0px solid var(--amarelo);;
  }

  #tempo::after {
    display: none;
  }

  #estudo {
    border-right: 0px solid var(--amarelo);
    border-top: 0px solid var(--amarelo);
  }

  #estudo::after {
    display: none;
  }

  #apoio {
    border-top: 0px solid var(--amarelo);
    border-left: 0px solid var(--amarelo);
  }
}

@media screen and (max-width:1006px) {
  .text-xl {
    font-size: 3.5rem;
  }
  .text-xlg {
    font-size: 2rem;
  }
  .text-lg {
    font-size: 1.75rem;
  }
  .text-md {
    font-size: 1.25rem;
  }
}

@media screen and (max-width:640px){
  .text-xl {
    font-size: 3rem;
  }
  .text-xlg {
    font-size: 1.75rem;
  }
  .text-lg {
    font-size: 1.5rem;
  }
}

@media screen and (max-width:500px){
  .text-xl {
    font-size: 2rem;
  }
  .text-xlg {
    font-size: 1.5rem;
  }
  .text-lg {
    font-size: 1.25rem;
  }
}

@media screen and (max-width:400px) {
  .text-xl {
    font-size: 2rem;
  }
  .text-xlg {
    font-size: 1.25rem;
  }
  .text-lg {
    font-size: 1rem;
  }
  .text-md {
    font-size: 1rem;
  }
}
</style>
