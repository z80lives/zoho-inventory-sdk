const dispatcherService = require("../../lib/http-dispatcher-service");
const ItemService = require("../../lib/item.service");
const {expect} = require("chai");

describe("Item API Service Acceptance Tests", () => {
    let itemService;
    let testItem;

    it("Should create an instance", () => {
        itemService = new ItemService(new dispatcherService.HttpDispatcher());

        expect(itemService).to.be.instanceof(ItemService);
    });

    it("Can get all items", async function () {
        const result = await itemService.fetchItems();
        expect(result.code).to.equal(0);
        expect(result.message).to.equal("success");
    });

    it("Can create an item", async function(){
        const result = await itemService.createItem({
            name: "Test Item",
            rate: 100,
            sku: "TEST-001",
            description: "Test Item Description",
        });
        expect(result.code).to.equal(0);
        expect(result.message).to.equal("The item has been added.");
        testItem = result.item;
    });

    it("Can delete an item", async function(){
        expect(testItem).to.not.be.undefined;
        const result = await itemService.deleteItem(testItem.item_id);
        expect(result.code).to.equal(0);
        expect(result.message).to.equal("The item has been deleted.");
    });
})