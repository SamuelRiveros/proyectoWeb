export const abrigos = async() =>{
    let res = await fetch(`http://localhost:5501/abrigo`)
    let data = await res.json();
    return data
}

export const camisetas = async() =>{
    let res = await fetch(`http://localhost:5501/camiseta`)
    let data = await res.json();
    return data
}

export const pantalones = async() =>{
    let res = await fetch(`http://localhost:5501/pantalon`)
    let data = await res.json();
    return data
}

export const carrito = async() =>{
    let res = await fetch(`http://localhost:5501/carrito`)
    let data = await res.json();
    return data
}