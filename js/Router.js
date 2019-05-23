class Router {

    // INIT SETTINGS
    constructor(options) {
        this.url = options.url;
        this.results = options.results;
        this.nat = options.nat;
        this.inc = options.inc;
    }

    // get users request failed function handler
    onGetUsersFiled(err) {
        console.log('Filed to get users data: ' + err);
    }

    // AJAX request
    async getUsersData() {
        const promise = await fetch(`${this.url}?results=${this.results}&nat=${this.nat}&inc=${this.inc}`)
                              .catch(err => this.onGetUsersFiled(err));
        const answer  = await promise.json();
        if (answer && answer.info && answer.results){
            return answer;
        }
    }
}