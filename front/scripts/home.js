console.log('oie');

// Função para carregar todos os produtos
export function loadProducts(products, section) {
 
  // Fazer uma requisição para a API Django para pegar os produtos
  fetch('http://127.0.0.1:8000/api/produtos')  // Ajuste para o URL da sua API Django
    .then(response => response.json())
    .then(products => {
      console.log(products)
      // Filtro Novidade
      const produtosNovidades = products.filter(produto => produto.classificacaoProduto === "Novidades");
 
      // Filtro Mais Vendidos
      // const produtosMaisVendidos = products.filter(produto => produto.classificacaoProduto === "Mais Vendidos");
 
      // const produtosPromoções = products.filter(produto => produto.classificacaoProduto === "Promoções");
     
 
      function createProductCard(produto, targetSection) {
        const precoNumerico = parseFloat(produto.preco);
        if (isNaN(precoNumerico)) {
          console.error('Preço inválido:', produto.preco);
          return;
        }
        const valParcela = (precoNumerico / 10).toFixed(2);
        const card = document.createElement("div");
        card.classList.add("product-card", "idprod");
        card.id = produto.codigoProduto;
     
        card.innerHTML = `
          <div>
            <img id="${produto.id}" src="${produto.imgProduto}" alt="${produto.tituloProduto}" width="168px" />
          </div>
          <div class="product-card-info-container">
            <h2 class="product-card-title" title="${produto.tituloProduto}">${produto.tituloProduto}</h2>
            <h4 class="product-card-reference">Cod. ${produto.id}</h4>
            <h3 class="product-card-price">R$ ${precoNumerico.toFixed(2)}</h3>
            <h4 class="product-card-installment">10x of R$${valParcela} interest-free</h4>
          </div>
          <div class="cart-e-compra">
            <button id="${produto.id}" class="product-card-btn">PURCHASE</button>
            <button class="product-card-btn-cart" data-id="${produto.id}"><i class="bi bi-cart"></i></button>
          </div>`;
       
        card.querySelector('.product-card-btn').addEventListener('click', () => {
          const productData = {
            id: produto.codigoProduto,
            titulo: produto.tituloProduto,
            preco: precoNumerico.toFixed(2),
            descricao: produto.descricao,
            categoria: produto.categoriaProduto,
            imagens: produto.imagensProduto,
          };
          localStorage.setItem('selectedProduct', JSON.stringify(productData));
          window.location.href = '../product.html';
        });
     
        document.querySelector(targetSection).appendChild(card);
      }
 
      produtosNovidades.forEach(produto => createProductCard(produto, "#section-1 .carrousel"));
      // produtosMaisVendidos.forEach(produto => createProductCard(produto, "#section-2 .carrousel"));
      // produtosPromoções.forEach(produto => createProductCard(produto, "#section-3 .carrousel"));

    })
    .catch(error => {
      console.error('Erro ao carregar produtos:', error);
    });
}

loadProducts()

// ------- Carrousel de produtos (Seção Novidades) -------------------
const productCarousel1 = document.querySelector('#section-1 .carrousel');
const prevBtn1 = document.querySelector('#section-1 .prev');
const nextBtn1 = document.querySelector('#section-1 .next');

let scrollAmount1 = 0;
const cardWidth = 270; // Ajuste para a largura do card

nextBtn1.addEventListener('click', () => {
  scrollAmount1 += cardWidth; // Avança um card
  if (scrollAmount1 > productCarousel1.scrollWidth - productCarousel1.parentElement.offsetWidth) {
    scrollAmount1 = productCarousel1.scrollWidth - productCarousel1.parentElement.offsetWidth;
  }
  productCarousel1.style.transform = `translateX(-${scrollAmount1}px)`;
});

prevBtn1.addEventListener('click', () => {
  scrollAmount1 -= cardWidth; // Retrocede um card
  if (scrollAmount1 < 0) {
    scrollAmount1 = 0;
  }
  productCarousel1.style.transform = `translateX(-${scrollAmount1}px)`;
});

// ------- Carrousel de produtos (Seção Mais Vendidos) -------------------
const productCarousel2 = document.querySelector('#section-2 .carrousel');
const prevBtn2 = document.querySelector('#section-2 .prev');
const nextBtn2 = document.querySelector('#section-2 .next');

let scrollAmount2 = 0;

nextBtn2.addEventListener('click', () => {
  scrollAmount2 += cardWidth; // Avança um card
  if (scrollAmount2 > productCarousel2.scrollWidth - productCarousel2.parentElement.offsetWidth) {
    scrollAmount2 = productCarousel2.scrollWidth - productCarousel2.parentElement.offsetWidth;
  }
  productCarousel2.style.transform = `translateX(-${scrollAmount2}px)`;
});

prevBtn2.addEventListener('click', () => {
  scrollAmount2 -= cardWidth; // Retrocede um card
  if (scrollAmount2 < 0) {
    scrollAmount2 = 0;
  }
  productCarousel2.style.transform = `translateX(-${scrollAmount2}px)`;
});

// ------- Carrousel de produtos (Seção Mais Vendidos) -------------------
const productCarousel3 = document.querySelector('#section-3 .carrousel');
const prevBtn3 = document.querySelector('#section-3 .prev');
const nextBtn3 = document.querySelector('#section-3 .next');

let scrollAmount3 = 0;

nextBtn3.addEventListener('click', () => {
  scrollAmount3 += cardWidth; // Avança um card
  if (scrollAmount3 > productCarousel3.scrollWidth - productCarousel3.parentElement.offsetWidth) {
    scrollAmount3 = productCarousel3.scrollWidth - productCarousel3.parentElement.offsetWidth;
  }
  productCarousel3.style.transform = `translateX(-${scrollAmount3}px)`;
});

prevBtn3.addEventListener('click', () => {
  scrollAmount3 -= cardWidth; // Retrocede um card
  if (scrollAmount3 < 0) {
    scrollAmount3 = 0;
  }
  productCarousel3.style.transform = `translateX(-${scrollAmount3}px)`;
});

// Slide automático (caso ainda queira usar)
let currentSlide = 0;
const slides = document.querySelectorAll('.banner img');
const totalSlides = slides.length;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  const offset = -currentSlide * 100;
  document.querySelector('.banner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Slide automático a cada 3 segundos
setInterval(() => {
  moveSlide(1);
}, 3000);
