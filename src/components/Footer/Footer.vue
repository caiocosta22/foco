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
        <img src="/icons/redes.png" alt="redes sociais" class="redes">
        <p class="legenda">
          © 2024 Universidade Federal do Ceará - Curso de Design <br> Feito por Luciana Vanderley e Caio Costa
        </p>
      </div>
    </li>
  </ul>
</section>
<section class="footer-mobile">
  <img src="/images/logofooter.svg" alt="Logo Foco" class="logo">
  <div class="footer-mobile-between">
    <div>
      <p class="text-md">
        <b>Entre em contato</b>
      </p>
      <p class="text-md footer-color">
        +555 85 91234-5678
      </p>
      <p class="text-md footer-color">
        email@email.com
      </p>
    </div>
    <div class="icones">
      <img src="/icons/redes.png" alt="redes sociais" class="redes">
      <p style="font-weight: 200;" class="text-sm">
        Feito por Luciana <br>Vanderley e Caio Costa
      </p>
    </div>
  </div>
  <p class="legenda text-sm">
    © 2024 Universidade Federal do Ceará - Curso de Design
  </p>
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

.footer-mobile {
  padding:20px 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--roxo-medio);
  width: 100%;
  border: 1px solid red;
}

.footer-mobile-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

@media screen and (min-width:1006px) {
  .footer-mobile {
    display: none
  }
  .mobile {
    display: none;
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
    font-size: 1rem;
  }
  .text-sm {
    font-size: 0.8rem;
  }
  .footer {
    display: none;
  }
  .logo {
    max-width: 180px;
    margin: 40px auto;
  }
  .icones {
    gap: 10px;
    margin-bottom: 40px;
  }
  .legenda {
    margin: 0 auto;
    text-align: center;
  }
  .icones img {
    width: 120px;
    align-self: flex-end;
  }
}
</style>
