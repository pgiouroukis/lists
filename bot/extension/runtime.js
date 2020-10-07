function parsePage() {
    data = localStorage.getItem("data")
    if (document.getElementById("pagerPlaceHolder").children.length != 0) {

        //Onoma tis etaireias
        var companies = document.getElementsByClassName("CompanyName")
        for (company of companies) {
            if (company.children[0].children[0].tagName == "META") {
                data.push([company.children[0].children[0].content])
            } else {
                data.push([company.children[0].children[0].innerHTML])
            }
        }


        //Dieuthinsi tis etaireias
        var c = 0;
        var addresses1 = document.getElementsByClassName("AdvAddress")
        for (address1 of addresses1) {
            data[c].push(address1.textContent.trim())
            c++;
        }

        var addresses2 = document.getElementsByClassName("LightAdvAddress")
        for (address2 of addresses2) {
            data[c].push(address2.textContent);
            c++;
        }

        var addresses3 = document.getElementsByClassName("FreeListingAddress")
        for (address3 of addresses3) {
            data[c].push(address3.textContent);
            c++;
        }

        //Thlefono tis etaireias
        c = 0;
        var phones = document.getElementsByClassName("PhonesBox")
        for (phone of phones) {
            data[c].push(phone.children[0].textContent)
            c++;
        }
    } else ;

    console.log(JSON.stringify(data), data.length)

    window.name += JSON.stringify(data)
}

if (window.location.href.includes("vrisko.gr/search")) {
    
    if ( localStorage.getItem("data") ) {
        parsePage()
    }

    var r = confirm("Να γίνει η λίστα?");
    if (r) {
        var data = []
        if (document.getElementById("pagerPlaceHolder").children.length != 0) {
                
            //Onoma tis etaireias
            var companies = document.getElementsByClassName("CompanyName")
            for (company of companies) {
                if (company.children[0].children[0].tagName == "META") {
                    data.push([company.children[0].children[0].content])
                } else {
                    data.push([company.children[0].children[0].innerHTML])
                }
            }


            //Dieuthinsi tis etaireias
            var c = 0;
            var addresses1 = document.getElementsByClassName("AdvAddress")
            for (address1 of addresses1) {
                data[c].push(address1.textContent.trim())
                c++;
            }

            var addresses2 = document.getElementsByClassName("LightAdvAddress")
            for (address2 of addresses2) {
                data[c].push(address2.textContent);
                c++;
            }

            var addresses3 = document.getElementsByClassName("FreeListingAddress")
            for (address3 of addresses3) {
                data[c].push(address3.textContent);
                c++;
            }

            //Thlefono tis etaireias
            c = 0;
            var phones = document.getElementsByClassName("PhonesBox")
            for (phone of phones) {
                data[c].push(phone.children[0].textContent)
                c++;
            }
        } else window.name = "not";

        console.log(JSON.stringify(data), data.length)

        //add the data to the window.name
        localStorage.setItem("data", data);

        currentPage = parseInt(document.getElementsByClassName("pageLinkActive")[0].textContent);
        var flag = false;
        for (page of document.getElementsByClassName("pageLink")) {
            console.log(page.textContent , currentPage+1)
            if (page.textContent == currentPage + 1) {
                page.click()
                flag = false;
            }
        }
        if (flag) {
            //extract to csv
            let csvContent = "data:text/csv;charset=utf-8,"
                + data.map(e => e.join(",")).join("\n");

            //download the csv file
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "my_data.xls");
            document.body.appendChild(link); // Required for FF

            link.click(); // This will download the data file named "my_data.csv".             
        }

        /*
        //extract to csv
        let csvContent = "data:text/csv;charset=utf-8,"
            + data.map(e => e.join(",")).join("\n");

        //download the csv file
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.xls");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".        
        */

    }

}
