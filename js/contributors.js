const contributors = {
    currentContributors: undefined ,

    getContributors: async function(){
        const currentContributors = ourContributors ;
        this.currentContributors = currentContributors;
        this.displayContributors();
    },
    displayContributors:function(){
        const list = document.getElementById("list_of_contributor");
        for(let i = 0 ; i < this.currentContributors.length ; i++){
            const {showMobile,showFacebook,showTelegram,mobile,facebookLink,telegram,user,photoPath} = this.currentContributors[i];
            list.innerHTML += createContributor(showMobile,showFacebook,showTelegram,mobile,facebookLink,telegram,user,photoPath);
        }
    }
    
}