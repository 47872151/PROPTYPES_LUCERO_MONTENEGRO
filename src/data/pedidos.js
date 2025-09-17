const pedidos = [
  {
    "id": 1,
    "cliente": "Juan Pérez",
    "listaProductos": [
      {
        "idProducto": 101,
        "nombre": "Laptop Dell XPS 13",
        "cantidad": 1,
        "precio": 1200
      },
      {
        "idProducto": 102,
        "nombre": "Mouse Logitech MX Master 3",
        "cantidad": 2,
        "precio": 100
      },
      {
        "idProducto": 104,
        "nombre": "Auriculares Sony WH-1000XM4",
        "cantidad": 1,
        "precio": 350
      }
    ],
    "estado": "pending",
    "fecha": "2025-09-01T12:00:00Z"
  },
  {
    "id": 2,
    "cliente": "Ana González",
    "listaProductos": [
      {
        "idProducto": 103,
        "nombre": "Smartphone Samsung Galaxy S23",
        "cantidad": 1,
        "precio": 800
      },
      {
        "idProducto": 105,
        "nombre": "Teclado Mecánico Razer Huntsman Elite",
        "cantidad": 1,
        "precio": 200
      }
    ],
    "estado": "shipped",
    "fecha": "2025-09-10T08:30:00Z"
  },
  {
    "id": 3,
    "cliente": "Carlos Méndez",
    "listaProductos": [
      {
        "idProducto": 104,
        "nombre": "Auriculares Sony WH-1000XM4",
        "cantidad": 1,
        "precio": 350
      },
      {
        "idProducto": 101,
        "nombre": "Laptop Dell XPS 13",
        "cantidad": 1,
        "precio": 1200
      }
    ],
    "estado": "delivered",
    "fecha": "2025-09-12T15:00:00Z"
  },
  {
    "id": 4,
    "cliente": "Laura Martínez",
    "listaProductos": [
      {
        "idProducto": 105,
        "nombre": "Teclado Mecánico Razer Huntsman Elite",
        "cantidad": 2,
        "precio": 200
      }
    ],
    "estado": "pending",
    "fecha": "2025-09-14T10:00:00Z"
  },
  {
    "id": 5,
    "cliente": "Marcela Ruiz",
    "listaProductos": [
      {
        "idProducto": 102,
        "nombre": "Mouse Logitech MX Master 3",
        "cantidad": 3,
        "precio": 100
      },
      {
        "idProducto": 104,
        "nombre": "Auriculares Sony WH-1000XM4",
        "cantidad": 2,
        "precio": 350
      }
    ],
    "estado": "shipped",
    "fecha": "2025-09-15T09:00:00Z"
  },
  {
    "id": 6,
    "cliente": "Ricardo Pérez",
    "listaProductos": [
      {
        "idProducto": 101,
        "nombre": "Laptop Dell XPS 13",
        "cantidad": 1,
        "precio": 1200
      },
      {
        "idProducto": 103,
        "nombre": "Smartphone Samsung Galaxy S23",
        "cantidad": 1,
        "precio": 800
      }
    ],
    "estado": "delivered",
    "fecha": "2025-09-17T16:45:00Z"
  },
  {
    "id": 7,
    "cliente": "Pedro Díaz",
    "listaProductos": [
      {
        "idProducto": 105,
        "nombre": "Teclado Mecánico Razer Huntsman Elite",
        "cantidad": 1,
        "precio": 200
      },
      {
        "idProducto": 104,
        "nombre": "Auriculares Sony WH-1000XM4",
        "cantidad": 1,
        "precio": 350
      }
    ],
    "estado": "pending",
    "fecha": "2025-09-18T13:10:00Z"
  },
  {
    "id": 8,
    "cliente": "Verónica Ramírez",
    "listaProductos": [
      {
        "idProducto": 103,
        "nombre": "Smartphone Samsung Galaxy S23",
        "cantidad": 1,
        "precio": 800
      },
      {
        "idProducto": 102,
        "nombre": "Mouse Logitech MX Master 3",
        "cantidad": 2,
        "precio": 100
      }
    ],
    "estado": "shipped",
    "fecha": "2025-09-20T17:30:00Z"
  },
  {
    "id": 9,
    "cliente": "Gabriela Torres",
    "listaProductos": [
      {
        "idProducto": 101,
        "nombre": "Laptop Dell XPS 13",
        "cantidad": 1,
        "precio": 1200
      }
    ],
    "estado": "delivered",
    "fecha": "2025-09-21T11:30:00Z"
  },
  {
    "id": 10,
    "cliente": "José López",
    "listaProductos": [
      {
        "idProducto": 104,
        "nombre": "Auriculares Sony WH-1000XM4",
        "cantidad": 2,
        "precio": 350
      }
    ],
    "estado": "pending",
    "fecha": "2025-09-22T14:00:00Z"
  }
]

export default pedidos;