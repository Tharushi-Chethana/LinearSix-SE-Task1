function projectObject(src, proto) {
    //check src and proto (not object or null. because they must an object)
    if (typeof src !== "object" || src === null || typeof proto !== "object" || proto === null) {
        return src;
    }

    // Create an empty object or array to store the result
    let res = Array.isArray(proto) ? [] : {};

    for (let key in proto) {
        // Check if the key exists in the source object
        if (key in src) {
            // Recursively process nested objects
            res[key] = projectObject(src[key], proto[key]);
        }
    }

    return res; // Return the projected object
}

// Example Input
const src = {
    prop11: {
        prop21: 21, //this is not included in the proto. so didn't add it to the response
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12 //this is not included in the proto. so didn't add it to the response
};

//proto
const proto = {
    prop11: {
        prop22: null 
        //null means prop22 must included. values come from src
    }
};

// Get the projected object
const res = projectObject(src, proto);

// Print the output
console.log(res);
