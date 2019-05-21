window.onload = () => {

    const router = new Router();

    var data;

    async function init() {
        data = await router.getUsersData();
        console.log(data);
    }
    init();
}