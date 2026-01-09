(function() {
    const retards_title = [
        "1.21.1", 
        "1.21.4", 
        "1.21.8",
        "1.12.2",
        "1.16.5",
        "1.20.1",
        "zenith recode",
        "monoton",
        "fabric", "forge",
        "exp 3.1",
        "exp 2.0",
        "intellij",
        "minced",
        "targetesp",
        "funtime",
        "spookytime",
        "evaware",
        "relake recode",
        "exosware",
        "catlavan",
        "nursultan",
        "wexside",
        "expensive",
        "elysion",
        "mcp",
        "grim",
        "pulse visual",
        "labymod",
        "rich client",
        "autobuy",
        "clickgui",
        "mineblaze",
        "dexland",
        "item scroller",
        "blockoverlay",
        "cristalix",
        "slimeworld"
    ];

    function removeAds(banword_list) {
        const tabGroups = document.querySelectorAll('div.tabGroup-content');

        tabGroups.forEach(tabGroup => {
            const listItems = tabGroup.querySelectorAll('li.item');
            
            listItems.forEach(li => {
                for (let ban_words of banword_list) {
                    if (li.textContent.toLowerCase().includes(ban_words)) {
                        li.remove();
                    }
                }
            });
        });
    }

    removeAds(retards_title);
})();