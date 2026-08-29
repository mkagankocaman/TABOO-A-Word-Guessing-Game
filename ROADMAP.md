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

## 📱 Aşama 3: Progressive Web App (PWA) & Mobil Uygulama Deneyimi
* **Amaç:** Web sitesinin mobil cihazlarda yerel bir uygulama gibi yüklenebilmesi ve tamamen çevrimdışı çalışabilmesi.
* **Detaylar:**
  * `manifest.json` dosyası (uygulama ikonları, splash renkleri, display: standalone ayarı).
  * Service Worker (`sw.js`) ile statik dosyaların ve kartların önbelleğe (cache) alınması.
  * Mobil tarayıcılarda "Ana Ekrana Ekle" (Install Prompt) yönlendirmesi.
  * Destekleyen mobil cihazlarda buton tıklamaları için titreşim geri bildirimi (Vibration API / Haptic feedback).

---

## 🗂️ Aşama 4: Kategori ve Deste (Deck) Seçimi
* **Amaç:** Oyuncuların ilgi alanlarına göre farklı kelime desteleriyle oynayabilmesi.
* **Detaylar:**
  * Kartlara kategori etiketleri ekleme (`Genel`, `Sinema & Dizi`, `Spor`, `Tarih & Coğrafya`, `Popüler Kültür`, `Çocuk / Kolay`).
  * Ayarlar ekranında kategori filtreleme veya birden fazla kategoriyi birleştirerek oynama desteği.
  * Kullanıcıların kendi özel kartlarını tarayıcıda (`localStorage`) oluşturup desteye ekleyebileceği "Özel Kart Ekle" arayüzü.

---

## ⚙️ Aşama 5: Gelişmiş Oyun Modları ve Ses Ayarları
* **Amaç:** Oyun çeşitliliğini ve kişiselleştirmeyi artırmak.
* **Detaylar:**
  * **Ses Düzeyi & Açma/Kapama:** Ayarlar ekranında ses efektlerini kapatma/açma anahtarı.
  * **Hızlı Ölüm Modu (Sudden Death):** Beraberlik durumunda 1 kelimelik uzatma turu.
  * **Takım Sayısı Genişletmesi:** 3 veya 4 takımlı oyun modu desteği.
  * **Detaylı Oyun Sonu İstatistikleri:** En çok doğru bilen takım, tur başına ortalama süre/kelime hızı grafikleri.
