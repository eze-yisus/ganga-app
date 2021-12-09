const { Category } = require("../db");

const infoCategory = [
  {
    name: "Vehiculos",
    subcategories: ["Autos chocados y averiados", "Autos de coleccion", "Autos y camionetas", "Motorhomes", "Motos", "Nautica", "Otros vehiculos"]
  },
  {
    name: "Tecnologia",
    subcategories: ["Computacion", "Celulares y telefonos", "Camaras y accesorios", "Electronica, audio y video", "Televisores", "Consolas y videojuegos", "Otros"]
  },
  {
    name: "Hogar y Muebles",
    subcategories: ["Adornos y Decoracion", "Baños", "Bazar y Cocina", "Camas, Colchones y Accesorios", "Cuidado del Hogar y Lavanderia", "Iluminación para el Hogar", "Jardin y Aire Libre", "Muebles para el Hogar", "Organización para el Hogar", "Seguridad para el Hogar", "Textiles de Hogar y Decoración", "Otros"]
  },
  {
    name: "Electrodomesticos",
    subcategories: ["Artefactos de cuidado personal", "Climatizacion", "Cocción", "Dispensadores y purificadores", "Pequeños electrodomésticos", "Refrigeracion", "Lavado", "Otros"]
  },
  {
    name: "Herramientas",
    subcategories: ["Accesorios para Herramientas", "Cajas y Organizadores", "Herramientas Electricas", "Herramientas Industriales", "Herramientas Manuales", "Herramientas Neumaticas", "Herramientas para Jardin", "Tester y Equipos de Medición", "Otros"]
  },
  {
    name: "Construccion",
    subcategories: ["Aberturas", "Accesorios de Construccion", "Baños y Sanitarios", "Electricidad", "Maquinarias para Construccion", "Materiales de Obra", "Mobiliario para Cocinas", "Pintureria", "Pisos y Revestimientos", "Plomeria", "Otros"]
  },
  {
    name: "Deportes y fitness",
    subcategories: ["Juegos de salon", "Patin y Skateboard", "Suplementos y shakers", "Surf y bodyboard", "Esgrima", "Bádminton", "Kitesurf", "Básquet", "Esqui y snowboard", "Monopatines y scooters", "Pilates y yoga", "Buceo", "Fitness y musculación", "Pulsómetros y cronómetros", "Tenis, padel y squash", "Fútbol", "Montañismo y trekking", "Ropa deportiva", "Tiro deportivo", "Camping, caza y pesca", "Futbol americano", "Natación", "Voley", "Canoas, kayaks e inflables", "Golf", "Paintball", "Wakeboard y esqui acuatico", "Rugby", "Ciclismo", "Handball", "Hockey", "Parapente", "Slackluine", "Windsurf", "Softball y beisbol", "Otros"]
  },
  {
    name: "Accesorios para vehiculos",
    subcategories: ["Acc. para Motos y Cuatriciclos", "Acc. de Auto y Camioneta", "Accesorios para Camiones", "Audio para Vehiculos", "GNC", "Herramientas", "Limpieza de Vehiculos", "Llantas", "Navegadores GPS", "Neumaticos", "Performance", "Repuestos Autos y Camionetas", "Repuestos de Linea Pesada", "Repuestos Motos y Cuatriciclos", "Seguridad Vehicular", "Tuning"]
  },
  {
    name: "Indumentaria",
    subcategories: ["Remeras", "Camisas", "Pantalones", "Bufandas", "Zapatillas", "Zapatos", "Ojotas", "Borcegos", "Buzos", "Camperas", "Otros"]
  },
  {
    name: "Juegos y Jugetes",
    subcategories: ["Armas y Lanzadores de juguete", "Hobbies", "Juegos de plaza y aire", "Juguetes de construccion", "Patines y patinetas", "Peloteros y castillos", "Juguetes de oficios", "Instrumentos musicales", "Arte y manualidades", "Casas y carpas para niños", "Juegos de agua y Playa", "Juegos de salon", "Peluches", "Titeres y marionetas", "Juguetes para bebés", "Vehiculos de juguete", "Electrónicos para niños", "Juegos de mesa y cartas", "Electrónicos para niños", "Juguetes antiestrés e ingenio", "Vehiculos montables para niños", "Mesas y sillas para niños", "Figuritas, álbumes y cromos", "Juguetes de bromas", "Muñecos y Muñecas", "Otros"]
  },
  {
    name: "Bebes",
    subcategories: ["Andadores y vehiculos de bebés", "Articulos de bebés para baño", "Artículos de maternidad", "Chupetes y mordillos", "Comida para bebés", "Corralitos", "Cuarto del bebé", "Higiene y cuidado del bebé", "Juegos y juguetes para bebés", "Lactancia y alimentación", "Paseo del bebé", "Ropa y calzado para bebés", "Salud del bebé", "Seguridad de bebés", "Otros"]
  },
  {
    name: "Belleza y cuidado personal",
    subcategories: ["Artefactos para el Cabellos", "Articulos de Peluqueria", "Barberia", "Cuidado de la Piel", "Cuidado del Cabello", "Depilacion", "Farmacia", "Higiene Personal", "Manicuria y Pedicuria", "Maquillaje", "Perfumes y Fragancias", "Tratamientos de Belleza"]
  },
  {
    name: "Salud y equipamiento médico",
    subcategories: ["Cuidado de la salud", "Equipamiento médico", "Masajes", "Movilidad", "Ortopedia", "Suplementos alimenticios", "Terapias alternativas", "Otros"]
  },
  {
    name: "Industrias y oficinas",
    subcategories: ["Arquitectura y diseño", "Embalaje y logística", "Equipamiento médico", "Equipamiento para comercios", "Equipamiento para oficinas", "Gastronomía y hotelería", "Gráfica e impresión", "Herramientas industriales", "Publicidad y promoción", "Seguridad laboral", "Textil y calzado", "Uniformes y ropa de trabajo", "Otros"]
  },
  {
    name: "Agro",
    subcategories: ["Animales", "Generadores de Energia", "Infraestructura Rural", "Insumos Agricolas", "Insumos Ganaderos", "Maquinas y Herramientas", "Repuestos Maquinaria Agricola"]
  },
  {
    name: "Servicios",
    subcategories: ["Asesoramiento Contable y Legal", "Belleza y Cuidado Perfumes", "Comunicacion y diseño", "Cursos Y Clases", "Fiestas y Eventos", "Fotografía, Musica y Cine", "Hogar y Construccion", "Imprenta", "Mantenimiento de Vehiculos", "Medicina y Salud", "Ropa y Moda", "Servicios para Mascotas", "Servicios para Oficinas", "Tecnologia", "Transporte", "Viaje y Turismo"]
  },
  {
    name: "Tiendas oficiales",
    subcategories: ["Aseguramiento contable y legal", "Belleza y cuidado personal", "Comunicacion y diseño", "Cursos y clases", "Delivery", "Fiestas y eventos", "Fotografía, música y cine", "Hogar y construcción", "Imprenta", "Mantenimiento de vehículos", "Medicina y salud", "Ropa y moda", "Servicios para mascotas", "Servicios para oficinas", "Tecnología", "Transporte", "Viajes y turismo", "Otros"]
  }
];

async function preLoadCategory() {
  try {
    await Category.bulkCreate(infoCategory);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  preLoadCategory,
};
