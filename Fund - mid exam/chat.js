function chatList(arr){
    let chat = [];
    let i = 0;
    let token = arr[i].split(" ");
    
    while(token[0] != "end"){

        if(token[0] == "Chat"){
            chat.push(token[1])

        } else if (token[0] == "Delete"){
            
            if (chat.includes(token[1])){
                let idx = chat.indexOf(token[1]);
                chat.splice(idx, 1)
            }

        } else if (token[0] == "Edit"){
            
            if(chat.includes(token[1])){
                let idx = chat.indexOf(token[1]);
                chat[idx] = token[2];
            }

        } else if (token[0] == "Pin"){

            if (chat.includes(token[1])){
                let idx = chat.indexOf(token[1]);
                chat.splice(idx, 1)
                chat.push(token[1])
            }

        } else if (token[0] == "Spam"){

            for(j = 1; j < token.length; j++){
                chat.push(token[j]);
            }
        }

        i++;
        token = arr[i].split(" ");
    }
    
    console.log(chat.join("\n"));
}
chatList(["Chat John",

"Spam Let's go to the zoo",

"Edit zoo cinema",

"Chat tonight",

"Pin John",

"end"])