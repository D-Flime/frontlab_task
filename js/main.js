window.onload = async () => {

    const router = new Router({
        url: `https://api.randomuser.me/1.0/`,
        results: 50,
        nat: `gb,us`,
        inc: `gender,name,location,email,phone,picture`
    });
    
    const pageManager = new PageManager({ data: await router.getUsersData() });

    pageManager.sortUserlist();
}