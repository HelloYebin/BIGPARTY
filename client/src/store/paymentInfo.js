import { create } from "zustand";

export const usePaymentStore = create((set) => ({
  paymentInfo: {},
  paymentHistories: [],
  addPaymentInfo(count, amount, mid) {
    set(() => ({ paymentInfo: { count: count, amount: amount, mid: mid } }));
  },
  getHistories(history) {
    set(() => ({ paymentHistories: history }));
  },
}));
