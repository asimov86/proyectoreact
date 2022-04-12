const items = [

{   id: 1,
    name: "Hamburguesa Simple",
    type: "Alimento",
    price: 980,
    stock: 85,
    description: "Hamburguesa",
    image: "https://i0.wp.com/www.opportimes.com/wp-content/uploads/2016/04/haburguesa-dos.png?resize=500%2C387&ssl=1",
} ,
{   id: 2,
    name: "Hamburguesa Doble",
    type: "Alimento",
    price: 1080,
    stock: 80,
    description: "Hamburguesa",
    image: "https://st4.depositphotos.com/1328914/20814/i/600/depositphotos_208145482-stock-photo-double-cheeseburger-with-lettuce-tomato.jpg",
} ,
{   id: 3,
    name: "Hamburguesa Doble especial",
    type: "Alimento",
    price: 1260,
    stock: 75,
    description: "Hamburguesa",
    image: "https://img.freepik.com/foto-gratis/hamburguesa-doble-queso-cebolla-tomate-jalapeno_214995-6551.jpg?size=626&ext=jpg",
},
{   id: 4,
    name: "Pepsi",
    type: "Bebida",
    price: 1080,
    stock: 80,
    description: "Hamburguesa",
    image: "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-pepsi-lata-473-siempreencasa_1_500x.png?v=1635358253?nocache=0.11452011740766466",
},
{   id: 5,
    name: "Coca Cola",
    type: "Bebida",
    price: 1080,
    stock: 80,
    description: "Hamburguesa",
    image: "https://cdn.shopify.com/s/files/1/0521/4525/8669/products/shutterstock_193222430-2.jpg?v=1610844615",
},
{   id: 6,
    name: "Agua",
    type: "Bebida",
    price: 1080,
    stock: 80,
    description: "Hamburguesa",
    image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg",
},

];

const item = [

    {   id: 1,
        name: "Hamburguesa Simple",
        type: "Alimento",
        price: 980,
        stock: 85,
        description: "Hamburguesa",
        image: "https://i0.wp.com/www.opportimes.com/wp-content/uploads/2016/04/haburguesa-dos.png?resize=500%2C387&ssl=1",
    } 
    
    
];
    
export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
}

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 2000);
    });
}