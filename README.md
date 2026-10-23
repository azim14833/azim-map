# AZİMap

AZİMap, tek HTML dosyasıyla çalışan Türkçe harita ve alan çizim uygulamasıdır. Türkiye il/ilçe sınırları ve Aydın mahalle verileri uygulamaya gömülüdür. Kullanım sırasında bazı çevrim içi harita, arama ve yükselti servislerine internet bağlantısı gerekir.

## Hızlı başlatma

1. `index.html` dosyasını açarak uygulamayı deneyin. Bazı tarayıcı özellikleri `file://` adresinde kısıtlı olabilir.
2. Tam kullanım ve mobil yükleme için ZIP içindeki tüm dosyaları bir HTTPS web alanına koyun. GitHub Pages için ZIP'i açıp `index.html`, `manifest.json`, `sw.js` ve `icon.svg` dosyalarını depo kök dizinine yükleyin; depoda **Settings → Pages** bölümünden dağıtımı etkinleştirin.
3. Yayına aldıktan sonra site adresini telefonda açın. Android Chrome'da **Uygulamayı yükle**, iPhone Safari'de **Paylaş → Ana Ekrana Ekle** seçeneklerini kullanın.

Ek bir derleme veya AZİMap API anahtarı gerekmez. Başlangıç altlığı OpenStreetMap'tir; OpenTopoMap ve Esri seçenekleri de bulunur. Kaynakların erişilebilirliği ağ ve hizmet sağlayıcısına göre değişebilir; uygulama çalışmayan altlık için yedek kaynak kullanır. HTTPS yayını ana uygulama kabuğunu önbelleğe alır; ilk açılış ve harita görselleri için internet bağlantısı gerekir.

## Aydın sınırları

Aydın mahalle/köy aramalarında ve ilçe seçicisinde ZIP içindeki, kullanıcı tarafından sağlanmış KML'den hazırlanmış gömülü Aydın mahalle geometrileri esas alınır (resmi kurum verisi olduğu iddia edilmez). Aynı poligon hem dolgu hem dış çizgi için kullanılır; bir ilçenin tüm gömülü mahalleleri yüklüyse farklı kaynaktan gelen ilçe iç çizgisi gizlenir. Efeler için **Sınırlar → Üst alanın adı** alanına `Efeler` yazıp mahalle düzeyini seçin. Türkiye'nin diğer yerlerinde mahalle verisi OSM'de varsa çevrim içi sınır aracını kullanın; aksi durumda GeoJSON içe aktarın.

## Altlıklar ve harici harita bağlantıları

Uygulama CARTO karo kaynaklarını kullanmaz; CARTO anahtarsız isteklerde "API KEY REQUIRED" filigranı gösterir. OpenStreetMap, OpenTopoMap ve Esri altlıkları kullanılır. Google Haritalar ve Yandex Haritalar, uygulama içinde karo kaynağı olarak taklit edilmez; geçerli konumu sağlayıcıların kendi sayfasında açan bağlantılar olarak sunulur. Google Map Tiles API anahtar ve oturum belirteci, Yandex Tiles API anahtar gerektirir. Uygulama içi entegrasyon için sağlayıcı hesabı/anahtarı ve güncel koşullar ayrıca yapılandırılmalıdır.

## Dışa aktarma ve mobil kullanım

PDF, PNG, JPEG, vektör PDF/SVG, KML, KMZ, GeoJSON ve GPX dışa aktarma seçenekleri vardır. DPI seçenekleri 600, 1200, 1800 ve 2400'dür. Büyük baskılarda parçalı JPEG/PNG indirme belleği korur; tarayıcı büyük dosyayı doğrudan diske yazamıyorsa 2400 dpi raster PDF yerine parçalı JPEG veya vektör PDF kullanın. HTTPS yayını konum izni, ana uygulama kabuğu önbelleği ve ana ekrana yükleme gibi tarayıcı özellikleri için gereklidir.

## Kaynaklar ve kullanım

Harita altlıklarının atıfları uygulamada görünür tutulur. Harici servislerin kapsama, hız, erişim ve kullanım koşulları değişebilir. OSM verisi için © OpenStreetMap katkıcıları atfını koruyun; her sağlayıcının kendi koşullarına uyun. Harici haritaları yeni sekmede açan bağlantılar harita verisini uygulamaya kopyalamaz.
