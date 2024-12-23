import { createAction } from "@reduxjs/toolkit";

export const httpCallBegan = createAction("api/callBegan");
export const httpCallSuccess = createAction("api/callSuccess");
export const httpCallFailed = createAction("api/callFailed");
