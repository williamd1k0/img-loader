function ImageLoader(){
    var _count = 0;
    var _container = document.createElement('load');
    _container.style.display = 'none';
    document.head.appendChild(_container);

    function count(inc){
        switch (inc) {
            case '+': _count++;
                break;
            case '-': _count--;
                break;
            default:
                throw new Error();
        }
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

    this.load = function(_url){
        count('+');
        var img = document.createElement('img');
        img.src = _url;
        _container.appendChild(img);
        img.onload = function(){
            _container.removeChild(img);
            count('-');
        }
        return _url;
    }
}
