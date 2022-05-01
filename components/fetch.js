const getData = async(url)=>{
    let res = await fetch(url);
    let data = await res.json()
    return data
}

let append = (data,container)=>{
    console.log(data)
    data.forEach((el)=>{
        let p = document.createElement('p')
        p.innerText = el.title
        container.append(p)
    })
}

export {getData,append}