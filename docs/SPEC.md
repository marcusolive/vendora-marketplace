# Vendora Marketplace: functional specification

Version 1.0 · November 2026 · Author: Marcus Oliveira

## 1. Goal

Let a shopper find a product quickly, trust the offer and finish the purchase in as few steps as possible.

## 2. Functional requirements

| ID | Requirement |
|---|---|
| FR-01 | Typing in the search box shows up to 6 suggestions with the matched text highlighted; Enter runs the search. |
| FR-02 | Departments filter the catalog; "Today's Deals" shows only discounted items. |
| FR-03 | Filters (free delivery, deals, rating, max price) and sorting combine and update the result count. |
| FR-04 | Each card shows price, original price, savings %, rating, delivery date and stock warning when stock is low. |
| FR-05 | The deals countdown decreases every second and restarts when it reaches zero. |
| FR-06 | Adding to cart updates the cart counter and shows a confirmation toast. |
| FR-07 | The cart shows how much is missing for free delivery (threshold $35) and recalculates totals on quantity change. |
| FR-08 | Checkout has three steps (cart, address, payment) with back navigation and a final confirmation. |
| FR-09 | Payment methods: card, PIX and PayPal, each with its own explanation. |

## 3. Non-functional requirements

| ID | Requirement |
|---|---|
| NFR-01 | Static files only; first render under 1 second on a regular connection. |
| NFR-02 | Responsive from 360 px; search moves to its own row on small screens. |
| NFR-03 | Overlays close with `Esc` and by clicking outside. |
| NFR-04 | Clear notice that the store is fictional and no payment is processed. |

## 4. Acceptance criteria (examples)

- Given an empty cart, when I add a $29.90 item, then the cart shows "Add $5.10 for FREE delivery".
- Given the filter "Max price $50", then no card above $50 is listed.
- Given I am on the payment step, when I place the order, then the cart is emptied and a confirmation dialog appears.

## 5. Data model

```
Product { id, name, category, price, originalPrice, rating, reviews, freeDelivery, deal, stock, badge }
Cart    { [productId]: quantity }
```
