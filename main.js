start();


function start(){
    var keys = {
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        length: 3
    }

    var hash = {
        q: 'qq.com',
        w: 'weibo.com',
        e: 'ele.me',
        r: 'renren.com',
        y: 'youku.com',
        u: 'unionpay.com',
        i: 'iqiyi.com',
        p: 'pptv.com',
        a: 'alipay.com',
        s: 'sougou.com'
    }

    // 取出 localStorage 中的 zzz 对应的 hash
    var hashInLocalStorage = JSON.parse(localStorage.getItem('Hash') || 'null');
    if(hashInLocalStorage){
        hash = hashInLocalStorage;
    }


    //生成keyboard
    for(var index1 = 0; index1 < keys.length; index1++){
        var div = document.createElement('div');
        div.className = 'row';
        main.appendChild(div);
        var key = keys[index1];
        for(var index2 = 0; index2 < key.length; index2++){
            var span = document.createElement('span');
            var img = document.createElement('img');
            if(hash[key[index2]]){
                img.src = 'http://' + hash[key[index2]] + '/favicon.ico';
            }else{
                img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
            }
            img.onerror = function(xxx){
                xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
            }
            var button = document.createElement('button');
            var kbd = document.createElement('kbd');
            span.className = 'text';
            span.textContet = key[index2];
            button.textContent = '编辑';
            button.id = key[index2];

            button.onclick = function(qwe){
                var currButton = qwe.target;
                console.log(currButton.id);
                var currUrl = prompt('请给我一个网址:');
                var imgTemp = currButton.previousSibling;
                var buttonId = currButton.id;
                if(currUrl === null){
                    console.log("there gone?")
                }else if(currUrl){
                    imgTemp.src = 'http://' + currUrl + '/favicon.ico';
                }else{
                    imgTemp.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                imgTemp.onerror = function(xxx){
                    xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                hash[buttonId] = currUrl;
                localStorage.setItem('Hash', JSON.stringify(hash));

            }
            kbd.className = 'key';
            kbd.textContent = key[index2];
            kbd.appendChild(span);
            kbd.appendChild(img);
            kbd.appendChild(button);
            div.appendChild(kbd);
        }
    }



    document.onkeypress = function(qwe){
        var key = qwe['key']; // q w e
        var website = hash[key];
            //location.href = 'http://'+website
        window.open('http://'+website, '_blank');
    }

}

