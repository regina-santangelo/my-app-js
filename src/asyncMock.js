const products = [
    {
        id: '1',
        name: 'Guitarra',
        price:12000,
        category: 'cuerdas',
        stock:15,
        description:'Guitarra acústica. Marca: Parquer. Incluye funda y cuerdas de repuesto.',
        img:"/images/guitarra-acustica-1.jpg"
    },{
        id: '2',
        name: 'Piano',
        price:23000,
        category: 'pianos',
        stock:19,
        description:'Piano eléctrico 5 octavas. Marca: Yamaha. Incluye cable input, soporte de partituras y transformador.',
        img:"/images/piano-electrico.jpg"
    },{
        id: '3',
        name: 'Violín',
        price:9800,
        category: 'cuerdas',
        stock:25,
        description:'Violin soprano. Incluye funda, arco y resina. ',
        img:"/images/violin.jpg"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getItem = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}