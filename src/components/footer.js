export function initFooter(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  
  el.outerHTML = `
  <section class="section-five">
    <footer class="footer" id="footer">
      <div class="container">
        
        <div class="footer__certificates">
          <div class="footer__certificates-left">
            <span class="footer__certificates-text">Certificado por</span>
            <div class="footer__certificates-logos">
              <img src="images/footer/svg_microsoft_certified.svg" alt="Microsoft Certified" class="footer__cert-logo" style="height: 56px;">
              <img src="images/footer/svg_digicert.svg" alt="DigiCert Secured" class="footer__cert-logo" style="height: 44px;">
              <img src="images/footer/svg_googlecloud.svg" alt="Google Cloud" class="footer__cert-logo" style="height: 32px;">
            </div>
          </div>
          <div class="footer__certificates-right">
            <a href="#" class="footer__store-btn"><img src="images/footer/app-store.svg" alt="App Store"></a>
            <a href="#" class="footer__store-btn"><img src="images/footer/google-play.svg" alt="Google Play"></a>
          </div>
        </div>
        <div class="footer__certificates-divider"></div>

        <div class="footer__top">
          <div class="footer__brand">
            <div class="footer__brand-logos">
              <img src="logos/logo-noping-dark.svg" alt="NoPing" class="footer__brand-logo">
            </div>
            
            <div class="footer__promo">
              <h3 class="footer__promo-title">Pronto pra tirar o lag?</h3>
              <p class="footer__promo-text">Jogue com ping baixo em +3.000 jogos. Rota otimizada por IA, Boost FPS automático e Multi Conexão por 5 rotas. Teste 1 dia grátis, sem cartão.</p>
              
              <div class="footer__promo-actions">
                <a href="#" class="footer__promo-btn">COMEÇAR 1 DIA GRÁTIS (SEM CARTÃO)</a>
                <div class="footer__promo-rating">
                  <div class="footer__promo-stars">★★★★★</div>
                  <p class="footer__promo-rating-text"><strong>4,9/5</strong> em +20.000 avaliações • +3M players • 10 anos no mercado</p>
                </div>
              </div>
            </div>
            
            <div class="footer__guides">
              <h4 class="footer__guides-title">GUIA DE PERFORMANCE ONLINE</h4>
              <div class="footer__guides-list">
                <a href="#">Guia Completo para Tirar o Lag em Jogos Online: Dicas e Soluções</a>
                <a href="#">Guia Completo para Entender e Acabar com o Jitter em Jogos: Dicas e Soluções</a>
                <a href="#">Estabilidade de Conexão em Jogos Competitivos: Por Que Cada Ms Conta</a>
                <a href="#">Como Melhorar o Ping e a Experiência de Jogo: Guia Prático</a>
                <a href="#">Dicas para Corrigir o Packet Loss e Melhorar Seu Desempenho em Jogos Online</a>
              </div>
            </div>
          </div>
          <div class="footer__column">
          <h4 class="footer__column-title">NOPING</h4>
          <a href="#" class="footer__link">Servidores</a>
          <a href="#" class="footer__link">Jogos</a>
          <a href="#" class="footer__link">Preços</a>
          <a href="#" class="footer__link">Download</a>
          <a href="#" class="footer__link">Teste Grátis</a>
          <a href="#" class="footer__link">Trabalhe Conosco</a>
          <a href="#" class="footer__link">Programa de Teste Beta</a>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">TECNOLOGIA</h4>
          <a href="#" class="footer__link">Conexão MultiPath</a>
          <a href="#" class="footer__link">Multi Internets</a>
          <a href="#" class="footer__link">Boost FPS</a>
          <a href="#" class="footer__link">Redução de Ping</a>
          <a href="#" class="footer__link">Correção de Perda de Pacotes</a>
          <a href="#" class="footer__link">Correção de Desconexão</a>
          <a href="#" class="footer__link">Correção de Picos de Ping</a>
          <a href="#" class="footer__link">Melhoria de Velocidade do Teclado</a>
          <a href="#" class="footer__link">Estatísticas Abrangentes</a>
          <a href="#" class="footer__link">Monitoramento de Conexão</a>
          <a href="#" class="footer__link">Troca Manual de Servidor</a>
          <a href="#" class="footer__link">IP Block</a>
          <a href="#" class="footer__link">Otimização de DNS</a>
          <a href="#" class="footer__link">AudioPad</a>
          <a href="#" class="footer__link">Green Aim</a>
          <a href="#" class="footer__link">Pro Settings</a>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">AJUDA</h4>
          <a href="#" class="footer__link">Tutorial Windows</a>
          <a href="#" class="footer__link">Tutorial Console</a>
          <a href="#" class="footer__link">Tutorial IOS</a>
          <a href="#" class="footer__link">Tutorial Android</a>
          <a href="#" class="footer__link">Centro de Suporte</a>
          <a href="#" class="footer__link">Contato B2B</a>
          <a href="#" class="footer__link">Política de Privacidade</a>
          <a href="#" class="footer__link">Termos de Uso</a>
          <a href="#" class="footer__link">Afiliados</a>
          <a href="#" class="footer__link">FAQ</a>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">BLOG</h4>
          <a href="#" class="footer__link">Como Aumentar o FPS</a>
          <a href="#" class="footer__link">Como Tirar o Lag</a>
          <a href="#" class="footer__link">Dicas para Gamers</a>
          <a href="#" class="footer__link">Notícias NoPing</a>
          <a href="#" class="footer__link">Atualizações do App</a>
        </div>
        <div class="footer__column">
          <h4 class="footer__column-title">FEEDBACKS</h4>
          <a href="#" class="footer__link">Avalie Nossa Plataforma</a>
          <a href="#" class="footer__link">Sugestão de Funcionalidade</a>
          <button class="footer__lang-badge">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/br.svg" alt="BR" style="width:18px; height:18px; border-radius:50%; object-fit:cover;">
            <span>PT</span>
            <span>▸</span>
          </button>
        </div>
      </div>

      <div class="footer__divider"></div>

      <div class="footer__bottom">
        <p class="footer__copyright">Direitos autorais 2026 © NOPING - INCRÍVEL SISTEMAS, INC</p>
        <div class="footer__socials">
          <a href="#" class="footer__social-link" aria-label="TikTok">
            <span class="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93ff18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </span>
            <span class="footer__social-label">SIGA-NOS NO<br>TIK TOK</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="LinkedIn">
            <span class="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93ff18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </span>
            <span class="footer__social-label">SIGA-NOS NO<br>LINKEDIN</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="Facebook">
            <span class="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93ff18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </span>
            <span class="footer__social-label">SIGA-NOS NO<br>FACEBOOK</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="Discord">
            <span class="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93ff18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01M15 12h.01"/><path d="M7.5 4.2c-1.8.8-3.4 2-4.5 3.5-1.5 3.8-1.7 8.5-.6 12.1 1.6 1.4 3.7 2.2 5.6 2.2 0 0 1-1.2 1.8-2-1.5-.4-2.8-1.2-3.8-2.2 2 .5 4 1 6 1s4-.5 6-1c-1 1-2.3 1.8-3.8 2.2.8.8 1.8 2 1.8 2 1.9 0 4-.8 5.6-2.2 1.1-3.6.9-8.3-.6-12.1-1.1-1.5-2.7-2.7-4.5-3.5-1-.2-2-.3-3-.3-1 0-2 .1-3 .3z"/></svg>
            </span>
            <span class="footer__social-label">COMUNIDADE<br>NO DISCORD</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="Instagram">
            <span class="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93ff18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </span>
            <span class="footer__social-label">SIGA-NOS NO<br>INSTAGRAM</span>
          </a>
          <a href="#" class="footer__social-link" aria-label="X / Twitter">
            <span class="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93ff18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.73 16h4.27L8.27 4zm16 0L4 20"/></svg>
            </span>
            <span class="footer__social-label">SIGA-NOS NO<br>X</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
  </section>
  `;
}
