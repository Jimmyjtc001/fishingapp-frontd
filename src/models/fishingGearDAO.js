import slugify from "slugify";
import shortid from "shortid";

const TABLE_NAME = "fishingGear";


class Gear {
    constructor(name, price, amount) {
        const slug = slugify(name.toLowerCase())+"-"+shortid.generate();
        this.slug = slug;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.isDeleted = false;
    }
}


export default class gearDAO {
    constructor() {
        const gearJSON = localStorage.getItem(TABLE_NAME)
        const gearArr = JSON.parse(gearJSON);
        if (gearArr === undefined || gearArr === null || gearArr === "") {
            const emptyArr = [];
            const emptyJSON = JSON.stringify(emptyArr);
            localStorage.setItem(TABLE_NAME, emptyJSON);
        }
    }

    saveToLocalStorage(gearArr) {
        localStorage.setItem(TABLE_NAME, JSON.stringify(gearArr));
    }

    getList() {
        const gearJSON = localStorage.getItem(TABLE_NAME);
        const gearArr = JSON.parse(gearJSON);
        const filteredgearArr = gearArr.filter(
            (gearObj)=>gearObj.isDeleted === false
        );
        return filteredgearArr;
    }

    /**
     * DAO specific function
     */
    getAllList() {
        const gearJSON = localStorage.getItem(TABLE_NAME);
        const gearArr = JSON.parse(gearJSON);
        return gearArr;
    }

    addObject(name, price, amount) {
        const gear = new Gear(name, price, amount);

        const gearArr = this.getAllList();
        gearArr.push(tree);

        this.saveToLocalStorage(gearArr);
    }

    getObjectBySlug(slug) {
        let gearObj;
        for (gearObj of this.getAllList()) {
            if (gearObj.slug === slug) {
                return gearObj;
            }
        }
        return null;
    }

    updateObjectBySlug(slug, name, price, amount) {
        const gearArr = this.getAllList();

        let gearIterator;
        for (gearIterator of gearArr) {
            if (gearIterator.slug === slug) {
                gearIterator.name = name;
                gearIterator.price = price;
                gearIterator.amount = amount;
                this.saveToLocalStorage(gearArr);
                break;
            }
        }
    }

    deleteObjectBySlug(slug) {
        const gearArr = this.getAllList();

        let gearIterator;
        for (gearIterator of gearArr) {
            if (gearIterator.slug === slug) {
                gearIterator.isDeleted = true;
                this.saveToLocalStorage(gearArr);
                break;
            }
        }
    }
}
