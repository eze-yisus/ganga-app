const { Product } = require("../db");

const infoProduct = [
  //Hogar y Muebles
  {
    name: "Silla Tolix",
    mark: "Desillas",
    description: "Medidas Alto:85cm, Ancho:45cm, Profundidad:54cm,  Alto al Asiento:44cm, Peso:5 kg",
    price: "1999",
    stock: 12,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_999099-MLA32094937061_092019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Muebles para el Hogar"],
  },
  {
    name: "Silla Eames",
    mark: "Makom",
    description: "Fue un diseño de Charles y Ray Eames en colaboración con Zenith Plastics para el concurso “Low-Cost Furniture Design”, que organizó The Museum of Modern Art of New York en el año 1950. Ésta fue la primera silla de plástico que se fabricó industrialmente.",
    price: "1799",
    stock: 20,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_970450-MLA43358152329_092020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Muebles para el Hogar"],
  },
  {
    name: "Silla Master",
    mark: "Living Style",
    description: "Ancho 53cm, alto 84cm, 56cm profundidad, Altura asiento al piso 50cm, Altura apoyabrazos al piso 68cm",
    price: "2999",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_939702-MLA46580969222_072021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Muebles para el Hogar"],
  },
  {
    name: "Silla Plastica Ideal",
    mark: "Ideal",
    description:
      "Silla Plastica Reforzada Ideal Juego X4 Exteriores Jardin",
    price: "8099",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_830905-MLA45643896168_042021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Jardin y Aire Libre", "Adornos y Decoracion"],
  },

  {
    name: "Guirnalda Microled",
    mark: "Libercam",
    description: "Las luces navideñas son unos de los productos más usados a la hora de decorar el interior del hogar o arboles navideños. Contribuye de manera excelente con su bajo consumo y gran iluminación.",
    price: "1099",
    stock: 80,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_810301-MLA47203312830_082021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Adornos y Decoracion"],
  },

  {
    name: "Jardin Vertical Artificial",
    mark: "Sheshu",
    description: "Panel de cesped de 40X60Cm",
    price: "5999",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_751827-MLA43579192834_092020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Adornos y Decoracion"],
  },
  {
    name: "Set X 9 Cuadros Begônia",
    mark: "Begônia",
    description: "Portaretratos Cuadros Modernos Decorativos Set X 9 Begônia",
    price: "2999",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_897876-MLA41180203554_032020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Adornos y Decoracion"],
  },
  {
    name: "Flor Ducha Cuadrada",
    mark: "Klatter",
    description: "Flor Ducha Cuadrada Baño 20x20 Acero Inoxidable Barral 40 Cm",
    price: "1299",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_738200-MLA46116828639_052021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Baños"],
  },
  {
    name: "Grifería de bacha",
    mark: "FV",
    description: "Monocromado, ceramico, con airedor, diametro de instalacion 34mm",
    price: "6899",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_610395-MLA40837656020_022020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Baños"],
  },
  {
    name: "Cesto Organizador",
    mark: "Begonia Home & Deco",
    description: "Material bambun y algodon, diametros 50cm de altura, 35cm de anchura",
    price: "5600",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_978524-MLA43206774526_082020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Baños"],
  },
  {
    name: "Secaplatos Begônia",
    mark: "Begônia",
    description: "Plegable capacidad para 16 platos de bambú",
    price: "1980",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_866184-MLA47230904585_082021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Bazar y Cocina"],
  },
  {
    name: "Cubiertos Tramontina",
    mark: "Tramontana",
    description: "24 Juego Cuchillos Tenedores Acero Inox",
    price: "2299",
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_701282-MLA31351985981_072019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Bazar y Cocina"],
  }, {
    name: "Termo Coleman",
    mark: "Coleman",
    description: "Matero de acero inoxidable 1.2L verde",
    price: "4600",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_726399-MLA43168207415_082020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Bazar y Cocina"],
  },
  {
    name: "Combo Somier Piero",
    mark: "Piero",
    description: "Espuma Alta Densidad Ropa Cama Almohadas",
    price: "2199",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_722590-MLA44426010169_122020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Camas, Colchones y Accesorios"],
  },
  {
    name: "Cama Marinera",
    mark: "Inducol",
    description: "1 Somier Plaza Y Media 90 X 190 Colchon April",
    price: "43099",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_965473-MLA31116227819_062019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Camas, Colchones y Accesorios"],
  },
  {
    name: "Sommier Box Cama",
    mark: "Drawer Sleep",
    description: "1 Plaza Con 2 Cajones 0.80x1.90",
    price: "51099",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_979501-MLA48073773546_102021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Camas, Colchones y Accesorios"],
  },
  {
    name: "Mopa Con Balde Escurridor",
    mark: "Begônia",
    description: "Mopa Con Balde Escurridor Y Limpiador Trapeador",
    price: "1499",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_862305-MLA42245095344_062020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Cuidado del Hogar y Lavanderia"],
  },
  {
    name: "Papel higiénico",
    mark: "Higienol",
    description: "Papel higiénico Higienol MAX simple 80 m de 4 u",
    price: "1020",
    stock: 120,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_873510-MLU47592708105_092021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Cuidado del Hogar y Lavanderia"],
  },
  {
    name: "Trapeador Piso Con Rociador",
    mark: "Spin Mop",
    description: "Trapeador Piso Con Rociador Mopa Microfibra Gira 360 Spray",
    price: "1200",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_835235-MLA46317647693_062021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Cuidado del Hogar y Lavanderia"],
  },
  {
    name: "Lampara Colgante Vintage",
    mark: "Ferrolux",
    description: "Lampara Colgante Vintage 1 Luz Jaula Diamante 15cm Ferrolux",
    price: "8000",
    stock: 42,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_662815-MLA32618384530_102019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Iluminación para el Hogar"],
  },
  {
    name: "Lámpara Led",
    mark: "Osram",
    description: "Lámparas Led 9w=75w Osram Luz Cálida Por E631",
    price: "4000",
    stock: 230,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_808810-MLA40969043756_032020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Iluminación para el Hogar"],
  },
  {
    name: "Plafon Aplicar Led 18w",
    mark: "Iluminación Fábrica",
    description: "Plafon Aplicar Led 18w Redondo Cuadrado Luz Fria O Calida Completo Para Instalar Garantia 2 Años",
    price: "3500",
    stock: 22,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_787530-MLA31047215374_062019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Iluminación para el Hogar"],
  },
  {
    name: "Gazebo Plegable",
    mark: "Exahome",
    description: "Gazebo Plegable Autoarmable 3x3 Impermeable Exahom",
    price: "1990",
    stock: 12,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_800839-MLA31022870016_062019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Jardin y Aire Libre"],
  },
  {
    name: "Bordeadora",
    mark: "Wimer",
    description: "Bordeadora Wimer W400 400W 220V",
    price: "2280",
    stock: 8,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_945428-MLA46220386324_052021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Jardin y Aire Libre"],
  },
  {
    name: "Pileta estructural",
    mark: "Pelopincho",
    description: "Pileta estructural rectangular Pelopincho 1076 con capacidad de 8000 litros de 4.45m de largo x 2.25m de ancho azul",
    price: "20190",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_834878-MLA40164904545_122019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Jardin y Aire Libre"],
  },

  {
    name: "Juegos De Comedor",
    mark: "Nick Muebles",
    description: "Juegos De Comedor, Mesa + 6 Sillas Vestidas En Chenille",
    price: "1809",
    stock: 9,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_704566-MLA43956226652_102020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Muebles para el Hogar"],
  },
  {
    name: "Poltrona Relax",
    mark: "Living",
    description: "Poltrona Relax, Color Negro",
    price: "3890",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_717483-MLA43754357768_102020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Muebles para el Hogar"],
  },
  {
    name: "Sillon Nordico",
    mark: "Dadaa Muebles",
    description: "3 Cuerpos Premium 1,80 M Dadaa",
    price: "12080",
    stock: 22,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_796266-MLA40818805602_022020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Muebles para el Hogar"],
  },
  {
    name: "Alacena Expandible",
    mark: "Univex",
    description: "Organizador Alzada Alacena Expandible Metal Estante Reforzad",
    price: "12800",
    stock: 55,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_833615-MLA43511732675_092020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Organización para el Hogar"],
  },
  {
    name: "Cajas Organizadoras",
    mark: "Begônia Home & Deco",
    description: "Set De 6 Cajas Organizadoras Simil Rattan Blancas Begônia",
    price: "2640",
    stock: 20,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_871114-MLA42553544591_072020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Organización para el Hogar"],
  },
  {
    name: "Perchas Antideslizantes",
    mark: "Begonia Home & Deco",
    description: "Perchas Antideslizantes Plástico Reciclado X50 Begônia",
    price: "1399",
    stock: 50,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_938882-MLA46402572254_062021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Organización para el Hogar"],
  },
  {
    name: "Cámara Infrarroja",
    mark: "Hikvision",
    description: "Cámara Infrarroja Hikvision 1080p 2mp Full Hd Tvi Cvi Bullet Gran Angular",
    price: "9800",
    stock: 30,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_638444-MLA45671643536_042021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Seguridad para el Hogar"],
  },
  {
    name: "Motor de portón",
    mark: "PPA",
    description: "Motor de portón PPA BV Torsion 220V negro, Peso máximo soportado: 400 kg ",
    price: "17930",
    stock: 50,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_605738-MLA45836347783_052021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Seguridad para el Hogar"],
  },
  {
    name: "Camara Seguridad Ip",
    mark: "Interior",
    description: "Camara Seguridad Ip Wifi Inalambrica Motorizad P2p Hd 360° Panoramica Movimiento Desde El Celular",
    price: "19830",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_793448-MLA47381062374_092021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Seguridad para el Hogar"],
  },
  {
    name: "Cubrecama Rústico",
    mark: "Patagonia Home",
    description: "Cubrecama Rústico / Colcha Hindú / Cubre Sillón 2,00 X 2,20",
    price: "9000",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_931320-MLA47160426166_082021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Textiles de Hogar y Decoración"],
  },
  {
    name: "Almohadones",
    mark: "Morena Decoraciones",
    description: "Almohadones Para Sillas 40x40 Chenille",
    price: "4000",
    stock: 30,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_982197-MLA47496742144_092021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Textiles de Hogar y Decoración"],
  },
  {
    name: "Cubrecama",
    mark: "Palette",
    description: "Cubrecama Palette Kenia 2 1/2 Plazas (rústico 100% Algodón)",
    price: "3600",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_674004-MLA43897067589_102020-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Textiles de Hogar y Decoración"],
  },
  {
    name: "Alta Densidad Placa Sillon",
    mark: "Espuflex",
    description: "Goma espuma alta densidad",
    price: "6700",
    stock: 200,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_661917-MLA31010968999_062019-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Otros"],
  },
  //Tecnologia
  {
    name: "Computadora Escritorio",
    mark: "HP",
    description:
      "Computadora Escritorio Hp 205 G4 Ryzen 3 4gb 1tb Win10 24",
    price: "450370",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_614453-MLA45728034824_042021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Computacion"],
  },
  {
    name: "Pc Armada Intel Core I7",
    mark: "Intel",
    description: "Pc Armada Intel Core I7 1 Tb 16gb De Ram Graficos Hd",
    price: "1830400",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_758556-MLA31031635182_062019-O.webp",
    categories: "Tecnologia",
    subcategories: ["Computacion"],
  },
  {
    name: "Computadora Completa",
    mark: "AMD",
    description: "Computadora Completa Amd Intel Dual Core 8gb Led 22 Lol",
    price: "168500",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_751786-MLA31060099570_062019-O.webp",
    categories: "Tecnologia",
    subcategories: ["Computacion"],
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    mark: "Xiaomi",
    description: "Xiaomi Redmi Note 9 Pro (64 Mpx) Dual SIM 128 GB gris interestelar 6 GB RAM",
    price: "30500",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_718459-MLA45878256417_052021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Celulares y telefonos"],
  },
  {
    name: "Huawei Mate 10",
    mark: "Huawei",
    description: "Huawei Mate 10 Lite Bueno Negro Liberado.",
    price: "150000",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_836368-MLA47044200655_082021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Celulares y telefonos"],
  },
  {
    name: "Apple iPhone 11",
    mark: "Apple",
    description: "Apple iPhone 11 (128 GB) - Amarillo",
    price: "109500",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_699194-MLA46115014420_052021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Celulares y telefonos"],
  },
  {
    name: "Camara B B500",
    mark: "Nikon",
    description: "Resolucion 16px, pantalla 3' 20MB memoria interna",
    price: "34500",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_855230-MLA31993297374_082019-O.webp",
    categories: "Tecnologia",
    subcategories: ["Camaras y accesorios"],
  },
  {
    name: "Camara Gadnic CK321",
    mark: "Gadnic",
    description: "Tamaño de la pantalla 2' resolucion 3px",
    price: "15800",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_957899-MLA46557830347_062021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Camaras y accesorios"],
  },
  {
    name: "Tripode Profesional",
    mark: "Gadnic",
    description: "Tripode Profesional Fotografia De Aluminio Ultra Liviano",
    price: "13890",
    stock: 33,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_693459-MLA46183210689_052021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Camaras y accesorios"],
  },
  {
    name: "Auriculares in-ear ",
    mark: "Xiaomi",
    description: "Auriculares in-ear inalámbricos Xiaomi Redmi AirDots 2 negro",
    price: "12580",
    stock: 20,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_939695-MLA44347938014_122020-O.webp",
    categories: "Tecnologia",
    subcategories: ["Electronica, audio y video"],
  },
  {
    name: "Smart TV BGH",
    mark: "BGH",
    description: "Smart TV BGH B5021UH6A LED 4K 50' 220V",
    price: "267980",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_761429-MLA47845664019_102021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Televisores"],
  },
  {
    name: "Minicomponente ",
    mark: "Sony",
    description: "Minicomponente Sony MHC-V02 negro con bluetooth - 120V/240V",
    price: "285400",
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_844851-MLA43059003691_082020-O.webp",
    categories: "Tecnologia",
    subcategories: ["Electronica, audio y video"],
  },
  {
    name: "Proyector",
    mark: "Bneq",
    description: "Proyector BenQ MS550 3600lm blanco 100V/240V",
    price: "340890",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_979513-MLA41374093119_042020-O.webp",
    categories: "Tecnologia",
    subcategories: ["Electronica, audio y video"],
  },
  {
    name: "Smart Tv 50'",
    mark: "Sansei",
    description: "Smart Tv Sansei Tds2150ui Led 4k Uhd 50",
    price: "27500",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_922576-MLA47150753339_082021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Televisores"],
  },
  {
    name: "Smart Tv 50' LED",
    mark: "Philips",
    description: "Smart TV Philips 6600 Series 50PUD6654/77 LED 4K 50' 110V/240V",
    price: "29500",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_826710-MLA42164194325_062020-O.webp",
    categories: "Tecnologia",
    subcategories: ["Televisores"],
  },
  {
    name: "Miles Morales Standard Edition Sony PS4 Físico",
    mark: "Sony",
    description:
      "Hombre Araña Marvel's Spider-Man: Miles Morales Standard Edition, plataforma PS4, Formato fisico",
    price: "60500",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_984177-MLA44963321666_022021-O.webp",
    categories: "Tecnología",
    subcategories: ["Consolas y videojuegos"],
  },
  {
    name: "Microsoft Xbox",
    mark: "Microsoft",
    description:
      "Microsoft Xbox Series S 512gb Color Blanco",
    price: "240900",
    stock: 8,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_878433-MLA45255172921_032021-O.webp",
    categories: "Tecnología",
    subcategories: ["Consolas y videojuegos"],
  },
  {
    name: "Sony PlayStation 4 Slim ",
    mark: "Sony",
    description:
      "Sony PlayStation 4 Slim 1TB FIFA 20 Bundle color negro azabache",
    price: "204000",
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_922826-MLA40300197733_012020-O.webp",
    categories: "Tecnología",
    subcategories: ["Consolas y videojuegos"],
  },
  //hasta aqui
  //Deportes
  {
    name: "Metegol",
    mark: "Rondi",
    description:
      "Metegol Rondi Football Game color blanco y azul con pelotas incluidas",
    price: "1200",
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_813716-MLA40353019415_012020-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Juegos de salon"],
  },
  {
    name: "Rollers Profesionales",
    mark: "Papaison",
    description:
      "Rollers Profesionales Aluminio Extensible Ruedas Siliconadas Mod: 301",
    price: "8000",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_819531-MLA32902247033_112019-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Patin y Skateboard"],
  },
  {
    name: "Pelota Nike Fútbol Playa",
    mark: "Nike",
    description:
      "Pelota de Futbol Playa, Usada como nueva. modelo Tsubasa Pro Beach Nº5",
    price: "100000",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_844835-MLA44803313304_022021-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Fútbol"],
  },
  {
    name: "Pelota Nike Fútbol 11",
    mark: "Nike",
    description:
      "Pelota de Futbol 11, Excelente condiciones. Sirve para entrenamientos y partidos amistosos",
    price: "200000",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_609347-MLA47330116405_092021-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Fútbol"],
  },
  {
    name: "Chaqueta Electrica Para Sable Esgrima",
    mark: "Jiang Fencing",
    description:
      "Chaqueta eléctrica para Sable Muy liviana y resistente Consultar por talles",
    price: "37500",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_693487-MLA46114666063_052021-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Esgrima"],
  },
  {
    name: "Juego De Badminton",
    mark: "DF",
    description:
      "Juego De Badminton Raquetas + Plumas + Red + Soporte + Bolso",
    price: "4999",
    stock: 12,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_915262-MLA44392636821_122020-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Bádminton"],
  },
  {
    name: "Camiseta Basquet",
    mark: "NBA Athletic",
    description:
      "Camiseta Basquet Campazzo Denver Nuggets Oficial Nba",
    price: "6699",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_928033-MLA45850853047_052021-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Básquet"],
  },
  {
    name: "Aro De Basquet",
    mark: "NBA Athletic",
    description:
      "Aro De Basquet - Basket Nº 7 Reforzado Con Red - Exahome",
    price: "1790",
    stock: 9,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_616297-MLA42835292001_072020-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Básquet"],
  },
  {
    name: "Paleta de pádel",
    mark: "Davor",
    description:
      "Paleta de pádel Davor 10.0",
    price: "7499",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_890195-MLA43625599442_092020-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Tenis, padel y squash"],
  },
  {
    name: "Guante de Beisbol",
    mark: "Rawlings",
    description:
      "Guante Rawlings De 12'' Béisbol / Softbol De Cuero - 2020",
    price: "7049",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_722035-MLA46530824170_062021-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Softball y beisbol"],
  },
  {
    name: "Set Bate Aluminio Guante Pelota",
    mark: "Faydi",
    description:
      "Baseball Set Bate Aluminio Guante Pelota/ Open-toys Avell125",
    price: "7449",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_619580-MLA31007891388_062019-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Softball y beisbol"],
  },
  //Electrodomesticos
  {
    name: "Recortadora de pelo",
    mark: "Philco",
    description:
      "Trimmer de recortadora de pelo, recortadora de barba Philco CB9800PN 220V - 240V",
    price: "1325",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_949628-MLA44370642159_122020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Artefactos de cuidado personal"],
  },
  {
    name: "Secador de pelo",
    mark: "GAMA",
    description:
      "Secador de pelo GA.MA Italy Salon Exclusive Ultra Ion negro 220V",
    price: "6499",
    stock: 9,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_826756-MLA41314946232_042020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Artefactos de cuidado personal"],
  },
  {
    name: "Ventilador de piso ",
    mark: "Exahome",
    description:
      "Ventilador de piso Exahome Semi Industrial negro con 5 palas, 20' de diámetro 220 V",
    price: "5930",
    stock: 25,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_709550-MLA42822264545_072020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Climatizacion"],
  },
  {
    name: "Termotanque a gas",
    mark: "Rheem",
    description:
      "Termotanque a gas natural Rheem AP160 gris oscuro 160L",
    price: "86489",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_641502-MLA42830343312_072020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Climatizacion"],
  },
  {
    name: "Horno de mesa",
    mark: "Peabody",
    description:
      "Horno de mesa eléctrico Peabody PE-HE4550 45L gris 220V",
    price: "14084",
    stock: 14,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_899316-MLA40341407281_012020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Cocción"],
  },
  {
    name: "Microondas",
    mark: "BGH",
    description:
      "Microondas BGH Quick Chef B120M20 blanco 20L 220V",
    price: "15999",
    stock: 19,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_798613-MLA46794143430_072021-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Cocción"],
  },
  {
    name: "Anafe a gas",
    mark: "TST",
    description:
      "Anafe a gas TST Sulata II acero 220V",
    price: "33123",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_675823-MLA32149565744_092019-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Cocción"],
  },
  {
    name: "Filtro Doble",
    mark: "filtro watercom",
    description:
      "Filtro Doble Industrial Con Siliphos Y Carbon Activado",
    price: "9699",
    stock: 15,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_802618-MLA48194972838_112021-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Dispensadores y purificadores"],
  },
  {
    name: "Dispenser De Agua",
    mark: "Geko",
    description:
      "Dispenser De Agua Automatico Bomba Dispensador Bidones Usb",
    price: "1099",
    stock: 55,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_806727-MLA42920089513_072020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Dispensadores y purificadores"],
  },
  {
    name: "Plancha a vapor",
    mark: "Peabody",
    description:
      "Plancha a vapor Peabody PE-PV31 color blanco y turquesa 220V",
    price: "3323",
    stock: 8,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_915764-MLA40152297049_122019-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Pequeños electrodomésticos"],
  },
  {
    name: "Batidora de pie",
    mark: "Peabody",
    description:
      "Batidora de pie Peabody PE-BM120 roja 50 Hz x 60 Hz 220 V - 240 V",
    price: "27899",
    stock: 19,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_931987-MLA44698863174_012021-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Pequeños electrodomésticos"],
  },
  {
    name: "Freezer horizontal ",
    mark: "Gafa",
    description:
      "Freezer horizontal Gafa Eternity L290 blanco 277L 220V",
    price: "57416",
    stock: 36,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_951201-MLA44340968437_122020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Refrigeracion"],
  },
  {
    name: "Heladera",
    mark: "Patrick",
    description:
      "Heladera Patrick HPK136M00 black steel con freezer 300L 220V",
    price: "63750",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_836148-MLA47917810593_102021-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Refrigeracion"],
  },
  {
    name: "Freezer vertical",
    mark: "Lacar",
    description:
      "Freezer vertical Lacar 150 blanco 120L 220V",
    price: "63750",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_876126-MLA41254447475_032020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Refrigeracion"],
  },
  {
    name: "Lavarropas automático ",
    mark: "Drean",
    description:
      "Lavarropas automático Drean Concept 5.05 blanco 5kg 220 V",
    price: "43999",
    stock: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_655186-MLA44666435804_012021-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Lavado"],
  },
  {
    name: "Lavavajillas",
    mark: "Whirlpool",
    description:
      "Lavavajillas Whirlpool WSFO3T2 de 10 cubiertos acero inoxidable 220V - 240V",
    price: "94499",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_669180-MLA40241936834_122019-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Lavado"],
  },
  {
    name: "Lavarropas",
    mark: "Patriot",
    description:
      "Lavarropas semiautomático Patriot 56 RB blanco 5kg 220 V",
    price: "17999",
    stock: 19,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_876118-MLA41839217771_052020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Lavado"],
  },
  {
    name: "Recarga Sodastream",
    mark: "Sodastream",
    description:
      "Recarga y recambio de cilindro de sodastream",
    price: "6990",
    stock: 19,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_742139-MLA43562970640_092020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Otros"],
  },
  {
    name: "Zapatillas Nike Hoops 2.0",
    mark: "Nike",
    description: "Zapatillas para todo uso, marca Adidas 100% originales",
    price: "35000",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_763666-MLA47081340430_082021-O.webp",
    categories: "Indumentaria",
    subcategories: ["Zapatillas"],
  },
  {
    name: "Zapatillas Nike Hoops 2.0",
    mark: "Nike",
    description: "Zapatillas para todo uso, marca Adidas 100% originales",
    price: "350000",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_763666-MLA47081340430_082021-O.webp",
    categories: "Indumentaria",
    subcategories: ["Zapatillas"],
  },
  {
    name: "Zapatillas Nike Air Max Excee",
    mark: "Nike",
    description: "Zapatillas en excelente calidad talla 10.5 US.",
    price: "380000",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_886359-MLA47582509221_092021-O.webp",
    categories: "Indumentaria",
    subcategories: ["Zapatillas"],
  },
  {
    name: "Camiseta De Argentina Adidas",
    mark: "Adidas",
    description: "CAMISETA DE ARGENTINA TITULAR MUNDIAL MEXICO 1986",
    price: "200000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_836338-MLA41873746734_052020-O.webp",
    categories: "Indumentaria",
    subcategories: ["Remeras"],
  },
  {
    name: "Camiseta Holanda Titular Adidas",
    mark: "Adidas",
    description: "Johan Cruyff, Camiseta Holanda Mundial 1974",
    price: "200000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_728352-MLA47148620656_082021-O.webp",
    categories: "Indumentaria",
    subcategories: ["Remeras"],
  },
  {
    name: "Bicicleta Sunny",
    mark: "Sunny",
    description:
      "Bicicleta Sunny Modelo Mts 290 Rodado 29 Negro Amarillo,Asiento acolchado regulabe Incluye manual de instrucciones para su correcto armado",
    price: "600000",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_743278-MLA45980583709_052021-O.webp",
    categories: "Deportes y fitness",
    subcategories: ["Ciclismo"],
  },
  {
    name: "Samsung Galaxy Note20",
    mark: "Samsung",
    description:
      "Especificaciones: 256 GB gris místico 8 GB RAM, Cámara trasera principal: 64 Mpx ",
    price: "1200000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_947785-MLA44210097170_112020-O.webp",
    categories: "Tecnologia",
    subcategories: ["Celulares y telefonos"],
  },
  {
    name: "LG K52",
    mark: "LG",
    description: "64 Gb + 4 Gb Ram Azul Cámara trasera principal: 48 Mpx",
    price: "700000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_906599-MLA47575297130_092021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Celulares y telefonos"],
  },
  {
    name: "Samsung Smart TV",
    mark: "Samsung",
    description:
      "Samsung Series 7 UN50TU7000GCZB LED 4K 50. Aplicaciones integradas: Samsung Promotion, YouTube, Netflix, Google Play, Apple TV, SmartThings, Web browser, Prime Video, Gallery, Google Play Movies & TV ",
    price: "1500000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_878604-MLA44160072739_112020-O.webp",
    categories: "Tecnologia",
    subcategories: ["Televisores"],
  },
  {
    name: "Monitor Gamer LG",
    mark: "LG",
    description:
      "LG 27GL650F led 27 negro, Full HD, tiene una resolución de 1920px-1080px. ",
    price: "900000",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_624926-MLA44490109901_012021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Computacion"],
  },
  {
    name: "Notebook HP 14-dq2024la",
    mark: "HP",
    description:
      "Core I3 1115g4 8gb 256gb M2 Ssd W10,  pantalla de 14'', Duración de la batería 9 h  ",
    price: "1200000",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_962681-MLA47729250270_102021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Computacion"],
  },
  {
    name: "Miles Morales Standard Edition Sony PS4 Físico",
    mark: "Sony",
    description:
      "Hombre Araña Marvel's Spider-Man: Miles Morales Standard Edition, plataforma PS4, Formato fisico",
    price: "60000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_984177-MLA44963321666_022021-O.webp",
    categories: "Tecnologia",
    subcategories: ["Consolas y videojuegos"],
  },
  {
    name: "Silla Plastica Ideal",
    mark: "Ideal",
    description:
      "Silla Plastica Reforzada Ideal Juego X4 Exteriores Jardin",
    price: "80000",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_830905-MLA45643896168_042021-O.webp",
    categories: "Hogar y Muebles",
    subcategories: ["Jardin y Aire Libre"],
  },
  {
    name: "Manguera Pvc",
    mark: "Pvc",
    description:
      "Manguera Para Riego Pvc 1/2 X 50 Metros Caño Virgen",
    price: "30000",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_698725-MLA43704259794_102020-O.webp",
    categories: "Herramientas",
    subcategories: ["Herramientas para Jardin"],
  },
  {
    name: "Aire Acondicionado Bgh",
    mark: "Bgh",
    description:
      "Aire Acondicionado Bgh Silent Air Split Inverter 3500w",
    price: "200000",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_812431-MLA44292716761_122020-O.webp",
    categories: "Electrodomesticos",
    subcategories: ["Climatizacion"],
  },
  {
    name: "Taladro Atornillador Klatter",
    mark: "Klatter",
    description:
      "Taladro Atornillador Klatter 14v Inalambrico 10mm",
    price: "70000",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_935558-MLA45017514805_022021-O.webp",
    categories: "Herramientas",
    subcategories: ["Herramientas Electricas"],
  },
  {
    name: "Hidrolavadora Kärcher",
    mark: "Sony",
    description:
      "Hidrolavadora Kärcher Home & Garden K3 Full Control *AR con 120bar de presión máxima 220V",
    price: "160000",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_804890-MLA40506772405_012020-O.webp",
    categories: "Herramientas",
    subcategories: ["Herramientas Electricas", "Herramientas para Jardin"],
  },
  {
    name: "Kit De Herramientas Manuales",
    mark: "Deco Estrella",
    description:
      "Kit De Herramientas Manuales 113 Pzs Set Acero Inoxidable",
    price: "55000",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_983972-MLA44508169524_012021-O.webp",
    categories: "Herramientas",
    subcategories: ["Herramientas Manuales"],
  },
  {
    name: "Juego Llave Combinada",
    mark: "Qtools",
    description:
      "Juego Llave Combinada 6 A 22 Mm 12 Piezas",
    price: "25000",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_779077-MLA47229455553_082021-O.webp",
    categories: "Herramientas",
    subcategories: ["Herramientas Manuales"],
  },
  {
    name: "Volkswagen Gol 1.0 De Baja",
    mark: "Volkswagen",
    description:
      "Vw Gol 1.0 Mod. 1999 3p Dado de Baja Definitiva total Sirve solo para repuestos",
    price: "60000000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_991793-MLA44515257451_012021-O.webp",
    categories: "Vehiculos",
    subcategories: ["Autos chocados y averiados"],
  },
  {
    name: "Honda Cb250 Twister Inyeccion",
    mark: "Honda",
    description:
      "Honda Cb250 Twister Inyeccion año 2020 250 cc 16mil Km",
    price: "30000000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_931639-MLA48097466379_112021-O.webp",
    categories: "Vehiculos",
    subcategories: ["Motos"],
  },
  {
    name: "Honda Elite 125",
    mark: "Honda",
    description:
      "Moto scooter honda élite 125 con casco de regalo año 2017 11000 km",
    price: "19000000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_717832-MLA48232349747_112021-O.webp",
    categories: "Vehiculos",
    subcategories: ["Motos"],
  },
];

async function preLoadProduct() {
  try {
    await Product.bulkCreate(infoProduct);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  preLoadProduct,
};
