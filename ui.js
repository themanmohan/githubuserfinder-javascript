class UI{
    constructor(){
        this.profile=document.getElementById('profile')
    }

    showProfile(user){
        this.profile.innerHTML = `
      <div class="card profile card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9 profile1" >
            <span class="badge badge-primary ">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary ">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success ">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group " id="profile2">
              <li class="list-group-item profile2">Company: ${user.company}</li>
              <li class="list-group-item profile2">Website/Blog: ${user.blog}</li>
              <li class="list-group-item profile2">Location: ${user.location}</li>
              <li class="list-group-item profile2">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading text-center m-5">Latest Repos</h3>
      <div id="repos"></div>
    `;
        
    }
    //show repos
    showRepos(repos) {
        console.log(repos)
        let output=''
        repos.forEach(function (repo) {
            
                    output += `
        <div class="card card-body text-success  mb-2"id="demo">
          <div class="row">
            <div class="col-md-6 ">
              <a href="${repo.html_url}" target="_blank" class="text-dark" id="demo1">${repo.name}</a>
            </div>
            <div class="col-md-6 profile2 ">
            <span class="badge badge-primary profile2">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary profile2">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success profile2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>`
        })
        document.getElementById('repos').innerHTML=output
    }
    //showing alert message
    showAlert(message,ClassName){
        //remove alert
        this.clearAlert()
        //create div
        const  div=document.createElement('div')
        //add classname
        div.className=ClassName
        //add text
        div.appendChild(document.createTextNode(message))
        //get parent
        const container=document.querySelector('.searchContainer');
        //get search
        const search=document.querySelector('.search')
        //insert alert
        container.insertBefore(div,search)
        //set time  out
        setTimeout(()=>{
            this.clearAlert()
        },3000)
    }
    //clear alert message
    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove()
        }
    }

}