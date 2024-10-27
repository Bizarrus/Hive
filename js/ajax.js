class Ajax {
    constructor(url) {
        this.url = url;
        this.headers = {};
        this.request = new XMLHttpRequest();
    }

    header(headers) {
        this.headers = headers;

        return this;
    }

    additional(inject) {
        inject.call(this.request);
        return this;
    }

    get(query) {
        return this.call('GET', query);
    }

    post(data, query) {
        return this.call('POST', query, data);
    }

    call(type, query, body) {
        let instance = this;

        return new Promise((success, error) => {
            if (typeof (query) !== 'undefined') {
                instance.url += '?' + (new URLSearchParams(query)).toString();
            }

            instance.request.open(type, instance.url, true);

            Object.keys(this.headers).forEach((name) => {
                instance.request.setRequestHeader(name, this.header[name]);
            });

            instance.request.onload = function onLoad() {
                success(this);
            };

            instance.request.onerror = function onError(event) {
                error(event, this);
            };

            if (typeof (body) !== 'undefined') {
                instance.request.send(body);
            } else {
                instance.request.send();
            }
        });
    }
}