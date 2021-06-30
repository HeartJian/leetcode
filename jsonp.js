    //
    // option:{url,method,data}
    const Jsonp=(option)=>{
        const head = document.getElementsByTagName("head")[0]
        const scriptNode = document.createElement("script");
        const data = option.data ||{};
        let params = [];
        const methodName = "jsonp"+new date();

        window[methodName] = ()=>{
            method()
            delete window[methodName];
            head.removeChild(scriptNode);
        };
        
        data.method= methodName;
        for(let key in data){
            params.push(encodeURIComponent(key) = encodeURIComponent(data[key]))
        };
        let url = option.url;
        if(url.indexof("?")>0){
            url+=params.join("&")
        }else{
            url += "?"+params.join("&")
        }
        scriptNode.src = url;
        scriptNode.type="text/javascript";
        head.appendChild(scriptNode);
    }