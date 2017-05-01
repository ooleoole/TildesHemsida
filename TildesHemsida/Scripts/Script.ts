namespace FarmSearch
{
    window.onload = () =>
    {
        var farmSearch = new FarmSearch();
        document.getElementById("searchButton").onclick = () =>
        {
            farmSearch.getImage();
        };
    };

    class FarmSearch
    {
        cowPasture: string = "/Images/kor-majorns-hage.JPG";
        otefield: string = "/Images/staket-i-hage.jpg";
        cat: string = "/Images/cat.jpg";
        farm: string = "/Images/farm.jpg";
        farmer: string = "/Images/farmer.jpg";
        hay: string = "/Images/hay.jpg";
        horse: string = "/Images/horse.jpg";
        tractor: string = "/Images/john-deere-traktor.jpg";
        pig: string = "/Images/pig.jpg";
        imageElement: HTMLImageElement = document.getElementById("image") as HTMLImageElement;

        public getImage = () =>
        {
            var inputElement = document.getElementById("inputField") as HTMLInputElement;
            var searchPhrase = inputElement.value;

            if (searchPhrase.toLowerCase() === "ko")
                this.imageElement.src = this.cowPasture;
            if (searchPhrase.toLowerCase() === "hage")
                this.imageElement.src = this.otefield;
            if (searchPhrase.toLowerCase() === "katt")
                this.imageElement.src = this.cat;
            if (searchPhrase.toLowerCase() === "farm")
                this.imageElement.src = this.farm;
            if (searchPhrase.toLowerCase() === "bonde")
                this.imageElement.src = this.farmer;
            if (searchPhrase.toLowerCase() === "hö")
                this.imageElement.src = this.hay;
            if (searchPhrase.toLowerCase() === "traktor")
                this.imageElement.src = this.tractor;
            if (searchPhrase.toLowerCase() === "gris")
                this.imageElement.src = this.pig;
            if (searchPhrase.toLowerCase() === "häst")
                this.imageElement.src = this.horse;



            
        }
    }
}