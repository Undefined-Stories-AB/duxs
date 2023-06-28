import { components } from "./ongoing-wms";
export type GetArticleModel = components["schemas"]["GetArticleModel"];
export type GetArticleItemsModel = components["schemas"]["GetArticleItemsModel"];
export type GetHistoricalInventory = components["schemas"]["GetHistoricalInventoryModel"];
export type GetHistoricalInventoryArticle = components["schemas"]["GetHistoricalInventoryArticleModel"];
export type GetPurchaseOrderArticle = components["schemas"]["GetPurchaseOrderArticle"];
export type GetPurchaseOrderArticleItem = components["schemas"]["GetPurchaseOrderArticleItem"];
export type GetPurchaseOrderLine = components["schemas"]["GetPurchaseOrderLine"];
export type GetPurchaseOrderModel = components["schemas"]["GetPurchaseOrderModel"];
export type PurchaseOrderLineArticleItem = components["schemas"]["GetPurchaseOrderArticleItem"];
export type GetPurchaseOrderFreeValues = components["schemas"]["GetPurchaseOrderFreeValues"];
export type PostPurchaseOrderModel = components["schemas"]["PostPurchaseOrderModel"];
export type PostIncomingOrderModel = PostPurchaseOrderModel;
export * from "./ongoing-wms";
