function initHeader(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  
  el.outerHTML = `
  <header class="header" id="header">
    <div class="header__inner">
      <div class="header__left">
        <a href="#" class="header__logo" id="header-logo">
          <img src="logos/logo-noping-dark.svg" alt="NoPing" class="header__logo-noping">
        </a>
        <nav class="header__nav-left" id="header-nav">
          <a href="#" class="header__nav-link on">JOGOS</a>
          <a href="#" class="header__nav-link highlight-pulse">PREÇOS</a>
          <a href="#" class="header__nav-link">DOWNLOAD</a>
          <a href="#" class="header__nav-link">AFILIADOS</a>
          <a href="#" class="header__nav-link">SUPORTE</a>
          <a href="#" class="header__nav-link">BLOG</a>
        </nav>
      </div>
      <div class="header__right">
        <button class="header__lang" id="lang-toggle">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/br.svg" alt="BR" style="width:16px; height:16px; border-radius:50%; object-fit:cover;">
          <span>PT</span>
          <span>▸</span>
        </button>
        <a href="#" class="header__nav-link">LOGIN</a>
        <a href="#" class="header__cta-btn">TESTE GRÁTIS</a>
      </div>
    </div>
  </header>
  `;
}
