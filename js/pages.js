const pages = {
    activePage: "home",
    pages: [
        document.getElementById("home"),
        document.getElementById("information"),
        document.getElementById("y1"),
        document.getElementById("y2"),
        document.getElementById("y3"),
        document.getElementById("y4"),
    ],




    available: function () {
        return [
            "home",
            "information",
            "y1",
            "y2",
            "y3",
            "y4",
        ]
    },


    //methods
    setActivePageAtDOM: function (gotothis) {

        const handlePages = () => {
            this.pages.forEach(e => {
                if (e.getAttribute("id") === this.activePage) {
                    e.style.display = "";
                } else {
                    e.style.display = "none"
                }
            });
        }


        if (!this.available().includes(gotothis)) return 0;
        if (this.activePage != gotothis)
            window.scrollTo(0, 0);


        //Logic
        this.activePage = gotothis
        handlePages();

    }
}