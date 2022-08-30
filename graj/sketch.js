var mapa
var mixy=13
var array=[]
var stanokna=0
var czas=0
var pw
var pd
var a=[]
var b=[]
var c=[]
var e=[]
var x
var y
var d
var w
var d2
var w2
var wc
var dc
var fs
var r=0
var skala=1
var skalamirror=1
var mobile=0
var bindy=[]
var fog
var hajs=0
var eq=[]
var loot=[]
var skille=[]
var staty=[]
var abilitki=[]
var ileabilitek
var itemy=[]
var stack=[]
var ileitemow
var ox
var oy
var rasa
var klasa
var URLParams
var URLPath
var efekty=[]
var hp
var glod=1000
var freeakcja=0


var CzarnaOsnowa
var DuszaceDlonie
var InkantacjaBolu
var OproznijButelke
var StworzLosawaMiksture
var StworzMikstureLeczenia
var WylaczenieZmyslow


var Hero
var Hero2
var HeroCios
var HeroCiosL
var HeroL
var HeroL2
var HeroMagia
var HeroMagiaL


var Dzik
var Dzik2
var DzikL
var DzikL2
var GrzybiakFioletowy
var GrzybiakFioletowy2
var GrzybiakFioletowyCios
var GrzybiakFioletowyCiosL
var GrzybiakFioletowyL
var GrzybiakFioletowyL2
var GrzybiakZielony
var GrzybiakZielony2
var GrzybiakZielonyCios
var GrzybiakZielonyCiosL
var GrzybiakZielonyL
var GrzybiakZielonyL2
var Imp
var Imp2
var ImpL
var ImpL2
var ImpStrzal
var ImpStrzalL
var Pantera
var Pantera2
var PanteraCios
var PanteraCiosL
var PanteraL
var PanteraL2
var SkrzyniaGolem
var SkrzyniaGolem2
var SkrzyniaGolemCios
var SkrzyniaGolemCios2
var SkrzyniaGolemCiosL
var SkrzyniaGolemCiosL2
var SkrzyniaGolemL
var SkrzyniaGolemL2
var Szczurzak
var Szczurzak2
var SzczurzakCios
var SzczurzakCiosL
var SzczurzakL
var SzczurzakL2
var Wilkor
var Wilkor2
var WilkorCios
var WilkorCiosL
var WilkorL
var WilkorL2


var Butelka
var Jedzenie
var Kreda
var PomaranczowyOwoc
var Swieca
var ZestawOdczynnikow
var Zlom
var ZloteJablko
var ZwyklyRdzenMagiczny


var Ksiega2Broni
var KsiegaAlchemii1
var KsiegaAspektuOgnia
var KsiegaAspektuPowietrza
var KsiegaAspektuWody
var KsiegaAspektuZiemi
var KsiegaBezBroni
var KsiegaBroniPalnej
var KsiegaGolemancji
var KsiegaIluzji
var KsiegaKuszy
var KsiegaLacznosciZMagia
var KsiegaLukow
var KsiegaMagiiCienia1
var KsiegaMagiiMrozu1
var KsiegaMagiiOgnia1
var KsiegaMagiiPioronow1
var KsiegaMechaniki
var KsiegaMieczy
var KsiegaMlotow
var KsiegaMuzyki
var KsiegaNekromancji
var KsiegaObrzedowChaosu
var KsiegaObrzedowDruidystycznych
var KsiegaObrzedowLadu
var KsiegaObrzedowSzamanistycznych
var KsiegaOszczepow
var KsiegaPancerzy
var KsiegaParowania
var KsiegaPercepcji
var KsiegaPerfidnychSztuczek
var KsiegaPrzemiany
var KsiegaPrzywolywania
var KsiegaPrzyzwaniaDemonow1
var KsiegaPrzyzwaniaGolemow1
var KsiegaSztyletow
var KsiegaTarczy
var KsiegaToporow
var KsiegaUnikow
var KsiegaWloczni
var KsiegaWskrzeszania1
var KsiegaZbroiParowej
var ModlitewnikMsciciela1
var ModlitewnikSprawiedliwej1
var Necronomicon
var PolowyModlitewnikObroncy1
var StaryDziennik


var AmuletMatki
var AmuletMsciciela
var AmuletObroncy
var AmuletPoszukujacego
var AmuletSprawiedliwej
var AmuletZaglady
var BebenWojny
var FletUnikow
var MonetaDuchow
var RogMysliwego
var Trucizna
var ZestawAnalityczny


var Mikstura1
var Mikstura2
var Mikstura3
var Mikstura4
var Mikstura5
var Mikstura6
var Mikstura7
var Mikstura8
var Mikstura9
var Mikstura10
var Mikstura11
var Mikstura12
var Mikstura13


var AugumentowanaZelaznaZbroja
var CwiekowanaZbroja
var Kapelusz
var LekkaZelaznaZbroja
var Plaszcz
var PlaszczMaga
var SkorzanaZbroja
var SkorzanyHelm
var Szata
var ZbrojaZakonuTrzechPaskow
var ZelaznaZbroja
var ZelaznyHelm
var ZlotyPierscien
var ZlotyPierscienKamien1
var ZlotyPierscienKamien2
var ZlotyPierscienKamien3
var ZlotyPierscienKamien4


var DrewnianyPawez
var DzialoReczne
var Kosciany2Rmiecz
var Kosciany2Rtopor
var KoscianySztylet
var KoscianyTopor
var Kostur
var KrotkiLuk
var LekkiOszczep
var Lom
var Muszkiet
var OkutaTarcza
var Siec
var SwieconaLanca
var SwieconaWlocznia
var Swiecony2Rmiecz
var Swiecony2Rmlot
var Swiecony2Rtopor
var SwieconyMiecz
var SwieconyMlot
var ZatrutyNozDoRzucania
var ZelanyTopor
var ZelaznaHalabarda
var ZelaznaLanca
var ZelaznaTarcza
var ZelaznaWlocznia
var Zelazny2Rmiecz
var Zelazny2Rmlot
var Zelazny2Rtopor
var ZelaznyMiecz
var ZelaznyMlot
var ZelaznyMorgensztern
var ZelaznyNozDoRzucania
var ZelaznyOszczep
var ZelaznyPawez
var ZelaznyPuklerz
var ZelaznySztylet
var ZelaznyTopor


var damage3


var Bron
var BronR
var BronC
var Czlowiek
var CzlowiekR
var CzlowiekC
var Inne
var InneR
var InneC
var Ksiegi
var KsiegiR
var KsiegiC
var Mikstury
var MiksturyR
var MiksturyC
var Pancerz
var PancerzR
var PancerzC
var Potiony
var PotionyR
var PotionyC
var Surowce
var SurowceR
var SurowceC


var A
var Aczaszka
var Aoczy
var Apochodnia
var Apochodnia2
var Aroslina
var Aroslinapomarancz
var Asiec
var Awoda
var Awoda2
var B
var C
var D
var Drzwi
var Drzwi2Dol
var Drzwi2Gora
var E
var F
var G
var H
var I
var J
var K
var L
var M
var N
var O
var P
var Pole
var PoleGrzyb
var PoleGrzyb2
var PoleKredaKolo
var PoleKredaPionowo
var PoleKredaPoziomo
var PoleTrawa
var Q
var R
var S
var SchodyD
var Start
var T
var U
var V
var W
var WodaA
var WodaB
var WodaC
var WodaD
var WodaE
var WodaF
var WodaG
var WodaH
var WodaI
var WodaJ
var WodaK
var WodaL
var WodaM
var WodaN
var WodaNakladkaAFMP
var WodaNakladkaBDGL
var WodaNakladkaCEHN
var WodaNakladkaIJKO
var WodaO
var WodaP
var X
var Y
var Z


var Akcja
var BlyskCzerwony
var BlyskNiebieski
var BlyskRozowy
var BlyskZielony
var BlyskZolty
var FillerUI
var Glod
var OkienkoObokKursora
var OkienkoSrodekEkranu
var PasekLewoCalyEkran
var PasekLewoDol
var PasekLewoGora
var PasekLewoGora1
var PasekLewoGora2
var PasekLewoGora3
var PasekLewoGora4
var PasekLewoGora5
var PasekLewoGora6
var Poziom0
var Poziom1
var Poziom2
var Poziom3
var Poziom4
var Poziom5
var Poziom6
var PrzedmiotyKoniec
var PrzedmiotyPoczatek
var PrzedmiotyPuste
var PrzedmiotySrodek
var Przejedzenie
var PusteKoniec
var PustePoczatek
var PustePuste
var PusteSrodek
var UmiejetnosciKoniec
var UmiejetnosciPoczatek
var UmiejetnosciPuste
var UmiejetnosciSrodek
var Zaglodzenie
var Zaznaczenie
var Zaznaczenie2
var Zdolnosci1
var Zdolnosci2
var Zdolnosci3
var Zdolnosci4


var FOW
var Monety
var PrzedmiotZiemia
var Skrzynia
var SkrzyniaO
var Znak


function preload(){


  Dzik=loadImage("assets/Przeciwnicy/Dzik.png")
  Dzik2=loadImage("assets/Przeciwnicy/Dzik2.png")
  DzikL=loadImage("assets/Przeciwnicy/DzikL.png")
  DzikL2=loadImage("assets/Przeciwnicy/DzikL2.png")
  GrzybiakFioletowy=loadImage("assets/Przeciwnicy/GrzybiakFioletowy.png")
  GrzybiakFioletowy2=loadImage("assets/Przeciwnicy/GrzybiakFioletowy2.png")
  GrzybiakFioletowyCios=loadImage("assets/Przeciwnicy/GrzybiakFioletowyCios.png")
  GrzybiakFioletowyCiosL=loadImage("assets/Przeciwnicy/GrzybiakFioletowyCiosL.png")
  GrzybiakFioletowyL=loadImage("assets/Przeciwnicy/GrzybiakFioletowyL.png")
  GrzybiakFioletowyL2=loadImage("assets/Przeciwnicy/GrzybiakFioletowyL2.png")
  GrzybiakZielony=loadImage("assets/Przeciwnicy/GrzybiakZielony.png")
  GrzybiakZielony2=loadImage("assets/Przeciwnicy/GrzybiakZielony2.png")
  GrzybiakZielonyCios=loadImage("assets/Przeciwnicy/GrzybiakZielonyCios.png")
  GrzybiakZielonyCiosL=loadImage("assets/Przeciwnicy/GrzybiakZielonyCiosL.png")
  GrzybiakZielonyL=loadImage("assets/Przeciwnicy/GrzybiakZielonyL.png")
  GrzybiakZielonyL2=loadImage("assets/Przeciwnicy/GrzybiakZielonyL2.png")
  Imp=loadImage("assets/Przeciwnicy/Imp.png")
  Imp2=loadImage("assets/Przeciwnicy/Imp2.png")
  ImpL=loadImage("assets/Przeciwnicy/ImpL.png")
  ImpL2=loadImage("assets/Przeciwnicy/ImpL2.png")
  ImpStrzal=loadImage("assets/Przeciwnicy/ImpStrzal.png")
  ImpStrzalL=loadImage("assets/Przeciwnicy/ImpStrzalL.png")
  Pantera=loadImage("assets/Przeciwnicy/Pantera.png")
  Pantera2=loadImage("assets/Przeciwnicy/Pantera2.png")
  PanteraCios=loadImage("assets/Przeciwnicy/PanteraCios.png")
  PanteraCiosL=loadImage("assets/Przeciwnicy/PanteraCiosL.png")
  PanteraL=loadImage("assets/Przeciwnicy/PanteraL.png")
  PanteraL2=loadImage("assets/Przeciwnicy/PanteraL2.png")
  SkrzyniaGolem=loadImage("assets/Przeciwnicy/SkrzyniaGolem.png")
  SkrzyniaGolem2=loadImage("assets/Przeciwnicy/SkrzyniaGolem2.png")
  SkrzyniaGolemCios=loadImage("assets/Przeciwnicy/SkrzyniaGolemCios.png")
  SkrzyniaGolemCios2=loadImage("assets/Przeciwnicy/SkrzyniaGolemCios2.png")
  SkrzyniaGolemCiosL=loadImage("assets/Przeciwnicy/SkrzyniaGolemCiosL.png")
  SkrzyniaGolemCiosL2=loadImage("assets/Przeciwnicy/SkrzyniaGolemCiosL2.png")
  SkrzyniaGolemL=loadImage("assets/Przeciwnicy/SkrzyniaGolemL.png")
  SkrzyniaGolemL2=loadImage("assets/Przeciwnicy/SkrzyniaGolemL2.png")
  Szczurzak=loadImage("assets/Przeciwnicy/Szczurzak.png")
  Szczurzak2=loadImage("assets/Przeciwnicy/Szczurzak2.png")
  SzczurzakCios=loadImage("assets/Przeciwnicy/SzczurzakCios.png")
  SzczurzakCiosL=loadImage("assets/Przeciwnicy/SzczurzakCiosL.png")
  SzczurzakL=loadImage("assets/Przeciwnicy/SzczurzakL.png")
  SzczurzakL2=loadImage("assets/Przeciwnicy/SzczurzakL2.png")
  Wilkor=loadImage("assets/Przeciwnicy/Wilkor.png")
  Wilkor2=loadImage("assets/Przeciwnicy/Wilkor2.png")
  WilkorCios=loadImage("assets/Przeciwnicy/WilkorCios.png")
  WilkorCiosL=loadImage("assets/Przeciwnicy/WilkorCiosL.png")
  WilkorL=loadImage("assets/Przeciwnicy/WilkorL.png")
  WilkorL2=loadImage("assets/Przeciwnicy/WilkorL2.png")
  


  Butelka=loadImage("assets/Przedmioty/Surowce/Butelka.png")
  Jedzenie=loadImage("assets/Przedmioty/Surowce/Jedzenie.png")
  Kreda=loadImage("assets/Przedmioty/Surowce/Kreda.png")
  PomaranczowyOwoc=loadImage("assets/Przedmioty/Surowce/PomaranczowyOwoc.png")
  Swieca=loadImage("assets/Przedmioty/Surowce/Swieca.png")
  ZestawOdczynnikow=loadImage("assets/Przedmioty/Surowce/ZestawOdczynnikow.png")
  Zlom=loadImage("assets/Przedmioty/Surowce/Zlom.png")
  ZloteJablko=loadImage("assets/Przedmioty/Surowce/ZloteJablko.png")
  ZwyklyRdzenMagiczny=loadImage("assets/Przedmioty/Surowce/ZwyklyRdzenMagiczny.png")
  
  
  Ksiega2Broni=loadImage("assets/Przedmioty/Ksiegi/Ksiega2Broni.png")
  KsiegaAlchemii1=loadImage("assets/Przedmioty/Ksiegi/KsiegaAlchemii1.png")
  KsiegaAspektuOgnia=loadImage("assets/Przedmioty/Ksiegi/KsiegaAspektuOgnia.png")
  KsiegaAspektuPowietrza=loadImage("assets/Przedmioty/Ksiegi/KsiegaAspektuPowietrza.png")
  KsiegaAspektuWody=loadImage("assets/Przedmioty/Ksiegi/KsiegaAspektuWody.png")
  KsiegaAspektuZiemi=loadImage("assets/Przedmioty/Ksiegi/KsiegaAspektuZiemi.png")
  KsiegaBezBroni=loadImage("assets/Przedmioty/Ksiegi/KsiegaBezBroni.png")
  KsiegaBroniPalnej=loadImage("assets/Przedmioty/Ksiegi/KsiegaBroniPalnej.png")
  KsiegaGolemancji=loadImage("assets/Przedmioty/Ksiegi/KsiegaGolemancji.png")
  KsiegaIluzji=loadImage("assets/Przedmioty/Ksiegi/KsiegaIluzji.png")
  KsiegaKuszy=loadImage("assets/Przedmioty/Ksiegi/KsiegaKuszy.png")
  KsiegaLacznosciZMagia=loadImage("assets/Przedmioty/Ksiegi/KsiegaLacznosciZMagia.png")
  KsiegaLukow=loadImage("assets/Przedmioty/Ksiegi/KsiegaLukow.png")
  KsiegaMagiiCienia1=loadImage("assets/Przedmioty/Ksiegi/KsiegaMagiiCienia1.png")
  KsiegaMagiiMrozu1=loadImage("assets/Przedmioty/Ksiegi/KsiegaMagiiMrozu1.png")
  KsiegaMagiiOgnia1=loadImage("assets/Przedmioty/Ksiegi/KsiegaMagiiOgnia1.png")
  KsiegaMagiiPiorunow1=loadImage("assets/Przedmioty/Ksiegi/KsiegaMagiiPiorunow1.png")
  KsiegaMechaniki=loadImage("assets/Przedmioty/Ksiegi/KsiegaMechaniki.png")
  KsiegaMieczy=loadImage("assets/Przedmioty/Ksiegi/KsiegaMieczy.png")
  KsiegaMlotow=loadImage("assets/Przedmioty/Ksiegi/KsiegaMlotow.png")
  KsiegaMuzyki=loadImage("assets/Przedmioty/Ksiegi/KsiegaMuzyki.png")
  KsiegaNekromancji=loadImage("assets/Przedmioty/Ksiegi/KsiegaNekromancji.png")
  KsiegaObrzedowChaosu=loadImage("assets/Przedmioty/Ksiegi/KsiegaObrzedowChaosu.png")
  KsiegaObrzedowDruidystycznych=loadImage("assets/Przedmioty/Ksiegi/KsiegaObrzedowDruidystycznych.png")
  KsiegaObrzedowLadu=loadImage("assets/Przedmioty/Ksiegi/KsiegaObrzedowLadu.png")
  KsiegaObrzedowSzamanistycznych=loadImage("assets/Przedmioty/Ksiegi/KsiegaObrzedowSzamanistycznych.png")
  KsiegaOszczepow=loadImage("assets/Przedmioty/Ksiegi/KsiegaOszczepow.png")
  KsiegaPancerzy=loadImage("assets/Przedmioty/Ksiegi/KsiegaPancerzy.png")
  KsiegaParowania=loadImage("assets/Przedmioty/Ksiegi/KsiegaParowania.png")
  KsiegaPercepcji=loadImage("assets/Przedmioty/Ksiegi/KsiegaPercepcji.png")
  KsiegaPerfidnychSztuczek=loadImage("assets/Przedmioty/Ksiegi/KsiegaPerfidnychSztuczek.png")
  KsiegaPrzemiany=loadImage("assets/Przedmioty/Ksiegi/KsiegaPrzemiany.png")
  KsiegaPrzywolywania=loadImage("assets/Przedmioty/Ksiegi/KsiegaPrzywolywania.png")
  KsiegaPrzyzwaniaDemonow1=loadImage("assets/Przedmioty/Ksiegi/KsiegaPrzyzwaniaDemonow1.png")
  KsiegaPrzyzwaniaGolemow1=loadImage("assets/Przedmioty/Ksiegi/KsiegaPrzyzwaniaGolemow1.png")
  KsiegaSztyletow=loadImage("assets/Przedmioty/Ksiegi/KsiegaSztyletow.png")
  KsiegaTarczy=loadImage("assets/Przedmioty/Ksiegi/KsiegaTarczy.png")
  KsiegaToporow=loadImage("assets/Przedmioty/Ksiegi/KsiegaToporow.png")
  KsiegaUnikow=loadImage("assets/Przedmioty/Ksiegi/KsiegaUnikow.png")
  KsiegaWloczni=loadImage("assets/Przedmioty/Ksiegi/KsiegaWloczni.png")
  KsiegaWskrzeszania1=loadImage("assets/Przedmioty/Ksiegi/KsiegaWskrzeszania1.png")
  KsiegaZbroiParowej=loadImage("assets/Przedmioty/Ksiegi/KsiegaZbroiParowej.png")
  ModlitewnikMsciciela1=loadImage("assets/Przedmioty/Ksiegi/ModlitewnikMsciciela1.png")
  ModlitewnikSprawiedliwej1=loadImage("assets/Przedmioty/Ksiegi/ModlitewnikSprawiedliwej1.png")
  Necronomicon=loadImage("assets/Przedmioty/Ksiegi/Necronomicon.png")
  PolowyModlitewnikObroncy1=loadImage("assets/Przedmioty/Ksiegi/PolowyModlitewnikObroncy1.png")
  StaryDziennik=loadImage("assets/Przedmioty/Ksiegi/StaryDziennik.png")


  AmuletMatki=loadImage("assets/Przedmioty/Inne/AmuletMatki.png")
  AmuletMsciciela=loadImage("assets/Przedmioty/Inne/AmuletMsciciela.png")
  AmuletObroncy=loadImage("assets/Przedmioty/Inne/AmuletObroncy.png")
  AmuletPoszukujacego=loadImage("assets/Przedmioty/Inne/AmuletPoszukujacego.png")
  AmuletSprawiedliwej=loadImage("assets/Przedmioty/Inne/AmuletSprawiedliwej.png")
  AmuletZaglady=loadImage("assets/Przedmioty/Inne/AmuletZaglady.png")
  BebenWojny=loadImage("assets/Przedmioty/Inne/BebenWojny.png")
  FletUnikow=loadImage("assets/Przedmioty/Inne/FletUnikow.png")
  MonetaDuchow=loadImage("assets/Przedmioty/Inne/MonetaDuchow.png")
  RogMysliwego=loadImage("assets/Przedmioty/Inne/RogMysliwego.png")
  Trucizna=loadImage("assets/Przedmioty/Inne/Trucizna.png")
  ZestawAnalityczny=loadImage("assets/Przedmioty/Inne/ZestawAnalityczny.png")
  
  
  Mikstura1=loadImage("assets/Przedmioty/Potiony/Mikstura1.png")
  Mikstura2=loadImage("assets/Przedmioty/Potiony/Mikstura2.png")
  Mikstura3=loadImage("assets/Przedmioty/Potiony/Mikstura3.png")
  Mikstura4=loadImage("assets/Przedmioty/Potiony/Mikstura4.png")
  Mikstura5=loadImage("assets/Przedmioty/Potiony/Mikstura5.png")
  Mikstura6=loadImage("assets/Przedmioty/Potiony/Mikstura6.png")
  Mikstura7=loadImage("assets/Przedmioty/Potiony/Mikstura7.png")
  Mikstura8=loadImage("assets/Przedmioty/Potiony/Mikstura8.png")
  Mikstura9=loadImage("assets/Przedmioty/Potiony/Mikstura9.png")
  Mikstura10=loadImage("assets/Przedmioty/Potiony/Mikstura10.png")
  Mikstura11=loadImage("assets/Przedmioty/Potiony/Mikstura11.png")
  Mikstura12=loadImage("assets/Przedmioty/Potiony/Mikstura12.png")
  Mikstura13=loadImage("assets/Przedmioty/Potiony/Mikstura13.png")
  
  
  AugumentowanaZelaznaZbroja=loadImage("assets/Przedmioty/Pancerz/AugumentowanaZelaznaZbroja.png")
  CwiekowanaZbroja=loadImage("assets/Przedmioty/Pancerz/CwiekowanaZbroja.png")
  Kapelusz=loadImage("assets/Przedmioty/Pancerz/Kapelusz.png")
  LekkaZelaznaZbroja=loadImage("assets/Przedmioty/Pancerz/LekkaZelaznaZbroja.png")
  Plaszcz=loadImage("assets/Przedmioty/Pancerz/Plaszcz.png")
  PlaszczMaga=loadImage("assets/Przedmioty/Pancerz/PlaszczMaga.png")
  SkorzanaZbroja=loadImage("assets/Przedmioty/Pancerz/SkorzanaZbroja.png")
  SkorzanyHelm=loadImage("assets/Przedmioty/Pancerz/SkorzanyHelm.png")
  Szata=loadImage("assets/Przedmioty/Pancerz/Szata.png")
  ZbrojaZakonuTrzechPaskow=loadImage("assets/Przedmioty/Pancerz/ZbrojaZakonuTrzechPaskow.png")
  ZelaznaZbroja=loadImage("assets/Przedmioty/Pancerz/ZelaznaZbroja.png")
  ZelaznyHelm=loadImage("assets/Przedmioty/Pancerz/ZelaznyHelm.png")
  ZlotyPierscien=loadImage("assets/Przedmioty/Pancerz/ZlotyPierscien.png")
  ZlotyPierscienKamien1=loadImage("assets/Przedmioty/Pancerz/ZlotyPierscienKamien1.png")
  ZlotyPierscienKamien2=loadImage("assets/Przedmioty/Pancerz/ZlotyPierscienKamien2.png")
  ZlotyPierscienKamien3=loadImage("assets/Przedmioty/Pancerz/ZlotyPierscienKamien3.png")
  ZlotyPierscienKamien4=loadImage("assets/Przedmioty/Pancerz/ZlotyPierscienKamien4.png")
  
  
  DrewnianyPawez=loadImage("assets/Przedmioty/Bron/DrewnianyPawez.png")
  DzialoReczne=loadImage("assets/Przedmioty/Bron/DzialoReczne.png")
  Kosciany2Rmiecz=loadImage("assets/Przedmioty/Bron/Kosciany2Rmiecz.png")
  Kosciany2Rtopor=loadImage("assets/Przedmioty/Bron/Kosciany2Rtopor.png")
  KoscianySztylet=loadImage("assets/Przedmioty/Bron/KoscianySztylet.png")
  KoscianyTopor=loadImage("assets/Przedmioty/Bron/KoscianyTopor.png")
  Kostur=loadImage("assets/Przedmioty/Bron/Kostur.png")
  KrotkiLuk=loadImage("assets/Przedmioty/Bron/KrotkiLuk.png")
  LekkiOszczep=loadImage("assets/Przedmioty/Bron/LekkiOszczep.png")
  Lom=loadImage("assets/Przedmioty/Bron/Lom.png")
  Muszkiet=loadImage("assets/Przedmioty/Bron/Muszkiet.png")
  OkutaTarcza=loadImage("assets/Przedmioty/Bron/OkutaTarcza.png")
  Siec=loadImage("assets/Przedmioty/Bron/Siec.png")
  SwieconaLanca=loadImage("assets/Przedmioty/Bron/SwieconaLanca.png")
  SwieconaWlocznia=loadImage("assets/Przedmioty/Bron/SwieconaWlocznia.png")
  Swiecony2Rmiecz=loadImage("assets/Przedmioty/Bron/Swiecony2Rmiecz.png")
  Swiecony2Rmlot=loadImage("assets/Przedmioty/Bron/Swiecony2Rmlot.png")
  Swiecony2Rtopor=loadImage("assets/Przedmioty/Bron/Swiecony2Rtopor.png")
  SwieconyMiecz=loadImage("assets/Przedmioty/Bron/SwieconyMiecz.png")
  SwieconyMlot=loadImage("assets/Przedmioty/Bron/SwieconyMlot.png")
  ZatrutyNozDoRzucania=loadImage("assets/Przedmioty/Bron/ZatrutyNozDoRzucania.png")
  ZelanyTopor=loadImage("assets/Przedmioty/Bron/ZelanyTopor.png")
  ZelaznaHalabarda=loadImage("assets/Przedmioty/Bron/ZelaznaHalabarda.png")
  ZelaznaLanca=loadImage("assets/Przedmioty/Bron/ZelaznaLanca.png")
  ZelaznaTarcza=loadImage("assets/Przedmioty/Bron/ZelaznaTarcza.png")
  ZelaznaWlocznia=loadImage("assets/Przedmioty/Bron/ZelaznaWlocznia.png")
  Zelazny2Rmiecz=loadImage("assets/Przedmioty/Bron/Zelazny2Rmiecz.png")
  Zelazny2Rmlot=loadImage("assets/Przedmioty/Bron/Zelazny2Rmlot.png")
  Zelazny2Rtopor=loadImage("assets/Przedmioty/Bron/Zelazny2Rtopor.png")
  ZelaznyMiecz=loadImage("assets/Przedmioty/Bron/ZelaznyMiecz.png")
  ZelaznyMlot=loadImage("assets/Przedmioty/Bron/ZelaznyMlot.png")
  ZelaznyMorgensztern=loadImage("assets/Przedmioty/Bron/ZelaznyMorgensztern.png")
  ZelaznyNozDoRzucania=loadImage("assets/Przedmioty/Bron/ZelaznyNozDoRzucania.png")
  ZelaznyOszczep=loadImage("assets/Przedmioty/Bron/ZelaznyOszczep.png")
  ZelaznyPawez=loadImage("assets/Przedmioty/Bron/ZelaznyPawez.png")
  ZelaznyPuklerz=loadImage("assets/Przedmioty/Bron/ZelaznyPuklerz.png")
  ZelaznySztylet=loadImage("assets/Przedmioty/Bron/ZelaznySztylet.png")
  ZelaznyTopor=loadImage("assets/Przedmioty/Bron/ZelaznyTopor.png")


  damage3=loadSound("assets/SFX/damage3.mp3")
  //All sound effects were made by Taira Komori, and are free to use. You can find them on this website: http://taira-komori.jpn.org/freesounden.html


  mapa=loadTable("assets/mapa.csv")
  Bron=loadTable("assets/Tabele/Bron.csv")
  Czlowiek=loadTable("assets/Tabele/Czlowiek.csv")
  Inne=loadTable("assets/Tabele/Inne.csv")
  Ksiegi=loadTable("assets/Tabele/Ksiegi.csv")
  Mikstury=loadTable("assets/Tabele/Mikstury.csv")
  Pancerz=loadTable("assets/Tabele/Pancerz.csv")
  Potiony=loadTable("assets/Tabele/Potiony.csv")
  Surowce=loadTable("assets/Tabele/Surowce.csv")
 

  A=loadImage("assets/TilesetLochy/A.png")
  Aczaszka=loadImage("assets/TilesetLochy/Aczaszka.png")
  Aoczy=loadImage("assets/TilesetLochy/Aoczy.png")
  Apochodnia=loadImage("assets/TilesetLochy/Apochodnia.png")
  Apochodnia2=loadImage("assets/TilesetLochy/Apochodnia2.png")
  Aroslina=loadImage("assets/TilesetLochy/Aroslina.png")
  Aroslinapomarancz=loadImage("assets/TilesetLochy/Aroslinapomarancz.png")
  Asiec=loadImage("assets/TilesetLochy/Asiec.png")
  Awoda=loadImage("assets/TilesetLochy/Awoda.png")
  Awoda2=loadImage("assets/TilesetLochy/Awoda2.png")
  B=loadImage("assets/TilesetLochy/B.png")
  C=loadImage("assets/TilesetLochy/C.png")
  D=loadImage("assets/TilesetLochy/D.png")
  Drzwi=loadImage("assets/TilesetLochy/Drzwi.png")
  Drzwi2Dol=loadImage("assets/TilesetLochy/Drzwi2Dol.png")
  Drzwi2Gora=loadImage("assets/TilesetLochy/Drzwi2Gora.png")
  E=loadImage("assets/TilesetLochy/E.png")
  F=loadImage("assets/TilesetLochy/F.png")
  G=loadImage("assets/TilesetLochy/G.png")
  H=loadImage("assets/TilesetLochy/H.png")
  I=loadImage("assets/TilesetLochy/I.png")
  J=loadImage("assets/TilesetLochy/J.png")
  K=loadImage("assets/TilesetLochy/K.png")
  L=loadImage("assets/TilesetLochy/L.png")
  M=loadImage("assets/TilesetLochy/M.png")
  N=loadImage("assets/TilesetLochy/N.png")
  O=loadImage("assets/TilesetLochy/O.png")
  P=loadImage("assets/TilesetLochy/P.png")
  Pole=loadImage("assets/TilesetLochy/Pole.png")
  PoleGrzyb=loadImage("assets/TilesetLochy/PoleGrzyb.png")
  PoleGrzyb2=loadImage("assets/TilesetLochy/PoleGrzyb2.png")
  PoleKredaKolo=loadImage("assets/TilesetLochy/PoleKredaKolo.png")
  PoleKredaPionowo=loadImage("assets/TilesetLochy/PoleKredaPionowo.png")
  PoleKredaPoziomo=loadImage("assets/TilesetLochy/PoleKredaPoziomo.png")
  PoleTrawa=loadImage("assets/TilesetLochy/PoleTrawa.png")
  Q=loadImage("assets/TilesetLochy/Q.png")
  R=loadImage("assets/TilesetLochy/R.png")
  S=loadImage("assets/TilesetLochy/S.png")
  SchodyD=loadImage("assets/TilesetLochy/SchodyD.png")
  Start=loadImage("assets/TilesetLochy/Start.png")
  T=loadImage("assets/TilesetLochy/T.png")
  U=loadImage("assets/TilesetLochy/U.png")
  V=loadImage("assets/TilesetLochy/V.png")
  W=loadImage("assets/TilesetLochy/W.png")
  WodaA=loadImage("assets/TilesetLochy/WodaA.png")
  WodaB=loadImage("assets/TilesetLochy/WodaB.png")
  WodaC=loadImage("assets/TilesetLochy/WodaC.png")
  WodaD=loadImage("assets/TilesetLochy/WodaD.png")
  WodaE=loadImage("assets/TilesetLochy/WodaE.png")
  WodaF=loadImage("assets/TilesetLochy/WodaF.png")
  WodaG=loadImage("assets/TilesetLochy/WodaG.png")
  WodaH=loadImage("assets/TilesetLochy/WodaH.png")
  WodaI=loadImage("assets/TilesetLochy/WodaI.png")
  WodaJ=loadImage("assets/TilesetLochy/WodaJ.png")
  WodaK=loadImage("assets/TilesetLochy/WodaK.png")
  WodaL=loadImage("assets/TilesetLochy/WodaL.png")
  WodaM=loadImage("assets/TilesetLochy/WodaM.png")
  WodaN=loadImage("assets/TilesetLochy/WodaN.png")
  WodaNakladkaAFMP=loadImage("assets/TilesetLochy/WodaNakladkaAFMP.png")
  WodaNakladkaBDGL=loadImage("assets/TilesetLochy/WodaNakladkaBDGL.png")
  WodaNakladkaCEHN=loadImage("assets/TilesetLochy/WodaNakladkaCEHN.png")
  WodaNakladkaIJKO=loadImage("assets/TilesetLochy/WodaNakladkaIJKO.png")
  WodaO=loadImage("assets/TilesetLochy/WodaO.png")
  WodaP=loadImage("assets/TilesetLochy/WodaP.png")
  X=loadImage("assets/TilesetLochy/X.png")
  Y=loadImage("assets/TilesetLochy/Y.png")
  Z=loadImage("assets/TilesetLochy/Z.png")


  Akcja=loadImage("assets/UI/Akcja.png")
  BlyskCzerwony=loadImage("assets/UI/BlyskCzerwony.png")
  BlyskNiebieski=loadImage("assets/UI/BlyskNiebieski.png")
  BlyskRozowy=loadImage("assets/UI/BlyskRozowy.png")
  BlyskZielony=loadImage("assets/UI/BlyskZielony.png")
  BlyskZolty=loadImage("assets/UI/BlyskZolty.png")
  FillerUI=loadImage("assets/UI/FillerUI.png")
  Glod=loadImage("assets/UI/Glod.png")
  OkienkoObokKursora=loadImage("assets/UI/OkienkoObokKursora.png")
  OkienkoSrodekEkranu=loadImage("assets/UI/OkienkoSrodekEkranu.png")
  PasekLewoCalyEkran=loadImage("assets/UI/PasekLewoCalyEkran.png")
  PasekLewoDol=loadImage("assets/UI/PasekLewoDol.png")
  PasekLewoGora=loadImage("assets/UI/PasekLewoGora.png")
  PasekLewoGora1=loadImage("assets/UI/PasekLewoGora1.png")
  PasekLewoGora2=loadImage("assets/UI/PasekLewoGora2.png")
  PasekLewoGora3=loadImage("assets/UI/PasekLewoGora3.png")
  PasekLewoGora4=loadImage("assets/UI/PasekLewoGora4.png")
  PasekLewoGora5=loadImage("assets/UI/PasekLewoGora5.png")
  PasekLewoGora6=loadImage("assets/UI/PasekLewoGora6.png")
  Poziom0=loadImage("assets/UI/Poziom0.png")
  Poziom1=loadImage("assets/UI/Poziom1.png")
  Poziom2=loadImage("assets/UI/Poziom2.png")
  Poziom3=loadImage("assets/UI/Poziom3.png")
  Poziom4=loadImage("assets/UI/Poziom4.png")
  Poziom5=loadImage("assets/UI/Poziom5.png")
  Poziom6=loadImage("assets/UI/Poziom6.png")
  PrzedmiotyKoniec=loadImage("assets/UI/PrzedmiotyKoniec.png")
  PrzedmiotyPoczatek=loadImage("assets/UI/PrzedmiotyPoczatek.png")
  PrzedmiotyPuste=loadImage("assets/UI/PrzedmiotyPuste.png")
  PrzedmiotySrodek=loadImage("assets/UI/PrzedmiotySrodek.png")
  Przejedzenie=loadImage("assets/UI/Przejedzenie.png")
  PusteKoniec=loadImage("assets/UI/PusteKoniec.png")
  PustePoczatek=loadImage("assets/UI/PustePoczatek.png")
  PustePuste=loadImage("assets/UI/PustePuste.png")
  PusteSrodek=loadImage("assets/UI/PusteSrodek.png")
  UmiejetnosciKoniec=loadImage("assets/UI/UmiejetnosciKoniec.png")
  UmiejetnosciPoczatek=loadImage("assets/UI/UmiejetnosciPoczatek.png")
  UmiejetnosciPuste=loadImage("assets/UI/UmiejetnosciPuste.png")
  UmiejetnosciSrodek=loadImage("assets/UI/UmiejetnosciSrodek.png")
  Zaglodzenie=loadImage("assets/UI/Zaglodzenie.png")
  Zaznaczenie=loadImage("assets/UI/Zaznaczenie.png")
  Zaznaczenie2=loadImage("assets/UI/Zaznaczenie2.png")
  Zdolnosci1=loadImage("assets/UI/Zdolnosci1.png")
  Zdolnosci2=loadImage("assets/UI/Zdolnosci2.png")
  Zdolnosci3=loadImage("assets/UI/Zdolnosci3.png")
  Zdolnosci4=loadImage("assets/UI/Zdolnosci4.png")


  FOW=loadImage("assets/Wspolne/FOW.png")
  Monety=loadImage("assets/Wspolne/Monety.png")
  PrzedmiotZiemia=loadImage("assets/Wspolne/PrzedmiotZiemia.png")
  Skrzynia=loadImage("assets/Wspolne/Skrzynia.png")
  SkrzyniaO=loadImage("assets/Wspolne/SkrzyniaO.png")
  Znak=loadImage("assets/Wspolne/Znak.png")

}

function setup() {
  noSmooth()
  var kierunek
  var powierzchnia
  var roomrandoming
  var potionrandoming
  URLParams=getURLParams()
  URLPath=getURLPath()
  if(URLPath[2]=="guest.php"){
    if(URLParams.Seed!=undefined||URLParams.klasa!=undefined){
      window.location.assign("guest.php")
    }
  }
  randomSeed(URLParams.Seed)
  damage3.setVolume(0.8)
  BronR=Bron.getRowCount()
  BronC=Bron.getColumnCount()
  CzlowiekR=Czlowiek.getRowCount()
  CzlowiekC=Czlowiek.getColumnCount()
  InneR=Inne.getRowCount()
  InneC=Inne.getColumnCount()
  KsiegiR=Ksiegi.getRowCount()
  KsiegiC=Ksiegi.getColumnCount()
  MiksturyR=Mikstury.getRowCount()
  MiksturyC=Mikstury.getColumnCount()
  PancerzR=Pancerz.getRowCount()
  PancerzC=Pancerz.getColumnCount()
  PotionyR=Potiony.getRowCount()
  PotionyC=Potiony.getColumnCount()
  SurowceR=Surowce.getRowCount()
  SurowceC=Surowce.getColumnCount()
  d =floor(windowWidth/32)
  w =floor(windowHeight/32)
  d-=d%2
  w-=(w+1)%2
  d2=d/2+2
  w2=(w-1)/2
  dc=floor((windowWidth-(d*32))/2)
  wc=floor((windowHeight-(w*32))/2)
  createCanvas(windowWidth,windowHeight)
  x =(mapa.getRowCount()-1)/2
  y =(mapa.getColumnCount()-1)/2
  for(var i=0;i<x*2;i++){
    for(var j=0;j<y*2;j++){
      mapa.setNum(i,j,0)
    }
  }
  for(var i=0;i<30;i++){
    efekty[i]=0
  }
  a[0]=x
  b[0]=y
  c[0]=0
  e[0]=0
  mapa.setNum(x,y,4)
  for(var k=1;k<512;k++){
    a[k]=floor(random(50,x*2-50))
    b[k]=floor(random(50,y*2-50))
    c[k]=floor(random(2,9))
    e[k]=floor(random(2,9))
    for(var i=0;i<k;i++){
      if((a[k]-a[i])*(a[k]-a[i])<(c[k]+c[i]+3)*(c[k]+c[i]+3)&&(b[k]-b[i])*(b[k]-b[i])<(e[k]+e[i]+3)*(e[k]+e[i]+3)){
        a[k]=floor(random(50,x*2-50))
        b[k]=floor(random(50,y*2-50))
        c[k]=floor(random(2,9))
        e[k]=floor(random(2,9))
        i=-1
      }
    }
    for(var i=a[k]-c[k];i<=a[k]+c[k];i++){
      for(var j=b[k]-e[k];j<=b[k]+e[k];j++){
			    mapa.setNum(i,j,10)
      }
    }
    pw=a[k]
    pd=b[k]
    while((mapa.getNum(pw+1,pd)%10==0&&mapa.getNum(pw-1,pd)%10==0&&mapa.getNum(pw,pd+1)%10==0)||(mapa.getNum(pw+1,pd)%10==0&&mapa.getNum(pw-1,pd)%10==0&&mapa.getNum(pw,pd-1)%10==0)||(mapa.getNum(pw+1,pd)%10==0&&mapa.getNum(pw,pd+1)%10==0&&mapa.getNum(pw,pd-1)%10==0)||(mapa.getNum(pw-1,pd)%10==0&&mapa.getNum(pw,pd+1)%10==0&&mapa.getNum(pw,pd-1)%10==0)){
      kierunek=floor(random(4))
      if(kierunek==0&&pw<a[k-1]){
        pw++
        mapa.setNum(pw,pd,4)
      }
      if(kierunek==1&&pw>a[k-1]){
        pw--
        mapa.setNum(pw,pd,4)
      }
      if(kierunek==2&&pd<b[k-1]){
        pd++
        mapa.setNum(pw,pd,4)
      }
      if(kierunek==3&&pd>b[k-1]){
        pd--
        mapa.setNum(pw,pd,4)
      }
    }
    for(var i=a[k]-c[k];i<=a[k]+c[k];i++){
      for(var j=b[k]-e[k];j<=b[k]+e[k];j++){
			    mapa.setNum(i,j,4)
      }
    }
		roomrandoming=(floor(random(5)))
    if(roomrandoming==1){
      mapa.setNum(a[k],b[k],34)
      powierzchnia=((c[k]*2+1)*(e[k]*2+1)-1)/2
      for(var i=0;i<powierzchnia;i++){
        pw=floor(random(a[k]-c[k],a[k]+c[k]+1))
        pd=floor(random(b[k]-e[k],b[k]+e[k]+1))
        while(mapa.getNum(pw,pd)==34||(mapa.getNum(pw-1,pd)!=34&&mapa.getNum(pw+1,pd)!=34&&mapa.getNum(pw,pd-1)!=34&&mapa.getNum(pw,pd+1)!=34)){
          pw=floor(random(a[k]-c[k],a[k]+c[k]+1))
          pd=floor(random(b[k]-e[k],b[k]+e[k]+1))
        }
        mapa.setNum(pw,pd,34)
      }
	        
    }
    if(roomrandoming%2==0){
      mapa.setNum(a[k],b[k],44)
      powierzchnia=((c[k]*2+1)*(e[k]*2+1)-1)/2
      for(var i=0;i<powierzchnia;i++){
        pw=floor(random(a[k]-c[k],a[k]+c[k]+1))
        pd=floor(random(b[k]-e[k],b[k]+e[k]+1))
        while(mapa.getNum(pw,pd)==44||(mapa.getNum(pw-1,pd)!=44&&mapa.getNum(pw+1,pd)!=44&&mapa.getNum(pw,pd-1)!=44&&mapa.getNum(pw,pd+1)!=44)){
          pw=floor(random(a[k]-c[k],a[k]+c[k]+1))
          pd=floor(random(b[k]-e[k],b[k]+e[k]+1))
        }
        mapa.setNum(pw,pd,44)
      }
      for(var i=a[k]-c[k];i<=a[k]+c[k];i++){
        for(var j=b[k]-e[k];j<=b[k]+e[k];j++){
			    if(mapa.getNum(i,j)%10==4&&mapa.getNum(i-1,j)!=4&&mapa.getNum(i+1,j)!=4&&mapa.getNum(i,j-1)!=4&&mapa.getNum(i+1,j+1)!=4&&mapa.getNum(i-1,j-1)!=4&&mapa.getNum(i+1,j-1)!=4&&mapa.getNum(i+1,j-1)!=4&&mapa.getNum(i,j+1)!=4&&mapa.getNum(i-1,j)!=64&&mapa.getNum(i+1,j)!=64&&mapa.getNum(i,j-1)!=64&&mapa.getNum(i,j+1)!=64&&mapa.getNum(i+1,j+1)!=64&&mapa.getNum(i-1,j-1)!=64&&mapa.getNum(i+1,j-1)!=64&&mapa.getNum(i-1,j+1)!=64&&mapa.getNum(i-2,j)!=64&&mapa.getNum(i+2,j)!=64&&mapa.getNum(i,j-2)!=64&&mapa.getNum(i,j+2)!=64&&mapa.getNum(i-1,j)!=84&&mapa.getNum(i+1,j)!=84&&mapa.getNum(i,j-1)!=84&&mapa.getNum(i,j+1)!=84&&mapa.getNum(i+1,j+1)!=84&&mapa.getNum(i-1,j-1)!=84&&mapa.getNum(i+1,j-1)!=84&&mapa.getNum(i-1,j+1)!=84&&mapa.getNum(i-2,j)!=84&&mapa.getNum(i+2,j)!=84&&mapa.getNum(i,j-2)!=84&&mapa.getNum(i,j+2)!=84){
			      if(random(2)>1){
			        mapa.setNum(i,j,64)
			      }
			      else{
			        mapa.setNum(i,j,84)
			      }
			    }
        }
      }
    }
    if(random(100)<170){
      mapa.setNum(a[k],b[k],mapa.getNum(a[k],b[k])+1000)
      losujloot(k)
    }
  }
  for(var k=1;k<512;k++){
    for(var i=a[k]-c[k];i<=a[k]+c[k];i++){
      if(mapa.getNum(i,b[k]+e[k]+1)==4&&mapa.getNum(i-1,b[k]+e[k]+1)==0&&mapa.getNum(i+1,b[k]+e[k]+1)==0&&mapa.getNum(i,b[k]+e[k]+2)==4){
        mapa.setNum(i,b[k]+e[k]+1,1)
      }
      if(mapa.getNum(i,b[k]-e[k]-1)==4&&mapa.getNum(i-1,b[k]-e[k]-1)==0&&mapa.getNum(i+1,b[k]-e[k]-1)==0&&mapa.getNum(i,b[k]-e[k]-2)==4){
        mapa.setNum(i,b[k]-e[k]-1,1)
      }
    }
    for(var i=b[k]-e[k];i<=b[k]+e[k];i++){
      if(mapa.getNum(a[k]+c[k]+1,i)==4&&mapa.getNum(a[k]+c[k]+1,i-1)==0&&mapa.getNum(a[k]+c[k]+1,i+1)==0&&mapa.getNum(a[k]+c[k]+2,i)==4){
         mapa.setNum(a[k]+c[k]+1,i,1)
      }
      if(mapa.getNum(a[k]-c[k]-1,i)==4&&mapa.getNum(a[k]-c[k]-1,i-1)==0&&mapa.getNum(a[k]-c[k]-1,i+1)==0&&mapa.getNum(a[k]-c[k]-2,i)==4){
        mapa.setNum(a[k]-c[k]-1,i,1)
      }
    }
  }
  mapa.setNum(x,y,1000014)
  mapa.setNum(a[1],b[1],24)
  fow()
  rasa=0
  if(URLParams.klasa==undefined){
    klasa=floor(random(CzlowiekR))
  }
  if(rasa==0){
    for(var i=0;i<CzlowiekR;i++){
      if(klasa==i||URLParams.klasa==str(Czlowiek.getString(i,0))||URLParams.klasa==i){
        klasa=i
        Hero=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+".png")
        Hero2=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"2.png")
        HeroCios=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"Cios.png")
        HeroCiosL=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"CiosL.png")
        HeroL=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"L.png")
        HeroL2=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"L2.png")
        HeroMagia=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"Magia.png")
        HeroMagiaL=loadImage("assets/Czlowiek/"+Czlowiek.getString(i,0)+"MagiaL.png")
        for(var j=0;j<4;j++){
         staty[j]=Czlowiek.getNum(i,1+j)
        }
        hp=staty[0]
        for(var j=0;j<32;j++){
          skille[j]=Czlowiek.getNum(i,5+j)
        }
        ileabilitek=Czlowiek.getNum(i,37)
        for(var j=0;j<ileabilitek;j++){
          abilitki[j]=Czlowiek.getNum(i,38+j)
        }
        ileitemow=Czlowiek.getNum(i,38+ileabilitek)
        freeakcja=Czlowiek.getNum(i,39+ileabilitek)
        for(var j=0;j<ileitemow;j++){
          itemy[j]=Czlowiek.getNum(i,40+ileabilitek+j*2)
          stack[j]=Czlowiek.getNum(i,41+ileabilitek+j*2)
          if(freeakcja>0){
            akcjaprzedmiot(j)
          }
        }
      }
    }
    if(klasa==undefined){
      window.location.assign("../")
    }
  }
  for(i=0;i<PotionyR;i++){
    potionrandoming=floor(random(MiksturyR))
    for(var j=0;j<i;j++){
      if(Potiony.getNum(j,3)==potionrandoming){
        potionrandoming=floor(random(MiksturyR))
        j=0
      }
    }
    Potiony.setNum(i,3,potionrandoming)
    potionrandoming=floor(random(mixy))
    for(var j=0;j<i;j++){
      if(Potiony.getNum(j,0)==potionrandoming){
        potionrandoming=floor(random(mixy))
        j=0
      }
    }
    Potiony.setNum(i,0,potionrandoming)
  }
}


function draw() {
  background(41,16,45)
  fill(255,225,198)
  for(var i=0;i<w*skala;i++){
    imageCenter(FillerUI,0,i*32)
  }
  imageCenter(PasekLewoGora1,0,0)
  for(var i=0;i*64+451<=w*32*skala&&i<5;i++){
    imageCenter(eval("PasekLewoGora"+(i+2)),0,224+i*64)
    if(bindy[i*2]>=0){
      wyswietlitem(itemy[bindy[i*2]],24,241+64*i)
    }
    if(bindy[i*2+1]>=0){
      wyswietlitem(itemy[bindy[i*2+1]],94,241+64*i)
    }
  }
  for(var i=0;i<30;i++){
    wyswietlefekty(i,6+(i%10)*13,181+floor(i/10)*13)
  }
  imageCenter(PasekLewoDol,0,w*32*skala-163)
  fill(45,12,27)
  textSize(10)
  textAlign(RIGHT)
  textCenter(hp,75,50)
	textAlign(LEFT)
	textCenter(staty[0],85,50)
  textCenter(hajs,20,66)
  textCenter(staty[1],25,108)
  textCenter(staty[2],25,128)
  textCenter(staty[3],25,148)
  skalamirror=skala
  scale(skala)
  for(var i=5/skala;i<d;i++){
    for(var j=0;j<w;j++){
      fog=0
      imageCenter(P,i*32,j*32)
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&(mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        switch((x+i-d2+y+j-w2)%20){
          case 4:
          case 16:
            imageCenter(Aczaszka,i*32,j*32)
          break
          case 1:
          case 12:
            imageCenter(Aoczy,i*32,j*32)
          break
          case 8:
          case 19:
            imageCenter(Asiec,i*32,j*32)
          break
          case 2:
          case 6:
          case 10:
          case 14:
          case 18:
            if(millis()%1000<500){
              imageCenter(Apochodnia,i*32,j*32)
            }
            else{
              imageCenter(Apochodnia2,i*32,j*32)
            }
          break
          default:
            if(floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
              if(millis()%1000<500){
                imageCenter(Awoda,i*32,j*32)
              }
              else{
                imageCenter(Awoda2,i*32,j*32)
              }
            }
            else{
              if(floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==4||floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==6||floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==8){
                imageCenter(Aroslinapomarancz,i*32,j*32)
              }
              else{
                if(floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==5||floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==7||floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==9){
                  imageCenter(Aroslina,i*32,j*32)
                }
                else{
                  imageCenter(A,i*32,j*32)
                }
              }
            }
          break
        }
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(B,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(C,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)==0&&(mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4)){
        imageCenter(D,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4)){
        imageCenter(E,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)==0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4)){
        imageCenter(F,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)==0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4)){
        imageCenter(G,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2-1,y+j-w2+1)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4)){
        imageCenter(H,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(I,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4)){
        imageCenter(J,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4)){
        imageCenter(K,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(L,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(M,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(N,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3||mapa.getNum(x+i-d2,y+j-w2+1)%10>4)){
        imageCenter(O,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4||mapa.getNum(x+i-d2,y+j-w2)%10==2||mapa.getNum(x+i-d2,y+j-w2)%10==3){
        imageCenter(Pole,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2-1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2-1,y+j-w2+1)%10>4||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2+1,y+j-w2+1)%10>4)){
        imageCenter(Q,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2+1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2+1,y+j-w2+1)%10>4)){
        imageCenter(R,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)==0&&(mapa.getNum(x+i-d2-1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2-1,y+j-w2+1)%10>4)){
        imageCenter(S,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2+1,y+j-w2+1)%10>4)){
        imageCenter(T,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)!=0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2+1,y+j-w2+1)%10>4||mapa.getNum(x+i-d2-1,y+j-w2)%10==2||mapa.getNum(x+i-d2-1,y+j-w2)%10==3||mapa.getNum(x+i-d2-1,y+j-w2)%10>4)){
        imageCenter(U,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2-1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2-1,y+j-w2+1)%10>4||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2+1,y+j-w2+1)%10>4||mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4)){
        imageCenter(V,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2-1,y+j-w2+1)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2-1,y+j-w2+1)%10>4||mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4)){
        imageCenter(W,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)==0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)!=0&&(mapa.getNum(x+i-d2+1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2+1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2+1,y+j-w2+1)%10>4||mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4)){
        imageCenter(X,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)==0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)!=0&&mapa.getNum(x+i-d2-1,y+j-w2+1)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&(mapa.getNum(x+i-d2+1,y+j-w2)%10==2||mapa.getNum(x+i-d2+1,y+j-w2)%10==3||mapa.getNum(x+i-d2+1,y+j-w2)%10>4||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2-1,y+j-w2+1)%10>4)){
        imageCenter(Y,i*32,j*32)
        fog++
      }
      if(mapa.getNum(x+i-d2,y+j-w2)==0&&mapa.getNum(x+i-d2,y+j-w2-1)!=0&&mapa.getNum(x+i-d2-1,y+j-w2)==0&&mapa.getNum(x+i-d2+1,y+j-w2)==0&&mapa.getNum(x+i-d2-1,y+j-w2+1)!=0&&mapa.getNum(x+i-d2,y+j-w2+1)==0&&mapa.getNum(x+i-d2+1,y+j-w2+1)==0&&(mapa.getNum(x+i-d2,y+j-w2-1)%10==2||mapa.getNum(x+i-d2,y+j-w2-1)%10==3||mapa.getNum(x+i-d2,y+j-w2-1)%10>4||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==2||mapa.getNum(x+i-d2-1,y+j-w2+1)%10==3||mapa.getNum(x+i-d2-1,y+j-w2+1)%10>4)){
        imageCenter(Z,i*32,j*32)
        fog++
      }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
		    imageCenter(WodaA,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
		    imageCenter(WodaB,i*32,j*32)
	    }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
	    	imageCenter(WodaC,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaD,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaE,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaF,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaG,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaH,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
	    	imageCenter(WodaI,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaJ,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	     	imageCenter(WodaK,i*32,j*32)
      }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
	    	imageCenter(WodaL,i*32,j*32)
	    }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
	    	imageCenter(WodaM,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
	    	imageCenter(WodaN,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=3){
	    	imageCenter(WodaO,i*32,j*32)
      }
      if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==3){
	    	imageCenter(WodaP,i*32,j*32)
      }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==1){
        imageCenter(Start,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==2){
        imageCenter(SchodyD,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&(floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==4||floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==5)){
	    	imageCenter(PoleTrawa,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&(floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==6||floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==7)){
	    	imageCenter(PoleGrzyb,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&(floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==8||floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==9)){
	    	imageCenter(PoleGrzyb2,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==10&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==10&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==10&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=10&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=10){
	      imageCenter(PoleKredaPoziomo,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==10&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=10&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=10&&floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==10&&floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==10){
	      imageCenter(PoleKredaPionowo,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==10&&(floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=10||floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=10||floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)==10||floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)==10)&&(floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==10||floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==10||floor(mapa.getNum(x+i-d2,y+j-w2-1)%1000/10)!=10||floor(mapa.getNum(x+i-d2,y+j-w2+1)%1000/10)!=10)){
	      imageCenter(PoleKredaKolo,i*32,j*32)
	    }
      if((mapa.getNum(x+i-d2,y+j-w2)%10==2||mapa.getNum(x+i-d2,y+j-w2)%10==3)&&mapa.getNum(x+i-d2-1,y+j-w2)%10==0&&mapa.getNum(x+i-d2+1,y+j-w2)%10==0){
        imageCenter(Drzwi,i*32,j*32)
      }
      if((mapa.getNum(x+i-d2,y+j-w2)%10==2||mapa.getNum(x+i-d2,y+j-w2)%10==3)&&mapa.getNum(x+i-d2,y+j-w2-1)%10==0&&mapa.getNum(x+i-d2,y+j-w2+1)%10==0){
        imageCenter(Drzwi2Dol,i*32,j*32)
      }
      if((mapa.getNum(x+i-d2,y+j-w2+1)%10==2||mapa.getNum(x+i-d2,y+j-w2+1)%10==3)&&mapa.getNum(x+i-d2,y+j-w2)%10==0&&mapa.getNum(x+i-d2,y+j-w2+2)%10==0){
        imageCenter(Drzwi2Gora,i*32,j*32)
      }
      if(floor(mapa.getNum(x+i-d2,y+j-w2)%1000000/1000)==1&&mapa.getNum(x+i-d2,y+j-w2)%10>4){
        imageCenter(Skrzynia,i*32,j*32)
      }
      if(floor(mapa.getNum(x+i-d2,y+j-w2)%1000000/1000)==2&&mapa.getNum(x+i-d2,y+j-w2)%10>4){
        imageCenter(SkrzyniaO,i*32,j*32)
      }
      if(floor(mapa.getNum(x+i-d2,y+j-w2)%1000000/1000)==3&&mapa.getNum(x+i-d2,y+j-w2)%10>5){
        imageCenter(Monety,i*32,j*32)
      }
      if(floor(mapa.getNum(x+i-d2,y+j-w2)%1000000/1000)>99&&mapa.getNum(x+i-d2,y+j-w2)%10>5){
        imageCenter(PrzedmiotZiemia,i*32,j*32)
      }
	    if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==1){
	      imageCenter(Hero,i*32,j*32)
	    }
	    if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==2){
	      imageCenter(Hero2,i*32,j*32)
	    }
	    if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==3){
	    	imageCenter(HeroL,i*32,j*32)
	    }
	    if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==4){
	    	imageCenter(HeroL2,i*32,j*32)
	    }
		if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==5){
	    	imageCenter(HeroCios,i*32,j*32)
	    }
		if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==6){
	    	imageCenter(HeroCiosL,i*32,j*32)
	    }
		if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==7){
	    	imageCenter(HeroMagia,i*32,j*32)
	    }
		if(floor(mapa.getNum(x+i-d2,y+j-w2)%10000000/1000000)==8){
	    	imageCenter(HeroMagiaL,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2)/1000)>0){
	    	imageCenter(WodaNakladkaAFMP,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2,y+j-w2)/1000)>0){
	    	imageCenter(WodaNakladkaBDGL,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2)/1000)>0){
	    	imageCenter(WodaNakladkaCEHN,i*32,j*32)
	    }
	    if(mapa.getNum(x+i-d2,y+j-w2)%10>4&&floor(mapa.getNum(x+i-d2,y+j-w2)%1000/10)==3&&floor(mapa.getNum(x+i-d2-1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2+1,y+j-w2)%1000/10)!=3&&floor(mapa.getNum(x+i-d2,y+j-w2)/1000)>0){
	    	imageCenter(WodaNakladkaIJKO,i*32,j*32)
	    }
      if(mapa.getNum(x+i-d2,y+j-w2)%10==2||mapa.getNum(x+i-d2,y+j-w2)%10==5||(fog>0&&mapa.getNum(x+i-d2-1,y+j-w2-1)%10!=3&&mapa.getNum(x+i-d2-1,y+j-w2-1)%10!=6&&mapa.getNum(x+i-d2,y+j-w2-1)%10!=3&&mapa.getNum(x+i-d2,y+j-w2-1)%10!=6&&mapa.getNum(x+i-d2+1,y+j-w2-1)%10!=3&&mapa.getNum(x+i-d2+1,y+j-w2-1)%10!=6&&mapa.getNum(x+i-d2-1,y+j-w2)%10!=3&&mapa.getNum(x+i-d2-1,y+j-w2)%10!=6&&mapa.getNum(x+i-d2+1,y+j-w2)%10!=3&&mapa.getNum(x+i-d2+1,y+j-w2)%10!=6&&mapa.getNum(x+i-d2-1,y+j-w2+1)%10!=3&&mapa.getNum(x+i-d2-1,y+j-w2+1)%10!=6&&mapa.getNum(x+i-d2,y+j-w2+1)%10!=3&&mapa.getNum(x+i-d2,y+j-w2+1)%10!=6&&mapa.getNum(x+i-d2+1,y+j-w2+1)%10!=3&&mapa.getNum(x+i-d2+1,y+j-w2+1)%10!=6)){
        imageCenter(FOW,i*32,j*32)
      }
    }
  }
  if(stanokna==0&&(mouseX-(dc*skalamirror))>=160&&(mouseX+(dc*skalamirror))<windowWidth&&(mouseY-(wc*skalamirror))>=0&&(mouseY+(wc*skalamirror))<windowHeight){
    noCursor()
    imageCenter(Zaznaczenie2,16*skala-16+floor((mouseX-(dc*skalamirror)+32-32*skala)/skala/32)*32,floor((mouseY-(wc*skalamirror))/skala/32)*32)
  }
  else{
    cursor()
  }
  if(stanokna==0){
    if((mouseX-(dc*skalamirror))>=160&&(mouseX-(dc*skalamirror))/skala<d2*32&&(((d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)&&(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16))||((mouseX-(dc*skalamirror))/skala>=(d2-1)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32))&&mapa.getNum(x-1,y)>0){
      imageCenter(Akcja,(d2-1)*32,w2*32)
      if((mouseX-(dc*skalamirror))/skala>=(d2-1)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32){
        imageCenter(Zaznaczenie,16*skala-16+floor((mouseX-(dc*skalamirror)+32-32*skala)/skala/32)*32,floor((mouseY-(wc*skalamirror))/skala/32)*32)
      }
    }
    if((mouseX-(dc*skalamirror))/skala>=(d2+1)*32&&(((d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)&&(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16))||((mouseX-(dc*skalamirror))/skala<(d2+2)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32))&&mapa.getNum(x+1,y)>0){
      imageCenter(Akcja,(d2+1)*32,w2*32)
      if((mouseX-(dc*skalamirror))/skala<(d2+2)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32){
        imageCenter(Zaznaczenie,16*skala-16+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32)*32,floor((mouseY-(wc*skalamirror))/skala/32)*32)
      }
    }
    if((mouseY-(wc*skalamirror))/skala<w2*32&&(((w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)&&(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16))||((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala>=(w2-1)*32))&&(mapa.getNum(x,y-1)>0||(mapa.getNum(x,y-1)==0&&mapa.getNum(x,y-2)==0&&mapa.getNum(x+1,y-1)==0&&mapa.getNum(x-1,y-1)==0&&(floor(mapa.getNum(x,y)%1000/10)==4||floor(mapa.getNum(x,y)%1000/10)==6||floor(mapa.getNum(x,y)%1000/10)==8)&&((x+y-1)%20==3||(x+y-1)%20==5||(x+y-1)%20==7||(x+y-1)%20==9||(x+y-1)%20==11||(x+y-1)%20==13||(x+y-1)%20==15||(x+y-1)%20==17||(x+y-1)%20==0)))){
      imageCenter(Akcja,d2*32,(w2-1)*32)
      if((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala>=(w2-1)*32){
        imageCenter(Zaznaczenie,16*skala-16+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32)*32,floor((mouseY-(wc*skalamirror))/skala/32)*32)
      }
    }
    if((mouseY-(wc*skalamirror))/skala>=(w2+1)*32&&(((w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)&&(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16))||((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala<(w2+2)*32))&&mapa.getNum(x,y+1)>0){
      imageCenter(Akcja,d2*32,(w2+1)*32)
      if((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala<(w2+2)*32){
        imageCenter(Zaznaczenie,16*skala-16+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32)*32,floor((mouseY-(wc*skalamirror))/skala/32)*32)
      }
    }
    if((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32){
      imageCenter(Akcja,d2*32,w2*32)
      imageCenter(Zaznaczenie,16*skala-16+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32)*32,floor((mouseY-(wc*skalamirror))/skala/32)*32)
    }
  }
  scale(1/skala)
  if(floor(mapa.getNum(x-d2+0.5*skala-0.5+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32),y-w2+floor((mouseY-(wc*skalamirror))/skala/32))%1000000/1000)>99&&floor(mapa.getNum(x-d2+0.5*skala-0.5+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32),y-w2+floor((mouseY-(wc*skalamirror))/skala/32))%1000000/1000)<1000){
    if(stanokna==0&&mapa.getNum(x-d2+0.5*skala-0.5+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32),y-w2+floor((mouseY-(wc*skalamirror))/skala/32))%10>5&&(mouseX-(dc*skalamirror))>=160&&(mouseX+(dc*skalamirror))<=windowWidth&&(mouseY-(wc*skalamirror))>=0&&(mouseY+(wc*skalamirror))<=windowHeight){
      okno(floor(mapa.getNum(x-d2+0.5*skala-0.5+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32),y-w2+floor((mouseY-(wc*skalamirror))/skala/32))%1000000/1000))
    }
    if(stanokna>0&&mapa.getNum(x-d2+0.5*skala-0.5+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32),y-w2+floor((mouseY-(wc*skalamirror))/skala/32))%10>5&&(mouseX-(dc*skalamirror))>160&&(mouseX+(dc*skalamirror))<=windowWidth&&(mouseY-(wc*skalamirror))>=0&&(mouseY+(wc*skalamirror))<=windowHeight&&((mouseX-(dc*skalamirror))>480||(mouseY-(wc*skalamirror))>257)){
      okno(floor(mapa.getNum(x-d2+0.5*skala-0.5+floor(((mouseX-(dc*skalamirror))+32-32*skala)/skala/32),y-w2+floor((mouseY-(wc*skalamirror))/skala/32))%1000000/1000))
    }
  }
  skalamirror=1
  if(stanokna==1){
    imageCenter(Zdolnosci1,160,0)
    for(var i=0;i<8;i++){
      imageCenter(eval("Poziom"+skille[i]),223+floor(i/4)*155,33+i%4*48)
    }
  }
  if(stanokna==2){
    imageCenter(Zdolnosci2,160,0)
    for(var i=0;i<8;i++){
      imageCenter(eval("Poziom"+skille[8+i]),223+floor(i/4)*155,33+i%4*48)
    }
  }
  if(stanokna==3){
    imageCenter(Zdolnosci3,160,0)
    for(var i=0;i<8;i++){
      imageCenter(eval("Poziom"+skille[16+i]),223+floor(i/4)*155,33+i%4*48)
    }
  }
  if(stanokna==4){
    imageCenter(Zdolnosci4,160,0)
    for(var i=0;i<8;i++){
      imageCenter(eval("Poziom"+skille[24+i]),223+floor(i/4)*155,33+i%4*48)
    }
  }
  if(ileabilitek<9){
    if(stanokna==5){
      imageCenter(UmiejetnosciPuste,160,0)
    }
  }
  else{
    if(stanokna==5){
      imageCenter(UmiejetnosciPoczatek,160,0)
    }
    if(stanokna>5&&stanokna<5+floor((ileabilitek-1)/8)){
      imageCenter(UmiejetnosciSrodek,160,0)
    }
    if(stanokna==5+floor((ileabilitek-1)/8)){
      imageCenter(UmiejetnosciKoniec,160,0)
    }
  }
  if(ileitemow<9){
    if(stanokna==6+floor((ileabilitek-1)/8)){
      imageCenter(PrzedmiotyPuste,160,0)
    }
  }
  else{
    if(stanokna==6+floor((ileabilitek-1)/8)){
      imageCenter(PrzedmiotyPoczatek,160,0)
    }
    if(stanokna>6+floor((ileabilitek-1)/8)&&stanokna<6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
      imageCenter(PrzedmiotySrodek,160,0)
    }
    if(stanokna==6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
      imageCenter(PrzedmiotyKoniec,160,0)
    }
  }
  if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
    for(var i=0;i<8;i++){
      wyswietlitem(itemy[(stanokna-6-floor((ileabilitek-1)/8))*8+i],179+floor(i/4)*155,33+i%4*48)
      wyswietlitemtext(itemy[(stanokna-6-floor((ileabilitek-1)/8))*8+i],179+floor(i/4)*155,33+i%4*48)
      wyswietlstack((stanokna-6-floor((ileabilitek-1)/8))*8+i,179+floor(i/4)*155,33+i%4*48)
    }
  }
  if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
    for(var i=0;i<8;i++){
      if(stanokna==floor(eq[i]/8)+6+floor((ileabilitek-1)/8)){
        imageCenter(Zaznaczenie2,179+(floor(eq[i]/4)%2)*155,33+(eq[i]%4)*48)
      }
    }
  }
  for(var i=0;i*64+451<=w*32*skala&&i<5;i++){
    if(bindy[i*2]>=0&&(mouseX-(dc*skala/skalamirror))>=24&&(mouseX-(dc*skala/skalamirror))<=56&&(mouseY-(wc*skala/skalamirror))>=241+i*64&&(mouseY-(wc*skala/skalamirror))<=273+i*64){
      okno(itemy[bindy[i*2]])
    }
    if(bindy[i*2+1]>=0&&(mouseX-(dc*skala/skalamirror))>=94&&(mouseX-(dc*skala/skalamirror))<=126&&(mouseY-(wc*skala/skalamirror))>=241+i*64&&(mouseY-(wc*skala/skalamirror))<=273+i*64){
      okno(itemy[bindy[i*2+1]])
    }
  }
  if(stanokna>0){
    imageCenter(Zaznaczenie,179+ox*155,33+oy*48)
    for(var i=0;i<8;i++){
      if((mouseX-(dc*skala/skalamirror))>=179+floor(i/4)*155&&(mouseX-(dc*skala/skalamirror))<212+floor(i/4)*155&&(mouseY-(wc*skala/skalamirror))>=33+(i%4)*48&&(mouseY-(wc*skala/skalamirror))<66+(i%4)*48){
        if(stanokna<=4){
          okno((stanokna-1)*8+i+1)
        }
        if(stanokna>=5&&stanokna<=5+floor((ileabilitek-1)/8)){
          okno((abilitki[(stanokna-5)*8+i]+1)*-1)
        }
        if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
          okno(itemy[(stanokna-6-floor((ileabilitek-1)/8))*8+i])
        }
        ox=floor(i/4)
        oy=i%4
      }
    }
  }
  if(((x==a[1]&&y==b[1])||r==1)&&stanokna>=0){
    location.reload()
    stanokna=-1
  }
}

function keyTyped(){
  if(czas+200<millis()&&stanokna==0){
    if(key==='a'||key==='A'){
      if(mapa.getNum(x-1,y)%10>3&&mapa.getNum(x-1,y)<1000){
        czas=millis()
        x--
	      chodzenie(-1,0)
      }
      else{
        if(mapa.getNum(x-1,y)%10>0&&mapa.getNum(x-1,y)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x-1,y,4)
          chodzenie(0,0)
        }
        else{
          if(floor(mapa.getNum(x-1,y)%1000000/1000)>99){
            czas=millis()
            for(var i=0;i<ileitemow;i++){
              if(itemy[i]==floor(mapa.getNum(x-1,y)%1000000/1000)&&stack[i]>0){
                stack[i]++
                mapa.setNum(x-1,y,mapa.getNum(x-1,y)-(floor(mapa.getNum(x-1,y)%1000000/1000)*1000))
                break
              }
            }
            if(floor(mapa.getNum(x-1,y)%1000000/1000)>99){
              itemy[ileitemow]=floor(mapa.getNum(x-1,y)%1000000/1000)
              stack[ileitemow]=0
              if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                stack[ileitemow]++
              }
              ileitemow++
              mapa.setNum(x-1,y,mapa.getNum(x-1,y)-(floor(mapa.getNum(x-1,y)%1000000/1000)*1000))
            }
            x--
            chodzenie(-1,0)
          }
          else{
            if(floor(mapa.getNum(x-1,y)%1000000/1000)==1){
              czas=millis()
              damage3.play()
              mapa.setNum(x-1,y,mapa.getNum(x-1,y)+1000)
              for(var i=0;i<4;i++){
                pw=floor(random(-3,2))
                pd=floor(random(-2,3))
                while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                  pw=floor(random(-3,2))
                  pd=floor(random(-2,3))
                }
                if(i<3){
                  mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                }
                else{
                  for(var k=2;k<512;k++){
                    if(x-1==a[k]&&y==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                }
              }
	            chodzenie(0,0)
            }
            else{
              if(floor(mapa.getNum(x-1,y)%1000000/1000)==3){
                czas=millis()
                mapa.setNum(x-1,y,mapa.getNum(x-1,y)-3000)
                hajs+=floor(random(5,51))
                x--
                chodzenie(-1,0)
              }
            }
          }
        }
      }
    }
    if(key==='d'||key==='D'){
      if(mapa.getNum(x+1,y)%10>3&&mapa.getNum(x+1,y)<1000){
        czas=millis()
        x++
        chodzenie(1,0)
      }
      else{
       if(mapa.getNum(x+1,y)%10>0&&mapa.getNum(x+1,y)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x+1,y,4)
	        chodzenie(0,0)
       }
       else{
          if(floor(mapa.getNum(x+1,y)%1000000/1000)>99){
            czas=millis()
            for(var i=0;i<ileitemow;i++){
              if(itemy[i]==floor(mapa.getNum(x+1,y)%1000000/1000)&&stack[i]>0){
                stack[i]++
                mapa.setNum(x+1,y,mapa.getNum(x+1,y)-(floor(mapa.getNum(x+1,y)%1000000/1000)*1000))
                break
              }
            }
            if(floor(mapa.getNum(x+1,y)%1000000/1000)>99){
              itemy[ileitemow]=floor(mapa.getNum(x+1,y)%1000000/1000)
              stack[ileitemow]=0
              if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                stack[ileitemow]++
              }
              ileitemow++
              mapa.setNum(x+1,y,mapa.getNum(x+1,y)-(floor(mapa.getNum(x+1,y)%1000000/1000)*1000))
            }
            x++
            chodzenie(1,0)
          }
          else{
            if(floor(mapa.getNum(x+1,y)%1000000/1000)==1){
              czas=millis()
              damage3.play()
              mapa.setNum(x+1,y,mapa.getNum(x+1,y)+1000)
              for(var i=0;i<4;i++){
                pw=floor(random(-1,4))
                pd=floor(random(-2,3))
                while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                  pw=floor(random(-1,4))
                  pd=floor(random(-2,3))
                }
                if(i<3){
                  mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                }
                else{
                  for(var k=2;k<512;k++){
                    if(x+1==a[k]&&y==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                }
              }
	            chodzenie(0,0)
            }
            else{
              if(floor(mapa.getNum(x+1,y)%1000000/1000)==3){
                czas=millis()
                mapa.setNum(x+1,y,mapa.getNum(x+1,y)-3000)
                hajs+=floor(random(5,51))
                x++
                chodzenie(1,0)
              }
            }
          }
        }
      }
    }
    if(key==='w'||key==='W'){
      if(mapa.getNum(x,y-1)%10>3&&mapa.getNum(x,y-1)<1000){
        czas=millis()
        y--
        chodzenie(0,-1)
      }
      else{
        if(mapa.getNum(x,y-1)%10>0&&mapa.getNum(x,y-1)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x,y-1,4)
          chodzenie(0,0)
        }
        else{
          if(mapa.getNum(x,y-1)==0&&mapa.getNum(x-1,y-1)==0&&mapa.getNum(x+1,y-1)==0&&mapa.getNum(x,y-2)==0&&(floor(mapa.getNum(x,y)%1000/10)==4||floor(mapa.getNum(x,y)%1000/10)==6||floor(mapa.getNum(x,y)%1000/10)==8)&&((x+y-1)%20==3||(x+y-1)%20==5||(x+y-1)%20==7||(x+y-1)%20==9||(x+y-1)%20==11||(x+y-1)%20==13||(x+y-1)%20==15||(x+y-1)%20==17||(x+y-1)%20==0)){
            czas=millis()
            pw=floor(random(-1,2))
            if(floor(mapa.getNum(x+pw,y)%1000000/1000)==0&&floor(mapa.getNum(x+pw,y)%10000000/1000000)==0&&mapa.getNum(x+pw,y)>3){
              mapa.setNum(x+pw,y,mapa.getNum(x+pw,y)+100000)
              mapa.setNum(x,y,mapa.getNum(x,y)+10)
            }
            else{
              if(floor(mapa.getNum(x-1,y)%1000000/1000)==0&&mapa.getNum(x-1,y)>3){
                mapa.setNum(x-1,y,mapa.getNum(x-1,y)+100000)
                mapa.setNum(x,y,mapa.getNum(x,y)+10)
                if(floor(mapa.getNum(x+1,y)%1000000/1000)==0&&mapa.getNum(x+1,y)>3){
                  mapa.setNum(x+1,y,mapa.getNum(x+1,y)+100000)
                }
              }
              else{
                if(floor(mapa.getNum(x+1,y)%1000000/1000)==0&&mapa.getNum(x+1,y)>3){
                  mapa.setNum(x+1,y,mapa.getNum(x+1,y)+100000)
                  mapa.setNum(x,y,mapa.getNum(x,y)+10)
                }
              }
            }
	          chodzenie(0,0)
          }
          else{
            if(floor(mapa.getNum(x,y-1)%1000000/1000)>99){
              czas=millis()
              for(var i=0;i<ileitemow;i++){
                if(itemy[i]==floor(mapa.getNum(x,y-1)%1000000/1000)&&stack[i]>0){
                  stack[i]++
                  mapa.setNum(x,y-1,mapa.getNum(x,y-1)-(floor(mapa.getNum(x,y-1)%1000000/1000)*1000))
                  break
                }
              }
              if(floor(mapa.getNum(x,y-1)%1000000/1000)>99){
                itemy[ileitemow]=floor(mapa.getNum(x,y-1)%1000000/1000)
                stack[ileitemow]=0
                if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                  stack[ileitemow]++
                }
                ileitemow++
                mapa.setNum(x,y-1,mapa.getNum(x,y-1)-(floor(mapa.getNum(x,y-1)%1000000/1000)*1000))
              }
              y--
              chodzenie(0,-1)
            }
            else{
              if(floor(mapa.getNum(x,y-1)%1000000/1000)==1){
                czas=millis()
                damage3.play()
                mapa.setNum(x,y-1,mapa.getNum(x,y-1)+1000)
                for(var i=0;i<4;i++){
                  pw=floor(random(-2,3))
                  pd=floor(random(-3,2))
                  while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                    pw=floor(random(-2,3))
                    pd=floor(random(-3,2))
                  }
                  if(i<3){
                    mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                  }
                  else{
                  for(var k=2;k<512;k++){
                    if(x==a[k]&&y-1==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                  }
                }
                chodzenie(0,0)
              }
              else{
                if(floor(mapa.getNum(x,y-1)%1000000/1000)==3){
                  czas=millis()
                  mapa.setNum(x,y-1,mapa.getNum(x,y-1)-3000)
                  hajs+=floor(random(5,51))
                  y--
                  chodzenie(0,-1)
                }
              }
            }
          }
        }
      }
    }
    if(key==='s'||key==='S'){
      if(mapa.getNum(x,y+1)%10>3&&mapa.getNum(x,y+1)<1000){
       czas=millis()
        y++
        chodzenie(0,1)
      }
      else{
        if(mapa.getNum(x,y+1)%10>0&&mapa.getNum(x,y+1)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x,y+1,4)
	        chodzenie(0,0)
        }
        else{
          if(floor(mapa.getNum(x,y+1)%1000000/1000)>99){
            czas=millis()
            for(var i=0;i<ileitemow;i++){
              if(itemy[i]==floor(mapa.getNum(x,y+1)%1000000/1000)&&stack[i]>0){
                stack[i]++
                mapa.setNum(x,y+1,mapa.getNum(x,y+1)-(floor(mapa.getNum(x,y+1)%1000000/1000)*1000))
                break
              }
            }
            if(floor(mapa.getNum(x,y+1)%1000000/1000)>99){
              itemy[ileitemow]=floor(mapa.getNum(x,y+1)%1000000/1000)
              stack[ileitemow]=0
              if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                stack[ileitemow]++
              }
              ileitemow++
              mapa.setNum(x,y+1,mapa.getNum(x,y+1)-(floor(mapa.getNum(x,y+1)%1000000/1000)*1000))
            }
            y++
            chodzenie(0,1)
          }
          else{
            if(floor(mapa.getNum(x,y+1)%1000000/1000)==1){
              czas=millis()
              damage3.play()
              mapa.setNum(x,y+1,mapa.getNum(x,y+1)+1000)
              for(var i=0;i<4;i++){
                pw=floor(random(-2,3))
                pd=floor(random(-1,4))
                while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                  pw=floor(random(-2,3))
                  pd=floor(random(-1,4))
                }
                if(i<3){
                 mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                }
                else{
                  for(var k=2;k<512;k++){
                    if(x==a[k]&&y+1==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                }
              }
	            chodzenie(0,0)
            }
            else{
              if(floor(mapa.getNum(x,y+1)%1000000/1000)==3){
                czas=millis()
                mapa.setNum(x,y+1,mapa.getNum(x,y+1)-3000)
                hajs+=floor(random(5,51))
                y++
                chodzenie(0,1)
              }
            }
          }
        }
      }
    }
    if(key===' '){
      czas=millis()
      chodzenie(0,0)
    }
  }
  if(stanokna>0){
    if(key==='a'||key==='A'){
      chodzenieokno(-1,0)
    }
    if(key==='d'||key==='D'){
      chodzenieokno(1,0)
    }
    if(key==='w'||key==='W'){
      chodzenieokno(0,-1)
    }
    if(key==='s'||key==='S'){
      chodzenieokno(0,1)
    }
  }
  if (key==='f'||key==='F') {
    fs = fullscreen();
    fullscreen(!fs);
  }
  if(key==='r'||key==='R'){
    r=1
    for(var i=millis()+3000;millis()<i&&r==1;){
      if(key==='r'||key==='R'){
        r=1
      }
      else{
        r=0
      }
    }
  }
  if((key==='+'||key==='=')&&skala==1){
    skala=2
    d=floor(windowWidth/32)
    w=floor(windowHeight/32)
    d-=5
    d=floor(d/2)
    d-=(d+1)%2
    d+=2.5
    w=floor(w/2)
    w-=(w+1)%2
    d2=(d-3.5)/2
    d2+=2.5
    w2=(w-1)/2
    dc=floor((windowWidth-(d*64))/4)
    wc=floor((windowHeight-(w*64))/4)
    resizeCanvas(windowWidth,windowHeight)
  }
  if((key==='-'||key==='_')&&skala==2){
    skala=1
    d=floor(windowWidth/32)
    w=floor(windowHeight/32)
    d-=d%2
    w-=(w+1)%2
    d2=d/2+2
    w2=(w-1)/2
    dc=floor((windowWidth-(d*32))/2)
    wc=floor((windowHeight-(w*32))/2)
    resizeCanvas(windowWidth,windowHeight)
  }
  if(key==='z'||key==='Z'){
    if(stanokna==0||stanokna>4){
      stanokna=1
      ox=0
      oy=0
    }
    else{
      stanokna=0
    }
  }
  if(key==='x'||key==='X'){
    if(ileabilitek<9){
      if(stanokna!=5){
        stanokna=5
        ox=0
        oy=0
      }
      else{
        stanokna=0
      }
    }
    else{
      if(stanokna<5||stanokna>5+floor((ileabilitek-1)/8)){
        stanokna=5
        ox=0
        oy=0
      }
      else{
        stanokna=0
      }
    }
  }
  if(key==='c'||key==='C'){
    if(ileitemow<9){
      if(stanokna!=6+floor((ileabilitek-1)/8)){
        stanokna=6+floor((ileabilitek-1)/8)
        ox=0
        oy=0
      }
      else{
        stanokna=0
      }
    }
    else{
      if(stanokna<6+floor((ileabilitek-1)/8)||stanokna>6+floor((ileabilitek-1)/8)+floor((ileitemow-1)/8)){
        stanokna=6+floor((ileabilitek-1)/8)
        ox=0
        oy=0
      }
      else{
        stanokna=0
      }
    }
  }
  if(keyCode==ENTER){
    if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
      akcjaprzedmiot((stanokna-6-floor((ileabilitek-1)/8))*8+ox*4+oy)
    }
  }
  if(w*32*skala>=451){
    if(key==1||key==2){
      bindowanie()
    }
    if(w*32*skala>=515){
      if(key==3||key==4){
        bindowanie()
      }
      if(w*32*skala>=579){
        if(key==5||key==6){
          bindowanie()
        }
        if(w*32*skala>=643){
          if(key==7||key==8){
            bindowanie()
          }
          if(w*32*skala>=707){
            if(key==9||key=='0'){
              bindowanie()
            }
          }
        }
      }
    }
  }
}
    
function mouseClicked(){
  skalamirror=skala
  if(czas+200<millis()&&stanokna==0){
    if((mouseX-(dc*skalamirror))>=160&&(mouseX-(dc*skalamirror))/skala<d2*32&&(((d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)&&(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16))||((mouseX-(dc*skalamirror))/skala>=(d2-1)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32))){
      if(mapa.getNum(x-1,y)%10>3&&mapa.getNum(x-1,y)<1000){
        czas=millis()
        x--
	      chodzenie(-1,0)
      }
      else{
        if(mapa.getNum(x-1,y)%10>0&&mapa.getNum(x-1,y)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x-1,y,4)
	        chodzenie(0,0)
        }
        else{
          if(floor(mapa.getNum(x-1,y)%1000000/1000)>99){
            czas=millis()
            for(var i=0;i<ileitemow;i++){
              if(itemy[i]==floor(mapa.getNum(x-1,y)%1000000/1000)&&stack[i]>0){
                stack[i]++
                mapa.setNum(x-1,y,mapa.getNum(x-1,y)-(floor(mapa.getNum(x-1,y)%1000000/1000)*1000))
                break
              }
            }
            if(floor(mapa.getNum(x-1,y)%1000000/1000)>99){
              itemy[ileitemow]=floor(mapa.getNum(x-1,y)%1000000/1000)
              stack[ileitemow]=0
              if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                stack[ileitemow]++
              }
              ileitemow++
              mapa.setNum(x-1,y,mapa.getNum(x-1,y)-(floor(mapa.getNum(x-1,y)%1000000/1000)*1000))
            }
            x--
            chodzenie(-1,0)
          }
          else{
            if(floor(mapa.getNum(x-1,y)%1000000/1000)==1){
              czas=millis()
              damage3.play()
              mapa.setNum(x-1,y,mapa.getNum(x-1,y)+1000)
              for(var i=0;i<4;i++){
                pw=floor(random(-3,2))
                pd=floor(random(-2,3))
                while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                  pw=floor(random(-3,2))
                  pd=floor(random(-2,3))
                }
                if(i<3){
                  mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                }
                else{
                  for(var k=2;k<512;k++){
                    if(x-1==a[k]&&y==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                }
              }
	            chodzenie(0,0)
            }
            else{
              if(floor(mapa.getNum(x-1,y)%1000000/1000)==3){
                czas=millis()
                mapa.setNum(x-1,y,mapa.getNum(x-1,y)-3000)
                hajs+=floor(random(5,51))
                x--
                chodzenie(-1,0)
              }
            }
          }
        }
      }
    }
    if((mouseX-(dc*skalamirror))/skala>=(d2+1)*32&&(((d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)&&(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16)>(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16))||((mouseX-(dc*skalamirror))/skala<(d2+2)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32))){
      if(mapa.getNum(x+1,y)%10>3&&mapa.getNum(x+1,y)<1000){
        czas=millis()
        x++
        chodzenie(1,0)
      }
      else{
       if(mapa.getNum(x+1,y)%10>0&&mapa.getNum(x+1,y)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x+1,y,4)
	        chodzenie(0,0)
       }
       else{
          if(floor(mapa.getNum(x+1,y)%1000000/1000)>99){
            czas=millis()
            for(var i=0;i<ileitemow;i++){
              if(itemy[i]==floor(mapa.getNum(x+1,y)%1000000/1000)&&stack[i]>0){
                stack[i]++
                mapa.setNum(x+1,y,mapa.getNum(x+1,y)-(floor(mapa.getNum(x+1,y)%1000000/1000)*1000))
                break
              }
            }
            if(floor(mapa.getNum(x+1,y)%1000000/1000)>99){
              itemy[ileitemow]=floor(mapa.getNum(x+1,y)%1000000/1000)
              stack[ileitemow]=0
              if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                stack[ileitemow]++
              }
              ileitemow++
              mapa.setNum(x+1,y,mapa.getNum(x+1,y)-(floor(mapa.getNum(x+1,y)%1000000/1000)*1000))
            }
            x++
            chodzenie(1,0)
          }
          else{
            if(floor(mapa.getNum(x+1,y)%1000000/1000)==1){
              czas=millis()
              damage3.play()
              mapa.setNum(x+1,y,mapa.getNum(x+1,y)+1000)
              for(var i=0;i<4;i++){
                pw=floor(random(-1,4))
                pd=floor(random(-2,3))
                while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                  pw=floor(random(-1,4))
                  pd=floor(random(-2,3))
                }
                if(i<3){
                  mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                }
                else{
                  for(var k=2;k<512;k++){
                    if(x+1==a[k]&&y==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                }
              }
	            chodzenie(0,0)
            }
            else{
              if(floor(mapa.getNum(x+1,y)%1000000/1000)==3){
                czas=millis()
                mapa.setNum(x+1,y,mapa.getNum(x+1,y)-3000)
                hajs+=floor(random(5,51))
                x++
                chodzenie(1,0)
              }
            }
          }
        }
      }
    }
    if((mouseY-(wc*skalamirror))/skala<w2*32&&(((w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)&&(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16))||((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala>=(w2-1)*32))){
      if(mapa.getNum(x,y-1)%10>3&&mapa.getNum(x,y-1)<1000){
        czas=millis()
        y--
        chodzenie(0,-1)
      }
      else{
        if(mapa.getNum(x,y-1)%10>0&&mapa.getNum(x,y-1)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x,y-1,4)
	        chodzenie(0,0)
        }
        else{
          if(mapa.getNum(x,y-1)==0&&mapa.getNum(x-1,y-1)==0&&mapa.getNum(x+1,y-1)==0&&mapa.getNum(x,y-2)==0&&(floor(mapa.getNum(x,y)%1000/10)==4||floor(mapa.getNum(x,y)%1000/10)==6||floor(mapa.getNum(x,y)%1000/10)==8)&&((x+y-1)%20==3||(x+y-1)%20==5||(x+y-1)%20==7||(x+y-1)%20==9||(x+y-1)%20==11||(x+y-1)%20==13||(x+y-1)%20==15||(x+y-1)%20==17||(x+y-1)%20==0)){
            czas=millis()
            pw=floor(random(-1,2))
            if(floor(mapa.getNum(x+pw,y)%1000000/1000)==0&&floor(mapa.getNum(x+pw,y)%10000000/1000000)==0&&mapa.getNum(x+pw,y)>3){
              mapa.setNum(x+pw,y,mapa.getNum(x+pw,y)+100000)
              mapa.setNum(x,y,mapa.getNum(x,y)+10)
            }
            else{
              if(floor(mapa.getNum(x-1,y)%1000000/1000)==0&&mapa.getNum(x-1,y)>3){
                mapa.setNum(x-1,y,mapa.getNum(x-1,y)+100000)
                mapa.setNum(x,y,mapa.getNum(x,y)+10)
                if(floor(mapa.getNum(x+1,y)%1000000/1000)==0&&mapa.getNum(x+1,y)>3){
                  mapa.setNum(x+1,y,mapa.getNum(x+1,y)+100000)
                }
              }
              else{
                if(floor(mapa.getNum(x+1,y)%1000000/1000)==0&&mapa.getNum(x+1,y)>3){
                  mapa.setNum(x+1,y,mapa.getNum(x+1,y)+100000)
                  mapa.setNum(x,y,mapa.getNum(x,y)+10)
                }
              }
            }
	          chodzenie(0,0)
          }
          else{
            if(floor(mapa.getNum(x,y-1)%1000000/1000)>99){
              czas=millis()
              for(var i=0;i<ileitemow;i++){
                if(itemy[i]==floor(mapa.getNum(x,y-1)%1000000/1000)&&stack[i]>0){
                  stack[i]++
                  mapa.setNum(x,y-1,mapa.getNum(x,y-1)-(floor(mapa.getNum(x,y-1)%1000000/1000)*1000))
                  break
                }
              }
              if(floor(mapa.getNum(x,y-1)%1000000/1000)>99){
                itemy[ileitemow]=floor(mapa.getNum(x,y-1)%1000000/1000)
                stack[ileitemow]=0
                if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                  stack[ileitemow]++
                }
                ileitemow++
                mapa.setNum(x,y-1,mapa.getNum(x,y-1)-(floor(mapa.getNum(x,y-1)%1000000/1000)*1000))
              }
              y--
              chodzenie(0,-1)
            }
            else{
              if(floor(mapa.getNum(x,y-1)%1000000/1000)==1){
                czas=millis()
                damage3.play()
                mapa.setNum(x,y-1,mapa.getNum(x,y-1)+1000)
                for(var i=0;i<4;i++){
                  pw=floor(random(-2,3))
                  pd=floor(random(-3,2))
                  while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                    pw=floor(random(-2,3))
                    pd=floor(random(-3,2))
                  }
                  if(i<3){
                    mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                  }
                  else{
                  for(var k=2;k<512;k++){
                    if(x==a[k]&&y-1==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                  }
                }
                chodzenie(0,0)
              }
              else{
                if(floor(mapa.getNum(x,y-1)%1000000/1000)==3){
                  czas=millis()
                  mapa.setNum(x,y-1,mapa.getNum(x,y-1)-3000)
                  hajs+=floor(random(5,51))
                  y--
                  chodzenie(0,-1)
                }
              }
            }
          }
        }
      }
    }
    if((mouseY-(wc*skalamirror))/skala>=(w2+1)*32&&(((w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)&&(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(w2*32+16-(mouseY-(wc*skalamirror))/skala)*(d2*32+16)*(d2*32+16)>(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(d2*32+16-(mouseX-(dc*skalamirror))/skala)*(w2*32+16)*(w2*32+16))||((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala<(w2+2)*32))){
      if(mapa.getNum(x,y+1)%10>3&&mapa.getNum(x,y+1)<1000){
       czas=millis()
        y++
        chodzenie(0,1)
      }
      else{
        if(mapa.getNum(x,y+1)%10>0&&mapa.getNum(x,y+1)%10<4){
          czas=millis()
          damage3.play()
          mapa.setNum(x,y+1,4)
	        chodzenie(0,0)
        }
        else{
          if(floor(mapa.getNum(x,y+1)%1000000/1000)>99){
            czas=millis()
            for(var i=0;i<ileitemow;i++){
              if(itemy[i]==floor(mapa.getNum(x,y+1)%1000000/1000)&&stack[i]>0){
                stack[i]++
                mapa.setNum(x,y+1,mapa.getNum(x,y+1)-(floor(mapa.getNum(x,y+1)%1000000/1000)*1000))
                break
              }
            }
            if(floor(mapa.getNum(x,y+1)%1000000/1000)>99){
              itemy[ileitemow]=floor(mapa.getNum(x,y+1)%1000000/1000)
              stack[ileitemow]=0
              if(floor(itemy[ileitemow]/100)==1||floor(itemy[ileitemow]/100)==4||((floor(itemy[ileitemow]/100)==8||floor(itemy[ileitemow]/100)==9)&&Bron.getNum(itemy[ileitemow]-800,6)==0)){
                stack[ileitemow]++
               }
               ileitemow++
               mapa.setNum(x,y+1,mapa.getNum(x,y+1)-(floor(mapa.getNum(x,y+1)%1000000/1000)*1000))
            }
            y++
            chodzenie(0,1)
          }
          else{
            if(floor(mapa.getNum(x,y+1)%1000000/1000)==1){
              czas=millis()
              damage3.play()
              mapa.setNum(x,y+1,mapa.getNum(x,y+1)+1000)
              for(var i=0;i<4;i++){
                pw=floor(random(-2,3))
                pd=floor(random(-1,4))
                while(floor(mapa.getNum(x+pw,y+pd)%1000000/1000)>0||floor(mapa.getNum(x+pw,y+pd)%10000000/1000000)>0){
                  pw=floor(random(-2,3))
                  pd=floor(random(-1,4))
                }
                if(i<3){
                 mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+3000)
                }
                else{
                  for(var k=2;k<512;k++){
                    if(x==a[k]&&y+1==b[k]){
                      mapa.setNum(x+pw,y+pd,mapa.getNum(x+pw,y+pd)+loot[k]*1000)
                      break
                    }
                  }
                }
              }
	            chodzenie(0,0)
            }
            else{
              if(floor(mapa.getNum(x,y+1)%1000000/1000)==3){
                czas=millis()
                mapa.setNum(x,y+1,mapa.getNum(x,y+1)-3000)
                hajs+=floor(random(5,51))
                y++
                chodzenie(0,1)
              }
            }
          }
        }
      }
    }
    if((mouseX-(dc*skalamirror))/skala>=d2*32&&(mouseX-(dc*skalamirror))/skala<(d2+1)*32&&(mouseY-(wc*skalamirror))/skala>=w2*32&&(mouseY-(wc*skalamirror))/skala<(w2+1)*32){
      czas=millis()
      chodzenie(0,0)
    }
  }
  skalamirror=1
  if((mouseX-(dc*skala/skalamirror))>30&&(mouseX-(dc*skala/skalamirror))<64&&(mouseY-(wc*skala/skalamirror))>w*32*skala-160&&(mouseY-(wc*skala/skalamirror))<w*32*skala-134){
    stanokna=1
    ox=0
    oy=0
  }
  if((mouseX-(dc*skala/skalamirror))>65&&(mouseX-(dc*skala/skalamirror))<99&&(mouseY-(wc*skala/skalamirror))>w*32*skala-160&&(mouseY-(wc*skala/skalamirror))<w*32*skala-134){
    stanokna=5
    ox=0
    oy=0
  }
  if((mouseX-(dc*skala/skalamirror))>131&&(mouseX-(dc*skala/skalamirror))<165&&(mouseY-(wc*skala/skalamirror))>w*32*skala-160&&(mouseY-(wc*skala/skalamirror))<w*32*skala-134){
    stanokna=6+floor((ileabilitek-1)/8)
    ox=0
    oy=0
  }
  if(stanokna>0){
    if((mouseX-(dc*skala/skalamirror))>452&&(mouseX-(dc*skala/skalamirror))<473&&(mouseY-(wc*skala/skalamirror))>225&&(mouseY-(wc*skala/skalamirror))<238&&stanokna!=4&&stanokna!=5+floor((ileabilitek-1)/8)&&stanokna!=6+floor((ileabilitek-1)/8)+floor((ileitemow-1)/8)){
      stanokna++
      ox=0
      oy=0
    }
    if((mouseX-(dc*skala/skalamirror))>167&&(mouseX-(dc*skala/skalamirror))<188&&(mouseY-(wc*skala/skalamirror))>225&&(mouseY-(wc*skala/skalamirror))<238&&stanokna!=1&&stanokna!=5&&stanokna!=6+floor((ileabilitek-1)/8)){
      stanokna--
      ox=0
      oy=0
    }
    if((mouseX-(dc*skala/skalamirror))>160&&(mouseX+(dc*skala/skalamirror))<=windowWidth&&(mouseY-(wc*skala/skalamirror))>=0&&(mouseY+(wc*skala/skalamirror))<=windowHeight&&((mouseX-(dc*skala/skalamirror))>480||(mouseY-(wc*skala/skalamirror))>257)){
      stanokna=0
    }
  }
  if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
    for(var i=0;i<8;i++){
      if((mouseX-(dc*skala/skalamirror))>=179+floor(i/4)*155&&(mouseX-(dc*skala/skalamirror))<212+floor(i/4)*155&&(mouseY-(wc*skala/skalamirror))>=33+(i%4)*48&&(mouseY-(wc*skala/skalamirror))<66+(i%4)*48){
        akcjaprzedmiot((stanokna-6-floor((ileabilitek-1)/8))*8+i)
      }
    }
  }
}

function mouseWheel(event) {
  if(event.delta<0&&skala==1){
    skala=2
    d=floor(windowWidth/32)
    w=floor(windowHeight/32)
    d-=5
    d=floor(d/2)
    d-=(d+1)%2
    d+=2.5
    w=floor(w/2)
    w-=(w+1)%2
    d2=(d-3.5)/2
    d2+=2.5
    w2=(w-1)/2
    dc=floor((windowWidth-(d*64))/4)
    wc=floor((windowHeight-(w*64))/4)
    resizeCanvas(windowWidth,windowHeight)
  }
  if(event.delta>0&&skala==2){
    skala=1
    d=floor(windowWidth/32)
    w=floor(windowHeight/32)
    d-=d%2
    w-=(w+1)%2
    d2=d/2+2
    w2=(w-1)/2
    dc=floor((windowWidth-(d*32))/2)
    wc=floor((windowHeight-(w*32))/2)
    resizeCanvas(windowWidth,windowHeight)
  }
}

function windowResized() {
  if(skala==1){
    d=floor(windowWidth/32)
    w=floor(windowHeight/32)
    d-=d%2
    w-=(w+1)%2
    d2=d/2+2
    w2=(w-1)/2
    dc=floor((windowWidth-(d*32))/2)
    wc=floor((windowHeight-(w*32))/2)
    resizeCanvas(windowWidth,windowHeight)
  }
  if(skala==2){
    d=floor(windowWidth/32)
    w=floor(windowHeight/32)
    d-=5
    d=floor(d/2)
    d-=(d+1)%2
    d+=2.5
    w=floor(w/2)
    w-=(w+1)%2
    d2=(d-3.5)/2
    d2+=2.5
    w2=(w-1)/2
    dc=floor((windowWidth-(d*64))/4)
    wc=floor((windowHeight-(w*64))/4)
    resizeCanvas(windowWidth,windowHeight)
  }
}

function fow(){
	
	for(var i=x-8;i<x+8;i++){
		for(var j=y-8;j<y+8;j++){
			if(mapa.getNum(i,j)%10==6||mapa.getNum(i,j)%10==3){
				mapa.setNum(i,j,mapa.getNum(i,j)-1)
			}
		}
	}
	przyp(0,0,3)
	for(var i=0;i<5;i++){
		if(mapa.getNum(x,y-i-1)%10>0&&mapa.getNum(x,y-i)%10==6){
      przyp(0,-i-1,3)
		}
		if(mapa.getNum(x,y+i+1)%10>0&&mapa.getNum(x,y+i)%10==6){
      przyp(0,i+1,3)
		}
		if(mapa.getNum(x-i-1,y)%10>0&&mapa.getNum(x-i,y)%10==6){
      przyp(-i-1,0,3)
		}
		if(mapa.getNum(x+i+1,y)%10>0&&mapa.getNum(x+i,y)%10==6){
      przyp(i+1,0,3)
		}
	}
	if(mapa.getNum(x-1,y-1)%10>0&&(mapa.getNum(x-1,y)%10==6||mapa.getNum(x,y-1)%10==6)){
    przyp(-1,-1,3)
	}
	if(mapa.getNum(x-1,y+1)%10>0&&(mapa.getNum(x-1,y)%10==6||mapa.getNum(x,y+1)%10==6)){
    przyp(-1,1,3)
	}
	if(mapa.getNum(x+1,y-1)%10>0&&(mapa.getNum(x+1,y)%10==6||mapa.getNum(x,y-1)%10==6)){
    przyp(1,-1,3)
	}
	if(mapa.getNum(x+1,y+1)%10>0&&(mapa.getNum(x+1,y)%10==6||mapa.getNum(x,y+1)%10==6)){
		przyp(1,1,3)
	}
	if(mapa.getNum(x-2,y-1)%10>0&&mapa.getNum(x-1,y-1)%10==6&&mapa.getNum(x-1,y)%10==6){
    przyp(-2,-1,3)
	}
	if(mapa.getNum(x-2,y+1)%10>0&&mapa.getNum(x-1,y+1)%10==6&&mapa.getNum(x-1,y)%10==6){
    przyp(-2,1,3)
	}
	if(mapa.getNum(x+2,y-1)%10>0&&mapa.getNum(x+1,y-1)%10==6&&mapa.getNum(x+1,y)%10==6){
    przyp(2,-1,3)
	}
	if(mapa.getNum(x+2,y+1)%10>0&&mapa.getNum(x+1,y+1)%10==6&&mapa.getNum(x+1,y)%10==6){
		przyp(2,1,3)
	}
	if(mapa.getNum(x-1,y-2)%10>0&&mapa.getNum(x-1,y-1)%10==6&&mapa.getNum(x,y-1)%10==6){
    przyp(-1,-2,3)
	}
	if(mapa.getNum(x+1,y-2)%10>0&&mapa.getNum(x+1,y-1)%10==6&&mapa.getNum(x,y-1)%10==6){
    przyp(1,-2,3)
	}
	if(mapa.getNum(x-1,y+2)%10>0&&mapa.getNum(x-1,y+1)%10==6&&mapa.getNum(x,y+1)%10==6){
    przyp(-1,2,3)
	}
	if(mapa.getNum(x+1,y+2)%10>0&&mapa.getNum(x+1,y+1)%10==6&&mapa.getNum(x,y+1)%10==6){
		przyp(1,2,3)
	}
	if(mapa.getNum(x-2,y-1)%10%3==1&&mapa.getNum(x-2,y)%10==6){
    przyp(-2,-1,2)
	}
	if(mapa.getNum(x+2,y-1)%10%3==1&&mapa.getNum(x+2,y)%10==6){
    przyp(2,-1,2)
	}
	if(mapa.getNum(x-2,y+1)%10%3==1&&mapa.getNum(x-2,y)%10==6){
    przyp(-2,1,2)
	}
	if(mapa.getNum(x+2,y+1)%10%3==1&&mapa.getNum(x+2,y)%10==6){
    przyp(2,1,2)
	}
	if(mapa.getNum(x-1,y-2)%10%3==1&&mapa.getNum(x,y-2)%10==6){
    przyp(-1,-2,2)
	}
	if(mapa.getNum(x+1,y-2)%10%3==1&&mapa.getNum(x,y-2)%10==6){
    przyp(1,-2,2)
	}
	if(mapa.getNum(x-1,y+2)%10%3==1&&mapa.getNum(x,y+2)%10==6){
    przyp(-1,2,2)
	}
	if(mapa.getNum(x+1,y+2)%10%3==1&&mapa.getNum(x,y+2)%10==6){
    przyp(1,2,2)
	}
	if(mapa.getNum(x-3,y-1)%10>0&&mapa.getNum(x-2,y)%10==6&&mapa.getNum(x-2,y-1)%10>4){
    przyp(-3,-1,3)
	}
	if(mapa.getNum(x+3,y-1)%10>0&&mapa.getNum(x+2,y)%10==6&&mapa.getNum(x+2,y-1)%10>4){
    przyp(3,-1,3)
	}
	if(mapa.getNum(x-3,y+1)%10>0&&mapa.getNum(x-2,y)%10==6&&mapa.getNum(x-2,y+1)%10>4){
    przyp(-3,1,3)
	}
	if(mapa.getNum(x+3,y+1)%10>0&&mapa.getNum(x+2,y)%10==6&&mapa.getNum(x+2,y+1)%10>4){
		przyp(3,1,3)
	}
	if(mapa.getNum(x-1,y-3)%10>0&&mapa.getNum(x,y-2)%10==6&&mapa.getNum(x-1,y-2)%10>4){
    przyp(-1,-3,3)
	}
	if(mapa.getNum(x+1,y-3)%10>0&&mapa.getNum(x,y-2)%10==6&&mapa.getNum(x+1,y-2)%10>4){
    przyp(1,-3,3)
	}
	if(mapa.getNum(x-1,y+3)%10>0&&mapa.getNum(x,y+2)%10==6&&mapa.getNum(x-1,y+2)%10>4){
    przyp(-1,3,3)
	}
	if(mapa.getNum(x+1,y+3)%10>0&&mapa.getNum(x,y+2)%10==6&&mapa.getNum(x+1,y+2)%10>4){
		przyp(1,3,3)
	}
  if(mapa.getNum(x-3,y-1)%10%3==1&&mapa.getNum(x-3,y)%10==6){
    przyp(-3,-1,2)
  }
  if(mapa.getNum(x+3,y-1)%10%3==1&&mapa.getNum(x+3,y)%10==6){
    przyp(3,-1,2)
  }
  if(mapa.getNum(x-3,y+1)%10%3==1&&mapa.getNum(x-3,y)%10==6){
    przyp(-3,1,2)
  }
  if(mapa.getNum(x+3,y+1)%10%3==1&&mapa.getNum(x+3,y)%10==6){
    przyp(3,1,2)
  }
  if(mapa.getNum(x-1,y-3)%10%3==1&&mapa.getNum(x,y-3)%10==6){
    przyp(-1,-3,2)
  }
  if(mapa.getNum(x+1,y-3)%10%3==1&&mapa.getNum(x,y-3)%10==6){
    przyp(1,-3,2)
  }
  if(mapa.getNum(x-1,y+3)%10%3==1&&mapa.getNum(x,y+3)%10==6){
    przyp(-1,3,2)
  }
  if(mapa.getNum(x+1,y+3)%10%3==1&&mapa.getNum(x,y+3)%10==6){
    przyp(1,3,2)
  }
	if(mapa.getNum(x-4,y-1)%10>0&&mapa.getNum(x-3,y-1)%10==6){
    przyp(-4,-1,3)
	}
	if(mapa.getNum(x+4,y-1)%10>0&&mapa.getNum(x+3,y-1)%10==6){
    przyp(4,-1,3)
	}
	if(mapa.getNum(x-4,y+1)%10>0&&mapa.getNum(x-3,y+1)%10==6){
    przyp(-4,1,3)
	}
	if(mapa.getNum(x+4,y+1)%10>0&&mapa.getNum(x+3,y+1)%10==6){
		przyp(4,1,3)
	}
	if(mapa.getNum(x-1,y-4)%10>0&&mapa.getNum(x-1,y-3)%10==6){
    przyp(-1,-4,3)
	}
	if(mapa.getNum(x+1,y-4)%10>0&&mapa.getNum(x+1,y-3)%10==6){
    przyp(1,-4,3)
	}
	if(mapa.getNum(x-1,y+4)%10>0&&mapa.getNum(x-1,y+3)%10==6){
    przyp(-1,4,3)
	}
	if(mapa.getNum(x+1,y+4)%10>0&&mapa.getNum(x+1,y+3)%10==6){
		przyp(1,4,3)
	}
  if(mapa.getNum(x-4,y-1)%10%3==1&&(mapa.getNum(x-4,y)%10==6||(mapa.getNum(x-3,y-1)%10>4&&mapa.getNum(x-3,y)%10==6)||(mapa.getNum(x-2,y-1)%10==6&&mapa.getNum(x-3,y-1)%10>4))){
    przyp(-4,-1,2)
  }
  if(mapa.getNum(x+4,y-1)%10%3==1&&(mapa.getNum(x+4,y)%10==6||(mapa.getNum(x+3,y-1)%10>4&&mapa.getNum(x+3,y)%10==6)||(mapa.getNum(x+2,y-1)%10==6&&mapa.getNum(x+3,y-1)%10>4))){
    przyp(4,-1,2)
  }
  if(mapa.getNum(x-4,y+1)%10%3==1&&(mapa.getNum(x-4,y)%10==6||(mapa.getNum(x-3,y+1)%10>4&&mapa.getNum(x-3,y)%10==6)||(mapa.getNum(x-2,y+1)%10==6&&mapa.getNum(x-3,y+1)%10>4))){
    przyp(-4,1,2)
  }
  if(mapa.getNum(x+4,y+1)%10%3==1&&(mapa.getNum(x+4,y)%10==6||(mapa.getNum(x+3,y+1)%10>4&&mapa.getNum(x+3,y)%10==6)||(mapa.getNum(x+2,y+1)%10==6&&mapa.getNum(x+3,y+1)%10>4))){
    przyp(4,1,2)
  }
  if(mapa.getNum(x-1,y-4)%10%3==1&&(mapa.getNum(x,y-4)%10==6||(mapa.getNum(x-1,y-3)%10>4&&mapa.getNum(x,y-3)%10==6)||(mapa.getNum(x-1,y-2)%10==6&&mapa.getNum(x-1,y-3)%10>4))){
    przyp(-1,-4,2)
  }
  if(mapa.getNum(x+1,y-4)%10%3==1&&(mapa.getNum(x,y-4)%10==6||(mapa.getNum(x+1,y-3)%10>4&&mapa.getNum(x,y-3)%10==6)||(mapa.getNum(x+1,y-2)%10==6&&mapa.getNum(x+1,y-3)%10>4))){
    przyp(1,-4,2)
  }
  if(mapa.getNum(x-1,y+4)%10%3==1&&(mapa.getNum(x,y+4)%10==6||(mapa.getNum(x-1,y+3)%10>4&&mapa.getNum(x,y+3)%10==6)||(mapa.getNum(x-1,y+2)%10==6&&mapa.getNum(x-1,y+3)%10>4))){
    przyp(-1,4,2)
  }
  if(mapa.getNum(x+1,y+4)%10%3==1&&(mapa.getNum(x,y+4)%10==6||(mapa.getNum(x+1,y+3)%10>4&&mapa.getNum(x,y+3)%10==6)||(mapa.getNum(x+1,y+2)%10==6&&mapa.getNum(x+1,y+3)%10>4))){
    przyp(1,4,2)
  }
	if(mapa.getNum(x-5,y-1)%10>0&&((mapa.getNum(x-3,y)%10==6&&mapa.getNum(x-3,y-1)%10>4&&mapa.getNum(x-4,y-1)%10>4)||mapa.getNum(x-4,y-1)%10==6)){
    przyp(-5,-1,3)
	}
	if(mapa.getNum(x+5,y-1)%10>0&&((mapa.getNum(x+3,y)%10==6&&mapa.getNum(x+3,y-1)%10>4&&mapa.getNum(x+4,y-1)%10>4)||mapa.getNum(x+4,y-1)%10==6)){
    przyp(5,-1,3)
	}
	if(mapa.getNum(x-5,y+1)%10>0&&((mapa.getNum(x-3,y)%10==6&&mapa.getNum(x-3,y+1)%10>4&&mapa.getNum(x-4,y+1)%10>4)||mapa.getNum(x-4,y+1)%10==6)){
    przyp(-5,1,3)
	}
	if(mapa.getNum(x+5,y+1)%10>0&&((mapa.getNum(x+3,y)%10==6&&mapa.getNum(x+3,y+1)%10>4&&mapa.getNum(x+4,y+1)%10>4)||mapa.getNum(x+4,y+1)%10==6)){
		przyp(5,1,3)
	}
	if(mapa.getNum(x-1,y-5)%10>0&&((mapa.getNum(x,y-3)%10==6&&mapa.getNum(x-1,y-3)%10>4&&mapa.getNum(x-1,y-4)%10>4)||mapa.getNum(x-1,y-4)%10==6)){
    przyp(-1,-5,3)
	}
	if(mapa.getNum(x+1,y-5)%10>0&&((mapa.getNum(x,y-3)%10==6&&mapa.getNum(x+1,y-3)%10>4&&mapa.getNum(x+1,y-4)%10>4)||mapa.getNum(x+1,y-4)%10==6)){
    przyp(1,-5,3)
	}
	if(mapa.getNum(x-1,y+5)%10>0&&((mapa.getNum(x,y+3)%10==6&&mapa.getNum(x-1,y+3)%10>4&&mapa.getNum(x-1,y+4)%10>4)||mapa.getNum(x-1,y+4)%10==6)){
    przyp(-1,5,3)
	}
	if(mapa.getNum(x+1,y+5)%10>0&&((mapa.getNum(x,y+3)%10==6&&mapa.getNum(x+1,y+3)%10>4&&mapa.getNum(x+1,y+4)%10>4)||mapa.getNum(x+1,y+4)%10==6)){
	  przyp(1,5,3)
	}
  if(mapa.getNum(x-5,y-1)%10%3==1&&(mapa.getNum(x-5,y)%10==6||mapa.getNum(x-4,y-1)%10==6)){
    przyp(-5,-1,2)
  }
  if(mapa.getNum(x+5,y-1)%10%3==1&&(mapa.getNum(x+5,y)%10==6||mapa.getNum(x+4,y-1)%10==6)){
    przyp(5,-1,2)
  }
  if(mapa.getNum(x-5,y+1)%10%3==1&&(mapa.getNum(x-5,y)%10==6||mapa.getNum(x-4,y+1)%10==6)){
    przyp(-5,1,2)
  }
  if(mapa.getNum(x+5,y+1)%10%3==1&&(mapa.getNum(x+5,y)%10==6||mapa.getNum(x+4,y+1)%10==6)){
    przyp(5,1,2)
  }
  if(mapa.getNum(x-1,y-5)%10%3==1&&(mapa.getNum(x,y-5)%10==6||mapa.getNum(x-1,y-4)%10==6)){
    przyp(-1,-5,2)
  }
  if(mapa.getNum(x+1,y-5)%10%3==1&&(mapa.getNum(x,y-5)%10==6||mapa.getNum(x+1,y-4)%10==6)){
    przyp(1,-5,2)
  }
  if(mapa.getNum(x-1,y+5)%10%3==1&&(mapa.getNum(x,y+5)%10==6||mapa.getNum(x-1,y+4)%10==6)){
    przyp(-1,5,2)
  }
  if(mapa.getNum(x+1,y+5)%10%3==1&&(mapa.getNum(x,y+5)%10==6||mapa.getNum(x+1,y+4)%10==6)){
    przyp(1,5,2)
  }
	if(mapa.getNum(x-2,y-2)%10>0&&mapa.getNum(x-1,y-1)%10==6&&((mapa.getNum(x-2,y-1)%10==6)||(mapa.getNum(x-1,y-2)%10==6))){
    przyp(-2,-2,3)
	}
	if(mapa.getNum(x+2,y-2)%10>0&&mapa.getNum(x+1,y-1)%10==6&&((mapa.getNum(x+2,y-1)%10==6)||(mapa.getNum(x+1,y-2)%10==6))){
    przyp(2,-2,3)
	}
	if(mapa.getNum(x-2,y+2)%10>0&&mapa.getNum(x-1,y+1)%10==6&&((mapa.getNum(x-2,y+1)%10==6)||(mapa.getNum(x-1,y+2)%10==6))){
    przyp(-2,2,3)
	}
	if(mapa.getNum(x+2,y+2)%10>0&&mapa.getNum(x+1,y+1)%10==6&&((mapa.getNum(x+2,y+1)%10==6)||(mapa.getNum(x+1,y+2)%10==6))){
		przyp(2,2,3)
	}
	if(mapa.getNum(x-3,y-2)%10>0&&mapa.getNum(x-2,y-2)%10==6&&mapa.getNum(x-2,y-1)%10==6){
    przyp(-3,-2,3)
	}
	if(mapa.getNum(x+3,y-2)%10>0&&mapa.getNum(x+2,y-2)%10==6&&mapa.getNum(x+2,y-1)%10==6){
    przyp(3,-2,3)
	}
	if(mapa.getNum(x-3,y+2)%10>0&&mapa.getNum(x-2,y+2)%10==6&&mapa.getNum(x-2,y+1)%10==6){
    przyp(-3,2,3)
	}
	if(mapa.getNum(x+3,y+2)%10>0&&mapa.getNum(x+2,y+2)%10==6&&mapa.getNum(x+2,y+1)%10==6){
		przyp(3,2,3)
	}
	if(mapa.getNum(x-2,y-3)%10>0&&mapa.getNum(x-2,y-2)%10==6&&mapa.getNum(x-1,y-2)%10==6){
    przyp(-2,-3,3)
	}
	if(mapa.getNum(x+2,y-3)%10>0&&mapa.getNum(x+2,y-2)%10==6&&mapa.getNum(x+1,y-2)%10==6){
    przyp(2,-3,3)
	}
	if(mapa.getNum(x-2,y+3)%10>0&&mapa.getNum(x-2,y+2)%10==6&&mapa.getNum(x-1,y+2)%10==6){
    przyp(-2,3,3)
	}
	if(mapa.getNum(x+2,y+3)%10>0&&mapa.getNum(x+2,y+2)%10==6&&mapa.getNum(x+1,y+2)%10==6){
		przyp(2,3,3)
	}
  if(mapa.getNum(x-3,y-2)%10%3==1&&mapa.getNum(x-2,y-1)%10==6&&mapa.getNum(x-3,y-1)%10>4){
    przyp(-3,-2,2)
  }
  if(mapa.getNum(x+3,y-2)%10%3==1&&mapa.getNum(x+2,y-1)%10==6&&mapa.getNum(x+3,y-1)%10>4){
    przyp(3,-2,2)
  }
  if(mapa.getNum(x-3,y+2)%10%3==1&&mapa.getNum(x-2,y+1)%10==6&&mapa.getNum(x-3,y+1)%10>4){
    przyp(-3,2,2)
  }
  if(mapa.getNum(x+3,y+2)%10%3==1&&mapa.getNum(x+2,y+1)%10==6&&mapa.getNum(x+3,y+1)%10>4){
    przyp(3,2,2)
  }
  if(mapa.getNum(x-2,y-3)%10%3==1&&mapa.getNum(x-1,y-2)%10==6&&mapa.getNum(x-1,y-3)%10>4){
    przyp(-2,-3,2)
  }
  if(mapa.getNum(x+2,y-3)%10%3==1&&mapa.getNum(x+1,y-2)%10==6&&mapa.getNum(x+1,y-3)%10>4){
    przyp(2,-3,2)
  }
  if(mapa.getNum(x-2,y+3)%10%3==1&&mapa.getNum(x-1,y+2)%10==6&&mapa.getNum(x-1,y+3)%10>4){
    przyp(-2,3,2)
  }
  if(mapa.getNum(x+2,y+3)%10%3==1&&mapa.getNum(x+1,y+2)%10==6&&mapa.getNum(x+1,y+3)%10>4){
    przyp(2,3,2)
  }
	if(mapa.getNum(x-4,y-2)%10>0&&mapa.getNum(x-2,y-1)%10==6&&mapa.getNum(x-3,y-1)%10>4&&mapa.getNum(x-3,y-2)%10>4){
    przyp(-4,-2,3)
	}
	if(mapa.getNum(x+4,y-2)%10>0&&mapa.getNum(x+2,y-1)%10==6&&mapa.getNum(x+3,y-1)%10>4&&mapa.getNum(x+3,y-2)%10>4){
    przyp(4,-2,3)
	}
	if(mapa.getNum(x-4,y+2)%10>0&&mapa.getNum(x-2,y+1)%10==6&&mapa.getNum(x-3,y+1)%10>4&&mapa.getNum(x-3,y+2)%10>4){
    przyp(-4,2,3)
	}
	if(mapa.getNum(x+4,y+2)%10>0&&mapa.getNum(x+2,y+1)%10==6&&mapa.getNum(x+3,y+1)%10>4&&mapa.getNum(x+3,y+2)%10>4){
    przyp(4,2,3)
	}
	if(mapa.getNum(x-2,y-4)%10>0&&mapa.getNum(x-1,y-2)%10==6&&mapa.getNum(x-1,y-3)%10>4&&mapa.getNum(x-2,y-3)%10>4){
    przyp(-2,-4,3)
	}
	if(mapa.getNum(x+2,y-4)%10>0&&mapa.getNum(x+1,y-2)%10==6&&mapa.getNum(x+1,y-3)%10>4&&mapa.getNum(x+2,y-3)%10>4){
    przyp(2,-4,3)
	}
	if(mapa.getNum(x-2,y+4)%10>0&&mapa.getNum(x-1,y+2)%10==6&&mapa.getNum(x-1,y+3)%10>4&&mapa.getNum(x-2,y+3)%10>4){
    przyp(-2,4,3)
	}
  if(mapa.getNum(x+2,y+4)%10>0&&mapa.getNum(x+1,y+2)%10==6&&mapa.getNum(x+1,y+3)%10>4&&mapa.getNum(x+2,y+3)%10>4){
    przyp(2,4,3)
  }
  if(mapa.getNum(x-4,y-2)%10%3==1&&(mapa.getNum(x-3,y-2)%10==6||(mapa.getNum(x-2,y-1)%10==6&&mapa.getNum(x-3,y-1)%10>4)&&mapa.getNum(x-4,y-1)%10>4)){
    przyp(-4,-2,2)
  }
  if(mapa.getNum(x+4,y-2)%10%3==1&&(mapa.getNum(x+3,y-2)%10==6||(mapa.getNum(x+2,y-1)%10==6&&mapa.getNum(x+3,y-1)%10>4)&&mapa.getNum(x+4,y-1)%10>4)){
    przyp(4,-2,2)
  }
  if(mapa.getNum(x-4,y+2)%10%3==1&&(mapa.getNum(x-3,y+2)%10==6||(mapa.getNum(x-2,y+1)%10==6&&mapa.getNum(x-3,y+1)%10>4)&&mapa.getNum(x-4,y+1)%10>4)){
    przyp(-4,2,2)
  }
  if(mapa.getNum(x+4,y+2)%10%3==1&&(mapa.getNum(x+3,y+2)%10==6||(mapa.getNum(x+2,y+1)%10==6&&mapa.getNum(x+3,y+1)%10>4)&&mapa.getNum(x+4,y+1)%10>4)){
    przyp(4,2,2)
  }
  if(mapa.getNum(x-2,y-4)%10%3==1&&(mapa.getNum(x-2,y-3)%10==6||(mapa.getNum(x-1,y-2)%10==6&&mapa.getNum(x-1,y-3)%10>4)&&mapa.getNum(x-1,y-4)%10>4)){
    przyp(-2,-4,2)
  }
  if(mapa.getNum(x+2,y-4)%10%3==1&&(mapa.getNum(x+2,y-3)%10==6||(mapa.getNum(x+1,y-2)%10==6&&mapa.getNum(x+1,y-3)%10>4)&&mapa.getNum(x+1,y-4)%10>4)){
    przyp(2,-4,2)
  }
  if(mapa.getNum(x-2,y+4)%10%3==1&&(mapa.getNum(x-2,y+3)%10==6||(mapa.getNum(x-1,y+2)%10==6&&mapa.getNum(x-1,y+3)%10>4)&&mapa.getNum(x-1,y+4)%10>4)){
    przyp(-2,4,2)
  }
  if(mapa.getNum(x+2,y+4)%10%3==1&&(mapa.getNum(x+2,y+3)%10==6||(mapa.getNum(x+1,y+2)%10==6&&mapa.getNum(x+1,y+3)%10>4)&&mapa.getNum(x+1,y+4)%10>4)){
    przyp(2,4,2)
  }
	if(mapa.getNum(x-3,y-3)%10>0&&(mapa.getNum(x-3,y-2)%10==6||mapa.getNum(x-2,y-3)%10==6)){
    przyp(-3,-3,3)
	}
	if(mapa.getNum(x+3,y-3)%10>0&&(mapa.getNum(x+3,y-2)%10==6||mapa.getNum(x+2,y-3)%10==6)){
    przyp(3,-3,3)
	}
	if(mapa.getNum(x-3,y+3)%10>0&&(mapa.getNum(x-3,y+2)%10==6||mapa.getNum(x-2,y+3)%10==6)){
    przyp(-3,3,3)
	}
	if(mapa.getNum(x+3,y+3)%10>0&&(mapa.getNum(x+3,y+2)%10==6||mapa.getNum(x+2,y+3)%10==6)){
    przyp(3,3,3)
	}
	if(mapa.getNum(x-4,y-3)%10>0&&mapa.getNum(x-3,y-3)%10==6&&mapa.getNum(x-3,y-2)%10==6){
    przyp(-4,-3,3)
	}
	if(mapa.getNum(x+4,y-3)%10>0&&mapa.getNum(x+3,y-3)%10==6&&mapa.getNum(x+3,y-2)%10==6){
    przyp(4,-3,3)
	}
	if(mapa.getNum(x-4,y+3)%10>0&&mapa.getNum(x-3,y+3)%10==6&&mapa.getNum(x-3,y+2)%10==6){
    przyp(-4,3,3)
	}
	if(mapa.getNum(x+4,y+3)%10>0&&mapa.getNum(x+3,y+3)%10==6&&mapa.getNum(x+3,y+2)%10==6){
    przyp(4,3,3)
	}
	if(mapa.getNum(x-3,y-4)%10>0&&mapa.getNum(x-3,y-3)%10==6&&mapa.getNum(x-2,y-3)%10==6){
    przyp(-3,-4,3)
	}
	if(mapa.getNum(x+3,y-4)%10>0&&mapa.getNum(x+3,y-3)%10==6&&mapa.getNum(x+2,y-3)%10==6){
    przyp(3,-4,3)
	}
	if(mapa.getNum(x-3,y+4)%10>0&&mapa.getNum(x-3,y+3)%10==6&&mapa.getNum(x-2,y+3)%10==6){
    przyp(-3,4,3)
	}
	if(mapa.getNum(x+3,y+4)%10>0&&mapa.getNum(x+3,y+3)%10==6&&mapa.getNum(x+2,y+3)%10==6){
    przyp(3,4,3)
	}
  if(mapa.getNum(x-4,y-3)%10%3==1&&mapa.getNum(x-2,y-1)%10==6&&mapa.getNum(x-3,y-2)%10>4&&mapa.getNum(x-4,y-2)%10>4&&(mapa.getNum(x-2,y-2)%10==6||mapa.getNum(x-3,y-1)%10==6)){
    przyp(-4,-3,2)
  }
  if(mapa.getNum(x+4,y-3)%10%3==1&&mapa.getNum(x+2,y-1)%10==6&&mapa.getNum(x+3,y-2)%10>4&&mapa.getNum(x+4,y-2)%10>4&&(mapa.getNum(x+2,y-2)%10==6||mapa.getNum(x+3,y-1)%10==6)){
    przyp(4,-3,2)
  }
  if(mapa.getNum(x-4,y+3)%10%3==1&&mapa.getNum(x-2,y+1)%10==6&&mapa.getNum(x-3,y+2)%10>4&&mapa.getNum(x-4,y+2)%10>4&&(mapa.getNum(x-2,y+2)%10==6||mapa.getNum(x-3,y+1)%10==6)){
    przyp(-4,3,2)
  }
  if(mapa.getNum(x+4,y+3)%10%3==1&&mapa.getNum(x+2,y+1)%10==6&&mapa.getNum(x+3,y+2)%10>4&&mapa.getNum(x+4,y+2)%10>4&&(mapa.getNum(x+2,y+2)%10==6||mapa.getNum(x+3,y+1)%10==6)){
    przyp(4,3,2)
  }
  if(mapa.getNum(x-3,y-4)%10%3==1&&mapa.getNum(x-1,y-2)%10==6&&mapa.getNum(x-2,y-3)%10>4&&mapa.getNum(x-2,y-4)%10>4&&(mapa.getNum(x-2,y-2)%10==6||mapa.getNum(x-1,y-3)%10==6)){
    przyp(-3,-4,2)
  }
  if(mapa.getNum(x+3,y-4)%10%3==1&&mapa.getNum(x+1,y-2)%10==6&&mapa.getNum(x+2,y-3)%10>4&&mapa.getNum(x+2,y-4)%10>4&&(mapa.getNum(x+2,y-2)%10==6||mapa.getNum(x+1,y-3)%10==6)){
    przyp(3,-4,2)
  }
  if(mapa.getNum(x-3,y+4)%10%3==1&&mapa.getNum(x-1,y+2)%10==6&&mapa.getNum(x-2,y+3)%10>4&&mapa.getNum(x-2,y+4)%10>4&&(mapa.getNum(x-2,y+2)%10==6||mapa.getNum(x-1,y+3)%10==6)){
    przyp(-3,4,2)
  }
  if(mapa.getNum(x+3,y+4)%10%3==1&&mapa.getNum(x+1,y+2)%10==6&&mapa.getNum(x+2,y+3)%10>4&&mapa.getNum(x+2,y+4)%10>4&&(mapa.getNum(x+2,y+2)%10==6||mapa.getNum(x+1,y+3)%10==6)){
    przyp(3,4,2)
  }
}

function przyp(fowx,fowy,ile){
	mapa.setNum(x+fowx,y+fowy,mapa.getNum(x+fowx,y+fowy)-mapa.getNum(x+fowx,y+fowy)%10%3+ile) 
}

function wyswietlefekty(id,cx,cy){
  if(efekty[id]==1){
    imageCenter(Przejedzenie,cx,cy)
  }
  if(efekty[id]==2){
    imageCenter(Glod,cx,cy)
  }
  if(efekty[id]==3){
    imageCenter(Zaglodzenie,cx,cy)
  }
}

function wyswietlstack(id,cx,cy){
  fill(45,12,27)
	textSize(10)
	textAlign(RIGHT)
	if(floor(itemy[id]/100)==1||floor(itemy[id]/100)==4||((floor(itemy[id]/100)==8||floor(itemy[id]/100)==9)&&Bron.getNum(itemy[id]-800,6)==0)){
		if(stack[id]>0)
		textCenter(stack[id],cx+132,cy+32)
	}
}

function wyswietlitem(id,cx,cy){
	fill(45,12,27)
	textSize(10)
	textAlign(LEFT)
	if(floor(id/100)==1){
		imageCenter(eval(Surowce.getString(id-100,0)),cx,cy)
	}
	if(floor(id/100)==2){
		imageCenter(eval(Ksiegi.getString(id-200,0)),cx,cy)
	}
	if(floor(id/100)==3){
		imageCenter(eval(Inne.getString(id-300,0)),cx,cy)
	}
  if(floor(id/100)==4){
    wyswietlmixa(Potiony.getNum(id%-400,0),cx,cy)
  }
  if(id==500){
  }
	if(floor(id/100)==6||floor(id/100)==7){
		imageCenter(eval(Pancerz.getString(id-600,0)),cx,cy)
	}
	if(floor(id/100)==8||floor(id/100)==9){
		imageCenter(eval(Bron.getString(id-800,0)),cx,cy)
	}
}

function wyswietlitemtext(id,cx,cy){
fill(45,12,27)
	textSize(10)
	textAlign(LEFT)
	if(floor(id/100)==1){
		textCenter(join(split(Surowce.getString(id-100,2),"_")," "),cx+36,cy+10)
		textCenter(join(split(Surowce.getString(id-100,3),"_")," "),cx+36,cy+20)
	}
	if(floor(id/100)==2){
		textCenter(join(split(Ksiegi.getString(id-200,2),"_")," "),cx+36,cy+10)
		textCenter(join(split(Ksiegi.getString(id-200,3),"_")," "),cx+36,cy+20)
	}
	if(floor(id/100)==3){
		textCenter(join(split(Inne.getString(id-300,2),"_")," "),cx+36,cy+10)
		textCenter(join(split(Inne.getString(id-300,3),"_")," "),cx+36,cy+20)
	}
  if(floor(id/100)==4){
    if(Potiony.getNum(id-400,4)==1){
      textCenter(join(split(Mikstury.getString(Potiony.getNum(id-400,3),0),"_")," "),cx+36,cy+10)
      textCenter(join(split(Mikstury.getString(Potiony.getNum(id-400,3),1),"_")," "),cx+36,cy+20)
    }
    else{
      textCenter(join(split(Potiony.getString(id-400,1),"_")," "),cx+36,cy+10)
      textCenter(join(split(Potiony.getString(id-400,2),"_")," "),cx+36,cy+20)
    }
  }
  if(id==500){
  }
	if(floor(id/100)==6||floor(id/100)==7){
		textCenter(join(split(Pancerz.getString(id-600,2),"_")," "),cx+36,cy+10)
		textCenter(join(split(Pancerz.getString(id-600,3),"_")," "),cx+36,cy+20)
	}
	if(floor(id/100)==8||floor(id/100)==9){
		textCenter(join(split(Bron.getString(id-800,2),"_")," "),cx+36,cy+10)
		textCenter(join(split(Bron.getString(id-800,3),"_")," "),cx+36,cy+20)
	}
}

function wyswietlmixa(id,cx,cy){
  if(id==0){
    imageCenter(Mikstura1,cx,cy)
  }
  if(id==1){
    imageCenter(Mikstura2,cx,cy)
  }
  if(id==2){
    imageCenter(Mikstura3,cx,cy)
  }
  if(id==3){
    imageCenter(Mikstura4,cx,cy)
  }
  if(id==4){
    imageCenter(Mikstura5,cx,cy)
  }
  if(id==5){
    imageCenter(Mikstura6,cx,cy)
  }
  if(id==6){
    imageCenter(Mikstura7,cx,cy)
  }
  if(id==7){
    imageCenter(Mikstura8,cx,cy)
  }
  if(id==8){
    imageCenter(Mikstura9,cx,cy)
  }
  if(id==9){
    imageCenter(Mikstura10,cx,cy)
  }
  if(id==10){
    imageCenter(Mikstura11,cx,cy)
  }
  if(id==11){
    imageCenter(Mikstura12,cx,cy)
  }
  if(id==12){
    imageCenter(Mikstura13,cx,cy)
  }
}

function imageCenter(img,cx,cy){
  image(img,(dc*skala/skalamirror)+cx,(wc*skala/skalamirror)+cy)
}

function textCenter(txt,cx,cy){
  text(txt,(dc*skala/skalamirror)+cx,(wc*skala/skalamirror)+cy)
}

function chodzenie(cx,cy){
  if(freeakcja>0){
    freeakcja--
  }
  else{
    fow()
    if(cx==-1&&cy==0){
      mapa.setNum(x,y,mapa.getNum(x,y)%1000+1000000)
      if(floor(mapa.getNum(x+1,y)%10000000/1000000)==3){
        mapa.setNum(x,y,mapa.getNum(x,y)+3000000)
      }
      else{
        mapa.setNum(x,y,mapa.getNum(x,y)+2000000)
      }
  	  mapa.setNum(x+1,y,mapa.getNum(x+1,y)%1000)
    }
    if(cx==1&&cy==0){
  	  mapa.setNum(x,y,mapa.getNum(x,y)%1000+1000000)
      if(floor(mapa.getNum(x-1,y)%10000000/1000000)==1){
        mapa.setNum(x,y,mapa.getNum(x,y)+1000000)
      }
  	  mapa.setNum(x-1,y,mapa.getNum(x-1,y)%1000)
    }
    if(cx==0&&cy==-1){
  	  mapa.setNum(x,y,mapa.getNum(x,y)%1000+1000000)
      if(floor(mapa.getNum(x,y+1)%10000000/1000000)==1){
        mapa.setNum(x,y,mapa.getNum(x,y)+1000000)
      }
      if(floor(mapa.getNum(x,y+1)%10000000/1000000)==3){
        mapa.setNum(x,y,mapa.getNum(x,y)+3000000)
      }
      else{
        if(floor(mapa.getNum(x,y+1)%10000000/1000000)==4){
          mapa.setNum(x,y,mapa.getNum(x,y)+2000000)
        }
      }
  	  mapa.setNum(x,y+1,mapa.getNum(x,y+1)%1000)
    }
    if(cx==0&&cy==1){
  	  mapa.setNum(x,y,mapa.getNum(x,y)%1000+1000000)
      if(floor(mapa.getNum(x,y-1)%10000000/1000000)==1){
        mapa.setNum(x,y,mapa.getNum(x,y)+1000000)
      }
      if(floor(mapa.getNum(x,y-1)%10000000/1000000)==3){
        mapa.setNum(x,y,mapa.getNum(x,y)+3000000)
      }
      else{
        if(floor(mapa.getNum(x,y-1)%10000000/1000000)==4){
          mapa.setNum(x,y,mapa.getNum(x,y)+2000000)
        }
      }
  	  mapa.setNum(x,y-1,mapa.getNum(x,y-1)%1000)
    }
    if(cx==0&&cy==0){
      if(floor(mapa.getNum(x,y)%10000000/1000000)==1||floor(mapa.getNum(x,y)%10000000/1000000)==3){
        mapa.setNum(x,y,mapa.getNum(x,y)+1000000)
      }
      else{
          mapa.setNum(x,y,mapa.getNum(x,y)-1000000)
      }
    }
    glod--
    if(glod>=1500){
      for(var i=0;i<30&&efekty[i]!=1;i++){
        if(efekty[i]==0){
          efekty[i]=1
          break
        }
      }
    }
    else{
      for(var i=0;i<30&&efekty[i]!=0;i++){
        if(efekty[i]==1){
          for(var j=i;j<30&&efekty[j]!=0;j++){
            efekty[j]=efekty[j+1]
          }
          break
        }
      }
    }
    if(glod>=500&&glod<1000){
      for(var i=0;i<30&&efekty[i]!=2;i++){
        if(efekty[i]==0){
          efekty[i]=2
          break
        }
      }
    }
    else{
      for(var i=0;i<30&&efekty[i]!=0;i++){
        if(efekty[i]==2){
          for(var j=i;j<30&&efekty[j]!=0;j++){
            efekty[j]=efekty[j+1]
          }
          break
        }
      }
    }
    if(glod>=0&&glod<500){
      for(var i=0;i<30&&efekty[i]!=3;i++){
        if(efekty[i]==0){
          efekty[i]=3
          break
        }
      }
    }
    else{
      for(var i=0;i<30&&efekty[i]!=0;i++){
        if(efekty[i]==3){
          for(var j=i;j<30&&efekty[j]!=0;j++){
            efekty[j]=efekty[j+1]
          }
          break
        }
      }
    }
  }
}

function losujloot(id){
  var itemtype
  var itemcategory=random(100)
  var itemrandoming
  switch(true){
    case (itemcategory<=50):
      itemtype=floor(random(6))
      switch(itemtype){
        case 0:
          itemrandoming=floor(random(SurowceR))
          while(Surowce.getNum(itemrandoming,1)!=1){
            itemrandoming=floor(random(SurowceR))
          }
          loot[id]=100+itemrandoming
        break
        case 1:
          itemrandoming=floor(random(KsiegiR))
          while(Ksiegi.getNum(itemrandoming,1)!=1){
            itemrandoming=floor(random(KsiegiR))
          }
          loot[id]=200+itemrandoming
        break
        case 2:
          itemrandoming=floor(random(InneR))
          while(Inne.getNum(itemrandoming,1)!=1){
            itemrandoming=floor(random(InneR))
          }
          loot[id]=300+itemrandoming
        break
        case 3:
          itemrandoming=floor(random(PotionyR))
          loot[id]=400+itemrandoming
        break
        case 4:
          itemrandoming=floor(random(PancerzR))
          while(Pancerz.getNum(itemrandoming,1)!=1){
            itemrandoming=floor(random(PancerzR))
          }
          loot[id]=600+itemrandoming
        break
        case 5:
          itemrandoming=floor(random(BronR))
          while(Bron.getNum(itemrandoming,1)!=1){
            itemrandoming=floor(random(BronR))
          }
          loot[id]=800+itemrandoming
        break
      }
    break
    case (itemcategory>50 && itemcategory<=80):
      itemtype=floor(random(6))
      switch(itemtype){
        case 0:
          itemrandoming=floor(random(SurowceR))
          while(Surowce.getNum(itemrandoming,1)!=2){
            itemrandoming=floor(random(SurowceR))
          }
          loot[id]=100+itemrandoming
        break
        case 1:
          itemrandoming=floor(random(KsiegiR))
          while(Ksiegi.getNum(itemrandoming,1)!=2){
            itemrandoming=floor(random(KsiegiR))
          }
          loot[id]=200+itemrandoming
        break
        case 2:
          itemrandoming=floor(random(InneR))
          while(Inne.getNum(itemrandoming,1)!=2){
            itemrandoming=floor(random(InneR))
          }
          loot[id]=300+itemrandoming
        break
        case 3:
          itemrandoming=floor(random(PotionyR))
          loot[id]=400+itemrandoming
        break
        case 4:
          itemrandoming=floor(random(PancerzR))
          while(Pancerz.getNum(itemrandoming,1)!=2){
            itemrandoming=floor(random(PancerzR))
          }
          loot[id]=600+itemrandoming
        break
        case 5:
          itemrandoming=floor(random(BronR))
          while(Bron.getNum(itemrandoming,1)!=2){
            itemrandoming=floor(random(BronR))
          }
          loot[id]=800+itemrandoming
        break
      }
    break
    case (itemcategory>80 && itemcategory<=95):
      itemtype=floor(random(5))
      switch(itemtype){
        case 0:
          itemrandoming=floor(random(SurowceR))
          while(Surowce.getNum(itemrandoming,1)!=3){
            itemrandoming=floor(random(SurowceR))
          }
          loot[id]=100+itemrandoming
        break
        case 1:
          itemrandoming=floor(random(KsiegiR))
          while(Ksiegi.getNum(itemrandoming,1)!=3){
            itemrandoming=floor(random(KsiegiR))
          }
          loot[id]=200+itemrandoming
        break
        case 2:
          itemrandoming=floor(random(InneR))
          while(Inne.getNum(itemrandoming,1)!=3){
            itemrandoming=floor(random(InneR))
          }
          loot[id]=300+itemrandoming
        break
        case 3:
          itemrandoming=floor(random(PancerzR))
          while(Pancerz.getNum(itemrandoming,1)!=3){
            itemrandoming=floor(random(PancerzR))
          }
          loot[id]=600+itemrandoming
        break
        case 4:
          itemrandoming=floor(random(BronR))
          while(Bron.getNum(itemrandoming,1)!=3){
            itemrandoming=floor(random(BronR))
          }
          loot[id]=800+itemrandoming
        break
      }
    break
    case (itemcategory>95):
      itemtype=floor(random(5))
      switch(itemtype){
        case 0:
          itemrandoming=floor(random(SurowceR))
          while(Surowce.getNum(itemrandoming,1)!=4){
            itemrandoming=floor(random(SurowceR))
          }
          loot[id]=100+itemrandoming
        break
        case 1:
          itemrandoming=floor(random(KsiegiR))
          while(Ksiegi.getNum(itemrandoming,1)!=4){
            itemrandoming=floor(random(KsiegiR))
          }
          loot[id]=200+itemrandoming
        break
        case 2:
          itemrandoming=floor(random(InneR))
          while(Inne.getNum(itemrandoming,1)!=4){
            itemrandoming=floor(random(InneR))
          }
          loot[id]=300+itemrandoming
        break
        case 3:
          itemrandoming=floor(random(PancerzR))
          while(Pancerz.getNum(itemrandoming,1)!=4){
            itemrandoming=floor(random(PancerzR))
          }
          loot[id]=600+itemrandoming
        break
        case 4:
          itemrandoming=floor(random(BronR))
          while(Bron.getNum(itemrandoming,1)!=4){
            itemrandoming=floor(random(BronR))
          }
          loot[id]=800+itemrandoming
        break
      }
    break
  }
}

function okno(id){
  var cx
  var cy
	if(id>99&&id<1000&&stanokna==0){
		noCursor()
    skalamirror=1
    cx=(mouseX-((dc*skala/skalamirror)))
    cy=(mouseY-((wc*skala/skalamirror)))
    if(cx>windowWidth-(dc*skala/skalamirror)*2-192){
      cx=windowWidth-(dc*skala/skalamirror)*2-192
    }
    if(cy>windowHeight-(wc*skala/skalamirror)*2-96){
      cy=windowHeight-(wc*skala/skalamirror)*2-96
    }
		imageCenter(OkienkoObokKursora,cx,cy)
		wyswietlitem(id,cx+10,cy+10)
		wyswietlitemtext(id,cx+10,cy+10)
	}
	if(id>99&&id<1000&&stanokna>0&&((mouseX-(dc*skalamirror))>480||(mouseY-(wc*skalamirror))>257)){
		noCursor()
    skalamirror=1
    cx=(mouseX-((dc*skala/skalamirror)))
    cy=(mouseY-((wc*skala/skalamirror)))
    if(cx>windowWidth-(dc*skala/skalamirror)*2-192){
      cx=windowWidth-(dc*skala/skalamirror)*2-192
    }
    if(cy>windowHeight-(wc*skala/skalamirror)*2-96){
      cy=windowHeight-(wc*skala/skalamirror)*2-96
    }
		imageCenter(OkienkoObokKursora,cx,cy)
		wyswietlitem(id,cx+10,cy+10)
		wyswietlitemtext(id,cx+10,cy+10)
	}
	if(id<0&&stanokna>=1&&stanokna<=4){
		noCursor()
    cx=(mouseX-((dc*skala/skalamirror)))
    cy=(mouseY-((wc*skala/skalamirror)))
    if(cx>windowWidth-(dc*skala/skalamirror)*2-192){
      cx=windowWidth-(dc*skala/skalamirror)*2-192
    }
    if(cy>windowHeight-(wc*skala/skalamirror)*2-96){
      cy=windowHeight-(wc*skala/skalamirror)*2-96
    }
		imageCenter(OkienkoObokKursora,cx,cy)
	}
	if(id<0&&stanokna>=5&&stanokna<=5+floor((ileabilitek-1)/8)){
		noCursor()
    cx=(mouseX-((dc*skala/skalamirror)))
    cy=(mouseY-((wc*skala/skalamirror)))
    if(cx>windowWidth-(dc*skala/skalamirror)*2-192){
      cx=windowWidth-(dc*skala/skalamirror)*2-192
    }
    if(cy>windowHeight-(wc*skala/skalamirror)*2-96){
      cy=windowHeight-(wc*skala/skalamirror)*2-96
    }
		imageCenter(OkienkoObokKursora,cx,cy)
	}
	if(id>99&&id<1000&&stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
		noCursor()
    cx=(mouseX-((dc*skala/skalamirror)))
    cy=(mouseY-((wc*skala/skalamirror)))
    if(cx>windowWidth-(dc*skala/skalamirror)*2-192){
      cx=windowWidth-(dc*skala/skalamirror)*2-192
    }
    if(cy>windowHeight-(wc*skala/skalamirror)*2-96){
      cy=windowHeight-(wc*skala/skalamirror)*2-96
    }
		imageCenter(OkienkoObokKursora,cx,cy)
		wyswietlitem(id,cx+10,cy+10)
		wyswietlitemtext(id,cx+10,cy+10)
	}
}

function bindowanie(){
  if(stanokna>4){
    if(key=='0'){
      if(stanokna>=5&&stanokna<=5+floor((ileabilitek-1)/8)){
        bindy[9]=(((stanokna-5)*8+ox*4+oy)+1)*-1
      }
      if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
        bindy[9]=((stanokna-6-floor((ileabilitek-1)/8))*8+ox*4+oy)
      }
    }
    else{
      if(stanokna>=5&&stanokna<=5+floor((ileabilitek-1)/8)){
        bindy[key-1]=(((stanokna-5)*8+ox*4+oy)+1)*-1
      }
      if(stanokna>=6+floor((ileabilitek-1)/8)&&stanokna<=6+floor((ileitemow-1)/8)+floor((ileabilitek-1)/8)){
        bindy[key-1]=((stanokna-6-floor((ileabilitek-1)/8))*8+ox*4+oy)
      }
    }
  }
  else{
    if(key=='0'){
      if(bindy[9]>=0){
        akcjaprzedmiot(bindy[9])
      }
    }
    else{
      if(bindy[key-1]>=0){
        akcjaprzedmiot(bindy[key-1])
      }
    }
  }
}

function czyefekt(e){
  for(var i=0;i<30&&efekty[i]!=0;i++){
    if(efekty[i]==e){
      return true;
    }
  }
  return false;
}

function akcjaprzedmiot(id){
  if(floor(itemy[id]/100)==1){
    if(Surowce.getNum(itemy[id]-100,4)==1){
      if(Surowce.getNum(itemy[id]-100,8)==1){
        if(floor(mapa.getNum(x,y)%1000/10)==0||floor(mapa.getNum(x,y)%1000/10)==1||floor(mapa.getNum(x,y)%1000/10)==4||floor(mapa.getNum(x,y)%1000/10)==5){
          mapa.setNum(x,y,floor(mapa.getNum(x,y)/1000)*1000+100+mapa.getNum(x,y)%10)
          stack[id]--
          chodzenie(0,0)
        }
      }
      else{
        if(Surowce.getNum(itemy[id]-100,6)==0||!czyefekt(1)){
          hp+=Surowce.getNum(itemy[id]-100,5)
          if(hp>staty[0]){
            hp=staty[0]
          }
          glod+=Surowce.getNum(itemy[id]-100,6)
          pw=Surowce.getNum(itemy[id]-100,7)
          if(pw==4){
            pw=floor(random(1,4))
          }
          if(pw!=0){
            staty[pw]++
          }
          stack[id]--
          chodzenie(0,0)
        }
      }
      if(stack[id]==0){
        usunitem(id)
      }
    }
  }
  if(floor(itemy[id]/100)==4){
    stack[id]--
    Potiony.setNum(itemy[id]-400,4,2)
    switch(Potiony.getNum(itemy[id]-400,5)){
      case 1:
        hp+=10
        if(hp>staty[0]){
          hp=staty[0]
        }
      break
      case 2:
        staty[1]++
      break
      case 3:
        staty[2]++
      break
      case 4:
        staty[3]++
      break
      case 5:
        staty[1]--
      break;
      case 6:
        staty[2]--
      break
      case 7:
        staty[3]--
      break
    }
    chodzenie(0,0)
    if(stack[id]==0){
      usunitem(id)
    }
  }
  if(floor(itemy[id]/100)==6||floor(itemy[id]/100)==7){
    if(Pancerz.getNum(itemy[id]-600,5)==1){
      if(eq[2]==id){
        eq[2]=undefined
        chodzenie(0,0)
      }
      else{
        if(eq[2]==undefined){
          eq[2]=id
          chodzenie(0,0)
        }
      }
    }
    if(Pancerz.getNum(itemy[id]-600,5)==2){
      if(eq[3]==id){
        eq[3]=undefined
        chodzenie(0,0)
      }
      else{
        if(eq[3]==undefined){
          eq[3]=id
          chodzenie(0,0)
        }
      }
    }
    if(Pancerz.getNum(itemy[id]-600,5)==3){
      if(eq[4]==id){
        eq[4]=undefined
        chodzenie(0,0)
      }
      else{
        if(eq[4]==undefined){
          eq[4]=id
          chodzenie(0,0)
        }
      }
    }
    if(Pancerz.getNum(itemy[id]-600,5)==4){
      if(eq[5]==id||eq[6]==id){
        if(eq[5]==id){
          eq[5]=undefined
          chodzenie(0,0)
        }
        if(eq[6]==id){
          eq[6]=undefined
          chodzenie(0,0)
        }
      }
      else{
        if(eq[5]==undefined){
          eq[5]=id
          chodzenie(0,0)
        }
        else{
          if(eq[6]==undefined){
            eq[6]=id
            chodzenie(0,0)
          }
        }
      }
    }
    if(Pancerz.getNum(itemy[id]-600,5)==5){
      if(eq[7]==id){
        eq[7]=undefined
        chodzenie(0,0)
      }
      else{
        if(eq[7]==undefined){
          eq[7]=id
          chodzenie(0,0)
        }
      }
    }
  }
  if(floor(itemy[id]/100)==8||floor(itemy[id]/100)==9){
    if(Bron.getNum(itemy[id]-800,6)==1){
      if(eq[0]==id||eq[1]==id){
        if(eq[0]==id){
          eq[0]=undefined
          chodzenie(0,0)
        }
        if(eq[1]==id){
          eq[1]=undefined
          chodzenie(0,0)
        }
      }
      else{
        if(eq[0]==undefined){
          eq[0]=id
          chodzenie(0,0)
        }
        else{
          if(eq[1]==undefined){
            eq[1]=id
            chodzenie(0,0)
          }
        }
      }
    }
    if(Bron.getNum(itemy[id]-800,6)==2){
      if(eq[0]==id&&eq[1]==id){
        eq[0]=undefined
        eq[1]=undefined
        chodzenie(0,0)
      }
      else{
        if(eq[0]==undefined&&eq[1]==undefined){
          eq[0]=id
          eq[1]=id
          chodzenie(0,0)
        }
      }
    }
    if(Bron.getNum(itemy[id]-800,6)==3){
      if(eq[0]==id||eq[1]==id){
        if(eq[0]==id){
          eq[0]=undefined
          chodzenie(0,0)
        }
        if(eq[1]==id){
          eq[1]=undefined
          chodzenie(0,0)
        }
      }
      else{
        if(eq[0]==undefined){
          eq[0]=id
          chodzenie(0,0)
        }
        else{
          if(eq[1]==undefined){
            eq[1]=id
            chodzenie(0,0)
          }
        }
      }
    }
  }
}

/*function ubierzbron(id,s){
  if(Bron.getNum(itemy[id]-800,18)>=staty[1]&&Bron.getNum(itemy[id]-800,19)>=staty[2]&&Bron.getNum(itemy[id]-800,20)>=staty[3]){
    if(Bron.getNum(itemy[id]-800,))
  }
}*/

function usunitem(id){
  for(var i=id;i<ileitemow;i++){
    itemy[i]=itemy[i+1]
    stack[i]=stack[i+1]
  }
  ileitemow--
  for(var i=0;i<8;i++){
    if(eq[i]==id){
      eq[i]=undefined
    }
    if(eq[i]>id){
      eq[i]--
    }
  }
  for(var i=0;i<10;i++){
    if(bindy[i]==id){
      bindy[i]=undefined
    }
    if(bindy[i]>id){
      bindy[i]--
    }
  }
}

function chodzenieokno(cx,cy){
  if(cx==-1&&cy==0){
    if(stanokna==1||stanokna==5||(stanokna==6+floor((ileabilitek-1)/8))){
      if(ox==1){
        ox--
      }
    }
    else{
      if(ox==1){
        ox--
      }
      else{
        ox++
        stanokna--
      }
    }
  }
  if(cx==1&&cy==0){
    if(stanokna==4||(stanokna==5+floor((ileabilitek-1)/8))||(stanokna==6+floor((ileabilitek-1)/8)+floor((ileitemow-1)/8))){
      if(ox==0){
        ox++
      }
    }
    else{
      if(ox==0){
        ox++
      }
      else{
        ox--
        stanokna++
      }
    }
  }
  if(cx==0&&cy==-1&&oy>0){
    oy--
  }
  if(cx==0&&cy==1&&oy<3){
    oy++
  }
}