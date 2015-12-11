window.ImgLoader = function () {
    throw new Error();
}

window.ImgLoader._count = 0;

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

window.ImgLoader.isLoaded = function () {
    return window.ImgLoader.getCount() === 0 ? true : false;
}

window.ImgLoader.load = function (url){
    window.ImgLoader.count('+');
    var img = document.createElement('img');
    img.src = url;
    img.style.display = 'none';
    document.body.appendChild(img);
    img.onload = function () {
        document.body.removeChild(img);
        window.ImgLoader.count('-');
    }
}
