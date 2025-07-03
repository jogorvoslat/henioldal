import React from 'react';
import { Brain, Target, Users, Shield, Clock, MapPin, Mail, Phone, Facebook, CheckCircle, Star, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">FLEXH</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problem" className="text-gray-300 hover:text-white transition-colors">Problémák</a>
              <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Megoldás</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Vélemények</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kapcsolat</a>
            </div>
            <a href="tel:+36209786239" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105">
              Hívás most
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left lg:text-left">
              <div className="mb-8">
                <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🧠 Neurofeedback központ Pécsen
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                FLEXH
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light leading-relaxed">
                Tudatos agyműködés. Nyugodtabb élet. Jobb teljesítmény.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-start">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Ingyenes konzultáció
                </a>
                <a href="tel:+36209786239" className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:bg-gray-900">
                  +36 20 978 6239
                </a>
              </div>
            </div>

            {/* Right side - Hero image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1">
                <div className="bg-black/40 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <img 
                    src="/Videéki Heni.webp" 
                    alt="Videéki Heni - FLEXH Neurofeedback szakértő"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">😤 Ismerős ez neked?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "📚 Órákig ülsz a könyv felett, de semmi sem ragad meg",
              "😰 Folyamatosan ideges vagy, még alvás előtt is pörög az agyad",
              "👶 A gyereked nem tud figyelni, állandó a konfliktus miatta",
              "💼 Fontos megbeszélésen elkalandozik a figyelmed",
              "🌙 Fáradtan fekszel le, de órákig forgolódsz",
              "🎯 Tudod, hogy többre vagy képes, de valahogy nem jön össze"
            ].map((problem, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                <p className="text-gray-300 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-950/20 p-8 rounded-3xl border border-red-900/30">
              <h3 className="text-2xl font-bold mb-4 text-red-400">A valóság az, hogy...</h3>
              <p className="text-gray-300 leading-relaxed">
                Minden nap küzdesz az agyaddal. Próbálsz koncentrálni, de az gondolatok szétszóródnak. Látod a gyerekeden, hogy küzd, és tehetetlennek érzed magad. Tudod, hogy okos vagy, tehetséges vagy - de mintha egy fékkel járnál. És ez frusztráló. Nagyon frusztráló.
              </p>
            </div>
            <div className="bg-orange-950/20 p-8 rounded-3xl border border-orange-900/30">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">És ez egyre rosszabb...</h3>
              <p className="text-gray-300 leading-relaxed">
                A rossz koncentráció kihat a munkádra. A stressz tönkreteszi a kapcsolataidat. A gyerek egyre jobban lemarad, te egyre jobban hibáztatod magad. Közben mindenki azt mondja: "csak koncentrálj jobban", "csak lazíts el" - mintha ez ilyen egyszerű lenne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-400">🚨 És mi lesz, ha semmi sem változik?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-red-800/30">
              <p className="text-gray-300 leading-relaxed">A munkahelyen továbbra is "az leszel, aki szétszórt". Elesél a lehetőségektől, mert nem tudsz 100%-on teljesíteni.</p>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-red-800/30">
              <p className="text-gray-300 leading-relaxed">A gyereked egyre frusztráltabb lesz, te egyre búntudatosabb. A családi béke szétesik a folyamatos konfliktusok miatt.</p>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-red-800/30">
              <p className="text-gray-300 leading-relaxed">Évek telnek el úgy, hogy tudod - valamivel többre vagy képes, de soha nem sikerül kihoznod magadból.</p>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-red-800/30">
              <p className="text-gray-300 leading-relaxed">A krónikus stressz és rossz alvás kikészít. Fáradt vagy, ideges vagy, és ez egy ördögi kör.</p>
            </div>
          </div>

          <div className="bg-red-950/20 p-8 rounded-3xl border border-red-900/50">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Az idő most dolgozik ellened</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Minden nap, amit várakozással töltesz, egy újabb nap, amikor nem élsz a teljes potenciáloddal. A gyerekek agya különösen fogékony - minél korábban segítesz neki, annál nagyobb a változás.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gradient-to-b from-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">✨ De van megoldás - és működik</h2>
            <div className="bg-blue-950/20 p-8 rounded-3xl border border-blue-900/30 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">🎯 Mi lenne, ha végre az agyad is veled tartana?</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Itt a FLEXH-nél pontosan tudjuk, milyen az, amikor az agyunk ellenünk dolgozik. És azt is tudjuk, hogyan fordíthatjuk meg ezt - természetesen, gyógyszer nélkül.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">💡 A neurofeedback: az egyetlen módszer, ami valóban megtanítja az agyadat</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Képzeld el úgy, mint egy személyi edzőt - az agyadnak. EEG-vel mérjük, mit csinál éppen az agyad, ezt látod is a képernyőn valós időben. Aztán játékokon, filmeken keresztül fokozatosan megtanítjuk neki, hogyan működjön hatékonyabban.
              </p>
              <p className="text-blue-300 leading-relaxed">
                🎮 Nincs kínzás, nincs erőltetés. Ülsz, játszol, filmet nézel, zenét hallgatsz - és közben az agyad tanul. Mint amikor biciklizni tanultál: egyszer már megy magától, és soha nem felejted el.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-green-400">🔬 Ez nem alternatív gyógyászat - ez tudomány</h3>
              <p className="text-gray-300 leading-relaxed">
                A neurofeedback több mint 50 éve létezik, rengeteg tudományos kutatás támasztja alá. Az Amerikai Pediatriai Akadémia is elismeri hatékonyságát ADHD kezelésében. Ez nem hit kérdése - ez működik.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-950/20 to-blue-950/20 p-8 rounded-3xl border border-green-900/30">
            <h3 className="text-3xl font-bold mb-8 text-center">🎯 Mire számíthatsz konkrétan?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-green-400">2-3 alkalom után:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Jobban alszol, frissebben ébredsz
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Kevésbé vagy ideges hétköznapi helyzetekben
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    A gyerek nyugodtabb, kevesebb a konfliktus
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-400">8-12 alkalom után:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    Órákig tudsz koncentrálni megszakítás nélkül
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    Stresszes helyzetben is tisztán gondolkodsz
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    A gyerek önállóan végzi a házi feladatot
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    Visszakapod az életed feletti kontrollt
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">👥 Pontosan kinek segítünk?</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-purple-950/20 p-8 rounded-3xl border border-purple-900/30">
              <h3 className="text-xl font-bold mb-4 text-purple-400">👩‍👦 Szülők, akik már mindent próbáltak</h3>
              <p className="text-gray-400 mb-4 italic">"A gyerek állandóan pörög, nem figyel oda, minden küzdelem vele. Már nem tudom, mit csináljak."</p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Próbáltál már mindent: jutalmazás, büntetés, beszélgetés, szabályok. Semmi sem hat hosszú távon. Látod, hogy a gyerek is szenved tőle, de nem tudod, hogyan segíts neki.
              </p>
              <p className="text-purple-300 font-medium">
                👉 SmartFocus Kids: játékosan tanítjuk meg az agyát koncentrálni. 6-8 alkalom után láthatod, ahogy a gyerek magától leül tanulni, és nincs több harcoskodás a házi feladat miatt.
              </p>
            </div>

            <div className="bg-red-950/20 p-8 rounded-3xl border border-red-900/30">
              <h3 className="text-xl font-bold mb-4 text-red-400">👔 Kiégett felnőttek, akik már nem bírják</h3>
              <p className="text-gray-400 mb-4 italic">"Éjjel is pörög az agyam, nem tudok leállni. Fáradt vagyok, de nem tudok pihenni. Úgy érzem, elvesztem az irányítást."</p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Reggel fáradtan kelsz, napközben küzdesz a koncentrációval, este képtelen vagy kikapcsolni. A családod már szól, hogy ideges vagy, de nem tudsz mit tenni ellene.
              </p>
              <p className="text-red-300 font-medium">
                👉 NeuroCalm: megtanítjuk az agyadat kikapcsolni. Visszakapod a belső békédet, végre normálisan alszol, és újra élvezed az életet.
              </p>
            </div>

            <div className="bg-blue-950/20 p-8 rounded-3xl border border-blue-900/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🧑‍🎓 Teljesítményre éhes emberek</h3>
              <p className="text-gray-400 mb-4 italic">"Keményen dolgozom, de nem mindig jön össze. Tudom, hogy többre vagyok képes, de valahogy nem tudom kihozni magamból."</p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Jó vagy abban, amit csinálsz, de tudod, hogy a csúcsteljesítmény még mindig hiányzik. Fontos pillanatokban néha elszállsz, vagy nem vagy elég éles.
              </p>
              <p className="text-blue-300 font-medium">
                👉 FocusMax: fejlesztjük a reakcióidődet, a memóriádat, a mentális állóképességedet. Kihozod magadból a maximumot - tanulásban, sportban, munkában.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Approach */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">🌿 Komplex megoldás: nem csak az agyaddal foglalkozunk</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-950/20 p-8 rounded-3xl border border-green-900/30">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Táplálkozási támogatás</h3>
              <p className="text-gray-300 leading-relaxed">
                Személyre szabott vitaminokkal és táplálékkiegészítőkkel segítjük a tested és az agyad regenerációját. Az omega-3-tól a magnéziumig - minden, ami kell az optimális agyi működéshez.
              </p>
            </div>
            <div className="bg-blue-950/20 p-8 rounded-3xl border border-blue-900/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Életmód tanácsadás</h3>
              <p className="text-gray-300 leading-relaxed">
                Megtanítjuk, hogyan építsd be a mindennapjaidba azokat a szokásokat, amelyek hosszú távon fenntartják az eredményeket. Alvás, stresszkezelés, mentális higiénia - minden egy helyen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">💬 Mások már megtapasztalták</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "Két hónap alatt teljesen megváltozott a fiam. Most már önállóan tanul, és végre békés a családi légkör."
              </p>
              <p className="text-blue-400 font-medium">Kata, 8 éves Bence édesanyja</p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "20 év után végre tudok aludni. Az egész életem megváltozott - a munkám, a kapcsolataim, minden."
              </p>
              <p className="text-blue-400 font-medium">Péter, 34 éves vezetőtanácsadó</p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "A versenysport területén az a különbség kellett, ami most megvan. Sokkal koncentráltabb vagyok a mérkőzéseken."
              </p>
              <p className="text-blue-400 font-medium">Anna, 19 éves teniszező</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">🤝 Miért pont nálunk változtasd meg az életed?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "5+ év tapasztalat neurofeedback területén - tudjuk, mit csinálunk",
              "Minden program személyre szabott - soha nem sablon szerint dolgozunk",
              "Holisztikus megközelítés: test, lélek, agy együtt",
              "Családias légkör - gyerekek és felnőttek is szeretnek ide járni",
              "Legmodernebb EEG eszközpark - precíz mérések, gyors eredmények",
              "Ingyenes konzultáció - kipróbálhatod kockázat nélkül",
              "Pécsett vagyunk - nem kell Budapestre utaznod"
            ].map((advantage, index) => (
              <div key={index} className="flex items-center bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                <span className="text-gray-300">{advantage}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-950/20 to-blue-950/20 p-8 rounded-3xl border border-green-900/30 text-center">
            <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-green-400">🛡️ A mi ígéretünk</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ha 5 alkalom után nem érzed a változást, visszaadjuk a pénzed. Egyszerű. Mert mi abban hiszünk, amit csinálunk - és te is hinni fogsz benne, amikor megtapasztalod.
            </p>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="w-16 h-16 text-red-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-400">⏰ De fontos: ne várakozz tovább</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-950/20 p-8 rounded-3xl border border-red-900/30">
              <p className="text-gray-300 leading-relaxed">
                Minden hét, amit várakozással töltesz, egy újabb hét az elvesztegetett lehetőségek közül. A gyermekkor nem vár - minél korábban segítesz a gyereknek, annál nagyobb lesz a változás az egész életére nézve.
              </p>
            </div>
            <div className="bg-orange-950/20 p-8 rounded-3xl border border-orange-900/30">
              <p className="text-gray-300 leading-relaxed">
                Havonta csak 15 új ügyféllel tudunk személyesen foglalkozni, mert minden program teljesen egyedi. Most még van szabad kapacitásunk, de ez gyorsan változhat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">📍 Itt találsz meg minket</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="text-gray-400 text-sm">📌 Cím:</p>
                  <p className="text-white font-medium">Pécs, Váradi Antal utca 10.</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <Mail className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="text-gray-400 text-sm">📧 Email:</p>
                  <a href="mailto:heni.flexh@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium">heni.flexh@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <Phone className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="text-gray-400 text-sm">📞 Telefon:</p>
                  <a href="tel:+36209786239" className="text-blue-400 hover:text-blue-300 font-medium">+36 20 978 6239</a>
                </div>
              </div>
              <div className="flex items-center bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <Facebook className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="text-gray-400 text-sm">🔗 Facebook:</p>
                  <p className="text-white font-medium">@facebook</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-950/20 p-8 rounded-3xl border border-blue-900/30 text-center">
            <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">🕐 Nyitvatartás</h3>
            <p className="text-gray-300">Hétfő-Péntek: 9:00-18:00, Szombat: 9:00-14:00</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">🚀 Most vagy soha: változtasd meg az életed még ma!</h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Elég volt a várakozásból. Elég volt abból, hogy tudod - lehetne jobb. Most megteheted azt a lépést, amitől minden megváltozik. Egy ingyenes konzultáció. 30 perc. Semmi kockázat.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">1️⃣</span>
              <p className="text-white mt-2">Hívj fel most, vagy írj egy üzenetet</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">2️⃣</span>
              <p className="text-white mt-2">Beszéljük meg, pontosan miben segíthetünk</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">3️⃣</span>
              <p className="text-white mt-2">Ha tetszik, amit hallasz, kezdjük el</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">4️⃣</span>
              <p className="text-white mt-2">2-3 hét múlva már érzed a változást</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">👉 HÍVJ MOST: +36 20 978 6239</h3>
              <p className="text-gray-600 text-lg">Vagy írj emailt: heni.flexh@gmail.com</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a href="tel:+36209786239" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  📞 Hívás most
                </a>
                <a href="mailto:heni.flexh@gmail.com" className="bg-gray-800 hover:bg-gray-900 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  📧 Email küldése
                </a>
              </div>
            </div>

            <p className="text-blue-100 text-lg">
              Nem szeretsz telefonálni? Írj egy üzenetet Facebook-on, és mi keresünk téged.
            </p>

            <div className="bg-red-500/20 p-6 rounded-2xl border border-red-400/30">
              <p className="text-red-200 font-bold text-lg">
                ⚡ Ma még tudunk beszélni. Holnap már lehet, hogy nem lesz szabad időpontunk erre a hétre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold">FLEXH</span>
          </div>
          <p className="text-gray-400 mb-4">Neurofeedback központ Pécsen</p>
          <p className="text-gray-500 text-sm">© 2024 FLEXH. Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;