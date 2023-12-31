const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  imagenDePerfil: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
  },
  email: {
    type: String,
    unique: true,
  },
  contraseña: {
    type: String,
  },
  genero: {
    type: String,
    enum: ["Masculino", "Femenino", "Otro"],
  },
  fechaNacimiento: {
    type: Date,
  },
  ubicacion: [
    {
      ciudad: {
        type: String,
      },
      direccion: {
        type: String,
      },
      codigoPostal: {
        type: Number,
      },
    },
  ],
  carrito: [
    {
      productId: {
        type: String, // Suponiendo que los productos tienen un ObjectId único
        // Nombre del modelo de los productos
      },
      cantidad: {
        type: Number,
        default: 1,
      },
    },
  ],
  metodosPago: [
    {
      tipo: {
        type: String,
      },
      numero: {
        type: String,
      },
    },
  ],
});

module.exports = model("User", userSchema);
