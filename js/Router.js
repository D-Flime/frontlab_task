class Router {

    // INIT SETTINGS
    constructor() {
        this.url = `https://api.randomuser.me/1.0/`;
        this.results = 50;
        this.nat = `gb,us`;
        this.inc = `gender,name,location,email,phone,picture`;
    }

    // AJAX success function handler
    onGetUsersFiled(err) {
        console.log('Filed to get users data' + err);
    }

    // AJAX request
    async getUsersData() {
        const promise = await fetch(`${this.url}?results=${this.results}&nat=${this.nat}&inc=${this.inc}`)
                              .catch(err => onGetUsersFiled(err));
        const answer  = await promise.json();
        if (answer && answer.info && answer.results){
            return answer;
        }
    }
}