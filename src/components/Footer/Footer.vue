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
          <p class="legenda text-right">
            Feito por Luciana <br class="mobile"> Vanderley e Caio Costa
          </p>
        </div>
      </li>
    </ul>
  </div>
  <p class="legenda legenda-final">
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
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--roxo-medio);
  width: 100%;
}

.footer-mobile-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    font-size: 1.25rem;
  }
  .footer {
    display: none;
  }
  .icones {
    text-align: center;
  }
  .icones img {
    align-self: center;
  }
  .logo {
    align-self: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    margin-top:20px;
  }
  .legenda {
    font-size: 0.8rem;
  }
  .legenda br {
    display: none;
  }
  .text-md {
    font-size: 1rem;
  }
  .mobile {
    display:block !important;
  }
  .icones {
    gap: 5px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
@media screen and (max-width:769px) {
  .logo {
    max-width: 100%;
  }
  .legenda-final {
    text-align: center;
  }
}
@media screen and (max-width:380px) {
  .icones {
    gap: 5px;
    margin-left: 10px;
  }
  .icones img {
    width: 80%;
  }
  .text-md {
    font-size: 0.9rem;
  }
}
</style>
