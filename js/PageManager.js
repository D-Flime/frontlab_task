class PageManager {

   constructor() {
      this.userlist;
      this.sortState = 'up';
      // userlist sorter button
      this.listsorterElement = document.querySelector('.list_sorter');
      this.listsorterElement.onclick = () => this.sortUserlist();
      // userlist content
      this.userlistElement = document.querySelector('.user_list');
      // user profile darkening background
      this.userProfileBGElement = document.querySelector('.user_profile_block_background');
      this.userProfileBGElement.onclick = () => this.hideUserProfile();
      // user profile block
      this.userProfileElement = document.querySelector('.user_profile_block');
      // user profile close button
      this.userProfileCloseBtn = document.querySelector('.user_profile_closer');
      this.userProfileCloseBtn.onclick = () => this.hideUserProfile();
   }

   showUserProfile(user, avatarUrl, userName) {
      this.userProfileElement.setAttribute('style', '');
      this.userProfileBGElement.setAttribute('style', '');
      //set user name
      document.querySelector('.user_profile_name').innerHTML = userName;
      // set user avatar
      document.querySelector('.user_profile_avatar img').src = avatarUrl;
      // set user location
      document.querySelector('.user_profile_location').innerHTML = `${user.location.state}, ${user.location.city}, ${user.location.street}</br>
                                                                    Postcode: ${user.location.postcode}`;
      // set user e-mail
      document.querySelector('.user_profile_email').innerHTML = user.email;
      // set user phone number
      document.querySelector('.user_profile_phone').innerHTML = user.phone;                                             
   }

   hideUserProfile() {
      this.userProfileElement.setAttribute('style', 'display: none');
      this.userProfileBGElement.setAttribute('style', 'display: none');
   }

   addUserBlock(user) {
      let avatarUrl = user.picture.medium, userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      // create user block
      const userBlockDiv = document.createElement('div');
      userBlockDiv.className = 'user_block';
      this.userlistElement.appendChild(userBlockDiv);
      // add avatar block
      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'user_avatar';
      userBlockDiv.appendChild(avatarDiv);
      // add avatar image
      const avatarIMG = document.createElement('img');
      avatarIMG.src = avatarUrl;
      avatarDiv.appendChild(avatarIMG);
      // add content to user block (name)
      const userContentDiv = document.createElement('div');
      userContentDiv.className = 'user_block_content';
      userContentDiv.innerHTML = userName;
      userBlockDiv.appendChild(userContentDiv);
      userBlockDiv.onclick = () => this.showUserProfile(user, avatarUrl, userName);
   }

   clearUserlist(userlist) {
      this.userlistElement.innerHTML = '';
   }

   createUserlist(userlist) {
      if (userlist instanceof Object) {
         for (let key in userlist) {
            //this.addUserBlock(userlist[key].picture.medium, `${userlist[key].name.title} ${userlist[key].name.first} ${userlist[key].name.last}`);
            this.addUserBlock(userlist[key]);
         }
      }
   }

   sortUserlistReversed(userlist) {
      if (userlist instanceof Object) {
         userlist.sort((a, b) => {
            var nameA = `${a.name.first} ${a.name.last}`.toLocaleLowerCase(), nameB = `${b.name.first} ${b.name.last}`.toLocaleLowerCase();
            //sort strings by increasement
            if (nameA > nameB)
               return -1;
            if (nameA < nameB)
               return 1;
            return 0 // no sort
         });
      }
   }

   sortUserlistByABC(userlist) {
      userlist.sort((a, b) => {
         var nameA = `${a.name.first} ${a.name.last}`.toLocaleLowerCase(), nameB = `${b.name.first} ${b.name.last}`.toLocaleLowerCase();
         //sort strings by increasement
         if (nameA < nameB)
            return -1;
         if (nameA > nameB)
            return 1;
         return 0 // no sort
      });
   }

   sortUserlist() {
      var userlist = this.userlist;
      if (this.sortState === 'up'){
         this.sortUserlistByABC(userlist);
         this.sortState = 'down';
         this.listsorterElement.innerHTML = '▼ СОРТИРОВАТЬ';
         this.clearUserlist(userlist);
         this.createUserlist(userlist);
      } else if (this.sortState === 'down'){
         this.sortUserlistReversed(userlist);
         this.sortState = 'up';
         this.listsorterElement.innerHTML = '▲ СОРТИРОВАТЬ';
         this.clearUserlist(userlist);
         this.createUserlist(userlist);
      } else {
         return false;
      }
   }
}