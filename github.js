class Github {
  constructor() {
    this.client_id = '4106238b1a023983d33b';
    this.client_secret = '2d3d5c0e320cd4e544df2b79100a48b6990d6e4b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
   const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const reposResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();

   const repos = await reposResponse.json();

   return {
     profile,
     repos
   }
  }

}