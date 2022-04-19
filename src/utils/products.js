const items = [

{   id: 1,
    name: "Hamburguesa Simple",
    category: "Hamburguesas",
    price: 980,
    stock: 85,
    description: "Hamburguesa simple con queso, tomate, cebolla, lechuga, pepinillos y papas fritas.",
    image: "https://i0.wp.com/www.opportimes.com/wp-content/uploads/2016/04/haburguesa-dos.png?resize=500%2C387&ssl=1",
} ,
{   id: 2,
    name: "Hamburguesa Doble",
    category: "Hamburguesas",
    price: 1080,
    stock: 80,
    description: "Hamburguesa doble carne, doble queso, tomate, cebolla, lechuga, pepinillos y papas fritas.",
    image: "https://st4.depositphotos.com/1328914/20814/i/600/depositphotos_208145482-stock-photo-double-cheeseburger-with-lettuce-tomato.jpg",
} ,
{   id: 3,
    name: "Hamburguesa Doble especial",
    category: "Hamburguesas",
    price: 1260,
    stock: 75,
    description: "Hamburguesa doble con queso, tomate, cebolla, lechuga, pepinillos, salsa especial de la casa y papas fritas.",
    image: "https://img.freepik.com/foto-gratis/hamburguesa-doble-queso-cebolla-tomate-jalapeno_214995-6551.jpg?size=626&ext=jpg",
},
{   id: 4,
    name: "Pepsi",
    category: "Bebidas",
    price: 180,
    stock: 80,
    description: "Bebida Pepsi de lata 355 ml.",
    image: "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-pepsi-lata-473-siempreencasa_1_500x.png?v=1635358253?nocache=0.11452011740766466",
},
{   id: 5,
    name: "Coca Cola",
    category: "Bebidas",
    price: 180,
    stock: 80,
    description: "Bebida Coca Cola de lata 355 ml.",
    image: "https://cdn.shopify.com/s/files/1/0521/4525/8669/products/shutterstock_193222430-2.jpg?v=1610844615",
},
{   id: 6,
    name: "Agua",
    category: "Bebidas",
    price: 150,
    stock: 80,
    description: "Agua sin gas de 500 ml.",
    image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg",
},

];
    
export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        const chosenProduct = items.find(
            (item) => item.id === Number(id)
        );
        setTimeout(() => {
            resolve(chosenProduct);
        }, 2000);
    });
}

export const getItems = (categoryId) => {
    return new Promise((resolve, reject) => {
        const filteredProducts = items.filter(
            (item) => item.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(filteredProducts) : resolve(items);
        }, 2000);
    });
}