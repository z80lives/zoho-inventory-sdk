# Zoho Inventory API 
## Note: This is a work in progress
Expected date of stable release before 2023-06-24

## Progress
 - [ ] Products
   - [X] Items
   - [ ] Composite Items
 - [ ] Contacts
   - [ ] Customers
   - [ ] Vendors
 - [ ] Sales
   - [ ] Sales Orders
   - [ ] Invoices
   - [ ] Sales Receipts
   - [ ] Credit Notes
   - [ ] Payment Received
 - [ ] Inventory
   - [ ] Transfer Orders
   - [ ] Inventory Adjustments
 - [ ] Purchases
     - [ ] Purchase Orders
     - [ ] Bills
     - [ ] Vendor Credits
     - [ ] Payments Made
     - [ ] Purchase Receives
## Introduction
Contains a simple wrapper to make calls to the Zoho Inventory API. Also does basic caching of the access token and edit page data.

This is part of rewritten development code for Pacific Technology's internal production code.
The original code is used in the Zoho integration for the Corporate Concierge Service (CCS) project.

## Usage
```nodejs
const ZohoInventory = require('zoho-inventory-api');

const items = await ZohoInventory.getItems();

```

## Authors

```angular2html
Author: Shath Ibrahim
```