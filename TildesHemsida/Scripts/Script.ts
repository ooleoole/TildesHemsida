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
        imageElement: HTMLImageElement = document.getElementById("image") as HTMLImageElement;

        public getImage = () =>
        {
            var inputElement = document.getElementById("inputField") as HTMLInputElement;
            var searchPhrase = inputElement.value;

            if (searchPhrase.toLowerCase() === "ko")
                this.imageElement.src = this.cowPasture;
            
            if (searchPhrase.toLowerCase() === "hage")
                this.imageElement.src = this.otefield;
            
        }
    }
}