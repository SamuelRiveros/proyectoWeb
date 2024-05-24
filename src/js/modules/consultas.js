export const abrigos = async() =>{
    let res = await fetch(`http://172.16.101.146:5609/abrigo`)
    let data = await res.json();
    return data
}

export const camisetas = async() =>{
    let res = await fetch(`http://172.16.101.146:5609/camiseta`)
    let data = await res.json();
    return data
}

export const pantalones = async() =>{
    let res = await fetch(`http://172.16.101.146:5609/pantalon`)
    let data = await res.json();
    return data
}


export const carritodb = async() =>{
    let res = await fetch(`http://172.16.101.146:5609/carrito`)
    let data = await res.json();
    return data
}