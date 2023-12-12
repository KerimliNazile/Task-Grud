import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000
let counter = 6
app.use(express.json())
app.use(cors())


let arr = [
    {
        "id": 1,
        "name": "alma",
        "info": "yasil",
        "image": "https://amodo.az/wp-content/uploads/2023/03/Alma-Yasil.jpg",
        "price": 10
    },
    {
        "id": 2,
        "name": "banan",
        "info": "sari",
        "image": "https://fruitboxco.com/cdn/shop/products/asset_2_1024x.jpg?v=1571839043",
        "price": 23
    },
    {
        "id": 3,
        "name": "nar",
        "info": "qirmizi",
        "image": "https://bazarstore.az/cdn/shop/products/30036056_0592f8a9-ea9f-40ef-b70b-97f5c68ebb4e.jpg?v=1693556296",
        "price": 15
    },
    {
        "id": 4,
        "name": "Encir",
        "info": "qirmizi",
        "image": "https://bazarstore.az/cdn/shop/products/30015534.jpg?v=1693806403",
        "price": 29
    },
    {
        "id": 5,
        "name": "ciyelek",
        "info": "qirmizi",
        "image": "https://unimall.az/images/detailed/234/product_48_1.jpg",
        "price": 32
    },
    
]

app.get("/",(req,res)=>{
    res.send(arr)
})

app.get("/:id",(req,res)=>{
    const {id} = req.params
    const getItem = arr.find((i)=>i.id === +id)
    res.send(getItem)
})
app.delete('/:id',(req,res)=>{
    const {id} = req.params
    arr = arr.filter((i)=>i.id !== +id)
    res.send(arr)
})
app.post("/",(req,res)=>{
    let newItem = {
        "id":counter++,
        "name":req.body.name,
        "info":req.body.info,
        "image":req.body.image,
        "price":req.body.price
    }
    arr.push(newItem)
    res.send(arr)
})
app.put("/:id",(req,res)=>{
    const {id} = req.params

    let newItem = {
        "id":+id,
        "name":req.body.name,
        "info":req.body.info,
        "image":req.body.image,
        "price":req.body.price
    }

    arr = arr.filter((i)=>i.id !== +id)
    arr.push(newItem)
    arr.sort((a,b)=>a.id-b.id)
    res.send(arr)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("There is not error ");
    }
})