# MEVN Teknolojileri ile Proje Yönetim Sistemi

Bu proje, Node.js, Express.js ve EJS ile geliştirdiğim önceki Proje Yönetim Sistemi'ni daha modern ve güçlü hale getirmek amacıyla oluşturuldu. Bu sürümde, frontend Vue.js ile güçlendirilmiş olup, modern MEVN teknolojileri kullanılmıştır.

## Kullanılan Teknolojiler
- **MongoDB**: Veritabanı yönetimi için.
- **Express.js**: Backend API'larını oluşturmak için.
- **Vue.js**: Dinamik ve kullanıcı dostu frontend için.
- **Node.js**: Sunucu tarafında JavaScript çalıştırmak için.

## Kurulum Adımları

### 1. Projeyi Klonlayın
Aşağıdaki komutu kullanarak projeyi klonlayın:
```bash
git clone https://github.com/furkansade/vue-working
```

### 2. Backend Klasöründe `.env` Dosyası Oluşturun
`backend` klasörüne giderek bir `.env` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:
```env
PORT=3000 # veya uygun bir boş port
MONGO_URI= # MongoDB Atlas veya local MongoDB URI'sini girin (koleksiyon ismini belirtin)
```

### 3. JWT Güvenlik Anahtarını Oluşturun
Güvenlik için bir JWT anahtarı belirleyin. Konsolda aşağıdaki komutu çalıştırarak bir anahtar oluşturabilirsiniz:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Oluşan çıktıyı `.env` dosyanıza şu şekilde ekleyin:
```env
JWT_SECRET_KEY=oluşan_anahtar
```

### 4. Bağımlılıkları Yükleyin
Hem `backend` hem de `frontend` klasörlerinde bağımlılıkları yüklemek için aşağıdaki komutları çalıştırın:
```bash
cd backend
npm install

cd ../frontend
npm install
```

### 5. Uygulamayı Çalıştırın
Backend ve frontend klasörlerinde ayrı ayrı şu komutla projeyi başlatabilirsiniz:
```bash
npm run dev
```

## Veritabanı Kurulumu
MongoDB üzerinde bir veritabanı oluşturduktan sonra ilk kullanıcı kaydını oluşturmanız gerekmektedir. Gerekli alanlar `User` modelinde belirtilmiştir. Şifreyi kriptolamak için çevrimiçi araçları veya kendi kripto algoritmanızı kullanabilirsiniz.

## Önemli Notlar
- `.env` dosyasındaki bilgiler projeye özeldir ve gizli tutulmalıdır.
- Backend ve frontend bağımsız çalıştığı için her biri ayrı portlarda hizmet verecektir.
- Daha fazla bilgi için proje dosyalarını inceleyebilirsiniz.

---
Projenin geliştirilmesi devam etmektedir. Yeni özellikler eklendikçe belgeler güncellenecektir.

## Lisans
Bu proje MIT Lisansı ile korunmaktadır. Daha fazla bilgi için lütfen `LICENSE` dosyasına göz atın.