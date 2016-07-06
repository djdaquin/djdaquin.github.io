//Should take an object and return its values in an array
function objectValues(obj){
    let output = [];
    for (let key in obj){
        output.push(obj[key]);
    }
    return output;
}
//Should take an object and return all its keys in a string each separated with a space"
function keysToString(obj){
    let output = "";
    let keysInObj = [];
    for (let keys in obj){
        keysInObj.push(keys);
    }
    for (let i = 0; i < keysInObj.length; i++){
        output += keysInObj[i];
        if(i < keysInObj.length - 1) output += " ";
    }
    return output;
}

//Should take an object and return all its string values in a string each separated with a space
function valuesToString(obj){
    let output = "";
    let keysInObj = [];
    for (let keys in obj){
        keysInObj.push(keys);
    }
    for (let i = 0; i < keysInObj.length; i++){
        if(typeof obj[keysInObj[i]] === "string"){
            output += obj[keysInObj[i]] + " ";
        }
    }
    return output.slice(0,-1);
}

//Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(item){
    if(Array.isArray(item)) return "array";
    return "object";
}

//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(str){
    let firstLet = str[0];
    let rest = str.slice(1);
    firstLet = firstLet.toUpperCase();
    return firstLet + rest;
}

//Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(str){
    var words = str.split(" ");
    for (let i = 0; i < words.length; i++){
        words[i] = capitalizeWord(words[i]);
    }
    return words.join(" ");
}

//Should take an object with a name property and return 'Welcome <Name>!
function welcomeMessage(obj){
    return "Welcome " + capitalizeWord(obj.name) + "!";
}

//Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(obj){
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'"
function maybeNoises(obj){
    if (Array.isArray(obj.noises)){
        if (obj.noises.length > 0){
            return obj.noises.join(" ");
        }
    }
    return "there are no noises";
}

//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(str, word){
    if(str.search(word) === -1) return false;
    return true;
}

//Should take a name and an object and add the name to the object's friends array then return the object
function addFriend(name, obj){
    obj.friends.push(name);
    return obj
}

//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, obj){
    if (obj.friends === undefined) return false;
    if (obj.friends.indexOf(name) === -1) return false;
    return true;
}

//Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, list){
    var subjectIndex;
    for(let i = 0; i < list.length; i++){
        if (name === list[i].name) subjectIndex = i;
    }
    var notFriends = [];
    for (let i = 0; i < list.length; i++){
        if(name !== list[i].name){
            if(!isFriend(list[i].name,list[subjectIndex])) notFriends.push(list[i].name)
        }
    }
    return notFriends;
}

//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(obj, key, value){
    obj[key] = value;
    return obj;
}

//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(obj, keys){
    for(let i = 0; i< keys.length; i++){
        delete obj[keys[i]]
    }
}

//Should take an array and return an array with all the duplicates removed
function dedup(arr){
    var results = [];
    for (let i = 0; i < arr.length; i++){
        if(results.indexOf(arr[i]) === -1) results.push(arr[i]);
    }
    return results;
}
