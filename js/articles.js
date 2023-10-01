const articlesY1 = {
    currentArticles: undefined,

    getArticles: async function () {
        const articlesDataForYearOne = ARTICLE_1 ;
        this.currentArticles = articlesDataForYearOne;
        this.displayArticles()
    },
    displayArticles: function () {
        const list = document.getElementById("list_articles_y1");
        for(let i = 0 ; i < this.currentArticles.length ; i++) {
            const {photoPath,user,isVip,txt,title} = this.currentArticles[i];
            list.innerHTML += createArticle(user,txt,photoPath,isVip,title);
        }
    }
}



const articlesY2 = {
    currentArticles: undefined,

    getArticles: async function () {
        const articlesDataForYearTwo = ARTICLE_2 ;
        this.currentArticles = articlesDataForYearTwo;
        this.displayArticles()
    },
    displayArticles: function () {
        const list = document.getElementById("list_articles_y2");
        for(let i = 0 ; i < this.currentArticles.length ; i++) {
            const {photoPath,user,isVip,txt,title} = this.currentArticles[i];
            list.innerHTML += createArticle(user,txt,photoPath,isVip,title);
        }
    }
}


const articlesY3 = {
    currentArticles: undefined,

    getArticles: function () {
        const articlesDataForYearThree = ARTICLE_3 ;
        this.currentArticles = articlesDataForYearThree;
        this.displayArticles()
    },
    displayArticles: function () {
        const list = document.getElementById("list_articles_y3");
        for(let i = 0 ; i < this.currentArticles.length ; i++) {
            const {photoPath,user,isVip,txt,title} = this.currentArticles[i];
            list.innerHTML += createArticle(user,txt,photoPath,isVip,title);
        }
    }
}




const articlesY4 = {
    currentArticles: undefined,

    getArticles: async function () {
        const articlesDataForYearFour = ARTICLE_4 ;
        this.currentArticles = articlesDataForYearFour;
        this.displayArticles()
    },
    displayArticles: function () {
        const list = document.getElementById("list_articles_y4");
        for(let i = 0 ; i < this.currentArticles.length ; i++) {
            const {photoPath,user,isVip,txt,title} = this.currentArticles[i];
            list.innerHTML += createArticle(user,txt,photoPath,isVip,title);
        }
    }
}



