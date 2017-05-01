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
            this.imageElement = document.getElementById("image");
            this.getImage = function () {
                var inputElement = document.getElementById("inputField");
                var searchPhrase = inputElement.value;
                if (searchPhrase.toLowerCase() === "ko")
                    _this.imageElement.src = _this.cowPasture;
                if (searchPhrase.toLowerCase() === "hage")
                    _this.imageElement.src = _this.otefield;
            };
        }
        return FarmSearch;
    }());
})(FarmSearch || (FarmSearch = {}));
//# sourceMappingURL=Script.js.map