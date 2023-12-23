const obj = {
    userId: 10,
    id: 96,
    title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    body: "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
}


async function deepClone (obj) {
    return new Promise((resolve, reject) =>{
        if (typeof obj === 'object') {
            resolve(deepCopy(obj))
        }else {
            reject(obj)
        }
    })

    function deepCopy (obj) {
        const result = {}
    
        for (const fn in obj) {
            if (typeof obj[fn] === 'object') {
                if (Array.isArray(obj[fn])){
                    result[fn] = obj[fn].map((el) => deepCopy(el))
                }else{
                    result[fn] = deepCopy(obj[fn])
                }
            } else {
                result[fn] = obj[fn]
            }
        }
    
        return result
    }
}

async function func (obj) {
    try {
        const result = await deepClone(obj)
        obj.userId = 22
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}



func(obj)