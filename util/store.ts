import { create } from "zustand"
import { v4 } from "uuid"

/*
This file contains the Zustand instance.

It contains an order array, which stores the
client-side order that is currently being created/modified by the user before the
'pay' button is clicked and it is sent off to the database so that a full order can be
generated.

It also contains a discount number, which stores the percentage discount that will be applied to the order.
An 'updateDiscountPercentage' function exists to update the discount percentage associated with the order.

A number of functions also exist in here, which can be externally referenced to
modify the order array as required, to add items to it, to delete items to it, and
to fully clear the order (either when an order is created, or when the 'void transaction' button
is clicked.)
*/
const useStore = create((set) => ({
  order: [],
  discount: 0,
  statuses: [],
  activeUser: "",
  tip: 0,
  addItem: (title, desc, price, productId) => 
    set((state) => ({
      order: [
        ...state.order,
        {
          id: v4(),
          title,
          desc,
          price,
          productId,
        },
      ],
    })),
  deleteItem: (id) =>
    set((state) => ({
      order: state.order.filter((item) => item.id !== id)
    })),
  clearOrder: () =>
    set((state) => ({
      order: [],
      discount: 0,
    })),
  updateDiscountPercentage: (discount) =>
    set((state) => ({
      discount: discount,
    })),
  addStatus: (id, status) =>
    set((state) => ({
      statuses: [
        ...state.statuses,
        {
          id: id,
          status: status
        }
      ]
    })),
  removeStatus: (id) =>
    set((state) => ({
      statuses: state.statuses.filter((status) => status.id !== id)
    })),
  updateStatus: (id, status) =>
    set((state) => ({
      statuses: state.statuses.filter(status => status.id == id).push({ id: id, status: status })
    })),
  setActiveUser: (pin) =>
    set((state) => ({
      activeUser: pin,
    })),
  updateTipPercentage: (tip) =>
    set((state) => ({
      tip: tip,
    })),
}))

export default useStore