function ImageLoader(){
    var _count = 0;
    var _container = document.createElement('load');
    _container.style.display = 'none';
    document.head.appendChild(_container);

    function isObject(variable){
        return variable instanceof Object && !(variable instanceof Array) && typeof variable !== 'function';
    }

    this.getCount = function(){
        return _count;
    }

    this.getContainer = function(){
        return _container;
    }

    this.isLoaded = function(){
        return this.getCount() === 0 ? true : false;
    }

    this.load = function(_url, attr){
        attr = attr || {};
        _count++;
        var img = document.createElement('img');
        if(isObject(attr)){
            var j = 0;
            var keys = Object.keys(attr);
            for(i in attr){
                img[keys[j]] = attr[i];
                j++;
            }
        }else{
            console.warn(
                '%s%c%s%c%s%s%s%c%s',
                'The attributes argument must be an ',
                'color:#159',
                'object',
                'color:none','!',
                '\nImage: ' + _url,
                '\nAttributes: ',
                'color:#f22', attr
            );
        }
        img.src = _url;
        _container.appendChild(img);
        img.onload = function(){
            _container.removeChild(img);
            _count--;
        }
        return img;
    }
}
