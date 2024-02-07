/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";
import sahteVeri from "./sahte-veri";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";


const App = () => {
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const[searchText, setSearchText] = useState(""); 

  const gonderiyiBegen = (gonderiID) => {
    const newGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) 
      if (gonderi.liked) {
          gonderi.likes--;
          gonderi.liked =false;
      } else {
        gonderi.likes++;
        gonderi.liked = true;
      }
      return gonderi;
    });

    setGonderiler(newGonderiler);

  };

  return (
    <div className="App">
      <AramaCubugu searchText={(searchText)} setSearchText={(setSearchText)} />
      <Gonderiler gonderiler={gonderiler.filter(gonderi => gonderi.username.includes(searchText.toLocaleLowerCase()))} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};

export default App;
