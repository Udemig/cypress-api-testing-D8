class BaseLib{

    randomUserName(){
        var value = Math.floor(Math.random() * 10000000);
        return "testqa"+value;
    }

    randomID(length){
        var value = Math.floor(Math.random() * length);
        return value;
    }

    randomText(length){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
        return result;
    }
        
}

export default BaseLib;