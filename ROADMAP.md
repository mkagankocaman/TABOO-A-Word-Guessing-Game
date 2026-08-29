# 🗺️ TABOO - Geliştirme Yol Haritası (Roadmap)

Bu belge, Taboo kelime tahmin oyunu için gelecekte hayata geçirilmesi planlanan aşamalı geliştirme ve özellik hedeflerini içerir.

---

## ✅ Aşama 1: İnteraktif Tur Özeti (Round Review UI) [Tamamlandı]
* **Amaç:** Tur bittikten sonra hakem/oyuncu hatalarını veya itirazları düzeltmek için özet ekranını interaktif hale getirmek.
* **Tamamlanan Özellikler:**
  * Her kelime satırına `[+1 Doğru]`, `[-Tabu]`, `[0 Pas]` 3'lü buton grubu entegre edildi.
  * Kart durumuna tıklandığında anlık klik sesi, net puan pop animasyonu ve canlı puan yeniden hesaplaması sağlandı.
  * Kelimeye tıklandığında açılan akordeon ile kartın 5 yasaklı kelimesini doğrudan görüntüleme desteği eklendi.
  * "Sonraki Tura Geç" ile düzeltilmiş skorun kesinleşmesi sağlandı.

---

## ✅ Aşama 2: Çoklu Dil Desteği (i18n) ve İngilizce Deste [Tamamlandı]
* **Amaç:** Oyunu uluslararası hale getirmek, İngilizce dil seçeneği sunmak ve modüler yerelleştirme sağlamak.
* **Tamamlanan Özellikler:**
  * Modüler arayüz sözlüğü (`i18n.js`) ile tüm UI metinlerinin bağımsız bir dosyada toplanması.
  * 50 adet özenle hazırlanmış, zorlayıcı İngilizce Tabu kartı (`cards_en.js`).
  * Cihaz ve tarayıcı diline göre otomatik dil tespiti (`navigator.language`).
  * Dinamik / Tembel Kart Yükleme (Lazy Loading): Yalnızca seçili dilin kart dosyasının yüklenmesiyle sıfır gereksiz bellek/ağ tüketimi.
  * Başlangıç/Ayarlar ekranında tek dokunuşla dil değiştirici (🇹🇷 Türkçe / 🇬🇧 English).
  * Dile özel bağımsız deste hafızası (`taboo_played_card_ids_tr` ve `taboo_played_card_ids_en`).

---

## ✅ Aşama 3: Hibrit Mobil Stratejisi (PWA + Capacitor & Play Store) [Tamamlandı]
* **Amaç:** Hem web tarayıcılarında mükemmel bir PWA (çevrimdışı/ana ekrana ekleme) deneyimi sunmak hem de Capacitor ile Google Play Store'da ilk indirmeden itibaren %100 internetsiz çalışan yerel bir Android oyunu yayınlamak.
* **Tamamlanan Özellikler:**
  * **PWA & Web Varlıkları:** `manifest.json` yapılandırması (standalone, dikey yönelim, koyu tema `#020617`, vektörel SVG ikon seti).
  * **Dinamik Kart Precache & Cache-First Service Worker (`sw.js`):** Dinamik yüklenen `cards_tr.js` ve `cards_en.js` dahil tüm varlıkların önbelleğe alınmasıyla sıfır internette %100 çevrimdışı çalışma.
  * **Akıllı Ekran Açık Tutma (Screen Wake Lock):** Yalnızca aktif tur esnasında ekran kilidinin açık tutulması; sekme arka plana geçtiğinde sürenin boşa akmaması için otomatik duraklatma ve geri dönüldüğünde kilidin güvenle yenilenmesi.
  * **Donanımsal Geri Tuşu & Popstate Yönetimi:** Aktif tur esnasında geri tuşuna basıldığında sayfanın terk edilmesini önleyip oyunu anında "Pause" moduna alma ve güvenli onay akışı.
  * **🎼 Zengin Arcade Ses Paleti & DSP Filtreleme:** C5-C6 majör arpej şan/zil (Doğru), çift osilatörlü LPF filtreli dolgun hata buzzer'ı (Tabu), aerodinamik süpürmeli hava hışırtısı (Pas), kaset geri sarma cıvıltısı (Geri Al), ahşap blok tıkı (10s-4s), gerilim çift ping nabzı (3-2-1), üçlü hakem alarmı (Bitiş) ve yükselen tonlu 3-2-1 geri sayımı.
  * **🎛️ Çift Yönlü Senkronize Ses ve Titreşim Anahtarları:** Hem Başlangıç ekranından hem de oyun içi Duraklatma (Pause) menüsünden ses ve titreşimi anında açıp/kapatabilme, `localStorage` kalıcılığı.
  * **Hibrit Haptic Titreşim Motoru (`HapticManager`):** Buton tıklamalarında (Doğru, Tabu, Pas, Geri Al, Uyarı) eyleme özel ayırt edici titreşimler (Web'de `navigator.vibrate`, Android'de `@capacitor/haptics`).
  * **Uygulama İçi PWA Yükleme Banner'ı:** `beforeinstallprompt` ile başlangıç ekranında şık "Ana Ekrana Ekle" arayüzü (kuruluysa otomatik gizlenir).
  * **Sıfır Paketleyici (Zero-Bundler) Capacitor Entegrasyonu:** `capacitor.config.json` ile saf Vanilla JS mimarisini bozmadan Android derleme hazırlığı.

---

## 🗂️ Aşama 4: Kategori ve Deste (Deck) Seçimi
* **Amaç:** Oyuncuların ilgi alanlarına göre farklı kelime desteleriyle oynayabilmesi.
* **Detaylar:**
  * Kartlara kategori etiketleri ekleme (`Genel`, `Sinema & Dizi`, `Spor`, `Tarih & Coğrafya`, `Popüler Kültür`, `Çocuk / Kolay`).
  * Ayarlar ekranında kategori filtreleme veya birden fazla kategoriyi birleştirerek oynama desteği.
  * Kullanıcıların kendi özel kartlarını tarayıcıda (`localStorage`) oluşturup desteye ekleyebileceği "Özel Kart Ekle" arayüzü.

---

## ⚙️ Aşama 5: Gelişmiş Oyun Modları
* **Amaç:** Oyun çeşitliliğini ve kişiselleştirmeyi artırmak.
* **Detaylar:**
  * **Hızlı Ölüm Modu (Sudden Death):** Beraberlik durumunda 1 kelimelik uzatma turu.
  * **Takım Sayısı Genişletmesi:** 3 veya 4 takımlı oyun modu desteği.
  * **Detaylı Oyun Sonu İstatistikleri:** En çok doğru bilen takım, tur başına ortalama süre/kelime hızı grafikleri.
