window.onload = () => {

    const router = new Router();
    const pageManager = new PageManager();

    var data;

    async function init() {
        data = await router.getUsersData();
        pageManager.userlist = data.results;
        pageManager.sortUserlist(data.results);
    }
    init();

}