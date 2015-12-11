window.ImgLoader = function(){
    throw new Error();
}

window.ImgLoader.init = function(){
    window.ImgLoader._count = 0;
    window.ImgLoader.container = document.createElement('load');
    window.ImgLoader.container.style.display = 'none';
    document.head.appendChild(window.ImgLoader.container);
}

window.ImgLoader.count = function(inc){
    switch (inc) {
        case '+': window.ImgLoader._count++;
            break;
        case '-': window.ImgLoader._count--;
            break;
        default:
            throw new Error();
    }
}

window.ImgLoader.getCount = function(){
    return window.ImgLoader._count;
}

window.ImgLoader.isLoaded = function(){
    return window.ImgLoader.getCount() === 0 ? true : false;
}

window.ImgLoader.load = function(_url){
    window.ImgLoader.count('+');
    var img = document.createElement('img');
    img.src = _url;
    window.ImgLoader.container.appendChild(img);
    img.onload = function(){
        window.ImgLoader.container.removeChild(img);
        window.ImgLoader.count('-');
    }
    return _url;
}

window.ImgLoader.init();
