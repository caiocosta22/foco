<script>
</script>

<template>
<section class="container">
  <div class="box" id="custos">
    <img src="/icons/custos.png" alt="icone de custos">
    <h4 class="text-lg">
      <b> Menos Custos</b>
    </h4>
    <p class="text-md">
      Uma solução acessível que reúne tudo o que você precisa em um só lugar: organização, materiais de estudo e suporte emocional, sem pesar no bolso.
    </p>
  </div>
  <div class="box" id="tempo">
    <img src="/icons/tempo.png" alt="icone de custos">
    <h4 class="text-lg">
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
    <h4 class="text-lg">
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
    <h4 class="text-lg">
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

</style>

<style scoped>
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

</style>
