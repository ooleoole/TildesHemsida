var FarmSearch;
(function (FarmSearch_1) {
    window.onload = function () {
        var farmSearch = new FarmSearch();
        document.getElementById("searchButton").onclick = function () {
            farmSearch.getImage();
        };
    };
    var FarmSearch = (function () {
        function FarmSearch() {
            var _this = this;
            this.cowPasture = "/Images/kor-majorns-hage.JPG";
            this.otefield = "/Images/staket-i-hage.jpg";
            this.cat = "/Images/cat.jpg";
            this.farm = "/Images/farm.jpg";
            this.farmer = "/Images/farmer.jpg";
            this.hay = "/Images/hay.jpg";
            this.horse = "/Images/horse.jpg";
            this.tractor = "/Images/john-deere-traktor.jpg";
            this.pig = "/Images/pig.jpg";
            this.imageElement = document.getElementById("image");
            this.getImage = function () {
                var inputElement = document.getElementById("inputField");
                var searchPhrase = inputElement.value;
                if (searchPhrase.toLowerCase() === "ko")
                    _this.imageElement.src = _this.cowPasture;
                if (searchPhrase.toLowerCase() === "hage")
                    _this.imageElement.src = _this.otefield;
                if (searchPhrase.toLowerCase() === "katt")
                    _this.imageElement.src = _this.cat;
                if (searchPhrase.toLowerCase() === "farm")
                    _this.imageElement.src = _this.farm;
                if (searchPhrase.toLowerCase() === "bonde")
                    _this.imageElement.src = _this.farmer;
                if (searchPhrase.toLowerCase() === "hö")
                    _this.imageElement.src = _this.hay;
                if (searchPhrase.toLowerCase() === "traktor")
                    _this.imageElement.src = _this.tractor;
                if (searchPhrase.toLowerCase() === "gris")
                    _this.imageElement.src = _this.pig;
                if (searchPhrase.toLowerCase() === "häst")
                    _this.imageElement.src = _this.horse;
            };
        }
        return FarmSearch;
    }());
})(FarmSearch || (FarmSearch = {}));
//# sourceMappingURL=Script.js.map