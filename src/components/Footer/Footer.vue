<script setup>
import { ref } from "vue";

</script>

<template>
<section class="footer">
  <img src="/images/logofooter.svg" alt="Logo Foco">
  <ul>
    <li>
      <p class="text-md">
        <b>Entre em contato</b>
      </p>
      <p class="text-md">
        +555 85 91234-5678
      </p>
      <p class="text-md">
        email@email.com
      </p>
    </li>
  </ul>
  <ul>
    <li>
      <div class="icones">
        <img src="/icons/redes.png" alt="redes sociais">
        <p class="legenda">
          © 2024 Universidade Federal do Ceará - Curso de Design <br> Feito por Luciana Vanderley e Caio Costa
        </p>
      </div>
    </li>
  </ul>
</section>
</template>

<style scoped>
.footer {
  padding: 20px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--roxo-medio);
}

ul {
  display: flex;
  gap: 40px;
  text-align: center;
}

b {
  color: var(--amarelo)
}

.legenda {
  font-weight: 200;
  font-size: 1rem;
}

.icones {
  display: grid;
  gap: 20px;
  text-align: right;
}
</style>
