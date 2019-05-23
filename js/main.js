window.onload = () => {

    const router = new Router();
    const pageManager = new PageManager();

    var data;

    async function init() {
        data = await router.getUsersData();
        console.log(data);
        pageManager.userlist = data.results;
        pageManager.sortUserlistByABC(data.results);
        pageManager.sortUserlist(data.results);
        pageManager.createUserlist(data.results);
    }
    init();

}