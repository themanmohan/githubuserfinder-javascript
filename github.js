class Github{
    constructor(){
        this.client_id='f3688b32feea13847c9c',
        this.client_secret = 'a28dfcf408a52f2e8097d3d2a736d5eb767ead0b',
        this.repos_count=5,
        this.repos_sort='created:asc'

    }
   
    async getUser(user){
       const profileRespones=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposRespones = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const profile=await profileRespones.json()
       const repos = await reposRespones.json()
       return {
           profile,
           repos
       }
    }
}