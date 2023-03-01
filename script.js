
const products = [ {
    title: "Rick and Morty",
    imageUrl: "designs/Rick and Morty  httpswww.redbubble.comistickerRick-and-Morty-by-Musleehustler1325950971.EJUG5.png",
    productUrl: "https://www.redbubble.com/i/framed-print/Bird-Art-Colourful-Painting-of-animal-modern-art-By-Art-Genix-by-SanatJha/100668588.AJ1A3"
  },
{
    title: "Rick and Morty",
    imageUrl: "designs/Rick and Morty  httpswww.redbubble.comistickerRick-and-Morty-by-Musleehustler1325950971.EJUG5.png",
    productUrl: "https://www.redbubble.com/i/framed-print/Bird-Art-Colourful-Painting-of-animal-modern-art-By-Art-Genix-by-SanatJha/100668588.AJ1A3"
  },
{
    title: "Rick and Morty",
    imageUrl: "designs/Rick and Morty  httpswww.redbubble.comistickerRick-and-Morty-by-Musleehustler1325950971.EJUG5.png",
    productUrl: "https://www.redbubble.com/i/framed-print/Bird-Art-Colourful-Painting-of-animal-modern-art-By-Art-Genix-by-SanatJha/100668588.AJ1A3"
  },
{
    title: "Rick and Morty",
    imageUrl: "designs/Rick and Morty  httpswww.redbubble.comistickerRick-and-Morty-by-Musleehustler1325950971.EJUG5.png",
    productUrl: "https://www.redbubble.com/i/framed-print/Bird-Art-Colourful-Painting-of-animal-modern-art-By-Art-Genix-by-SanatJha/100668588.AJ1A3"
  },];	

const gridContainer = document.querySelector('.grid-container');

products.forEach((product) => {
  const html = `
    <div class="design-card">
      <div class="card-image">
        <img src="${product.imageUrl}" alt="${product.title}">
      </div>
      <div class="card-info">
        <h3>${product.title}</h3>
        <div class="btn-container">
          <a href="${product.productUrl}" target="_blank"class="btn btn-black">Look Products</a>
        </div>
      </div>
    </div>
  `;
  gridContainer.insertAdjacentHTML('beforeend', html);
});



