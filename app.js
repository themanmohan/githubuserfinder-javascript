//creating instance
const github = new Github;

const ui =new UI;
//search user
const searchUser=document.getElementById('searchUser')

//search input event listener
searchUser.addEventListener('keyup',(e)=>{

    //getinput text
    const userText=e.target.value
    if(userText!==''){
       github.getUser(userText).then(data=>{
        //    console.log(data.repos)
           if(data.profile.message=='Not Found'){
                ui.showAlert('User Not Found','alert alert-danger')
           }else{
              ui.showProfile(data.profile)
              ui.showRepos(data.repos)
           }
       })
    }else{
        //clear profile
    }
    e.preventDefault()
})


    github.getUser('themanmohan').then(data => {
        //    console.log(data.repos)
        if (data.profile.message == 'Not Found') {
            ui.showAlert('User Not Found', 'alert alert-danger')
        } else {
            ui.showProfile(data.profile)
            ui.showRepos(data.repos)
        }
    })
