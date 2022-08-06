export const getImagen = async():Promise<any> => {
    return new Promise(async(rs,rj) => {
        await fetch('https://picsum.photos/200').then(rs).catch(rj);
    })
}



