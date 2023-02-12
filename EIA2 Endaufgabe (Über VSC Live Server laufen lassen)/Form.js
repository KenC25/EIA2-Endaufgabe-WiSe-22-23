/**
 * MingiDB Test-Client
 * An example client to help get acquainted with MingiDB.
 *
 * @author Jirka Dell'Oro-Friedl, HFU, 2022
 * @see www.github.com/JirkaDellOro/MingiDB
 * @license MIT License
 *
 * Quelle: https://github.com/JirkaDellOro/MingiDB
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var testMingiDB;
(function (testMingiDB) {
    window.addEventListener("load", start);
    let database = "http://s951480611.online.de/Database/";
    // check if a MingiDB installation is referred to as the parameter for the client
    function start(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield send("?", null);
            }
            catch (_e) {
                let output = `Add the correct address of your database as get-parameter in the url.\n`;
                output += `http://s951480611.online.de/Database/\n\n`;
                output += _e;
                output += `\n\nSee more information in the console.`;
                alert(output);
            }
            document.forms[0].addEventListener("click", hndButton);
        });
    }
    // send a query together with the data if applicable
    function send(_query, _data) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = _query + (_data ? "&data=" + JSON.stringify(_data) : "");
            document.querySelector("input#query").value = query;
            let response = yield fetch(database + query);
            output(yield response.json());
            return true;
        });
    }
    // show MingiDB's response in the textarea
    function output(_response) {
        document.querySelector("textarea").value = JSON.stringify(_response, null, 2);
    }
    // react to the buttons, build the query and the data accordingly and call send
    function hndButton(_event) {
        if (!(_event.target instanceof HTMLButtonElement))
            return;
        let command = _event.target.textContent;
        let formdata = new FormData(document.forms[0]);
        let collection = formdata.get("collection");
        let id = formdata.get("id");
        let query = `?command=${command}&collection=${collection}`;
        let data = {};
        ["color", "numberRockets", "gravity"].forEach((_name) => { if (formdata.get(_name))
            data[_name] = formdata.get(_name); });
        switch (command) {
            case "delete":
                if (!id)
                    return alert("To delete a document, pass the id");
                data = {};
                query += `&id=${id}`;
                break;
            case "find":
                if (!id)
                    break;
                data = null;
                query += `&id=${id}`;
                break;
            case "update":
                if (!id)
                    return alert("To update a document, pass the id");
                query += `&id=${id}`;
                break;
        }
        send(query, data);
    }
})(testMingiDB || (testMingiDB = {}));
//# sourceMappingURL=Form.js.map