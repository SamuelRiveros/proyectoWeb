export const abrigos = async() =>{
    let res = await fetch(`http://localhost:5508/abrigo`)
    let data = await res.json();
    return data
}

export const camisetas = async() =>{
    let res = await fetch(`http://localhost:5508/camiseta`)
    let data = await res.json();
    return data
}

export const pantalones = async() =>{
    let res = await fetch(`http://localhost:5508/pantalon`)
    let data = await res.json();
    return data
}


export const carritodb = async() =>{
    let res = await fetch(`http://localhost:5508/carrito`)
    let data = await res.json();
    return data
}