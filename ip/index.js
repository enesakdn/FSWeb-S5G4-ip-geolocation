import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

let cards = document.querySelector(".cards");

function data(nesne) {
  const divolustur = document.createElement("div");
  divolustur.setAttribute("class", "card");

  const imgolustur = document.createElement("img");
  imgolustur.setAttribute("src", "ülkebayrağı");
  divolustur.appendChild(imgolustur);

  const div2olustur = document.createElement("div");
  div2olustur.setAttribute("class", "card-info");
  divolustur.appendChild(div2olustur);

  const h3olustur = document.createElement("h3");
  h3olustur.setAttribute("class", "ip");
  h3olustur.textContent = nesne.sorgu;
  div2olustur.appendChild(h3olustur);

  const polustur = document.createElement("p");
  polustur.setAttribute("class", "ulke");
  polustur.textContent = `${nesne.ülke} (${nesne.ülkeKodu})`;
  div2olustur.appendChild(polustur);

  const p1olustur = document.createElement("p");
  p1olustur.textContent = `Enlem: ${nesne.enlem} Boylam: ${nesne.boylam}`;
  div2olustur.appendChild(p1olustur);

  const p2olustur = document.createElement("p");
  p2olustur.textContent = `Şehir: ${nesne.şehir}`;
  div2olustur.appendChild(p2olustur);

  const p3olustur = document.createElement("p");
  p3olustur.textContent = `Saat dilimi: ${nesne.saatdilimi}`;
  div2olustur.appendChild(p3olustur);

  const p4olustur = document.createElement("p");
  p4olustur.textContent = `Para birimi: ${nesne.parabirimi}`;
  div2olustur.appendChild(p4olustur);

  const p5olustur = document.createElement("p");
  p5olustur.textContent = `ISP: ${nesne.isp}`;
  div2olustur.appendChild(p5olustur);

  return divolustur;
}

//cards.appendChild(data(dummy));

const adim5 = async function () {
  await ipAdresimiAl();
  axios
    .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
    .then((response) => {
      cards.appendChild(data(response.data));
    })
    .catch((error) => console.log(error));
};
adim5();
