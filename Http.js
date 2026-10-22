app.use(express());
const express = require("express");
const app = express();
app.use(express());

let productos = [
  { id: 1, nombre: "Leche", categoria: "Lácteos", precio: 4200, stock: 40 },
  { id: 2, nombre: "Arroz", categoria: "Granos", precio: 3800, stock: 60 },
  { id: 3, nombre: "Manzana", categoria: "Frutas", precio: 1500, stock: 80 }
];

// GET: ver todos los productos del supermercado
app.get("/productos", (req, res) => {
  res.json(productos);
});

// POST: registrar un producto nuevo
app.post("/productos", (req, res) => {
  const { nombre, categoria, precio, stock } = req.body;
  if (!nombre || !categoria || !precio || stock === undefined) {
    return res.status(400).json({
      mensaje: "Faltan datos: nombre, categoria, precio y stock"
    });
  }
  const nuevo = { id: Date.now(), nombre, categoria, precio, stock };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT: actualizar un producto (precio, stock, etc.)
app.put("/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }
  producto.nombre = req.body.nombre ?? producto.nombre;
  producto.categoria = req.body.categoria ?? producto.categoria;
  producto.precio = req.body.precio ?? producto.precio;
  producto.stock = req.body.stock ?? producto.stock;
  res.json(producto);
});

// DELETE: retirar un producto del supermercado
app.delete("/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const existe = productos.some(p => p.id === id);
  if (!existe) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }
  productos = productos.filter(p => p.id !== id);
  res.json({ mensaje: "Producto retirado del supermercado" });
});
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));