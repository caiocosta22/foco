<script setup>
import { ref } from "vue";

</script>

<template>
<section class="footer">
  <img src="/images/logofooter.svg" alt="Logo Foco" class="logo">
  <ul>
    <li>
      <p class="text-md">
        <b>Entre em contato</b>
      </p>
      <p class="text-md footer-color">
        +555 85 91234-5678
      </p>
      <p class="text-md footer-color">
        email@email.com
      </p>
    </li>
  </ul>
  <ul>
    <li>
    </li>
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
  display: flex;
  gap: 20px;
  text-align: right;
  grid-template-columns: 1fr;
  flex-direction: column;
}

.icones img {
  width: 168px;
  align-self: flex-end;
}

.footer-color {
  color: #E5CAFF;
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
  .footer {
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .icones {
    text-align: left;
  }
  .icones img {
    align-self: flex-start;
  }
  .logo {
    align-self: center;
  }
}
</style>
